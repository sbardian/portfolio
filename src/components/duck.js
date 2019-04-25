/** @jsx jsx */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import * as THREE from "three"
import OrbitControls from "three-orbitcontrols"
// import { TweenMax, Back, Elastic, TweenLite, TimelineMax } from "gsap/TweenMax"
import { jsx, css } from "@emotion/core"
import AnimationNav from "./animation-nav"

const DuckAnimation = ({ animations }) => {
  React.useEffect(() => {
    // setup
    const canvas = document.querySelector("#ob-scene")
    const bodyContainer = document.querySelector("#main-body")
    let WIDTH = bodyContainer.offsetWidth
    const HEIGHT = bodyContainer.offsetHeight

    // SAVE:  Follow mouse logic
    // let mousePos = { x: 0, y: 0 }

    // eslint-disable-next-line
    let windowHalfX
    // eslint-disable-next-line
    let windowHalfY
    let scene
    let camera
    let renderer
    let clock
    let delta
    let duck
    let water
    let ground

    // SAVE:  Follow mouse logic
    // function handleMouseMove(event) {
    //   mousePos = { x: event.clientX, y: event.clientY }
    // }

    function onWindowResize() {
      WIDTH = bodyContainer.offsetWidth
      windowHalfX = WIDTH / 2
      windowHalfY = HEIGHT / 2

      if (window.innerWidth <= 1200) {
        renderer.setSize(WIDTH, HEIGHT)
        camera.aspect = WIDTH / HEIGHT
      } else {
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
      camera.position.z = 250
      camera.position.y = 50
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
      // SAVE:  Follow mouse logic
      // bodyContainer.addEventListener("mousemove", handleMouseMove, false)

      // document.addEventListener("touchstart", handleTouchStart, false)
      // document.addEventListener("touchend", handleTouchEnd, false)
      // document.addEventListener("touchmove", handleTouchMove, false)
    }

    const createFloor = () => {
      ground = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(500, 500),
        new THREE.MeshStandardMaterial({
          color: 0x70471f,
        })
      )
      ground.rotation.x = -Math.PI / 2
      ground.position.y = -35
      ground.position.z = -80
      ground.receiveShadow = true

      water = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(450, 450),
        new THREE.MeshStandardMaterial({
          color: 0x3364ea,
          transparent: true,
          opacity: 0.9,
        })
      )
      water.rotation.x = -Math.PI / 2
      water.position.y = -10
      water.position.z = 20
      water.receiveShadow = true

      const backgroundGeom = new THREE.PlaneGeometry(800, 800, 20, 20)
      const matBackground = new THREE.MeshPhongMaterial({
        color: 0x664c21,
        vertexColors: THREE.VertexColors,
      })

      let randomFloorVertexPos
      backgroundGeom.vertices.forEach(function randomize(floorVertex, index) {
        if (index < 300) {
          randomFloorVertexPos = Math.floor(Math.random() * (0 - -35) + 10)
          floorVertex.z = randomFloorVertexPos
          backgroundGeom.verticesNeedUpdate = true
        }
      })

      const background = new THREE.Mesh(backgroundGeom, matBackground)

      let color
      for (let i = 0; i < backgroundGeom.faces.length; i++) {
        const face = backgroundGeom.faces[i]
        for (let j = 0; j < 3; j++) {
          color = new THREE.Color(0xffffff)
          color.setHex(Math.random() * 10 * 0x664c21)
          face.vertexColors[j] = color
        }
      }

      background.position.z = -240
      background.position.y = -30
      background.rotation.x = -1.5

      const rockGeo = new THREE.IcosahedronBufferGeometry(10, 0)
      const rock = new THREE.Mesh(
        rockGeo,
        new THREE.MeshLambertMaterial({ color: "gray", flatShading: true })
      )
      rock.castShadow = true
      rock.receiveShadow = true
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
      lillyPad.receiveShadow = true
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
      lillyPad2.receiveShadow = true
      lillyPad2.position.x = 20
      lillyPad2.position.y = -10.3
      lillyPad2.rotation.y = Math.PI - 1
      lillyPad.position.z = 17
      lillyPad2.rotation.x = Math.PI
      scene.add(lillyPad2)

      // const wireframe = new THREE.WireframeGeometry(backgroundGeom)

      // const line = new THREE.LineSegments(wireframe)
      // line.position.z = -200
      // line.position.y = -30
      // line.rotation.x = -1.5
      // line.material.depthTest = false
      // line.material.opacity = 0.25
      // line.material.transparent = true

      // scene.add(line)

      scene.add(rock)
      scene.add(water)
      scene.add(ground)
      scene.add(background)
    }

    const createLights = () => {
      const hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0xffffff, 0.7)

      const shadowLight = new THREE.DirectionalLight(0xffffff, 0.7, 100)

      shadowLight.position.set(50, 30, 100)

      shadowLight.castShadow = true
      shadowLight.shadow.mapSize.width = 4096
      shadowLight.shadow.mapSize.height = 4096
      shadowLight.shadow.camera.left = -200
      shadowLight.shadow.camera.right = 200
      shadowLight.shadow.camera.top = 200
      shadowLight.shadow.camera.bottom = -200
      shadowLight.shadow.camera.near = 1
      shadowLight.shadow.camera.far = 200

      // const helper = new THREE.CameraHelper(shadowLight.shadow.camera)
      // const lightHelper = new THREE.DirectionalLightHelper(shadowLight, 1)
      // scene.add(lightHelper)
      // scene.add(helper)

      scene.add(hemisphereLight)
      scene.add(shadowLight)
    }

    function Duck() {
      this.swimFeetCycle = 0
      this.swimForwardMotionCycle = 0
      this.blinkCycle = 0

      this.allDuckGroup = new THREE.Group()
      this.duckHeadGroup = new THREE.Group()
      this.duckFeetGroup = new THREE.Group()
      this.duckTorsoGroup = new THREE.Group()

      const rgbGreen = new THREE.Color("rgb(23, 167, 104)")
      const green = rgbGreen.getHex()

      const rgbYellow = new THREE.Color("rgb(241, 173, 29)")
      const yellow = rgbYellow.getHex()

      const rgbWhite = new THREE.Color("rgb(231, 224, 210)")
      const white = rgbWhite.getHex()

      const rgbBrown = new THREE.Color("rgb(187, 174, 147)")
      const brown = rgbBrown.getHex()

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
      this.duckHeadGroup.add(this.head)

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
      this.duckHeadGroup.add(this.duckHairGroup)

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
      this.duckHeadGroup.add(this.duckLeftEyeGroup)
      this.duckHeadGroup.add(this.duckRightEyeGroup)

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

      this.duckHeadGroup.add(this.neckTop)
      this.duckHeadGroup.add(this.neckMiddle)
      this.duckHeadGroup.add(this.neckBottom)

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
      this.duckHeadGroup.add(this.topBeak)

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
      this.duckHeadGroup.add(this.topBeakSlope)

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
      this.duckHeadGroup.add(this.bottomBeak)

      this.bottomBeakSlopeGeo = new THREE.CylinderGeometry(3, 0, 3, 3)
      this.bottomBeakSlopeGeo.vertices[3].z = -1.7
      this.bottomBeakSlopeGeo.vertices[3].y = -0.75

      this.bottomBeakSlope = new THREE.Mesh(this.bottomBeakSlopeGeo, flatYellow)
      this.bottomBeakSlope.position.z = 5.5
      this.bottomBeakSlope.position.y = 6.8
      this.allDuckGroup.add(this.bottomBeakSlope)
      this.duckHeadGroup.add(this.bottomBeakSlope)

      this.bodyGeo = new THREE.BoxGeometry(8, 7, 14)
      this.bodyGeo.vertices[3].y += 4
      this.bodyGeo.vertices[6].y += 4
      this.body = new THREE.Mesh(this.bodyGeo, flatWhite)
      this.body.position.z = -4
      this.body.position.y = 1
      this.duckTorsoGroup.add(this.body)

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
      this.duckTorsoGroup.add(this.leftWing)

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
      this.duckTorsoGroup.add(this.rightWing)

      this.chestGeo = new THREE.BoxGeometry(7, 6, 11)
      this.chestGeo.vertices[3].y += 1
      this.chestGeo.vertices[6].y += 1
      this.chest = new THREE.Mesh(this.chestGeo, flatBrown)
      this.chest.position.z = -2
      this.chest.position.y = 1
      this.duckTorsoGroup.add(this.chest)

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
      this.duckTorsoGroup.add(this.tail)

      this.allDuckGroup.add(this.duckTorsoGroup)

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
      this.duckFeetGroup.add(this.leftFoot)

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
      this.duckFeetGroup.add(this.rightFoot)

      this.allDuckGroup.add(this.duckHeadGroup)
      this.allDuckGroup.add(this.duckFeetGroup)

      this.allDuckGroup.traverse(function traverse(object) {
        if (object instanceof THREE.Mesh) {
          object.castShadow = true
          object.receiveShadow = true
        }
      })
    }

    Duck.prototype.blink = function blink() {
      this.blinkCycle += 0.05
      let t = this.blinkCycle
      t %= 2 * Math.PI

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

    Duck.prototype.swim = function swim() {
      this.swimForwardMotionCycle += delta * 0.6
      const amp = 4

      let forwardMotionT = this.swimForwardMotionCycle
      forwardMotionT %= 2 * Math.PI

      const vec = new THREE.Vector3(
        Math.cos(forwardMotionT - 4.5) * 80,
        -7,
        Math.sin(forwardMotionT - 4.5) * 80
      )

      this.swimFeetCycle += delta * 0.8

      let feetT = this.swimFeetCycle
      feetT %= 2 * Math.PI

      this.allDuckGroup.position.x = -20
      this.allDuckGroup.position.z = 0

      this.allDuckGroup.lookAt(vec)

      this.allDuckGroup.position.x = Math.cos(forwardMotionT) * 70
      this.allDuckGroup.position.z = Math.sin(forwardMotionT) * 70

      this.duckHeadGroup.rotation.z = Math.cos(forwardMotionT * 4) * 0.1

      this.leftFoot.rotation.x = Math.max(0, Math.cos(feetT * amp) * 1.8)
      this.rightFoot.rotation.x = Math.max(0, -Math.cos(feetT * amp) * 1.8)

      this.leftFoot.position.z = -4 - Math.cos(feetT * amp) * 7
      this.rightFoot.position.z = -4 - -Math.cos(feetT * amp) * 7

      this.leftFoot.rotation.z = Math.cos(feetT * amp) * -0.4
      this.rightFoot.rotation.z = -Math.cos(feetT * amp) * -0.4

      this.leftFoot.position.y = Math.min(
        -2.5,
        -3 - Math.cos(feetT * amp) * 1.6
      )
      this.rightFoot.position.y = Math.min(
        -2.5,
        -3 - -Math.cos(feetT * amp) * 1.6
      )

      this.duckTorsoGroup.rotation.z = -Math.cos(feetT * 4) * 0.18
    }

    // render
    const render = () => {
      renderer.render(scene, camera)
    }

    // animate
    const animate = () => {
      // SAVE:  Follow mouse logic
      //------------------------------------------------------------------------
      // let tempHA
      // let tempVA
      // let tempX
      // let tempY
      // if (window.innerWidth >= 1200) {
      //   tempX = mousePos.x - sideBarContainer.offsetWidth
      //   tempY = mousePos.y
      //   tempHA = (tempX - windowHalfX) / 200
      //   tempVA = (mousePos.y - windowHalfY) / 200
      // } else {
      //   tempX = mousePos.x
      //   tempY = mousePos.y - sideBarContainer.offsetHeight + 250
      //   tempHA = (mousePos.x - windowHalfX) / 200
      //   tempVA = (tempY - windowHalfY) / 200
      // }
      // const userHAngle = Math.min(Math.max(tempHA, -Math.PI / 3), Math.PI / 3)
      // const userVAngle = Math.min(Math.max(tempVA, -Math.PI / 3), Math.PI / 3)
      // const xTarget = tempX - windowHalfX
      // const yTarget = tempY - windowHalfY

      /**
       *
       * Place animation initializers here
       *
       */
      duck.blink()
      delta = clock.getDelta()
      duck.swim()
      duck.allDuckGroup.position.y = -11
      requestAnimationFrame(animate)
      render()
    }

    init()
    createFloor()
    createLights()

    duck = new Duck()
    clock = new THREE.Clock()
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

DuckAnimation.propTypes = {
  animations: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default DuckAnimation
