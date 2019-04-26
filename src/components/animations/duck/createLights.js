/* eslint-disable no-undef */
import * as THREE from "three"

const { HemisphereLight, DirectionalLight } = THREE

export default () => {
  const hemisphereLight = new HemisphereLight(0xaaaaaa, 0xffffff, 0.7)

  const shadowLight = new DirectionalLight(0xffffff, 0.7, 100)

  shadowLight.position.set(50, 100, 300)

  shadowLight.castShadow = true
  shadowLight.shadow.mapSize.width = 4096
  shadowLight.shadow.mapSize.height = 4096
  shadowLight.shadow.camera.left = -500
  shadowLight.shadow.camera.right = 500
  shadowLight.shadow.camera.top = 500
  shadowLight.shadow.camera.bottom = -500
  shadowLight.shadow.camera.near = -300
  shadowLight.shadow.camera.far = 800

  // const helper = new THREE.CameraHelper(shadowLight.shadow.camera)
  // const lightHelper = new THREE.DirectionalLightHelper(shadowLight, 1)
  // scene.add(lightHelper)
  // scene.add(helper)

  return {
    hemisphereLight,
    shadowLight,
  }
}
