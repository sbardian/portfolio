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
      camera.position.x = 0
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
      floor.position.y = 0
      floor.receiveShadow = true
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

      requestAnimationFrame(animate)
      render()
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
      this.leftEyeIris.position.x = 3.3
      this.leftEyeIris.position.z = 2.5
      this.duckLeftEyeGroup.add(this.leftEyeIris)
      // this.allDuckGroup.add(this.leftEyeIris)

      const rightEyeIrisGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5)
      this.rightEyeIris = new THREE.Mesh(rightEyeIrisGeo, flatBlack)
      this.rightEyeIris.position.y = 11.3
      this.rightEyeIris.position.x = -3.3
      this.rightEyeIris.position.z = 2.5
      this.duckRightEyeGroup.add(this.rightEyeIris)
      // this.allDuckGroup.add(this.rightEyeIris)

      const rightTopEyeLidGeo = new THREE.BoxGeometry(0.5, 0.5, 2.1)
      this.rightTopEyeLid = new THREE.Mesh(rightTopEyeLidGeo, flatGreen)
      this.rightTopEyeLid.position.y = 11.8
      this.rightTopEyeLid.position.x = -3.2
      this.rightTopEyeLid.position.z = 2
      this.duckRightEyeGroup.add(this.rightTopEyeLid)
      // this.allDuckGroup.add(this.rightTopEyeLid)

      const leftTopEyeLidGeo = new THREE.BoxGeometry(0.5, 0.5, 2.1)
      this.leftTopEyeLid = new THREE.Mesh(leftTopEyeLidGeo, flatGreen)
      this.leftTopEyeLid.position.y = 11.8
      this.leftTopEyeLid.position.x = 3.2
      this.leftTopEyeLid.position.z = 2
      this.duckLeftEyeGroup.add(this.leftTopEyeLid)
      // this.allDuckGroup.add(this.leftTopEyeLid)

      const rightBottomEyeLidGeo = new THREE.BoxGeometry(0.5, 0.3, 2.1)
      this.rightBottomEyeLid = new THREE.Mesh(rightBottomEyeLidGeo, flatGreen)
      this.rightBottomEyeLid.position.y = 10
      this.rightBottomEyeLid.position.x = -3.2
      this.rightBottomEyeLid.position.z = 2
      this.duckRightEyeGroup.add(this.rightBottomEyeLid)
      // this.allDuckGroup.add(this.rightBottomEyeLid)

      const leftBottomEyeLidGeo = new THREE.BoxGeometry(0.5, 0.3, 2.1)
      this.leftBottomEyeLid = new THREE.Mesh(leftBottomEyeLidGeo, flatGreen)
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

      const neckGeo = new THREE.CylinderBufferGeometry(2, 2, 2, 7)
      this.neck = new THREE.Mesh(neckGeo, flatWhite)
      this.neck.position.y = 5
      this.allDuckGroup.add(this.neck)

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

      topBeakGeo.vertices[5].x -= 0.5
      topBeakGeo.vertices[7].x -= 0.5

      this.topBeak = new THREE.Mesh(topBeakGeo, flatYellow)
      this.topBeak.position.y = 8
      this.topBeak.position.z = 6.5
      this.allDuckGroup.add(this.topBeak)

      const topBeakSlopeGeo = new THREE.CylinderGeometry(4.5, 0, 4, 3)
      topBeakSlopeGeo.vertices[0].z += 1
      topBeakSlopeGeo.vertices[3].z -= 0.5

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
      this.bottomBeak.position.y = 7.3
      this.bottomBeak.position.z = 5.5
      this.bottomBeak.rotation.x = 0.3
      this.allDuckGroup.add(this.bottomBeak)

      const bodyGeo = new THREE.BoxBufferGeometry(8, 7, 16)
      this.body = new THREE.Mesh(bodyGeo, flatWhite)
      this.body.position.z = -5
      this.body.position.y = 1
      this.allDuckGroup.add(this.body)

      const leftWingGeo = new THREE.BoxGeometry(0.5, 7, 16)
      this.leftWing = new THREE.Mesh(leftWingGeo, flatWhite)
      this.leftWing.position.z = -5
      this.leftWing.position.y = 1
      this.leftWing.position.x = 4.5
      this.leftWing.rotation.x = 0.2
      this.allDuckGroup.add(this.leftWing)

      const rightWingGeo = new THREE.BoxGeometry(0.5, 7, 16)
      this.rightWing = new THREE.Mesh(rightWingGeo, flatWhite)
      this.rightWing.position.z = -5
      this.rightWing.position.y = 1
      this.rightWing.position.x = -4.5
      this.rightWing.rotation.x = 0.2
      this.allDuckGroup.add(this.rightWing)

      const chestGeo = new THREE.BoxBufferGeometry(7, 6, 16)
      this.chest = new THREE.Mesh(chestGeo, flatBrown)
      this.chest.position.z = -4.5
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
      this.tail.position.z = -15.2
      this.tail.position.y = 1
      this.tail.rotation.x = 0.6
      this.allDuckGroup.add(this.tail)

      this.allDuckGroup.traverse(function traverse(object) {
        if (object instanceof THREE.Mesh) {
          object.castShadow = true
          object.receiveShadow = true
        }
      })
    }

    Duck.prototype.spin = function spin() {
      // Increment the angle.
      this.runningCycle += 0.03
      var t = this.runningCycle

      // Ensure that the angle we will use is between 0 and 2 Pi.
      t = t % (2 * Math.PI)

      // Amplitude is used as the main radius of the legs movement.
      var amp = 4

      this.headGroup.rotation.z = Math.min(3, Math.cos(t) * 2)
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
