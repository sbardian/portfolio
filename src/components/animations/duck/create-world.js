/* eslint-disable no-undef */
import * as THREE from "three"

const {
  Group,
  Mesh,
  Color,
  PlaneBufferGeometry,
  MeshStandardMaterial,
  PlaneGeometry,
  FaceColors,
} = THREE

export default () => {
  const worldGroup = new Group()

  const ground = new Mesh(
    new PlaneBufferGeometry(800, 800),
    new MeshStandardMaterial({
      color: 0x70471f,
    })
  )
  ground.rotation.x = -Math.PI / 2
  ground.position.y = -35
  ground.position.z = -80
  ground.receiveShadow = true

  worldGroup.add(ground)

  const water = new Mesh(
    new PlaneBufferGeometry(600, 600),
    new MeshStandardMaterial({
      color: 0x3364ea,
      transparent: true,
      opacity: 0.9,
    })
  )
  water.rotation.x = -Math.PI / 2
  water.position.y = -10
  water.position.z = 20
  water.receiveShadow = true

  worldGroup.add(water)

  const shoreGeom = new PlaneGeometry(800, 800, 20, 20)
  const matShore = new MeshPhongMaterial({
    color: 0xa07a3b,
    vertexColors: FaceColors,
    flatShading: true,
  })

  let randomShoreVertexPos
  shoreGeom.vertices.forEach(function randomize(floorVertex, index) {
    if (index < 300) {
      randomShoreVertexPos = Math.floor(Math.random() * (0 - -45) + 10)
      floorVertex.z = randomShoreVertexPos
      shoreGeom.verticesNeedUpdate = true
    }
  })

  const shore = new Mesh(shoreGeom, matShore)

  let color
  const r = 160
  const g = 122
  const b = 59
  for (let i = 0; i < shoreGeom.faces.length; i++) {
    const face = shoreGeom.faces[i]
    for (let j = 1; j <= 3; j++) {
      color = new Color(0xffffff)
      const max = Math.max(r, Math.max(g, b))

      const step = 255 / (max * 10)
      color.setRGB(
        (j * step * r) / 100,
        (j * step * g) / 100,
        (j * step * b) / 100
      )
      face.color.set(color)
    }
  }

  shore.receiveShadow = true
  shore.castShadow = true
  shore.position.z = -240
  shore.position.y = -30
  shore.rotation.x = -1.5

  worldGroup.add(shore)

  // const wireframe = new WireframeGeometry(backgroundGeo)

  // const line = new LineSegments(wireframe)
  // line.position.z = -600
  // // line.position.y = -30
  // // line.rotation.x = -1.5
  // line.material.depthTest = false
  // line.material.opacity = 0.25
  // line.material.transparent = true
  // scene.add(line)

  //   worldGroup.position.z = -100

  return {
    worldGroup,
  }
}
