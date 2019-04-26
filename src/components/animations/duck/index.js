import * as THREE from "three"
import init from "./init"
import world from "./world"
import lights from "./lights"
import Duck from "./duck"

const { Clock } = THREE
let duck

const clock = new Clock()
const delta = clock.getDelta()
const { scene, camera, renderer } = init()

const render = () => {
  renderer.render(scene, camera)
}

// animate
const animate = () => {
  duck.blink()
  duck.swim()
  duck.allDuckGroup.position.y = -11
  requestAnimationFrame(animate)
  render()
}

const { worldGroup } = world()
const { hemisphereLight, shadowLight } = lights()

duck = new Duck({ delta })

scene.add(worldGroup)
scene.add(duck.allDuckGroup)
scene.add(hemisphereLight)
scene.add(shadowLight)

animate()
