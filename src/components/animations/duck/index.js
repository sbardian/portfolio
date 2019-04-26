/* eslint-disable no-undef */
import * as THREE from "three"
import init from "./init"
import world from "./world"
import Rock from "./rock"
import Lilypad from "./lilypad"
import lights from "./lights"
import Duck from "./duck"

export default () => {
  //   const { Clock } = THREE
  let duck

  //   const clock = new Clock()
  //   const delta = clock.getDelta()
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
  const rock = new Rock({ radius: 10 })
  rock.rockMesh.rotation.x = -0.38
  rock.rockMesh.rotation.y = 0.5
  rock.rockMesh.position.y = -12.5
  for (let x = 0; x <= 50; x++) {
    const lilyPad = new Lilypad({ radius: Math.random() * 10 })
    lilyPad.lilyPadMesh.position.x = Math.floor(Math.random() * 600) - 300
    lilyPad.lilyPadMesh.position.z = Math.floor(Math.random() * 500) - 400
    lilyPad.lilyPadMesh.position.y = -10.3
    lilyPad.lilyPadMesh.rotation.x = Math.PI
    scene.add(lilyPad.lilyPadMesh)
  }
  const { hemisphereLight, shadowLight } = lights()

  duck = new Duck()
  worldGroup.position.z = -100

  scene.add(rock.rockMesh)
  scene.add(worldGroup)
  scene.add(duck.allDuckGroup)
  scene.add(hemisphereLight)
  scene.add(shadowLight)

  animate()
}
