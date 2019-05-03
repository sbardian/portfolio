/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
import * as THREE from "three"
import init from "./init"
import world from "./world"
import Rock from "./rock"
import Lilypad from "./lilypad"
import lights from "./lights"
import Duck from "./duck"

export default () => {
  let duck
  // let mousePos = { x: 0, y: 0 }
  const { worldGroup /* water */ } = world()
  const { /* Raycaster, */ Vector2 } = THREE
  // const raycaster = new Raycaster()
  const mouse = new Vector2()
  // const objects = []

  // eslint-disable-next-line
  let INTERSECTED

  const { scene, camera, renderer, bodyContainer } = init()

  function handleMouseMove(event) {
    event.preventDefault()
    mouse.x = (event.clientX / bodyContainer.offsetWidth) * 2 - 1
    mouse.y = -(event.clientY / bodyContainer.offsetHeight) * 2 + 1
    duck.swimTowards(mouse.x - 1.1, mouse.y, 0.5, camera)

    // objects.push(water)
    // raycaster.setFromCamera(mouse, camera)
    // const intersects = raycaster.intersectObjects(objects)
    // if (intersects.length > 0) {
    //   ;[INTERSECTED] = intersects
    //   duck.swimTowards(
    //     intersects[0].point.x,
    //     intersects[0].point.y,
    //     intersects[0].point.z,
    //     camera
    //   )
    // } else {
    //   INTERSECTED = null
    // }
  }

  bodyContainer.addEventListener("mousemove", handleMouseMove, false)

  const render = () => {
    renderer.render(scene, camera)
  }

  const animate = () => {
    duck.blink()
    requestAnimationFrame(animate)
    render()
  }

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
