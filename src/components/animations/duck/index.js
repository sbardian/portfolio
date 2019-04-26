const render = () => {
  renderer.render(scene, camera)
}

// animate
const animate = () => {
  // SAVE:  Follow mouse logic
  //------------------------------------------------------------------------
  // let tempHA
  // let tempVA
  // let tempX
  // let tempY
  // if (window.innerWidth >= 1200) {
  //   tempX = mousePos.x - sideBarContainer.offsetWidth
  //   tempY = mousePos.y
  //   tempHA = (tempX - windowHalfX) / 200
  //   tempVA = (mousePos.y - windowHalfY) / 200
  // } else {
  //   tempX = mousePos.x
  //   tempY = mousePos.y - sideBarContainer.offsetHeight + 250
  //   tempHA = (mousePos.x - windowHalfX) / 200
  //   tempVA = (tempY - windowHalfY) / 200
  // }
  // const userHAngle = Math.min(Math.max(tempHA, -Math.PI / 3), Math.PI / 3)
  // const userVAngle = Math.min(Math.max(tempVA, -Math.PI / 3), Math.PI / 3)
  // const xTarget = tempX - windowHalfX
  // const yTarget = tempY - windowHalfY

  duck.blink()
  delta = clock.getDelta()
  duck.swim()
  duck.allDuckGroup.position.y = -11
  requestAnimationFrame(animate)
  render()
}

const {
  canvas,
  bodyContainer,
  scene,
  WIDTH,
  HEIGHT,
  camera,
  renderer,
  windowHalfX,
  windowHalfY,
} = init()
createFloor()
createLights()

duck = new Duck()
clock = new THREE.Clock()
scene.add(duck.allDuckGroup)

animate()
