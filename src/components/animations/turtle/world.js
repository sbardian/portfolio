import * as THREE from "three"

const { Group, Mesh, MeshStandardMaterial, PlaneGeometry } = THREE

export default () => {
  const worldGroup = new Group()

  const ground = new Mesh(
    new PlaneGeometry(800, 600),
    new MeshStandardMaterial({
      color: 0xd4e8fc,
    })
  )
  // ground.rotation.x = -Math.PI / 2 + 0.05
  ground.rotation.x = -Math.PI / 2
  ground.position.y = -3
  ground.position.z = -80
  ground.receiveShadow = true

  worldGroup.add(ground)

  return {
    worldGroup,
  }
}
