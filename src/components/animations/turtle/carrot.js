/* eslint-disable no-param-reassign */
import * as THREE from "three"
import { Box } from "theme-ui"

const {
  Group,
  Color,
  Clock,
  MeshLambertMaterial,
  BoxGeometry,
  Mesh,
  SphereGeometry,
  CylinderBufferGeometry,
  CylinderGeometry,
  Vector3,
  TubeGeometry,
} = THREE

function Carrot() {
  this.allCarrotGroup = new Group()

  const flatOrange = new MeshLambertMaterial({
    color: 0xf2b80a,
    flatShading: true,
  })

  const rgbGreen = new Color("rgb(23, 167, 104)")
  const green = rgbGreen.getHex()

  const flatGreen = new MeshLambertMaterial({
    color: green,
    flatShading: true,
  })

  // function CustomSinCurve(scale) {
  //   THREE.Curve.call(this)

  //   this.scale = scale === undefined ? 1 : scale
  // }

  // CustomSinCurve.prototype = Object.create(THREE.Curve.prototype)
  // CustomSinCurve.prototype.constructor = CustomSinCurve

  // CustomSinCurve.prototype.getPoint = (t) => {
  //   const tx = t * 3 - 1.5
  //   const ty = Math.sin(2 * Math.PI * t)
  //   const tz = 0

  //   return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale)
  // }

  // const path = new CustomSinCurve(10)
  // const geometry = new TubeGeometry(path, 20, 2, 8, false)
  // this.flower = new Mesh(geometry, flatWhite)
  // // this.flower.position.x = 100
  // // this.flower.position.y = 100

  const carrotBottomGeo = new CylinderGeometry(2, 0.1, 7, 8, 1)
  this.carrotBottom = new Mesh(carrotBottomGeo, flatOrange)
  this.carrotBottom.position.x = 3.5
  this.carrotBottom.position.z = 1
  // this.carrotBottom.rotation.z = Math.PI / 2
  this.allCarrotGroup.add(this.carrotBottom)

  const carrotTopGeo = new CylinderGeometry(2, 1, 2, 8, 1)
  this.carrotTop = new Mesh(carrotTopGeo, flatOrange)
  this.carrotTop.position.x = 3.5
  this.carrotTop.position.z = 1
  this.carrotTop.position.y = 4.5
  this.carrotTop.rotation.z = Math.PI
  this.allCarrotGroup.add(this.carrotTop)

  const stemRightGeo = new BoxGeometry(1, 5, 1)
  stemRightGeo.vertices[2].x -= 0.2
  stemRightGeo.vertices[3].x -= 0.2
  stemRightGeo.vertices[3].z += 0.9
  stemRightGeo.vertices[6].x += 0.9
  stemRightGeo.vertices[7].x += 0.9
  stemRightGeo.vertices[6].z += 0.9
  this.stemRight = new Mesh(stemRightGeo, flatGreen)
  this.stemRight.position.x = 3.5
  this.stemRight.position.y = 8
  this.stemRight.rotation.z = -0.2
  this.allCarrotGroup.add(this.stemRight)

  const stemLeftGeo = new BoxGeometry(1, 5, 1)
  stemLeftGeo.vertices[2].x -= 0.2
  stemLeftGeo.vertices[3].x -= 0.2
  stemLeftGeo.vertices[3].z += 0.9
  stemLeftGeo.vertices[6].x += 0.9
  stemLeftGeo.vertices[7].x += 0.9
  stemLeftGeo.vertices[6].z += 0.9
  this.stemLeft = new Mesh(stemLeftGeo, flatGreen)
  this.stemLeft.position.x = 2.5
  this.stemLeft.position.y = 8
  this.stemLeft.rotation.z = 0.2
  this.allCarrotGroup.add(this.stemLeft)
}

Carrot.prototype.followMouse = function followMouse(
  hAngle,
  vAngle,
  xTarget,
  yTarget
) {
  this.allCarrotGroup.position.x = 0.1 + xTarget * 0.1
  if (yTarget > -215 && yTarget < 15) {
    this.allCarrotGroup.position.y = 2 + yTarget * -0.1
  }
  if (xTarget > 0) {
    this.allCarrotGroup.rotation.x = 0.1 + hAngle * 0.5
  } else {
    this.allCarrotGroup.rotation.x = 0.1 + hAngle * -0.5
  }
}

export default Carrot
