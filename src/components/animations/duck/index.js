import * as THREE from "three"
import init from "./init"
import world from "./world"
import lights from "./lights"
import Duck from "./duck"

const { Clock } = THREE
let duck
let delta
let clock

const render = () => {
  renderer.render(scene, camera)
}

// animate
const animate = () => {
  duck.blink()
  delta = clock.getDelta()
  duck.swim()
  duck.allDuckGroup.position.y = -11
  requestAnimationFrame(animate)
  render()
}

const { scene, camera, renderer } = init()

world()
lights()

duck = new Duck()
clock = new Clock()

scene.add(duck.allDuckGroup)

animate()
