import * as THREE from "three"

const { MeshLambertMaterial, CylinderGeometry, Mesh } = THREE

export default ({ color, radius }) => {
  const lilyGreen = new MeshLambertMaterial({
    // color: new Color("rgb(47, 76, 51)").getHex(),
    color,
    flatShading: true,
  })

  const lilyPadGeo = new CylinderGeometry(
    radius,
    radius,
    1,
    10,
    1,
    false,
    0,
    6.1
  )
  const lilyPad = new Mesh(lilyPadGeo, lilyGreen)
  lilyPad.castShadow = true
  lilyPad.receiveShadow = true
  //   lilyPad.position.x = 30
  //   lilyPad.position.y = -10.3
  //   lilyPad.rotation.x = 3.14

  return {
    lilyPad,
  }
}
