/** @jsx jsx */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
// eslint-disable-next-line
import React from "react"
import * as THREE from "three"
import OrbitControls from "three-orbitcontrols"
import { TweenMax, Back, Elastic, TweenLite, TimelineMax } from "gsap/TweenMax"
import { jsx, css } from "@emotion/core"
import AnimationNav from "./animation-nav"
import mq from "./media-queries"

export default ({ animations }) => {
  React.useEffect(() => {
    // setup
    const canvas = document.querySelector("#ob-scene")
    const bodyContainer = document.querySelector("#main-body")
    const sideBarContainer = document.querySelector("#sidebar-container")
    let WIDTH = bodyContainer.offsetWidth
    let HEIGHT = bodyContainer.offsetHeight
    let windowHalfX
    let windowHalfY
    let scene
    let camera
    let renderer
    let mousePos = { x: 0, y: 0 }
    let duck
    let floor
    const DUCK_COLORS = {
      green: "0x17A768",
      orange: "0xf1601d",
      yellow: "0xf1ad1d",
      offWhite: "0xe7e0d2",
      brown: "0xbbae93",
      gray: "0x9b9b9b",
    }

    function rule3(xTarget, vmin, vmax, tmin, tmax) {
      const nv = Math.max(Math.min(xTarget, vmax), vmin)
      const dv = vmax - vmin
      const pc = (nv - vmin) / dv
      const dt = tmax - tmin
      const tv = tmin + pc * dt
      return tv
    }

    function handleMouseMove(event) {
      mousePos = { x: event.clientX, y: event.clientY }
    }

    function onWindowResize() {
      //   HEIGHT = bodyContainer.offsetHeight
      WIDTH = bodyContainer.offsetWidth

      if (window.innerWidth <= 1200) {
        windowHalfX = WIDTH / 2
        windowHalfY = HEIGHT / 2
        renderer.setSize(WIDTH, HEIGHT)
        camera.aspect = WIDTH / HEIGHT
      } else {
        windowHalfX = WIDTH / 2
        windowHalfY = HEIGHT / 2
        renderer.setSize(WIDTH, HEIGHT)
        camera.aspect = WIDTH / HEIGHT
      }
      camera.updateProjectionMatrix()
    }

    // init
    const init = () => {
      scene = new THREE.Scene()

      camera = new THREE.PerspectiveCamera(50, WIDTH / HEIGHT, 1, 2000)
      camera.position.x = 100
      camera.position.z = 100
      camera.position.y = 15
      camera.lookAt(new THREE.Vector3(0, 0, 0))

      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      })
      renderer.setPixelRatio(
        window.devicePixelRatio ? window.devicePixelRatio : 1
      )
      renderer.setSize(WIDTH, HEIGHT)
      renderer.setClearColor(0x000000, 0)
      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap

      windowHalfX = WIDTH / 2
      windowHalfY = HEIGHT / 2

      // eslint-disable-next-line
      const controls = new OrbitControls(camera, renderer.domElement)

      window.addEventListener("resize", onWindowResize, false)
      bodyContainer.addEventListener("mousemove", handleMouseMove, false)
      // document.addEventListener("touchstart", handleTouchStart, false)
      // document.addEventListener("touchend", handleTouchEnd, false)
      // document.addEventListener("touchmove", handleTouchMove, false)
    }

    const createFloor = () => {
      floor = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(1000, 500),
        new THREE.MeshStandardMaterial({ color: 0x3364ea })
      )
      floor.rotation.x = -Math.PI / 2
      floor.position.y = -10
      floor.receiveShadow = true

      const rockGeo = new THREE.IcosahedronBufferGeometry(10, 0)
      const rock = new THREE.Mesh(
        rockGeo,
        new THREE.MeshLambertMaterial({ color: "gray", flatShading: true })
      )
      rock.castShadow = true
      rock.rotation.x = -0.38
      rock.rotation.y = 0.5
      rock.position.y = -12.5

      const lillyGreen = new THREE.MeshLambertMaterial({
        color: new THREE.Color("rgb(47, 76, 51)").getHex(),
        flatShading: true,
      })

      const lillyPadGeo = new THREE.CylinderGeometry(
        10,
        10,
        1,
        10,
        1,
        false,
        0,
        6.1
      )
      const lillyPad = new THREE.Mesh(lillyPadGeo, lillyGreen)
      lillyPad.castShadow = true
      lillyPad.position.x = 30
      lillyPad.position.y = -10.3
      lillyPad.rotation.x = 3.14
      scene.add(lillyPad)

      const lillyPad2Geo = new THREE.CylinderGeometry(
        5,
        5,
        1,
        10,
        1,
        false,
        0,
        6.1
      )
      const lillyPad2 = new THREE.Mesh(lillyPad2Geo, lillyGreen)
      lillyPad2.castShadow = true
      lillyPad2.position.x = 20
      lillyPad2.position.y = -10.3
      lillyPad2.rotation.y = Math.PI - 1
      lillyPad.position.z = 17
      lillyPad2.rotation.x = Math.PI
      scene.add(lillyPad2)

      scene.add(rock)
      scene.add(floor)
    }

    const createLights = () => {
      const hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0xffffff, 0.7)

      const shadowLight = new THREE.DirectionalLight(0xffffff, 0.7, 100)

      shadowLight.position.set(50, 30, 50)

      shadowLight.castShadow = true
      shadowLight.shadow.mapSize.width = 4096
      shadowLight.shadow.mapSize.height = 4096
      shadowLight.shadow.camera.left = -50
      shadowLight.shadow.camera.right = 50
      shadowLight.shadow.camera.top = 50
      shadowLight.shadow.camera.bottom = -50
      shadowLight.shadow.camera.near = 40
      shadowLight.shadow.camera.far = 150

      //   const helper = new THREE.CameraHelper(shadowLight.shadow.camera)
      //   const lightHelper = new THREE.DirectionalLightHelper(shadowLight, 1)
      //   scene.add(lightHelper)
      //   scene.add(helper)

      scene.add(hemisphereLight)
      scene.add(shadowLight)
    }

    function Duck() {
      this.allDuckGroup = new THREE.Group()
      const rgbGreen = new THREE.Color("rgb(23, 167, 104)")
      const green = rgbGreen.getHex()

      const rgbYellow = new THREE.Color("rgb(241, 173, 29)")
      const yellow = rgbYellow.getHex()

      const rgbWhite = new THREE.Color("rgb(231, 224, 210)")
      const white = rgbWhite.getHex()

      const rgbBrown = new THREE.Color("rgb(187, 174, 147)")
      const brown = rgbBrown.getHex()

      this.runningCycle = 0

      const flatBlack = new THREE.MeshLambertMaterial({
        color: 0x191919,
        flatShading: true,
      })

      const flatGreen = new THREE.MeshLambertMaterial({
        color: green,
        flatShading: true,
      })

      const flatYellow = new THREE.MeshLambertMaterial({
        color: yellow,
        flatShading: true,
      })

      const flatWhite = new THREE.MeshLambertMaterial({
        color: white,
        flatShading: true,
      })

      const flatBrown = new THREE.MeshLambertMaterial({
        color: brown,
        flatShading: true,
      })

      const headGeo = new THREE.BoxGeometry(6, 8, 9)
      headGeo.vertices[2].x -= 0.7
      headGeo.vertices[7].x += 0.7
      headGeo.vertices[2].z -= 0.7
      headGeo.vertices[7].z -= 0.7
      headGeo.vertices[3].x -= 0.7
      headGeo.vertices[6].x += 0.7
      headGeo.vertices[3].z += 0.7
      headGeo.vertices[6].z += 0.7
      this.head = new THREE.Mesh(headGeo, flatGreen)
      this.head.position.y = 10
      this.allDuckGroup.add(this.head)

      this.duckHairGroup = new THREE.Group()

      const headCenterHairGeo = new THREE.BoxGeometry(1, 2, 0.5)
      headCenterHairGeo.vertices[2].x -= 0.2
      headCenterHairGeo.vertices[3].x -= 0.2
      headCenterHairGeo.vertices[3].z += 0.2
      headCenterHairGeo.vertices[6].x += 0.2
      headCenterHairGeo.vertices[7].x += 0.2
      headCenterHairGeo.vertices[6].z += 0.2
      this.headCenterHair = new THREE.Mesh(headCenterHairGeo, flatGreen)
      this.headCenterHair.position.y = 15
      this.headCenterHair.position.z = -5
      this.headCenterHair.rotation.x = 0.5
      this.duckHairGroup.add(this.headCenterHair)

      const headLeftHairGeo = new THREE.BoxGeometry(0.7, 1.7, 0.5)
      headLeftHairGeo.vertices[2].x -= 0.2
      headLeftHairGeo.vertices[3].x -= 0.2
      headLeftHairGeo.vertices[3].z += 0.2
      headLeftHairGeo.vertices[6].x += 0.2
      headLeftHairGeo.vertices[7].x += 0.2
      headLeftHairGeo.vertices[6].z += 0.2
      this.headLeftHair = new THREE.Mesh(headLeftHairGeo, flatGreen)
      this.headLeftHair.position.x = 1
      this.headLeftHair.position.y = 14.5
      this.headLeftHair.position.z = -5
      this.headLeftHair.rotation.z = -0.5
      this.headLeftHair.rotation.x = 0.5
      this.duckHairGroup.add(this.headLeftHair)

      const headRightHairGeo = new THREE.BoxGeometry(0.7, 1.7, 0.5)
      headRightHairGeo.vertices[2].x -= 0.2
      headRightHairGeo.vertices[3].x -= 0.2
      headRightHairGeo.vertices[3].z += 0.2
      headRightHairGeo.vertices[6].x += 0.2
      headRightHairGeo.vertices[7].x += 0.2
      headRightHairGeo.vertices[6].z += 0.2
      this.headRightHair = new THREE.Mesh(headRightHairGeo, flatGreen)
      this.headRightHair.position.x = -1
      this.headRightHair.position.y = 14.5
      this.headRightHair.position.z = -5
      this.headRightHair.rotation.z = 0.5
      this.headRightHair.rotation.x = 0.5
      this.duckHairGroup.add(this.headRightHair)

      this.duckHairGroup.position.z += 1

      this.allDuckGroup.add(this.duckHairGroup)

      this.duckLeftEyeGroup = new THREE.Group()
      this.duckRightEyeGroup = new THREE.Group()

      const leftEyeGeo = new THREE.BoxGeometry(0.5, 2, 2)
      this.leftEye = new THREE.Mesh(leftEyeGeo, flatWhite)
      this.leftEye.position.y = 11
      this.leftEye.position.x = 3
      this.leftEye.position.z = 2
      this.duckLeftEyeGroup.add(this.leftEye)
      // this.allDuckGroup.add(this.leftEye)

      const rightEyeGeo = new THREE.BoxGeometry(0.5, 2, 2)
      this.rightEye = new THREE.Mesh(rightEyeGeo, flatWhite)
      this.rightEye.position.y = 11
      this.rightEye.position.x = -3
      this.rightEye.position.z = 2
      this.duckRightEyeGroup.add(this.rightEye)
      // this.allDuckGroup.add(this.rightEye)

      const leftEyeIrisGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5)
      this.leftEyeIris = new THREE.Mesh(leftEyeIrisGeo, flatBlack)
      this.leftEyeIris.position.y = 11.3
      this.leftEyeIris.position.x = 3.1
      this.leftEyeIris.position.z = 2.5
      this.duckLeftEyeGroup.add(this.leftEyeIris)
      // this.allDuckGroup.add(this.leftEyeIris)

      const rightEyeIrisGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5)
      this.rightEyeIris = new THREE.Mesh(rightEyeIrisGeo, flatBlack)
      this.rightEyeIris.position.y = 11.3
      this.rightEyeIris.position.x = -3.1
      this.rightEyeIris.position.z = 2.5
      this.duckRightEyeGroup.add(this.rightEyeIris)
      // this.allDuckGroup.add(this.rightEyeIris)

      this.rightTopEyeLidGeo = new THREE.BoxGeometry(0.5, 0.5, 2.1)
      this.rightTopEyeLid = new THREE.Mesh(this.rightTopEyeLidGeo, flatGreen)
      this.rightTopEyeLid.position.y = 11.8
      this.rightTopEyeLid.position.x = -3.2
      this.rightTopEyeLid.position.z = 2
      this.duckRightEyeGroup.add(this.rightTopEyeLid)
      // this.allDuckGroup.add(this.rightTopEyeLid)

      this.leftTopEyeLidGeo = new THREE.BoxGeometry(0.5, 0.5, 2.1)
      this.leftTopEyeLid = new THREE.Mesh(this.leftTopEyeLidGeo, flatGreen)
      this.leftTopEyeLid.position.y = 11.8
      this.leftTopEyeLid.position.x = 3.2
      this.leftTopEyeLid.position.z = 2
      this.duckLeftEyeGroup.add(this.leftTopEyeLid)
      // this.allDuckGroup.add(this.leftTopEyeLid)

      this.rightBottomEyeLidGeo = new THREE.BoxGeometry(0.5, 0.3, 2.1)
      this.rightBottomEyeLid = new THREE.Mesh(
        this.rightBottomEyeLidGeo,
        flatGreen
      )
      this.rightBottomEyeLid.position.y = 10
      this.rightBottomEyeLid.position.x = -3.2
      this.rightBottomEyeLid.position.z = 2
      this.duckRightEyeGroup.add(this.rightBottomEyeLid)
      // this.allDuckGroup.add(this.rightBottomEyeLid)

      this.leftBottomEyeLidGeo = new THREE.BoxGeometry(0.5, 0.3, 2.1)
      this.leftBottomEyeLid = new THREE.Mesh(
        this.leftBottomEyeLidGeo,
        flatGreen
      )
      this.leftBottomEyeLid.position.y = 10
      this.leftBottomEyeLid.position.x = 3.2
      this.leftBottomEyeLid.position.z = 2
      this.duckLeftEyeGroup.add(this.leftBottomEyeLid)
      // this.allDuckGroup.add(this.leftBottomEyeLid)

      this.allDuckGroup.add(this.duckLeftEyeGroup)
      this.allDuckGroup.add(this.duckRightEyeGroup)

      this.duckLeftEyeGroup.rotation.z -= 0.06
      this.duckLeftEyeGroup.position.x -= 1
      this.duckRightEyeGroup.rotation.z += 0.06
      this.duckRightEyeGroup.position.x += 1

      this.neckTopGeo = new THREE.CylinderBufferGeometry(1.7, 1.7, 0.5, 7)
      this.neckTop = new THREE.Mesh(this.neckTopGeo, flatGreen)
      this.neckTop.position.y = 5.9

      this.neckMiddleGeo = new THREE.CylinderBufferGeometry(1.7, 1.7, 0.7, 7)
      this.neckMiddle = new THREE.Mesh(this.neckMiddleGeo, flatWhite)
      this.neckMiddle.position.y = 5.3

      this.neckBottomGeo = new THREE.CylinderBufferGeometry(1.7, 1.7, 0.5, 7)
      this.neckBottom = new THREE.Mesh(this.neckBottomGeo, flatGreen)
      this.neckBottom.position.y = 4.7

      this.allDuckGroup.add(this.neckTop)
      this.allDuckGroup.add(this.neckMiddle)
      this.allDuckGroup.add(this.neckBottom)

      const topBeakGeo = new THREE.BoxGeometry(8, 1, 8.7)
      topBeakGeo.vertices[4].x += 0.5
      topBeakGeo.vertices[6].x += 0.5

      topBeakGeo.vertices[4].z += 0.5
      topBeakGeo.vertices[6].z -= 0.5

      topBeakGeo.vertices[1].x -= 0.5
      topBeakGeo.vertices[3].x -= 0.5

      topBeakGeo.vertices[1].z += 0.5
      topBeakGeo.vertices[3].z -= 0.5

      topBeakGeo.vertices[3].y += 0.5
      topBeakGeo.vertices[6].y += 0.5

      topBeakGeo.vertices[0].x += 0.5
      topBeakGeo.vertices[2].x += 0.5
      topBeakGeo.vertices[0].y += 0.5
      topBeakGeo.vertices[2].y += 0.5

      topBeakGeo.vertices[5].x -= 0.5
      topBeakGeo.vertices[7].x -= 0.5
      topBeakGeo.vertices[5].y += 0.5
      topBeakGeo.vertices[7].y += 0.5

      this.topBeak = new THREE.Mesh(topBeakGeo, flatYellow)
      this.topBeak.position.y = 8
      this.topBeak.position.z = 6.5
      this.allDuckGroup.add(this.topBeak)

      const topBeakSlopeGeo = new THREE.CylinderGeometry(4.5, 0, 4, 3)

      topBeakSlopeGeo.vertices[0].z += 1
      topBeakSlopeGeo.vertices[3].z -= 0.7

      topBeakSlopeGeo.vertices[1].x -= 0.4
      topBeakSlopeGeo.vertices[2].x += 0.4
      topBeakSlopeGeo.vertices[1].z -= 0.1
      topBeakSlopeGeo.vertices[2].z -= 0.1

      this.topBeakSlope = new THREE.Mesh(topBeakSlopeGeo, flatYellow)
      this.topBeakSlope.position.y = 10.5
      this.topBeakSlope.position.z = 5
      this.topBeakSlope.rotation.z = Math.PI
      this.allDuckGroup.add(this.topBeakSlope)

      const bottomBeakGeo = new THREE.BoxGeometry(6, 0.5, 6)
      bottomBeakGeo.vertices[4].x += 0.5
      bottomBeakGeo.vertices[6].x += 0.5

      bottomBeakGeo.vertices[1].x -= 0.5
      bottomBeakGeo.vertices[3].x -= 0.5

      bottomBeakGeo.vertices[0].x += 0.5
      bottomBeakGeo.vertices[2].x += 0.5

      bottomBeakGeo.vertices[5].x -= 0.5
      bottomBeakGeo.vertices[7].x -= 0.5

      this.bottomBeak = new THREE.Mesh(bottomBeakGeo, flatYellow)
      this.bottomBeak.position.y = 7.8
      this.bottomBeak.position.z = 5.5
      // this.bottomBeak.rotation.x = 0.3
      this.allDuckGroup.add(this.bottomBeak)

      this.bottomBeakSlopeGeo = new THREE.CylinderGeometry(3, 0, 3, 3)
      this.bottomBeakSlopeGeo.vertices[3].z = -1.7
      this.bottomBeakSlopeGeo.vertices[3].y = -0.75

      this.bottomBeakSlope = new THREE.Mesh(this.bottomBeakSlopeGeo, flatYellow)
      this.bottomBeakSlope.position.z = 5.5
      this.bottomBeakSlope.position.y = 6.8
      this.allDuckGroup.add(this.bottomBeakSlope)

      this.bodyGeo = new THREE.BoxGeometry(8, 7, 14)
      this.bodyGeo.vertices[3].y += 4
      this.bodyGeo.vertices[6].y += 4
      this.body = new THREE.Mesh(this.bodyGeo, flatWhite)
      this.body.position.z = -4
      this.body.position.y = 1
      this.allDuckGroup.add(this.body)

      this.leftWingGeo = new THREE.BoxGeometry(0.5, 7, 16)
      this.leftWingGeo.vertices[2].y += 2
      this.leftWingGeo.vertices[7].y += 2

      this.leftWingGeo.vertices[3].z += 4
      this.leftWingGeo.vertices[6].z += 4
      this.leftWingGeo.vertices[3].y += 2
      this.leftWingGeo.vertices[6].y += 2
      this.leftWing = new THREE.Mesh(this.leftWingGeo, flatWhite)
      this.leftWing.position.z = -5
      this.leftWing.position.y = 1
      this.leftWing.position.x = 4.5
      this.leftWing.rotation.x = 0.2
      this.allDuckGroup.add(this.leftWing)

      this.rightWingGeo = new THREE.BoxGeometry(0.5, 7, 16)
      this.rightWingGeo.vertices[2].y += 2
      this.rightWingGeo.vertices[7].y += 2

      this.rightWingGeo.vertices[3].y += 2
      this.rightWingGeo.vertices[6].y += 2
      this.rightWingGeo.vertices[3].z += 4
      this.rightWingGeo.vertices[6].z += 4
      this.rightWing = new THREE.Mesh(this.rightWingGeo, flatWhite)
      this.rightWing.position.z = -5
      this.rightWing.position.y = 1
      this.rightWing.position.x = -4.5
      this.rightWing.rotation.x = 0.2
      this.allDuckGroup.add(this.rightWing)

      this.chestGeo = new THREE.BoxGeometry(7, 6, 11)
      this.chestGeo.vertices[3].y += 1
      this.chestGeo.vertices[6].y += 1
      this.chest = new THREE.Mesh(this.chestGeo, flatBrown)
      this.chest.position.z = -2
      this.chest.position.y = 1
      this.allDuckGroup.add(this.chest)

      const tailGeo = new THREE.BoxGeometry(7, 1, 5)
      tailGeo.vertices[4].x += 1.4
      tailGeo.vertices[6].x += 1.4

      tailGeo.vertices[1].x -= 1.4
      tailGeo.vertices[3].x -= 1.4

      tailGeo.vertices[0].x += 0.4
      tailGeo.vertices[2].x += 0.4

      tailGeo.vertices[5].x -= 0.4
      tailGeo.vertices[7].x -= 0.4
      this.tail = new THREE.Mesh(tailGeo, flatWhite)
      this.tail.position.z = -13
      this.tail.position.y = 5.5
      this.tail.rotation.x = 0.6
      this.allDuckGroup.add(this.tail)

      this.leftFootGeo = new THREE.BoxGeometry(4, 1, 6)
      this.leftFootGeo.vertices[1].x -= 1.5
      this.leftFootGeo.vertices[3].x -= 1.5
      this.leftFootGeo.vertices[4].x += 1.5
      this.leftFootGeo.vertices[6].x += 1.5
      this.leftFootGeo.vertices[5].y -= 0.7
      this.leftFootGeo.vertices[0].y -= 0.7

      this.leftFoot = new THREE.Mesh(this.leftFootGeo, flatYellow)
      this.leftFoot.position.y = -4
      this.leftFoot.position.z = 1
      this.leftFoot.position.x = 2
      this.allDuckGroup.add(this.leftFoot)

      this.rightFootGeo = new THREE.BoxGeometry(4, 1, 6)
      this.rightFootGeo.vertices[1].x -= 1.5
      this.rightFootGeo.vertices[4].x += 1.5
      this.rightFootGeo.vertices[6].x += 1.5
      this.rightFootGeo.vertices[3].x -= 1.5
      this.rightFootGeo.vertices[5].y -= 0.7
      this.rightFootGeo.vertices[0].y -= 0.7
      this.rightFoot = new THREE.Mesh(this.rightFootGeo, flatYellow)
      this.rightFoot.position.y = -4
      this.rightFoot.position.z = 1
      this.rightFoot.position.x = -2
      this.allDuckGroup.add(this.rightFoot)

      this.allDuckGroup.traverse(function traverse(object) {
        if (object instanceof THREE.Mesh) {
          object.castShadow = true
          object.receiveShadow = true
        }
      })
    }

    Duck.prototype.blink = function blink() {
      this.runningCycle += 0.05
      let t = this.runningCycle
      t = t % (2 * Math.PI)
      const amp = 4

      this.leftBottomEyeLidGeo.verticesNeedUpdate = true
      this.rightBottomEyeLidGeo.verticesNeedUpdate = true
      this.leftTopEyeLidGeo.verticesNeedUpdate = true
      this.rightTopEyeLidGeo.verticesNeedUpdate = true

      this.leftBottomEyeLidGeo.vertices[0].y = Math.max(0, Math.cos(t) * 0.9)
      this.leftBottomEyeLidGeo.vertices[1].y = Math.max(0, Math.cos(t) * 0.9)
      this.rightBottomEyeLidGeo.vertices[4].y = Math.max(0, Math.cos(t) * 0.9)
      this.rightBottomEyeLidGeo.vertices[5].y = Math.max(0, Math.cos(t) * 0.9)

      this.leftTopEyeLidGeo.vertices[2].y = Math.min(0, -Math.cos(t) * 0.9)
      this.leftTopEyeLidGeo.vertices[3].y = Math.min(0, -Math.cos(t) * 0.9)
      this.rightTopEyeLidGeo.vertices[6].y = Math.min(0, -Math.cos(t) * 0.9)
      this.rightTopEyeLidGeo.vertices[7].y = Math.min(0, -Math.cos(t) * 0.9)
    }

    // render
    const render = () => {
      renderer.render(scene, camera)
    }

    // animate
    const animate = () => {
      let tempHA
      let tempVA
      let tempX
      let tempY
      if (window.innerWidth >= 1200) {
        tempX = mousePos.x - sideBarContainer.offsetWidth
        tempY = mousePos.y
        tempHA = (tempX - windowHalfX) / 200
        tempVA = (mousePos.y - windowHalfY) / 200
      } else {
        tempX = mousePos.x
        tempY = mousePos.y - sideBarContainer.offsetHeight + 250
        tempHA = (mousePos.x - windowHalfX) / 200
        tempVA = (tempY - windowHalfY) / 200
      }
      const userHAngle = Math.min(Math.max(tempHA, -Math.PI / 3), Math.PI / 3)
      const userVAngle = Math.min(Math.max(tempVA, -Math.PI / 3), Math.PI / 3)
      const xTarget = tempX - windowHalfX
      const yTarget = tempY - windowHalfY

      /**
       *
       * Place animation initializers here
       *
       */
      duck.blink()

      requestAnimationFrame(animate)
      render()
    }

    init()
    createFloor()
    createLights()

    duck = new Duck()
    scene.add(duck.allDuckGroup)

    animate()
  })

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #e5ebf9;
      `}
    >
      <AnimationNav
        animations={animations}
        current={{ to: "/nikkoPage", title: "Duck" }}
      />
      <canvas
        css={css`
          background: transparent;
          /* position: fixed; */
        `}
        id="ob-scene"
      />
    </div>
  )
}
