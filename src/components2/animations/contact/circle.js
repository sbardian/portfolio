import * as THREE from "three"

const { Color, Group, MeshLambertMaterial, Mesh, RingBufferGeometry } = THREE

function Circle() {
  this.allCirclesGroup = new Group()

  const rgbGreen = new Color("rgb(23, 167, 104)")
  const green = rgbGreen.getHex()
  const flatGreen = new MeshLambertMaterial({
    color: green,
    flatShading: true,
  })

  this.circleGeo = new RingBufferGeometry(0, 100, 32, null, 0, 0)

  this.circle = new Mesh(this.circleGeo, flatGreen)
  this.circle.castShadow = true
  this.circle.receiveShadow = true

  this.allCirclesGroup.add(this.circle)
}

Circle.prototype.expand = function expand() {
  this.circle.geometry.dispose()
  this.circleGeo = new RingBufferGeometry(
    0,
    100,
    32,
    null,
    0,
    Math.PI + Math.sin(Date.now() * 0.001) * Math.PI
  )
  this.circle.geometry = this.circleGeo
}

export default Circle
