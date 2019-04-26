import * as THREE from "three"

const { MeshLambertMaterial, CylinderGeometry, Mesh, Color } = THREE

function Lilypad({ /* color, */ radius }) {
  const lilyGreen = new MeshLambertMaterial({
    color: new Color("rgb(47, 76, 51)").getHex(),
    // color,
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
  this.lilyPadMesh = new Mesh(lilyPadGeo, lilyGreen)
  this.lilyPadMesh.castShadow = true
  this.lilyPadMesh.receiveShadow = true
}

export default Lilypad
