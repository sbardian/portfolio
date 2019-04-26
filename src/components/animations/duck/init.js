/* eslint-disable no-undef */
import * as THREE from 'three'

const { Scene, Vector3, PerspectiveCamera, WebGLRenderer, PCFSoftShadowMap } = THREE;

let bodyContainer
let canvas
let camera
let renderer
let WIDTH
let HEIGHT
let windowHalfX
let windowHalfY

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

export default () => {
    
    canvas = document.querySelector("#ob-scene")
    bodyContainer = document.querySelector("#main-body")
    const scene = new Scene()
    WIDTH = bodyContainer.offsetWidth
    HEIGHT = bodyContainer.offsetHeight

    camera = new PerspectiveCamera(50, WIDTH / HEIGHT, 1, 2000)
    camera.position.x = 0
    camera.position.z = 250
    camera.position.y = 25
    camera.lookAt(new Vector3(0, 0, 0))

    renderer = new WebGLRenderer({
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
    renderer.shadowMap.type = PCFSoftShadowMap

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

    return {
        canvas,
        bodyContainer,
        scene,
        WIDTH,
        HEIGHT,
        camera,
        renderer,
        windowHalfX,
        windowHalfY
    }
  }