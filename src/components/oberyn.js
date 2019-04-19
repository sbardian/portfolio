/** @jsx jsx */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
// eslint-disable-next-line
import React from "react"
import * as THREE from "three"
import OrbitControls from "three-orbitcontrols"
// import { TweenMax, Back } from "gsap/TweenMax"
import { jsx, css } from "@emotion/core"
import mq from "./media-queries"

export default () => {
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
    let ob
    let floor

    function handleMouseMove(event) {
      mousePos = { x: event.clientX, y: event.clientY }
    }

    function onWindowResize() {
      HEIGHT = bodyContainer.innerHeight
      WIDTH = bodyContainer.innerWidth
      windowHalfX = WIDTH
      windowHalfY = HEIGHT
      renderer.setSize(WIDTH, HEIGHT)
      camera.aspect = WIDTH / HEIGHT
      camera.updateProjectionMatrix()
    }

    // init
    const init = () => {
      scene = new THREE.Scene()

      camera = new THREE.PerspectiveCamera(50, WIDTH / HEIGHT, 1, 2000)
      camera.position.z = 1000
      camera.position.y = 300
      camera.lookAt(new THREE.Vector3(0, 0, 0))

      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      })
      renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1)
      renderer.setSize(WIDTH, HEIGHT)
      renderer.setClearColor(0x000000, 0)
      renderer.shadowMapEnabled = true

      windowHalfX = WIDTH / 2
      windowHalfY = HEIGHT / 2

      const controls = new OrbitControls(camera, renderer.domElement)

      window.addEventListener("resize", onWindowResize, false)
      document.addEventListener("mousemove", handleMouseMove, false)
      // document.addEventListener("touchstart", handleTouchStart, false)
      // document.addEventListener("touchend", handleTouchEnd, false)
      // document.addEventListener("touchmove", handleTouchMove, false)
    }

    const createFloor = () => {
      floor = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(1000, 1000),
        new THREE.MeshBasicMaterial({ color: 0xe1e1e1 })
      )
      floor.rotation.x = -Math.PI / 2
      floor.position.y = -120
      floor.receiveShadow = true
      scene.add(floor)
    }

    const createLights = () => {
      const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5)

      const shadowLight = new THREE.DirectionalLight(0xffffff, 0.8)
      shadowLight.position.set(200, 200, 200)
      shadowLight.castShadow = true
      shadowLight.shadowDarkness = 0.1

      const backLight = new THREE.DirectionalLight(0xffffff, 0.4)
      backLight.position.set(100, 200, 50)
      backLight.shadowDarkness = 0.2
      backLight.castShadow = true

      const spotLight = new THREE.SpotLight(0xffffff)
      spotLight.position.set(100, 300, -150)
      spotLight.castShadow = true
      spotLight.shadow.mapSize.width = 1024
      spotLight.shadow.mapSize.height = 1024
      spotLight.shadow.camera.near = 700
      spotLight.shadow.camera.far = 1000
      spotLight.shadow.camera.fov = 200

      scene.add(spotLight)
      scene.add(backLight)
      scene.add(light)
      scene.add(shadowLight)
    }

    // Oberyn
    function Oberyn() {
      let rSegments
      let hSegments
      this.obBodyGroup = new THREE.Group()
      this.obHeadGroup = new THREE.Group()
      this.obEyesGroup = new THREE.Group()
      this.obAllGroup = new THREE.Group()

      // OB Materials
      // Fur
      const obFurMaterial = new THREE.MeshLambertMaterial({
        color: 0xc9871c,
        shading: THREE.FlatShading,
      })

      // Stripes
      const obStripeMaterial = new THREE.MeshLambertMaterial({
        color: 0xa05224,
        shading: THREE.FlatShading,
      })

      // Eyes
      const obEyeMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        shading: THREE.FlatShading,
      })

      // Eyebrow
      const obEyebrowMaterial = new THREE.MeshLambertMaterial({
        color: 0x704a0e,
        shading: THREE.FlatShading,
      })

      // Eye Iris
      const obEyeIrisMaterial = new THREE.MeshLambertMaterial({
        color: 0x000000,
        shading: THREE.FlatShading,
      })

      const obNoseMaterial = new THREE.MeshLambertMaterial({
        color: 0xffa3bb,
        shading: THREE.FlatShading,
      })

      // OB body
      this.rSegments = 4
      this.hSegments = 3
      const obBodyGeometry = new THREE.CylinderGeometry(
        10,
        55,
        250,
        rSegments,
        hSegments
      )
      const obBody = new THREE.Mesh(obBodyGeometry, obFurMaterial)
      this.obBodyGroup.add(obBody)

      // OB Head
      const obHeadGeometry = new THREE.BoxBufferGeometry(100, 80, 75)
      const obHead = new THREE.Mesh(obHeadGeometry, obFurMaterial)
      obHead.position.y = 165
      this.obHeadGroup.add(obHead)

      // EARS
      // OB Right Ear
      const obRightEarGeometry = new THREE.ConeBufferGeometry(25, 40, 3)
      const obRightEar = new THREE.Mesh(obRightEarGeometry, obFurMaterial)
      obRightEar.position.y = 225
      obRightEar.position.x = 30
      obRightEar.rotation.y = 0.95
      this.obHeadGroup.add(obRightEar)

      // OB Left Ear
      const obLeftEarGeometry = new THREE.ConeBufferGeometry(25, 40, 3)
      const obLeftEar = new THREE.Mesh(obLeftEarGeometry, obFurMaterial)
      obLeftEar.position.y = 225
      obLeftEar.position.x = -30
      obLeftEar.rotation.y = -0.95
      this.obHeadGroup.add(obLeftEar)

      // INSIDE EARS
      // OB Inner Right Ear
      const obInnerRightEarGeometry = new THREE.ConeBufferGeometry(15, 30, 3)
      const obInnerRightEar = new THREE.Mesh(
        obInnerRightEarGeometry,
        obNoseMaterial
      )
      obInnerRightEar.position.y = 220
      obInnerRightEar.position.x = 30
      obInnerRightEar.position.z = 7
      obInnerRightEar.rotation.y = 0.95
      this.obHeadGroup.add(obInnerRightEar)

      // OB Inner Left Ear
      const obInnerLeftEarGeometry = new THREE.ConeBufferGeometry(15, 30, 3)
      const obInnerLeftEar = new THREE.Mesh(
        obInnerLeftEarGeometry,
        obNoseMaterial
      )
      obInnerLeftEar.position.y = 220
      obInnerLeftEar.position.x = -30
      obInnerLeftEar.position.z = 7
      obInnerLeftEar.rotation.y = -0.95
      this.obHeadGroup.add(obInnerLeftEar)

      // EYES
      // OB Right Eye
      const obRightEyeGeometry = new THREE.BoxBufferGeometry(30, 25, 5)
      this.obRightEye = new THREE.Mesh(obRightEyeGeometry, obEyeMaterial)
      this.obRightEye.position.y = 185
      this.obRightEye.position.x = -25
      this.obRightEye.position.z = 45
      this.obEyesGroup.add(this.obRightEye)

      // OB Left Eye
      const obLeftEyeGeometry = new THREE.BoxBufferGeometry(30, 25, 5)
      this.obLeftEye = new THREE.Mesh(obLeftEyeGeometry, obEyeMaterial)
      this.obLeftEye.position.y = 185
      this.obLeftEye.position.x = 25
      this.obLeftEye.position.z = 45
      this.obEyesGroup.add(this.obLeftEye)

      // OB Right Iris
      const obRightEyeIrisGeometry = new THREE.BoxBufferGeometry(5, 5, 5)
      this.obRightEyeIris = new THREE.Mesh(
        obRightEyeIrisGeometry,
        obEyeIrisMaterial
      )
      this.obRightEyeIris.position.y = 185
      this.obRightEyeIris.position.x = 20
      this.obRightEyeIris.position.z = 55
      this.obEyesGroup.add(this.obRightEyeIris)

      // OB Left Iris
      const obLeftEyeIrisGeometry = new THREE.BoxBufferGeometry(5, 5, 5)
      this.obLeftEyeIris = new THREE.Mesh(
        obLeftEyeIrisGeometry,
        obEyeIrisMaterial
      )
      this.obLeftEyeIris.position.y = 185
      this.obLeftEyeIris.position.x = -20
      this.obLeftEyeIris.position.z = 55
      this.obEyesGroup.add(this.obLeftEyeIris)

      // OB Right Eyebrow
      const obRightEyebrowGeometry = new THREE.BoxBufferGeometry(30, 3, 5)
      this.obRightEyebrow = new THREE.Mesh(
        obRightEyebrowGeometry,
        obEyebrowMaterial
      )
      this.obRightEyebrow.position.y = 205
      this.obRightEyebrow.position.x = -20
      this.obRightEyebrow.position.z = 55
      this.obRightEyebrow.rotation.x = 0.2
      this.obRightEyebrow.rotation.y = -0.2
      this.obEyesGroup.add(this.obRightEyebrow)

      // OB Left Eyebrow
      const obLeftEyebrowGeometry = new THREE.BoxBufferGeometry(30, 3, 5)
      this.obLeftEyebrow = new THREE.Mesh(
        obLeftEyebrowGeometry,
        obEyebrowMaterial
      )
      this.obLeftEyebrow.position.y = 205
      this.obLeftEyebrow.position.x = 20
      this.obLeftEyebrow.position.z = 55
      this.obLeftEyebrow.rotation.x = 0.2
      this.obLeftEyebrow.rotation.y = 0.2
      this.obEyesGroup.add(this.obLeftEyebrow)

      // OB Mouth
      const obMouthGeometry = new THREE.BoxBufferGeometry(50, 30, 30)
      const obMouth = new THREE.Mesh(obMouthGeometry, obFurMaterial)
      obMouth.position.y = 160
      obMouth.position.z = 60
      this.obHeadGroup.add(obMouth)

      // OB Nose
      const obNoseGeometry = new THREE.BoxBufferGeometry(10, 10, 10)
      const obNose = new THREE.Mesh(obNoseGeometry, obNoseMaterial)
      obNose.position.y = 175
      obNose.position.z = 80
      this.obHeadGroup.add(obNose)

      // OB Tail
      const obTailGeometry = new THREE.CylinderGeometry(
        20,
        5,
        250,
        this.rSegments,
        this.hSegments
      )
      const obTail = new THREE.Mesh(obTailGeometry, obFurMaterial)
      obTail.position.z = -75
      obTail.rotation.x = -0.2
      this.obBodyGroup.add(obTail)

      // OB Legs
      // OB Right Front Leg
      const obRightFrontLegGeometry = new THREE.BoxBufferGeometry(20, 180, 20)
      const obRightFrontLeg = new THREE.Mesh(
        obRightFrontLegGeometry,
        obFurMaterial
      )
      obRightFrontLeg.position.x = -25
      obRightFrontLeg.position.y = -40
      obRightFrontLeg.position.z = 20
      obRightFrontLeg.rotation.z = 3
      obRightFrontLeg.rotation.x = -0.3

      this.obBodyGroup.add(obRightFrontLeg)

      // OB Left Front Leg
      const obLeftFrontLegGeometry = new THREE.BoxBufferGeometry(20, 180, 20)
      const obLeftFrontLeg = new THREE.Mesh(
        obLeftFrontLegGeometry,
        obFurMaterial
      )
      obLeftFrontLeg.position.x = 25
      obLeftFrontLeg.position.y = -40
      obLeftFrontLeg.position.z = 20
      obLeftFrontLeg.rotation.z = -3
      obLeftFrontLeg.rotation.x = -0.3

      this.obBodyGroup.add(obLeftFrontLeg)

      // OB Left Back Leg
      const obLeftBackLegGeometry = new THREE.BoxBufferGeometry(20, 120, 120)
      const obLeftBackLeg = new THREE.Mesh(obLeftBackLegGeometry, obFurMaterial)
      obLeftBackLeg.position.x = 60
      obLeftBackLeg.position.y = -65
      obLeftBackLeg.position.z = 10
      obLeftBackLeg.rotation.z = 3
      obLeftBackLeg.rotation.y = 0.5

      this.obBodyGroup.add(obLeftBackLeg)

      // OB Right Back Leg
      const obRightBackLegGeometry = new THREE.BoxBufferGeometry(20, 120, 120)
      const obRightBackLeg = new THREE.Mesh(
        obRightBackLegGeometry,
        obFurMaterial
      )
      obRightBackLeg.position.x = -60
      obRightBackLeg.position.y = -65
      obRightBackLeg.position.z = 10
      obRightBackLeg.rotation.z = -3
      obRightBackLeg.rotation.y = -0.5

      this.obBodyGroup.add(obRightBackLeg)

      // Paws
      // OB Right Back Paw
      const obRightBackPawGeometry = new THREE.BoxBufferGeometry(30, 30, 30)
      const obRightBackPaw = new THREE.Mesh(
        obRightBackPawGeometry,
        obFurMaterial
      )
      obRightBackPaw.position.x = -90
      obRightBackPaw.position.y = -110
      obRightBackPaw.position.z = 70
      obRightBackPaw.rotation.z = -3
      obRightBackPaw.rotation.y = -0.5

      this.obBodyGroup.add(obRightBackPaw)

      // OB Left Back Paw
      const obLeftBackPawGeometry = new THREE.BoxBufferGeometry(30, 30, 30)
      const obLeftBackPaw = new THREE.Mesh(obLeftBackPawGeometry, obFurMaterial)
      obLeftBackPaw.position.x = 90
      obLeftBackPaw.position.y = -110
      obLeftBackPaw.position.z = 70
      obLeftBackPaw.rotation.z = 3
      obLeftBackPaw.rotation.y = 0.5

      this.obBodyGroup.add(obLeftBackPaw)

      // OB Right Front Paw
      const obRightFrontPawGeometry = new THREE.BoxBufferGeometry(30, 30, 30)
      const obRightFrontPaw = new THREE.Mesh(
        obRightFrontPawGeometry,
        obFurMaterial
      )
      obRightFrontPaw.position.x = -35
      obRightFrontPaw.position.y = -110
      obRightFrontPaw.position.z = 60

      this.obBodyGroup.add(obRightFrontPaw)

      // OB Left Front Paw
      const obLeftFrontPawGeometry = new THREE.BoxBufferGeometry(30, 30, 30)
      const obLeftFrontPaw = new THREE.Mesh(
        obLeftFrontPawGeometry,
        obFurMaterial
      )
      obLeftFrontPaw.position.x = 35
      obLeftFrontPaw.position.y = -110
      obLeftFrontPaw.position.z = 60

      this.obBodyGroup.add(obLeftFrontPaw)

      // OB Stripes

      //   scene.add(this.obBodyGroup)
      //   scene.add(this.obHeadGroup)
    }

    Oberyn.prototype.lookAt = function lookAt(hAngle, vAngle) {
      // Iris
      this.obLeftEyeIris.position.y = 185 - vAngle * 9
      this.obLeftEyeIris.position.x = -25 + hAngle * 12
      //   this.obLeftEyeIris.position.z = 40 + hAngle * 10
      this.obRightEyeIris.position.y = 185 - vAngle * 9
      this.obRightEyeIris.position.x = 25 + hAngle * 12
      //   this.obRightEyeIris.position.z = 40 - hAngle * 10
      this.obLeftEyeIris.geometry.verticesNeedUpdate = true
      this.obRightEyeIris.geometry.verticesNeedUpdate = true

      // brows
      this.obLeftEyebrow.position.y = 205 + vAngle * 5
      this.obRightEyebrow.position.y = 205 - vAngle * 5
      this.obLeftEyebrow.rotation.x = 0.2 - vAngle * 0.5
      this.obRightEyebrow.rotation.x = 0.2 + vAngle * 0.5
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
      if (window.innerWidth >= 1200) {
        console.log("side = ", sideBarContainer.offsetWidth)
        tempX = mousePos.x - sideBarContainer.offsetWidth * 1.95
        tempHA = tempX - windowHalfX / 200
        tempVA = (mousePos.y - windowHalfY) / 200
      } else {
        tempHA = (mousePos.x - windowHalfX) / 200
        tempVA = (mousePos.y - windowHalfY) / 200
      }
      const userHAngle = Math.min(Math.max(tempHA, -Math.PI / 3), Math.PI / 3)
      const userVAngle = Math.min(Math.max(tempVA, -Math.PI / 3), Math.PI / 3)
      ob.lookAt(userHAngle, userVAngle)

      requestAnimationFrame(animate)
      render()
    }

    init()
    createLights()
    createFloor()
    ob = new Oberyn()
    ob.obAllGroup.add(ob.obEyesGroup)
    ob.obAllGroup.add(ob.obHeadGroup)
    ob.obAllGroup.add(ob.obBodyGroup)
    ob.obAllGroup.rotation.y = 6
    scene.add(ob.obAllGroup)

    console.log("ob >>>>  ", ob)
    animate()
  })

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
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
