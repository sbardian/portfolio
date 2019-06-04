/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
import * as THREE from "three"
import init from "./init"
import lights from "./lights"
import Circle from "./circle"

export default () => {
  const { Vector2 } = THREE
  const mouse = new Vector2()

  const { scene, camera, renderer, bodyContainer } = init()

  function handleMouseMove(event) {
    event.preventDefault()
    mouse.x = (event.clientX / bodyContainer.offsetWidth) * 2 - 1
    mouse.y = -(event.clientY / bodyContainer.offsetHeight) * 2 + 1
  }

  bodyContainer.addEventListener("mousemove", handleMouseMove, false)

  const render = () => {
    renderer.render(scene, camera)
  }

  const innerCircle = new Circle()

  const animate = () => {
    // duck.blink()
    requestAnimationFrame(animate)
    render()
  }

  const { hemisphereLight, shadowLight } = lights()

  innerCircle.rotation.x = Math.PI / 2

  scene.add(innerCircle)
  scene.add(hemisphereLight)
  scene.add(shadowLight)

  animate()
}
