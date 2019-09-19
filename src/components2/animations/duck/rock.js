import * as THREE from "three"

const { IcosahedronBufferGeometry, Mesh, MeshLambertMaterial } = THREE

function Rock({ radius }) {
  const rockGeo = new IcosahedronBufferGeometry(radius, 0)
  this.rockMesh = new Mesh(
    rockGeo,
    new MeshLambertMaterial({ color: "gray", flatShading: true })
  )
  this.rockMesh.castShadow = true
  this.rockMesh.receiveShadow = true
}

export default Rock
