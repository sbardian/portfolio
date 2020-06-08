// @ts-nocheck
/** @jsx jsx */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-this-in-sfc */
// eslint-disable-next-line
import * as React from "react"
import * as THREE from "three"
import OrbitControls from "three-orbitcontrols"
import { TweenMax, Elastic, TimelineMax } from "gsap"
import { jsx } from "theme-ui"
import AnimationsNav from "./animations-nav"

const OberynAnimation: React.FC<Portfolio.AnimationProps> = ({
  animations,
}) => {
  React.useEffect(() => {
    // setup
    const canvas = document.querySelector("#ob-scene")
    const WIDTH = window.innerWidth
    const HEIGHT = window.innerHeight - 575
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
      windowHalfX = WIDTH / 2
      windowHalfY = HEIGHT / 2
      renderer.setSize(WIDTH, HEIGHT)
      camera.aspect = WIDTH / HEIGHT
      camera.updateProjectionMatrix()
    }

    // init
    const init = () => {
      scene = new THREE.Scene()

      camera = new THREE.PerspectiveCamera(50, WIDTH / HEIGHT, 1, 4000)
      camera.position.z = 700
      camera.position.y = 200
      camera.lookAt(new THREE.Vector3(0, 0, 0))

      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(WIDTH, HEIGHT)
      renderer.setClearColor(0x000000, 0)
      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap

      windowHalfX = WIDTH / 2
      windowHalfY = HEIGHT / 2

      const controls = new OrbitControls(camera, renderer.domElement)

      window.addEventListener("resize", onWindowResize, false)
      window.addEventListener("mousemove", handleMouseMove, false)
      // document.addEventListener("touchstart", handleTouchStart, false)
      // document.addEventListener("touchend", handleTouchEnd, false)
      // document.addEventListener("touchmove", handleTouchMove, false)
    }

    const createFloor = () => {
      floor = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(8000, 4000),
        new THREE.MeshStandardMaterial({ color: 0x363636 })
      )
      floor.rotation.x = -Math.PI / 2
      floor.position.y = -120
      floor.receiveShadow = true
      floor.castShadow = false
      scene.add(floor)
    }

    const createLights = () => {
      const ambLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.7)

      const shadowLight = new THREE.DirectionalLight(0xffffff, 0.7)
      shadowLight.position.set(200, 150, 200)
      shadowLight.castShadow = true

      shadowLight.shadow.camera.near = 2
      shadowLight.shadow.camera.far = -2000
      shadowLight.shadow.camera.left = -1000
      shadowLight.shadow.camera.right = 1000
      shadowLight.shadow.camera.top = 1000
      shadowLight.shadow.camera.bottom = -1000

      // Set up shadow properties for the light
      shadowLight.shadow.mapSize.width = 4096 // default
      shadowLight.shadow.mapSize.height = 4096 // default
      shadowLight.shadow.camera.near = 2 // default
      shadowLight.shadow.camera.far = 2000 // default

      //   const helper = new THREE.CameraHelper(shadowLight.shadow.camera)
      //   const lightHelper = new THREE.DirectionalLightHelper(shadowLight, 1)
      //   scene.add(lightHelper)
      //   scene.add(helper)

      scene.add(ambLight)
      scene.add(shadowLight)
    }

    // Oberyn
    function Oberyn() {
      let rSegments
      let hSegments
      this.obBodyGroup = new THREE.Group()
      this.obHeadGroup = new THREE.Group()
      this.obEarsGroup = new THREE.Group()
      this.obEyesGroup = new THREE.Group()
      this.obAllGroup = new THREE.Group()
      this.obLeftWhiskersGroup = new THREE.Group()
      this.obRightWhiskersGroup = new THREE.Group()

      // OB Materials
      // Fur
      const obFurMaterial = new THREE.MeshLambertMaterial({
        color: 0xc9871c,
        flatShading: THREE.FlatShading,
      })

      // Collar
      const obCallarMaterial = new THREE.MeshLambertMaterial({
        color: 0xa263bf,
        flatShading: THREE.FlatShading,
      })

      // Collar Hook
      const obCollarHookMaterial = new THREE.MeshLambertMaterial({
        color: 0x656466,
        flatShading: THREE.FlatShading,
      })

      // Collar Bell
      const obCollarBellMaterial = new THREE.MeshLambertMaterial({
        color: 0xf4d942,
        flatShading: THREE.FlatShading,
      })

      // Eyes
      const obWhiteMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        flatShading: THREE.FlatShading,
      })

      // Eyebrow
      const obEyebrowMaterial = new THREE.MeshLambertMaterial({
        color: 0x704a0e,
        flatShading: THREE.FlatShading,
      })

      // Eye Iris
      const obEyeIrisMaterial = new THREE.MeshLambertMaterial({
        color: 0x000000,
        flatShading: THREE.FlatShading,
      })

      const obNoseMaterial = new THREE.MeshLambertMaterial({
        color: 0xffa3bb,
        flatShading: THREE.FlatShading,
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
      obBody.castShadow = true
      obBody.receiveShadow = true
      this.obBodyGroup.add(obBody)

      // OB Head
      const obHeadGeometry = new THREE.BoxBufferGeometry(100, 80, 75)
      const obHead = new THREE.Mesh(obHeadGeometry, obFurMaterial)
      obHead.castShadow = true
      obHead.receiveShadow = false
      obHead.position.y = 165
      this.obHeadGroup.add(obHead)

      // EARS
      // OB Right Ear
      const obRightEarGeometry = new THREE.ConeBufferGeometry(20, 30, 3)
      const obRightEar = new THREE.Mesh(obRightEarGeometry, obFurMaterial)
      obRightEar.castShadow = true
      obRightEar.receiveShadow = true
      obRightEar.position.y = 220
      obRightEar.position.x = 33
      obRightEar.rotation.y = 0.95
      this.obEarsGroup.add(obRightEar)
      this.obHeadGroup.add(obRightEar)

      // OB Left Ear
      const obLeftEarGeometry = new THREE.ConeBufferGeometry(20, 30, 3)
      const obLeftEar = new THREE.Mesh(obLeftEarGeometry, obFurMaterial)
      obLeftEar.castShadow = true
      obLeftEar.receiveShadow = true
      obLeftEar.position.y = 220
      obLeftEar.position.x = -33
      obLeftEar.rotation.y = -0.95
      this.obEarsGroup.add(obLeftEar)
      this.obHeadGroup.add(obLeftEar)

      // INSIDE EARS
      // OB Inner Right Ear
      const obInnerRightEarGeometry = new THREE.ConeBufferGeometry(15, 25, 3)
      const obInnerRightEar = new THREE.Mesh(
        obInnerRightEarGeometry,
        obNoseMaterial
      )
      obInnerRightEar.castShadow = false
      obInnerRightEar.receiveShadow = true
      obInnerRightEar.position.y = 215
      obInnerRightEar.position.x = 33
      obInnerRightEar.position.z = 7
      obInnerRightEar.rotation.y = 0.95
      this.obEarsGroup.add(obInnerRightEar)
      this.obHeadGroup.add(obInnerRightEar)

      // OB Inner Left Ear
      const obInnerLeftEarGeometry = new THREE.ConeBufferGeometry(15, 25, 3)
      const obInnerLeftEar = new THREE.Mesh(
        obInnerLeftEarGeometry,
        obNoseMaterial
      )
      obInnerLeftEar.castShadow = false
      obInnerLeftEar.receiveShadow = true
      obInnerLeftEar.position.y = 215
      obInnerLeftEar.position.x = -33
      obInnerLeftEar.position.z = 7
      obInnerLeftEar.rotation.y = -0.95
      this.obEarsGroup.add(obInnerLeftEar)
      this.obHeadGroup.add(obInnerLeftEar)

      // EYES
      // OB Right Eye
      //   const obRightEyeGeometry = new THREE.BoxBufferGeometry(30, 25, 5)
      const obRightEyeGeometry = new THREE.CylinderBufferGeometry(25, 15, 25, 3)
      this.obRightEye = new THREE.Mesh(obRightEyeGeometry, obWhiteMaterial)
      this.obRightEye.castShadow = true
      this.obRightEye.receiveShadow = true
      this.obRightEye.position.y = 185
      this.obRightEye.position.x = -25
      this.obRightEye.position.z = 30
      this.obRightEye.rotation.y = 1.05
      this.obEyesGroup.add(this.obRightEye)
      this.obHeadGroup.add(this.obRightEye)

      // OB Left Eye
      //   const obLeftEyeGeometry = new THREE.BoxBufferGeometry(30, 25, 5)
      const obLeftEyeGeometry = new THREE.CylinderBufferGeometry(25, 15, 25, 3)
      this.obLeftEye = new THREE.Mesh(obLeftEyeGeometry, obWhiteMaterial)
      this.obLeftEye.castShadow = true
      this.obLeftEye.receiveShadow = true
      this.obLeftEye.position.y = 185
      this.obLeftEye.position.x = 25
      this.obLeftEye.position.z = 30
      this.obLeftEye.rotation.y = 1.05
      this.obEyesGroup.add(this.obLeftEye)
      this.obHeadGroup.add(this.obLeftEye)

      // OB Right Iris
      const obRightEyeIrisGeometry = new THREE.BoxBufferGeometry(5, 5, 5)
      this.obRightEyeIris = new THREE.Mesh(
        obRightEyeIrisGeometry,
        obEyeIrisMaterial
      )
      this.obRightEyeIris.position.y = 185
      this.obRightEyeIris.position.x = 20
      this.obRightEyeIris.position.z = 39.8
      this.obEyesGroup.add(this.obRightEyeIris)
      this.obHeadGroup.add(this.obRightEyeIris)

      // OB Left Iris
      const obLeftEyeIrisGeometry = new THREE.BoxBufferGeometry(5, 5, 5)
      this.obLeftEyeIris = new THREE.Mesh(
        obLeftEyeIrisGeometry,
        obEyeIrisMaterial
      )
      this.obLeftEyeIris.position.y = 185
      this.obLeftEyeIris.position.x = -20
      this.obLeftEyeIris.position.z = 39.8
      this.obEyesGroup.add(this.obLeftEyeIris)
      this.obHeadGroup.add(this.obLeftEyeIris)

      // OB Right Eyebrow
      const obRightEyebrowGeometry = new THREE.BoxBufferGeometry(45, 3, 5)
      this.obRightEyebrow = new THREE.Mesh(
        obRightEyebrowGeometry,
        obEyebrowMaterial
      )
      this.obRightEyebrow.position.y = 205
      this.obRightEyebrow.position.x = -33
      this.obRightEyebrow.position.z = 45
      this.obRightEyebrow.rotation.x = 0.2
      this.obRightEyebrow.rotation.y = -0.2
      this.obEyesGroup.add(this.obRightEyebrow)
      this.obHeadGroup.add(this.obRightEyebrow)

      // OB Left Eyebrow
      const obLeftEyebrowGeometry = new THREE.BoxBufferGeometry(45, 3, 5)
      this.obLeftEyebrow = new THREE.Mesh(
        obLeftEyebrowGeometry,
        obEyebrowMaterial
      )
      this.obLeftEyebrow.position.y = 205
      this.obLeftEyebrow.position.x = 33
      this.obLeftEyebrow.position.z = 45
      this.obLeftEyebrow.rotation.x = 0.2
      this.obLeftEyebrow.rotation.y = 0.2
      this.obEyesGroup.add(this.obLeftEyebrow)
      this.obHeadGroup.add(this.obLeftEyebrow)

      // OB Mouth
      const obMouthGeometry = new THREE.BoxBufferGeometry(50, 30, 30)
      const obMouth = new THREE.Mesh(obMouthGeometry, obFurMaterial)
      obMouth.castShadow = true
      obMouth.receiveShadow = true
      obMouth.position.y = 155
      obMouth.position.z = 45
      this.obHeadGroup.add(obMouth)

      // OB Nose
      const obNoseGeometry = new THREE.BoxBufferGeometry(10, 10, 10)
      const obNose = new THREE.Mesh(obNoseGeometry, obNoseMaterial)
      obNose.castShadow = true
      obNose.receiveShadow = true
      obNose.position.y = 167
      obNose.position.z = 62
      this.obHeadGroup.add(obNose)

      // OB Tail
      const obTailGeometry = new THREE.CylinderGeometry(
        10,
        5,
        200,
        this.rSegments,
        this.hSegments
      )
      this.obTail = new THREE.Mesh(obTailGeometry, obFurMaterial)
      this.obTail.castShadow = true
      this.obTail.receiveShadow = true
      this.obTail.position.z = -75
      this.obTail.position.y = -20
      this.obTail.rotation.x = -0.2
      this.obTail.rotation.y = -0.2
      this.obTail.rotation.z = 0.2
      this.tailTween = new TimelineMax({ repeat: -1 })
        .to(this.obTail.rotation, 2, { z: -0.5, ease: Elastic.ease })
        .to(this.obTail.rotation, 2, { z: 0.5, ease: Elastic.ease, delay: 0.4 })
        .to(this.obTail.rotation, 0.5, { z: -0.5, ease: Elastic.ease })
        .to(this.obTail.rotation, 2, { z: 0.8, ease: Elastic.ease })

      this.obBodyGroup.add(this.obTail)

      // OB Legs
      // OB Right Front Leg
      const obRightFrontLegGeometry = new THREE.BoxBufferGeometry(20, 180, 20)
      this.obRightFrontLeg = new THREE.Mesh(
        obRightFrontLegGeometry,
        obFurMaterial
      )
      this.obRightFrontLeg.castShadow = true
      this.obRightFrontLeg.receiveShadow = true
      this.obRightFrontLeg.position.x = -25
      this.obRightFrontLeg.position.y = -40
      this.obRightFrontLeg.position.z = 20
      this.obRightFrontLeg.rotation.z = 3
      this.obRightFrontLeg.rotation.x = -0.3

      this.obBodyGroup.add(this.obRightFrontLeg)

      // OB Left Front Leg
      const obLeftFrontLegGeometry = new THREE.BoxBufferGeometry(20, 180, 20)
      this.obLeftFrontLeg = new THREE.Mesh(
        obLeftFrontLegGeometry,
        obFurMaterial
      )
      this.obLeftFrontLeg.castShadow = true
      this.obLeftFrontLeg.receiveShadow = true
      this.obLeftFrontLeg.position.x = 25
      this.obLeftFrontLeg.position.y = -40
      this.obLeftFrontLeg.position.z = 20
      this.obLeftFrontLeg.rotation.z = -3
      this.obLeftFrontLeg.rotation.x = -0.3

      this.obBodyGroup.add(this.obLeftFrontLeg)

      // OB Left Back Leg
      const obLeftBackLegGeometry = new THREE.BoxBufferGeometry(20, 120, 120)
      this.obLeftBackLeg = new THREE.Mesh(obLeftBackLegGeometry, obFurMaterial)
      this.obLeftBackLeg.castShadow = true
      this.obLeftBackLeg.receiveShadow = true
      this.obLeftBackLeg.position.x = 60
      this.obLeftBackLeg.position.y = -65
      this.obLeftBackLeg.position.z = 10
      this.obLeftBackLeg.rotation.z = 3
      this.obLeftBackLeg.rotation.y = 0.5

      this.obBodyGroup.add(this.obLeftBackLeg)

      // OB Right Back Leg
      const obRightBackLegGeometry = new THREE.BoxBufferGeometry(20, 120, 120)
      this.obRightBackLeg = new THREE.Mesh(
        obRightBackLegGeometry,
        obFurMaterial
      )
      this.obRightBackLeg.castShadow = true
      this.obRightBackLeg.receiveShadow = true
      this.obRightBackLeg.position.x = -60
      this.obRightBackLeg.position.y = -65
      this.obRightBackLeg.position.z = 10
      this.obRightBackLeg.rotation.z = -3
      this.obRightBackLeg.rotation.y = -0.5

      this.obBodyGroup.add(this.obRightBackLeg)

      // Paws
      // OB Right Back Paw
      const obRightBackPawGeometry = new THREE.BoxBufferGeometry(30, 30, 30)
      this.obRightBackPaw = new THREE.Mesh(
        obRightBackPawGeometry,
        obFurMaterial
      )
      this.obRightBackPaw.castShadow = true
      this.obRightBackPaw.receiveShadow = true
      this.obRightBackPaw.position.x = -90
      this.obRightBackPaw.position.y = -110
      this.obRightBackPaw.position.z = 70
      this.obRightBackPaw.rotation.z = -3
      this.obRightBackPaw.rotation.y = -0.5

      this.obBodyGroup.add(this.obRightBackPaw)

      // OB Left Back Paw
      const obLeftBackPawGeometry = new THREE.BoxBufferGeometry(30, 30, 30)
      this.obLeftBackPaw = new THREE.Mesh(obLeftBackPawGeometry, obFurMaterial)
      this.obLeftBackPaw.castShadow = true
      this.obLeftBackPaw.receiveShadow = true
      this.obLeftBackPaw.position.x = 90
      this.obLeftBackPaw.position.y = -110
      this.obLeftBackPaw.position.z = 70
      this.obLeftBackPaw.rotation.z = 3
      this.obLeftBackPaw.rotation.y = 0.5

      this.obBodyGroup.add(this.obLeftBackPaw)

      // OB Right Front Paw
      const obRightFrontPawGeometry = new THREE.BoxBufferGeometry(30, 20, 30)
      this.obRightFrontPaw = new THREE.Mesh(
        obRightFrontPawGeometry,
        obFurMaterial
      )
      this.obRightFrontPaw.castShadow = true
      this.obRightFrontPaw.receiveShadow = true
      this.obRightFrontPaw.position.x = -35
      this.obRightFrontPaw.position.y = -110
      this.obRightFrontPaw.position.z = 60

      this.obBodyGroup.add(this.obRightFrontPaw)

      // OB Left Front Paw
      const obLeftFrontPawGeometry = new THREE.BoxBufferGeometry(30, 20, 30)
      this.obLeftFrontPaw = new THREE.Mesh(
        obLeftFrontPawGeometry,
        obFurMaterial
      )
      this.obLeftFrontPaw.castShadow = true
      this.obLeftFrontPaw.receiveShadow = true
      this.obLeftFrontPaw.position.x = 35
      this.obLeftFrontPaw.position.y = -110
      this.obLeftFrontPaw.position.z = 60

      this.obBodyGroup.add(this.obLeftFrontPaw)

      // OB Left Whiskers
      // 1
      const obLeftWhisker1Geometry = new THREE.BoxBufferGeometry(50, 1, 1)
      this.obLeftWhisker1 = new THREE.Mesh(
        obLeftWhisker1Geometry,
        obWhiteMaterial
      )
      this.obLeftWhisker1.castShadow = true
      this.obLeftWhisker1.receiveShadow = false
      this.obLeftWhisker1.position.x = 40
      this.obLeftWhisker1.position.y = 153
      this.obLeftWhisker1.position.z = 53
      this.obLeftWhisker1.rotation.z = -0.2
      this.obLeftWhiskersGroup.add(this.obLeftWhisker1)
      this.obHeadGroup.add(this.obLeftWhisker1)

      // 2
      const obLeftWhisker2Geometry = new THREE.BoxBufferGeometry(75, 1, 1)
      this.obLeftWhisker2 = new THREE.Mesh(
        obLeftWhisker2Geometry,
        obWhiteMaterial
      )
      this.obLeftWhisker2.castShadow = true
      this.obLeftWhisker2.receiveShadow = false
      this.obLeftWhisker2.position.x = 40
      this.obLeftWhisker2.position.y = 151.5
      this.obLeftWhisker2.position.z = 56
      this.obLeftWhisker2.rotation.z = -0.25
      this.obLeftWhiskersGroup.add(this.obLeftWhisker2)
      this.obHeadGroup.add(this.obLeftWhisker2)

      // 3
      const obLeftWhisker3Geometry = new THREE.BoxBufferGeometry(100, 1, 1)
      this.obLeftWhisker3 = new THREE.Mesh(
        obLeftWhisker3Geometry,
        obWhiteMaterial
      )

      this.obLeftWhisker3.castShadow = true
      this.obLeftWhisker3.receiveShadow = false
      this.obLeftWhisker3.position.x = 40
      this.obLeftWhisker3.position.y = 148.5
      this.obLeftWhisker3.position.z = 50
      this.obLeftWhisker3.rotation.z = -0.3
      this.obLeftWhiskersGroup.add(this.obLeftWhisker3)
      this.obHeadGroup.add(this.obLeftWhisker3)

      this.leftWhisker1Tween = TweenMax.to(
        [
          this.obLeftWhisker1.rotation,
          this.obLeftWhisker3.rotation,
          this.obLeftWhisker3.rotation,
        ],
        0.5,
        {
          z: 0,
          repeat: 1,
          ease:
            "rough({template: Power0.easeNone, strength: 1, points: 20, randomize: true, clamp: false })",
          yoyo: true,
          yoyoEase: Elastic.easeOut,
        }
      ).pause()

      // OB Right Whiskers
      // 1
      const obRightWhisker1Geometry = new THREE.BoxBufferGeometry(50, 1, 1)
      this.obRightWhisker1 = new THREE.Mesh(
        obRightWhisker1Geometry,
        obWhiteMaterial
      )
      this.obRightWhisker1.castShadow = true
      this.obRightWhisker1.receiveShadow = false
      this.obRightWhisker1.position.x = -40
      this.obRightWhisker1.position.y = 153
      this.obRightWhisker1.position.z = 53
      this.obRightWhisker1.rotation.z = 0.2
      this.obRightWhiskersGroup.add(this.obRightWhisker1)
      this.obHeadGroup.add(this.obRightWhisker1)

      // 2
      const obRightWhisker2Geometry = new THREE.BoxBufferGeometry(75, 1, 1)
      this.obRightWhisker2 = new THREE.Mesh(
        obRightWhisker2Geometry,
        obWhiteMaterial
      )
      this.obRightWhisker2.castShadow = true
      this.obRightWhisker2.receiveShadow = false
      this.obRightWhisker2.position.x = -40
      this.obRightWhisker2.position.y = 151.5
      this.obRightWhisker2.position.z = 56
      this.obRightWhisker2.rotation.z = 0.25
      this.obRightWhiskersGroup.add(this.obRightWhisker2)
      this.obHeadGroup.add(this.obRightWhisker2)

      // 3
      const obRightWhisker3Geometry = new THREE.BoxBufferGeometry(100, 1, 1)
      this.obRightWhisker3 = new THREE.Mesh(
        obRightWhisker3Geometry,
        obWhiteMaterial
      )

      this.obRightWhisker3.castShadow = true
      this.obRightWhisker3.receiveShadow = false
      this.obRightWhisker3.position.x = -40
      this.obRightWhisker3.position.y = 148.5
      this.obRightWhisker3.position.z = 50
      this.obRightWhisker3.rotation.z = 0.3
      this.obRightWhiskersGroup.add(this.obRightWhisker3)
      this.obHeadGroup.add(this.obRightWhisker3)

      this.rightWhisker1Tween = TweenMax.to(
        [
          this.obRightWhisker1.rotation,
          this.obRightWhisker3.rotation,
          this.obRightWhisker3.rotation,
        ],
        0.5,
        {
          z: 0,
          repeat: 1,
          ease:
            "rough({template: Power0.easeNone, strength: 1, points: 20, randomize: true, clamp: false })",
          yoyo: true,
          yoyoEase: Elastic.easeOut,
        }
      ).pause()

      // OB Collar
      const obCollarGeometry = new THREE.CylinderBufferGeometry(
        20,
        20,
        7,
        26,
        6.3
      )
      this.obCollar = new THREE.Mesh(obCollarGeometry, obCallarMaterial)
      this.obCollar.castShadow = true
      this.obCollar.receiveShadow = true
      this.obCollar.position.y = 100
      // this.obCollar.position.x =
      this.obCollar.rotation.x = 0.3
      this.obBodyGroup.add(this.obCollar)

      // OB Collar Hook
      const obCollarHookGeometry = new THREE.TorusBufferGeometry(
        7,
        1,
        5,
        17,
        6.3
      )
      this.obCollarHook = new THREE.Mesh(
        obCollarHookGeometry,
        obCollarHookMaterial
      )
      this.obCollarHook.castShadow = true
      this.obCollarHook.receiveShadow = true
      this.obCollarHook.position.y = 96
      this.obCollarHook.position.x = 0
      this.obCollarHook.position.z = 20
      this.obCollarHook.rotation.x = 1.7
      this.obCollarHook.rotation.y = 1.2
      this.obBodyGroup.add(this.obCollarHook)

      // OB Collar Bell
      const obCollarBellGeometry = new THREE.SphereBufferGeometry(7, 32, 32)
      this.obCollarBell = new THREE.Mesh(
        obCollarBellGeometry,
        obCollarBellMaterial
      )
      this.obCollarBell.castShadow = true
      this.obCollarBell.receiveShadow = true
      this.obCollarBell.position.y = 84
      this.obCollarBell.position.z = 23
      this.obBodyGroup.add(this.obCollarBell)

      //   scene.add(this.obBodyGroup)
      //   scene.add(this.obHeadGroup)
    }

    function rule3(xTarget, vmin, vmax, tmin, tmax) {
      const nv = Math.max(Math.min(xTarget, vmax), vmin)
      const dv = vmax - vmin
      const pc = (nv - vmin) / dv
      const dt = tmax - tmin
      const tv = tmin + pc * dt
      return tv
    }

    Oberyn.prototype.lookAt = function lookAt(
      hAngle,
      vAngle,
      xTarget,
      yTarget
    ) {
      // Iris
      this.obLeftEyeIris.position.y = 185 - vAngle * 9
      this.obLeftEyeIris.position.x = -25 + hAngle * 12
      this.obRightEyeIris.position.y = 185 - vAngle * 9
      this.obRightEyeIris.position.x = 25 + hAngle * 12
      this.obLeftEyeIris.geometry.verticesNeedUpdate = true
      this.obRightEyeIris.geometry.verticesNeedUpdate = true

      // Brows
      this.obLeftEyebrow.position.y = 205 + vAngle * 5
      this.obRightEyebrow.position.y = 205 - vAngle * 5
      this.obLeftEyebrow.rotation.x = 0.2 - vAngle * 0.8
      this.obRightEyebrow.rotation.x = 0.2 + vAngle * 0.8
      this.obLeftEyebrow.position.x = 25 - vAngle * 0.2
      this.obRightEyebrow.position.x = -25 + vAngle * 0.2

      // Back Legs
      this.obRightBackLeg.rotation.z = rule3(
        xTarget,
        -200,
        200,
        0.05 + Math.PI / 23,
        0.05 - Math.PI / 23
      )
      this.obLeftBackLeg.rotation.z = rule3(
        xTarget,
        -200,
        200,
        -0.05 + Math.PI / 23,
        -0.05 - Math.PI / 23
      )
      // Back Paws
      this.obRightBackPaw.position.x = -90 - hAngle * 5
      this.obRightBackPaw.position.z = 70 - hAngle * 3
      this.obLeftBackPaw.position.x = 90 - hAngle * 5
      this.obLeftBackPaw.position.z = 70 - hAngle * 3

      this.obHeadGroup.rotation.y = 0.1 + hAngle * 0.3
      this.obHeadGroup.rotation.x = 0.1 + vAngle * 0.2

      this.obBodyGroup.rotation.z = 0.01 + hAngle * 0.02

      if (xTarget > -100 && xTarget < 100 && xTarget > 0 && yTarget > -1100) {
        this.tailTween.duration(0.5)
        this.obLeftFrontLeg.rotation.x = -1
        this.obLeftFrontLeg.position.y = -65
        this.obLeftFrontPaw.position.z = 100
        this.leftWhisker1Tween.play()
        this.rightWhisker1Tween.play()
      } else if (
        xTarget > -100 &&
        xTarget < 100 &&
        xTarget < 0 &&
        yTarget > -1100
      ) {
        this.tailTween.duration(0.5)
        this.obRightFrontLeg.rotation.x = -1
        this.obRightFrontLeg.position.y = -65
        this.obRightFrontPaw.position.z = 100
        this.leftWhisker1Tween.play()
        this.rightWhisker1Tween.play()
      } else {
        this.leftWhisker1Tween.restart()
        this.rightWhisker1Tween.restart()
        this.tailTween.duration(2)
        this.obLeftFrontLeg.rotation.x = -0.3
        this.obLeftFrontLeg.position.y = -40
        this.obLeftFrontPaw.position.z = 60
        this.obRightFrontLeg.rotation.x = -0.3
        this.obRightFrontLeg.position.y = -40
        this.obRightFrontPaw.position.z = 60
      }
    }

    // render
    const render = () => {
      renderer.render(scene, camera)
    }

    // animate
    const animate = () => {
      const mouseX = mousePos.x
      const mouseY = mousePos.y - 475
      const tempHA = (mouseX - windowHalfX) / 100
      const tempVA = (mouseY - windowHalfY) / 100

      const userHAngle = Math.min(Math.max(tempHA, -Math.PI / 3), Math.PI / 3)
      const userVAngle = Math.min(Math.max(tempVA, -Math.PI / 3), Math.PI / 3)
      const xTarget = mouseX - windowHalfX
      const yTarget = mouseY - windowHalfY
      ob.lookAt(userHAngle, userVAngle, xTarget, yTarget)

      requestAnimationFrame(animate)
      render()
    }

    init()
    createFloor()
    createLights()
    ob = new Oberyn()
    ob.obAllGroup.add(ob.obEyesGroup)
    ob.obAllGroup.add(ob.obHeadGroup)
    ob.obAllGroup.add(ob.obBodyGroup)
    // ob.obAllGroup.rotation.y = 260
    ob.obAllGroup.rotation.y = 0.1
    // ob.obAllGroup.position.y = -100

    // ob.obAllGroup.traverse(object => {
    //   if (object instanceof THREE.Mesh) {
    //     object.castShadow = true
    //     object.receiveShadow = false
    //   }
    // })

    scene.add(ob.obAllGroup)

    animate()
  })

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AnimationsNav
        animations={animations}
        current={{ to: "/oberynPage", title: "Oberyn" }}
      />
      <canvas
        sx={{
          background: "transparent",
        }}
        id="ob-scene"
      />
    </div>
  )
}

export default OberynAnimation
