/* eslint-disable no-param-reassign */
import * as THREE from "three"

const {
  Group,
  Color,
  Clock,
  MeshLambertMaterial,
  BoxGeometry,
  Mesh,
  CylinderBufferGeometry,
  CylinderGeometry,
  Vector3,
} = THREE

function Duck() {
  this.delta = 0
  this.clock = new Clock()
  this.swimFeetCycle = 0
  this.swimForwardMotionCycle = 0
  this.blinkCycle = 0
  this.prevX = 0
  this.prevY = 0

  this.allDuckGroup = new Group()
  this.duckHeadGroup = new Group()
  this.duckFeetGroup = new Group()
  this.duckTorsoGroup = new Group()

  const rgbGreen = new Color("rgb(23, 167, 104)")
  const green = rgbGreen.getHex()

  const rgbYellow = new Color("rgb(241, 173, 29)")
  const yellow = rgbYellow.getHex()

  const rgbWhite = new Color("rgb(231, 224, 210)")
  const white = rgbWhite.getHex()

  const rgbBrown = new Color("rgb(187, 174, 147)")
  const brown = rgbBrown.getHex()

  const flatBlack = new MeshLambertMaterial({
    color: 0x191919,
    flatShading: true,
  })

  const flatGreen = new MeshLambertMaterial({
    color: green,
    flatShading: true,
  })

  const flatYellow = new MeshLambertMaterial({
    color: yellow,
    flatShading: true,
  })

  const flatWhite = new MeshLambertMaterial({
    color: white,
    flatShading: true,
  })

  const flatBrown = new MeshLambertMaterial({
    color: brown,
    flatShading: true,
  })

  const headGeo = new BoxGeometry(6, 8, 9)
  headGeo.vertices[2].x -= 0.7
  headGeo.vertices[7].x += 0.7
  headGeo.vertices[2].z -= 0.7
  headGeo.vertices[7].z -= 0.7
  headGeo.vertices[3].x -= 0.7
  headGeo.vertices[6].x += 0.7
  headGeo.vertices[3].z += 0.7
  headGeo.vertices[6].z += 0.7
  this.head = new Mesh(headGeo, flatGreen)
  this.head.position.y = 10
  this.allDuckGroup.add(this.head)
  this.duckHeadGroup.add(this.head)

  this.duckHairGroup = new Group()

  const headCenterHairGeo = new BoxGeometry(1, 2, 0.5)
  headCenterHairGeo.vertices[2].x -= 0.2
  headCenterHairGeo.vertices[3].x -= 0.2
  headCenterHairGeo.vertices[3].z += 0.2
  headCenterHairGeo.vertices[6].x += 0.2
  headCenterHairGeo.vertices[7].x += 0.2
  headCenterHairGeo.vertices[6].z += 0.2
  this.headCenterHair = new Mesh(headCenterHairGeo, flatGreen)
  this.headCenterHair.position.y = 15
  this.headCenterHair.position.z = -5
  this.headCenterHair.rotation.x = 0.5
  this.duckHairGroup.add(this.headCenterHair)

  const headLeftHairGeo = new BoxGeometry(0.7, 1.7, 0.5)
  headLeftHairGeo.vertices[2].x -= 0.2
  headLeftHairGeo.vertices[3].x -= 0.2
  headLeftHairGeo.vertices[3].z += 0.2
  headLeftHairGeo.vertices[6].x += 0.2
  headLeftHairGeo.vertices[7].x += 0.2
  headLeftHairGeo.vertices[6].z += 0.2
  this.headLeftHair = new Mesh(headLeftHairGeo, flatGreen)
  this.headLeftHair.position.x = 1
  this.headLeftHair.position.y = 14.5
  this.headLeftHair.position.z = -5
  this.headLeftHair.rotation.z = -0.5
  this.headLeftHair.rotation.x = 0.5
  this.duckHairGroup.add(this.headLeftHair)

  const headRightHairGeo = new BoxGeometry(0.7, 1.7, 0.5)
  headRightHairGeo.vertices[2].x -= 0.2
  headRightHairGeo.vertices[3].x -= 0.2
  headRightHairGeo.vertices[3].z += 0.2
  headRightHairGeo.vertices[6].x += 0.2
  headRightHairGeo.vertices[7].x += 0.2
  headRightHairGeo.vertices[6].z += 0.2
  this.headRightHair = new Mesh(headRightHairGeo, flatGreen)
  this.headRightHair.position.x = -1
  this.headRightHair.position.y = 14.5
  this.headRightHair.position.z = -5
  this.headRightHair.rotation.z = 0.5
  this.headRightHair.rotation.x = 0.5
  this.duckHairGroup.add(this.headRightHair)

  this.duckHairGroup.position.z += 1

  this.allDuckGroup.add(this.duckHairGroup)
  this.duckHeadGroup.add(this.duckHairGroup)

  this.duckLeftEyeGroup = new Group()
  this.duckRightEyeGroup = new Group()

  const leftEyeGeo = new BoxGeometry(0.5, 2, 2)
  this.leftEye = new Mesh(leftEyeGeo, flatWhite)
  this.leftEye.position.y = 11
  this.leftEye.position.x = 3
  this.leftEye.position.z = 2
  this.duckLeftEyeGroup.add(this.leftEye)

  const rightEyeGeo = new BoxGeometry(0.5, 2, 2)
  this.rightEye = new Mesh(rightEyeGeo, flatWhite)
  this.rightEye.position.y = 11
  this.rightEye.position.x = -3
  this.rightEye.position.z = 2
  this.duckRightEyeGroup.add(this.rightEye)

  const leftEyeIrisGeo = new BoxGeometry(0.5, 0.5, 0.5)
  this.leftEyeIris = new Mesh(leftEyeIrisGeo, flatBlack)
  this.leftEyeIris.position.y = 11.3
  this.leftEyeIris.position.x = 3.1
  this.leftEyeIris.position.z = 2.5
  this.duckLeftEyeGroup.add(this.leftEyeIris)

  const rightEyeIrisGeo = new BoxGeometry(0.5, 0.5, 0.5)
  this.rightEyeIris = new Mesh(rightEyeIrisGeo, flatBlack)
  this.rightEyeIris.position.y = 11.3
  this.rightEyeIris.position.x = -3.1
  this.rightEyeIris.position.z = 2.5
  this.duckRightEyeGroup.add(this.rightEyeIris)

  this.rightTopEyeLidGeo = new BoxGeometry(0.5, 0.5, 2.1)
  this.rightTopEyeLid = new Mesh(this.rightTopEyeLidGeo, flatGreen)
  this.rightTopEyeLid.position.y = 11.8
  this.rightTopEyeLid.position.x = -3.2
  this.rightTopEyeLid.position.z = 2
  this.duckRightEyeGroup.add(this.rightTopEyeLid)

  this.leftTopEyeLidGeo = new BoxGeometry(0.5, 0.5, 2.1)
  this.leftTopEyeLid = new Mesh(this.leftTopEyeLidGeo, flatGreen)
  this.leftTopEyeLid.position.y = 11.8
  this.leftTopEyeLid.position.x = 3.2
  this.leftTopEyeLid.position.z = 2
  this.duckLeftEyeGroup.add(this.leftTopEyeLid)

  this.rightBottomEyeLidGeo = new BoxGeometry(0.5, 0.3, 2.1)
  this.rightBottomEyeLid = new Mesh(this.rightBottomEyeLidGeo, flatGreen)
  this.rightBottomEyeLid.position.y = 10
  this.rightBottomEyeLid.position.x = -3.2
  this.rightBottomEyeLid.position.z = 2
  this.duckRightEyeGroup.add(this.rightBottomEyeLid)

  this.leftBottomEyeLidGeo = new BoxGeometry(0.5, 0.3, 2.1)
  this.leftBottomEyeLid = new Mesh(this.leftBottomEyeLidGeo, flatGreen)
  this.leftBottomEyeLid.position.y = 10
  this.leftBottomEyeLid.position.x = 3.2
  this.leftBottomEyeLid.position.z = 2
  this.duckLeftEyeGroup.add(this.leftBottomEyeLid)

  this.allDuckGroup.add(this.duckLeftEyeGroup)
  this.allDuckGroup.add(this.duckRightEyeGroup)
  this.duckHeadGroup.add(this.duckLeftEyeGroup)
  this.duckHeadGroup.add(this.duckRightEyeGroup)

  this.duckLeftEyeGroup.rotation.z -= 0.06
  this.duckLeftEyeGroup.position.x -= 1
  this.duckRightEyeGroup.rotation.z += 0.06
  this.duckRightEyeGroup.position.x += 1

  this.neckTopGeo = new CylinderBufferGeometry(1.7, 1.7, 0.5, 7)
  this.neckTop = new Mesh(this.neckTopGeo, flatGreen)
  this.neckTop.position.y = 5.9

  this.neckMiddleGeo = new CylinderBufferGeometry(1.7, 1.7, 0.7, 7)
  this.neckMiddle = new Mesh(this.neckMiddleGeo, flatWhite)
  this.neckMiddle.position.y = 5.3

  this.neckBottomGeo = new CylinderBufferGeometry(1.7, 1.7, 0.5, 7)
  this.neckBottom = new Mesh(this.neckBottomGeo, flatGreen)
  this.neckBottom.position.y = 4.7

  this.allDuckGroup.add(this.neckTop)
  this.allDuckGroup.add(this.neckMiddle)
  this.allDuckGroup.add(this.neckBottom)

  this.duckHeadGroup.add(this.neckTop)
  this.duckHeadGroup.add(this.neckMiddle)
  this.duckHeadGroup.add(this.neckBottom)

  const topBeakGeo = new BoxGeometry(8, 1, 8.7)
  topBeakGeo.vertices[4].x += 0.5
  topBeakGeo.vertices[6].x += 0.5

  topBeakGeo.vertices[4].z += 0.5
  topBeakGeo.vertices[6].z -= 0.5

  topBeakGeo.vertices[1].x -= 0.5
  topBeakGeo.vertices[3].x -= 0.5

  topBeakGeo.vertices[1].z += 0.5
  topBeakGeo.vertices[3].z -= 0.5

  topBeakGeo.vertices[3].y += 0.5
  topBeakGeo.vertices[6].y += 0.5

  topBeakGeo.vertices[0].x += 0.5
  topBeakGeo.vertices[2].x += 0.5
  topBeakGeo.vertices[0].y += 0.5
  topBeakGeo.vertices[2].y += 0.5

  topBeakGeo.vertices[5].x -= 0.5
  topBeakGeo.vertices[7].x -= 0.5
  topBeakGeo.vertices[5].y += 0.5
  topBeakGeo.vertices[7].y += 0.5

  this.topBeak = new Mesh(topBeakGeo, flatYellow)
  this.topBeak.position.y = 8
  this.topBeak.position.z = 6.5
  this.allDuckGroup.add(this.topBeak)
  this.duckHeadGroup.add(this.topBeak)

  const topBeakSlopeGeo = new CylinderGeometry(4.5, 0, 4, 3)

  topBeakSlopeGeo.vertices[0].z += 1
  topBeakSlopeGeo.vertices[3].z -= 0.7

  topBeakSlopeGeo.vertices[1].x -= 0.4
  topBeakSlopeGeo.vertices[2].x += 0.4
  topBeakSlopeGeo.vertices[1].z -= 0.1
  topBeakSlopeGeo.vertices[2].z -= 0.1

  this.topBeakSlope = new Mesh(topBeakSlopeGeo, flatYellow)
  this.topBeakSlope.position.y = 10.5
  this.topBeakSlope.position.z = 5
  this.topBeakSlope.rotation.z = Math.PI
  this.allDuckGroup.add(this.topBeakSlope)
  this.duckHeadGroup.add(this.topBeakSlope)

  const bottomBeakGeo = new BoxGeometry(6, 0.5, 6)
  bottomBeakGeo.vertices[4].x += 0.5
  bottomBeakGeo.vertices[6].x += 0.5

  bottomBeakGeo.vertices[1].x -= 0.5
  bottomBeakGeo.vertices[3].x -= 0.5

  bottomBeakGeo.vertices[0].x += 0.5
  bottomBeakGeo.vertices[2].x += 0.5

  bottomBeakGeo.vertices[5].x -= 0.5
  bottomBeakGeo.vertices[7].x -= 0.5

  this.bottomBeak = new Mesh(bottomBeakGeo, flatYellow)
  this.bottomBeak.position.y = 7.8
  this.bottomBeak.position.z = 5.5
  this.allDuckGroup.add(this.bottomBeak)
  this.duckHeadGroup.add(this.bottomBeak)

  this.bottomBeakSlopeGeo = new CylinderGeometry(3, 0, 3, 3)
  this.bottomBeakSlopeGeo.vertices[3].z = -1.7
  this.bottomBeakSlopeGeo.vertices[3].y = -0.75

  this.bottomBeakSlope = new Mesh(this.bottomBeakSlopeGeo, flatYellow)
  this.bottomBeakSlope.position.z = 5.5
  this.bottomBeakSlope.position.y = 6.8
  this.allDuckGroup.add(this.bottomBeakSlope)
  this.duckHeadGroup.add(this.bottomBeakSlope)

  this.bodyGeo = new BoxGeometry(8, 7, 14)
  this.bodyGeo.vertices[3].y += 4
  this.bodyGeo.vertices[6].y += 4
  this.body = new Mesh(this.bodyGeo, flatWhite)
  this.body.position.z = -4
  this.body.position.y = 1
  this.duckTorsoGroup.add(this.body)

  this.leftWingGeo = new BoxGeometry(0.5, 7, 16)
  this.leftWingGeo.vertices[2].y += 2
  this.leftWingGeo.vertices[7].y += 2

  this.leftWingGeo.vertices[3].z += 4
  this.leftWingGeo.vertices[6].z += 4
  this.leftWingGeo.vertices[3].y += 2
  this.leftWingGeo.vertices[6].y += 2
  this.leftWing = new Mesh(this.leftWingGeo, flatWhite)
  this.leftWing.position.z = -5
  this.leftWing.position.y = 1
  this.leftWing.position.x = 4.5
  this.leftWing.rotation.x = 0.2
  this.duckTorsoGroup.add(this.leftWing)

  this.rightWingGeo = new BoxGeometry(0.5, 7, 16)
  this.rightWingGeo.vertices[2].y += 2
  this.rightWingGeo.vertices[7].y += 2

  this.rightWingGeo.vertices[3].y += 2
  this.rightWingGeo.vertices[6].y += 2
  this.rightWingGeo.vertices[3].z += 4
  this.rightWingGeo.vertices[6].z += 4
  this.rightWing = new Mesh(this.rightWingGeo, flatWhite)
  this.rightWing.position.z = -5
  this.rightWing.position.y = 1
  this.rightWing.position.x = -4.5
  this.rightWing.rotation.x = 0.2
  this.duckTorsoGroup.add(this.rightWing)

  this.chestGeo = new BoxGeometry(7, 6, 11)
  this.chestGeo.vertices[3].y += 1
  this.chestGeo.vertices[6].y += 1
  this.chest = new Mesh(this.chestGeo, flatBrown)
  this.chest.position.z = -2
  this.chest.position.y = 1
  this.duckTorsoGroup.add(this.chest)

  const tailGeo = new BoxGeometry(7, 1, 5)
  tailGeo.vertices[4].x += 1.4
  tailGeo.vertices[6].x += 1.4

  tailGeo.vertices[1].x -= 1.4
  tailGeo.vertices[3].x -= 1.4

  tailGeo.vertices[0].x += 0.4
  tailGeo.vertices[2].x += 0.4

  tailGeo.vertices[5].x -= 0.4
  tailGeo.vertices[7].x -= 0.4
  this.tail = new Mesh(tailGeo, flatWhite)
  this.tail.position.z = -13
  this.tail.position.y = 5.5
  this.tail.rotation.x = 0.6
  this.duckTorsoGroup.add(this.tail)

  this.allDuckGroup.add(this.duckTorsoGroup)

  this.leftFootGeo = new BoxGeometry(4, 1, 6)
  this.leftFootGeo.vertices[1].x -= 1.5
  this.leftFootGeo.vertices[3].x -= 1.5
  this.leftFootGeo.vertices[4].x += 1.5
  this.leftFootGeo.vertices[6].x += 1.5
  this.leftFootGeo.vertices[5].y -= 0.7
  this.leftFootGeo.vertices[0].y -= 0.7

  this.leftFoot = new Mesh(this.leftFootGeo, flatYellow)
  this.leftFoot.position.y = -4
  this.leftFoot.position.z = 1
  this.leftFoot.position.x = 2
  this.duckFeetGroup.add(this.leftFoot)

  this.rightFootGeo = new BoxGeometry(4, 1, 6)
  this.rightFootGeo.vertices[1].x -= 1.5
  this.rightFootGeo.vertices[4].x += 1.5
  this.rightFootGeo.vertices[6].x += 1.5
  this.rightFootGeo.vertices[3].x -= 1.5
  this.rightFootGeo.vertices[5].y -= 0.7
  this.rightFootGeo.vertices[0].y -= 0.7
  this.rightFoot = new Mesh(this.rightFootGeo, flatYellow)
  this.rightFoot.position.y = -4
  this.rightFoot.position.z = 1
  this.rightFoot.position.x = -2
  this.duckFeetGroup.add(this.rightFoot)

  this.allDuckGroup.add(this.duckHeadGroup)
  this.allDuckGroup.add(this.duckFeetGroup)

  this.allDuckGroup.traverse(function traverse(object) {
    if (object instanceof Mesh) {
      object.castShadow = true
      object.receiveShadow = true
    }
  })
}

Duck.prototype.blink = function blink() {
  this.blinkCycle += 0.05
  let t = this.blinkCycle
  t %= 2 * Math.PI

  this.leftBottomEyeLidGeo.verticesNeedUpdate = true
  this.rightBottomEyeLidGeo.verticesNeedUpdate = true
  this.leftTopEyeLidGeo.verticesNeedUpdate = true
  this.rightTopEyeLidGeo.verticesNeedUpdate = true

  this.leftBottomEyeLidGeo.vertices[0].y = Math.max(0, Math.cos(t) * 0.9)
  this.leftBottomEyeLidGeo.vertices[1].y = Math.max(0, Math.cos(t) * 0.9)
  this.rightBottomEyeLidGeo.vertices[4].y = Math.max(0, Math.cos(t) * 0.9)
  this.rightBottomEyeLidGeo.vertices[5].y = Math.max(0, Math.cos(t) * 0.9)

  this.leftTopEyeLidGeo.vertices[2].y = Math.min(0, -Math.cos(t) * 0.9)
  this.leftTopEyeLidGeo.vertices[3].y = Math.min(0, -Math.cos(t) * 0.9)
  this.rightTopEyeLidGeo.vertices[6].y = Math.min(0, -Math.cos(t) * 0.9)
  this.rightTopEyeLidGeo.vertices[7].y = Math.min(0, -Math.cos(t) * 0.9)
}

Duck.prototype.swim = function swim() {
  this.delta = this.clock.getDelta()
  this.swimForwardMotionCycle += this.delta * 0.9
  const amp = 4

  let forwardMotionT = this.swimForwardMotionCycle
  forwardMotionT %= 2 * Math.PI

  const vec = new Vector3(
    Math.cos(forwardMotionT - 4.5) * 80,
    -7,
    Math.sin(forwardMotionT - 4.5) * 80
  )

  this.swimFeetCycle += this.delta * 0.8

  let feetT = this.swimFeetCycle
  feetT %= 2 * Math.PI

  this.allDuckGroup.position.x = -20
  this.allDuckGroup.position.z = 0

  this.allDuckGroup.lookAt(vec)

  this.allDuckGroup.position.x = Math.cos(forwardMotionT) * 70
  this.allDuckGroup.position.z = Math.sin(forwardMotionT) * 70

  this.duckHeadGroup.rotation.z = Math.cos(forwardMotionT * 4) * 0.1

  this.leftFoot.rotation.x = Math.max(0, Math.cos(feetT * amp) * 1.8)
  this.rightFoot.rotation.x = Math.max(0, -Math.cos(feetT * amp) * 1.8)

  this.leftFoot.position.z = -4 - Math.cos(feetT * amp) * 7
  this.rightFoot.position.z = -4 - -Math.cos(feetT * amp) * 7

  this.leftFoot.rotation.z = Math.cos(feetT * amp) * -0.4
  this.rightFoot.rotation.z = -Math.cos(feetT * amp) * -0.4

  this.leftFoot.position.y = Math.min(-2.5, -3 - Math.cos(feetT * amp) * 1.6)
  this.rightFoot.position.y = Math.min(-2.5, -3 - -Math.cos(feetT * amp) * 1.6)

  this.duckTorsoGroup.rotation.z = -Math.cos(feetT * 4) * 0.18
}

Duck.prototype.swimTowards = function swim(x, y, z) {
  this.delta = this.clock.getDelta()
  this.swimForwardMotionCycle += this.delta * 0.6
  const amp = 4

  let forwardMotionT = this.swimForwardMotionCycle
  forwardMotionT %= 2 * Math.PI

  const vec = new Vector3(x - 90, -11, z)
  this.allDuckGroup.lookAt(vec)

  this.swimFeetCycle += this.delta * 0.8

  let feetT = this.swimFeetCycle
  feetT %= 2 * Math.PI

  this.allDuckGroup.position.z = z
  this.allDuckGroup.position.x = x - 90
  this.allDuckGroup.position.y = -11

  this.duckHeadGroup.rotation.z = Math.cos(forwardMotionT * 4) * 0.1

  this.leftFoot.rotation.x = Math.max(0, Math.cos(feetT * amp) * 1.8)
  this.rightFoot.rotation.x = Math.max(0, -Math.cos(feetT * amp) * 1.8)

  this.leftFoot.position.z = -4 - Math.cos(feetT * amp) * 7
  this.rightFoot.position.z = -4 - -Math.cos(feetT * amp) * 7

  this.leftFoot.rotation.z = Math.cos(feetT * amp) * -0.4
  this.rightFoot.rotation.z = -Math.cos(feetT * amp) * -0.4

  this.leftFoot.position.y = Math.min(-2.5, -3 - Math.cos(feetT * amp) * 1.6)
  this.rightFoot.position.y = Math.min(-2.5, -3 - -Math.cos(feetT * amp) * 1.6)

  // this.duckTorsoGroup.rotation.z = -Math.cos(feetT * 4) * 0.18
}

export default Duck
