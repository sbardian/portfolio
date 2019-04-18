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
    const WIDTH = bodyContainer.offsetWidth
    const HEIGHT = bodyContainer.offsetHeight
    let windowHalfX
    let windowHalfY
    let scene
    let camera
    let renderer

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

      const controls = new OrbitControls(camera, renderer.domElement)

      // window.addEventListener("resize", onWindowResize, false)
      // document.addEventListener("mousemove", handleMouseMove, false)
      // document.addEventListener("touchstart", handleTouchStart, false)
      // document.addEventListener("touchend", handleTouchEnd, false)
      // document.addEventListener("touchmove", handleTouchMove, false)
    }

    const createLights = () => {
      const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5)

      const shadowLight = new THREE.DirectionalLight(0xffffff, 0.8)
      shadowLight.position.set(200, 200, 200)
      shadowLight.castShadow = true
      shadowLight.shadowDarkness = 0.2

      const backLight = new THREE.DirectionalLight(0xffffff, 0.4)
      backLight.position.set(-100, 200, 50)
      backLight.shadowDarkness = 0.1
      backLight.castShadow = true

      scene.add(backLight)
      scene.add(light)
      scene.add(shadowLight)
    }

    // Oberyn
    const Oberyn = () => {
      // OB Materials
      // Fur
      const obFurMaterial = new THREE.MeshLambertMaterial({
        color: 0xeba644,
        shading: THREE.FlatShading,
      })

      // Eyes
      const obEyeMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff,
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
      const rSegments = 4
      const hSegments = 3
      const obBodyGroup = new THREE.Group()
      const obBodyGeometry = new THREE.CylinderGeometry(
        10,
        70,
        250,
        rSegments,
        hSegments
      )
      const obBody = new THREE.Mesh(obBodyGeometry, obFurMaterial)
      obBodyGroup.add(obBody)

      // OB head
      const obHeadGroup = new THREE.Group()
      const obHeadGeometry = new THREE.BoxBufferGeometry(100, 100, 75)
      const obHead = new THREE.Mesh(obHeadGeometry, obFurMaterial)
      obHead.position.y = 175
      obHeadGroup.add(obHead)

      // EARS
      // OB Right Ear
      const obRightEarGeometry = new THREE.BoxBufferGeometry(40, 40, 5)
      const obRightEar = new THREE.Mesh(obRightEarGeometry, obFurMaterial)
      obRightEar.position.y = 250
      obRightEar.position.x = 35
      obHeadGroup.add(obRightEar)

      // OB Left Ear
      const obLeftEarGeometry = new THREE.BoxBufferGeometry(40, 40, 5)
      const obLeftEar = new THREE.Mesh(obLeftEarGeometry, obFurMaterial)
      obLeftEar.position.y = 250
      obLeftEar.position.x = -35
      obHeadGroup.add(obLeftEar)

      // INSIDE EARS
      // OB Inner Right Ear
      const obInnerRightEarGeometry = new THREE.BoxBufferGeometry(20, 20, 5)
      const obInnerRightEar = new THREE.Mesh(
        obInnerRightEarGeometry,
        obNoseMaterial
      )
      obInnerRightEar.position.y = 240
      obInnerRightEar.position.x = 35
      obInnerRightEar.position.z = 5
      obHeadGroup.add(obInnerRightEar)

      // OB Inner Left Ear
      const obInnerLeftEarGeometry = new THREE.BoxBufferGeometry(20, 20, 5)
      const obInnerLeftEar = new THREE.Mesh(
        obInnerLeftEarGeometry,
        obNoseMaterial
      )
      obInnerLeftEar.position.y = 240
      obInnerLeftEar.position.x = -35
      obInnerLeftEar.position.z = 5
      obHeadGroup.add(obInnerLeftEar)

      // EYES
      const obEyesGroup = new THREE.Group()

      // OB Right Eye
      const obRightEyeGeometry = new THREE.BoxBufferGeometry(45, 25, 5)
      const obRightEye = new THREE.Mesh(obRightEyeGeometry, obEyeMaterial)
      obRightEye.position.y = 200
      obRightEye.position.x = -25
      obRightEye.position.z = 45
      obEyesGroup.add(obRightEye)

      // OB Left Eye
      const obLeftEyeGeometry = new THREE.BoxBufferGeometry(45, 25, 5)
      const obLeftEye = new THREE.Mesh(obLeftEyeGeometry, obEyeMaterial)
      obLeftEye.position.y = 200
      obLeftEye.position.x = 25
      obLeftEye.position.z = 45
      obEyesGroup.add(obLeftEye)

      // OB Right Iris
      const obRightEyeIrisGeometry = new THREE.BoxBufferGeometry(5, 5, 5)
      const obRightEyeIris = new THREE.Mesh(
        obRightEyeIrisGeometry,
        obEyeIrisMaterial
      )
      obRightEyeIris.position.y = 200
      obRightEyeIris.position.x = 20
      obRightEyeIris.position.z = 55
      obEyesGroup.add(obRightEyeIris)

      // OB Left Iris
      const obLeftEyeIrisGeometry = new THREE.BoxBufferGeometry(5, 5, 5)
      const obLeftEyeIris = new THREE.Mesh(
        obLeftEyeIrisGeometry,
        obEyeIrisMaterial
      )
      obLeftEyeIris.position.y = 200
      obLeftEyeIris.position.x = -20
      obLeftEyeIris.position.z = 55
      obEyesGroup.add(obLeftEyeIris)

      obHeadGroup.add(obEyesGroup)

      // OB mouth
      const obMouthGeometry = new THREE.BoxBufferGeometry(50, 50, 30)
      const obMouth = new THREE.Mesh(obMouthGeometry, obFurMaterial)
      obMouth.position.y = 160
      obMouth.position.z = 60
      obHeadGroup.add(obMouth)

      // OB Nose
      const obNoseGeometry = new THREE.BoxBufferGeometry(10, 10, 10)
      const obNose = new THREE.Mesh(obNoseGeometry, obNoseMaterial)
      obNose.position.y = 180
      obNose.position.z = 80
      obHeadGroup.add(obNose)

      // OB Tail
      const obTailGeometry = new THREE.CylinderGeometry(
        20,
        5,
        250,
        rSegments,
        hSegments
      )
      const obTail = new THREE.Mesh(obTailGeometry, obFurMaterial)
      obTail.position.z = -75
      obBodyGroup.add(obTail)

      // OB Legs
      // OB Right Front Leg
      const obRightFrontLegGeometry = new THREE.BoxBufferGeometry(20, 180, 30)
      const obRightFrontLeg = new THREE.Mesh(
        obRightFrontLegGeometry,
        obFurMaterial
      )
      obRightFrontLeg.position.x = -25
      obRightFrontLeg.position.y = -40
      obRightFrontLeg.position.z = 35
      obRightFrontLeg.rotation.z = 3
      obRightFrontLeg.rotation.x = -0.3

      obBodyGroup.add(obRightFrontLeg)

      // OB Left Front Leg
      const obLeftFrontLegGeometry = new THREE.BoxBufferGeometry(20, 180, 30)
      const obLeftFrontLeg = new THREE.Mesh(
        obLeftFrontLegGeometry,
        obFurMaterial
      )
      obLeftFrontLeg.position.x = 25
      obLeftFrontLeg.position.y = -40
      obLeftFrontLeg.position.z = 35
      obLeftFrontLeg.rotation.z = -3
      obLeftFrontLeg.rotation.x = -0.3

      obBodyGroup.add(obLeftFrontLeg)

      // OB Left Back Leg
      const obLeftBackLegGeometry = new THREE.BoxBufferGeometry(20, 120, 120)
      const obLeftBackLeg = new THREE.Mesh(obLeftBackLegGeometry, obFurMaterial)
      obLeftBackLeg.position.x = 60
      obLeftBackLeg.position.y = -65
      obLeftBackLeg.position.z = 10
      obLeftBackLeg.rotation.z = 3
      obLeftBackLeg.rotation.y = 0.5

      obBodyGroup.add(obLeftBackLeg)

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

      obBodyGroup.add(obRightBackLeg)

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

      obBodyGroup.add(obRightBackPaw)

      // OB Left Back Paw
      const obLeftBackPawGeometry = new THREE.BoxBufferGeometry(30, 30, 30)
      const obLeftBackPaw = new THREE.Mesh(obLeftBackPawGeometry, obFurMaterial)
      obLeftBackPaw.position.x = 90
      obLeftBackPaw.position.y = -110
      obLeftBackPaw.position.z = 70
      obLeftBackPaw.rotation.z = 3
      obLeftBackPaw.rotation.y = 0.5

      obBodyGroup.add(obLeftBackPaw)

      // OB Right Front Paw
      const obRightFrontPawGeometry = new THREE.BoxBufferGeometry(30, 30, 30)
      const obRightFrontPaw = new THREE.Mesh(
        obRightFrontPawGeometry,
        obFurMaterial
      )
      obRightFrontPaw.position.x = -35
      obRightFrontPaw.position.y = -110
      obRightFrontPaw.position.z = 70
      //   obRightFrontPaw.rotation.z = -3
      //   obRightFrontPaw.rotation.y = -0.5

      obBodyGroup.add(obRightFrontPaw)

      // OB Left Front Paw
      const obLeftFrontPawGeometry = new THREE.BoxBufferGeometry(30, 30, 30)
      const obLeftFrontPaw = new THREE.Mesh(
        obLeftFrontPawGeometry,
        obFurMaterial
      )
      obLeftFrontPaw.position.x = 35
      obLeftFrontPaw.position.y = -110
      obLeftFrontPaw.position.z = 70
      //   obLeftFrontPaw.rotation.z = 3
      //   obLeftFrontPaw.rotation.y = 0.5

      obBodyGroup.add(obLeftFrontPaw)

      scene.add(obBodyGroup)
      scene.add(obHeadGroup)
    }

    // render
    const render = () => {
      renderer.render(scene, camera)
    }

    // animate
    const animate = () => {
      requestAnimationFrame(animate)
      render()
    }

    init()
    createLights()
    Oberyn()
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
          position: fixed;
        `}
        id="ob-scene"
      />
    </div>
  )
}
