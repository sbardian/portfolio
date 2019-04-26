import * as THREE from "three"

const { IcosahedronBufferGeometry, Mesh, MeshLambertMaterial } = THREE

export default () => {
  const rockGeo = new IcosahedronBufferGeometry(10, 0)
  const rock = new Mesh(
    rockGeo,
    new MeshLambertMaterial({ color: "gray", flatShading: true })
  )
  rock.castShadow = true
  rock.receiveShadow = true

  return {
    rock,
  }
}
