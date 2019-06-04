/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
import * as THREE from "three"
import init from "./init"
import lights from "./lights"
// import Duck from "./duck"

export default () => {
  // let duck
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

  const animate = () => {
    // duck.blink()
    requestAnimationFrame(animate)
    render()
  }

  const { hemisphereLight, shadowLight } = lights()

  // duck = new Duck()

  // scene.add(duck.allDuckGroup)
  scene.add(hemisphereLight)
  scene.add(shadowLight)

  animate()
}
