import * as THREE from "three"
import init from "./init"
import world from "./world"
import lights from "./lights"
import Turtle from "./turtle"
import Carrot from "./carrot"

export default () => {
  let turtle
  let carrot
  let headOut = true
  let mousePos = { x: 0, y: 0 }
  let windowHalfX
  let windowHalfY
  const { worldGroup } = world()
  const { scene, camera, renderer } = init()
  const canvas = document.querySelector("#turtle-scene")
  const WIDTH = window.innerWidth
  const HEIGHT = window.innerHeight - 575

  function handleMouseMove(event) {
    mousePos = { x: event.clientX, y: event.clientY }
  }
  window.addEventListener("mousemove", handleMouseMove, false)

  function onWindowResize() {
    windowHalfX = WIDTH / 2
    windowHalfY = HEIGHT / 2
    renderer.setSize(WIDTH, HEIGHT)
    camera.aspect = WIDTH / HEIGHT
    camera.updateProjectionMatrix()
  }

  function onClick(event) {
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(scene.children, true)
    const [selectedObject] = intersects

    if (
      selectedObject.point.x > -10 &&
      selectedObject.point.x < 10 &&
      selectedObject.point.y < 10 &&
      selectedObject.point.y > -10
    ) {
      if (headOut) {
        turtle.hide()
        headOut = false
      } else {
        turtle.peek()
        headOut = true
      }
    }
  }

  const render = () => {
    renderer.render(scene, camera)
  }

  windowHalfX = WIDTH / 2
  windowHalfY = HEIGHT / 2

  const animate = () => {
    const mouseX = mousePos.x
    const mouseY = mousePos.y - 550
    const tempHA = (mouseX - windowHalfX) / 100
    const tempVA = (mouseY - windowHalfY) / 100

    const userHAngle = Math.min(Math.max(tempHA, -Math.PI / 3), Math.PI / 3)
    const userVAngle = Math.min(Math.max(tempVA, -Math.PI / 3), Math.PI / 3)
    const xTarget = mouseX - windowHalfX
    const yTarget = mouseY - windowHalfY
    turtle.lookAt(userHAngle, userVAngle, xTarget, yTarget)
    carrot.followMouse(userHAngle, userVAngle, xTarget, yTarget)
    requestAnimationFrame(animate)
    render()
  }

  const { hemisphereLight, shadowLight, cameraHelper, lightHelper } = lights()

  turtle = new Turtle()
  carrot = new Carrot()
  scene.add(carrot.allCarrotGroup)
  scene.add(turtle.allTurtleGroup)
  scene.add(worldGroup)
  // scene.add(cameraHelper)
  // scene.add(lightHelper)
  scene.add(hemisphereLight)
  scene.add(shadowLight)
  canvas.addEventListener("click", onClick, false)

  window.requestAnimationFrame(render)

  animate()
}
