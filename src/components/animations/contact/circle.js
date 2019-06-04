import * as THREE from "three"

const { Color, MeshLambertMaterial, Mesh, CylinderGeometry } = THREE

function Circle() {
  const rgbGreen = new Color("rgb(23, 167, 104)")
  const green = rgbGreen.getHex()
  const flatGreen = new MeshLambertMaterial({
    color: green,
    flatShading: true,
  })

  const innerCircleGeo = new CylinderGeometry(200, 200, 1, 40, 1, false, 0, 6.3)

  this.innerCircle = new Mesh(innerCircleGeo, flatGreen)
  this.innerCircle.castShadow = true
  this.innerCircle.receiveShadow = true
  return this.innerCircle
}

export default Circle
