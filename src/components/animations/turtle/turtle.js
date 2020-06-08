/* eslint-disable no-param-reassign */
import * as THREE from "three"
import { TweenMax, Bounce, Elastic, TimelineMax } from "gsap"

const {
  Group,
  Color,
  MeshLambertMaterial,
  BoxGeometry,
  Mesh,
  SphereGeometry,
  EventDispatcher,
  FontLoader,
  CylinderGeometry,
} = THREE

function Turtle() {
  // Groups
  this.allTurtleGroup = new Group()
  this.turtleHeadGroup = new Group()
  this.turtleBodyGroup = new Group()
  this.turtleFeetGroup = new Group()
  this.allowLookAt = true

  // Colors
  const rgbGreen = new Color("rgb(23, 167, 104)")
  const green = rgbGreen.getHex()

  const rgbWhite = new Color("rgb(231, 224, 210)")
  const white = rgbWhite.getHex()

  const flatWhite = new MeshLambertMaterial({
    color: white,
    flatShading: true,
  })

  const flatGreen = new MeshLambertMaterial({
    color: green,
    flatShading: true,
  })

  const flatBlack = new MeshLambertMaterial({
    color: 0x191919,
    flatShading: true,
  })

  const flatYellow = new MeshLambertMaterial({
    color: 0xfafcd4,
    flatShading: true,
  })

  const flatPink = new MeshLambertMaterial({
    color: 0xfcbdce,
    flatShading: true,
  })

  const flatRed = new MeshLambertMaterial({
    color: 0xed1c55,
    flatShading: true,
  })

  // Head
  const headGeo = new BoxGeometry(6, 8, 9)
  this.head = new Mesh(headGeo, flatGreen)
  this.head.castShadow = true
  this.head.receiveShadow = true
  this.head.position.y = 10
  this.turtleHeadGroup.add(this.head)

  // Mouth
  const mouthGeo = new BoxGeometry(4, 5, 1)
  this.mouth = new Mesh(mouthGeo, flatYellow)
  this.mouth.castShadow = true
  this.mouth.receiveShadow = true
  this.mouth.position.y = 5.5
  this.mouth.position.z = 1
  this.mouth.rotation.z = Math.PI / 2
  this.mouth.rotation.x = Math.PI / 2
  this.turtleHeadGroup.add(this.mouth)

  // Inner Mouth
  const innerMouthGeo = new BoxGeometry(3, 4, 1)
  this.innerMouth = new Mesh(innerMouthGeo, flatPink)
  this.innerMouth.castShadow = true
  this.innerMouth.receiveShadow = true
  this.innerMouth.position.y = 5.7
  this.innerMouth.position.z = 1
  this.innerMouth.rotation.z = Math.PI / 2
  this.innerMouth.rotation.x = Math.PI / 2
  this.turtleHeadGroup.add(this.innerMouth)

  // Tongue
  const tongueGeo = new BoxGeometry(3, 3, 1)
  tongueGeo.vertices[4].x += 1
  tongueGeo.vertices[5].x += 1
  tongueGeo.vertices[1].x -= 1.5
  tongueGeo.vertices[0].x -= 1.5
  tongueGeo.vertices[4].z += 0.5
  tongueGeo.vertices[5].z -= 0.5
  tongueGeo.vertices[1].z += 0.5
  tongueGeo.vertices[0].z -= 0.5
  this.tongue = new Mesh(tongueGeo, flatRed)
  this.tongue.castShadow = true
  this.tongue.receiveShadow = true
  this.tongue.position.y = 5.7
  this.tongue.position.z = 1
  this.tongue.rotation.x = Math.PI / 2
  this.turtleHeadGroup.add(this.tongue)

  // Left Eeye
  const leftEyeGeo = new BoxGeometry(4, 4, 1)
  this.leftEye = new Mesh(leftEyeGeo, flatWhite)
  this.leftEye.castShadow = true
  this.leftEye.receiveShadow = true
  this.leftEye.position.x = 3
  this.leftEye.position.y = 11
  this.leftEye.position.z = 1
  this.leftEye.rotation.y = Math.PI / 2
  this.turtleHeadGroup.add(this.leftEye)

  // Right Eye
  const rightEyeGeo = new BoxGeometry(4, 4, 1)
  this.rightEye = new Mesh(rightEyeGeo, flatWhite)
  this.rightEye.castShadow = true
  this.rightEye.receiveShadow = true
  this.rightEye.position.x = -3
  this.rightEye.position.y = 11
  this.rightEye.position.z = 1
  this.rightEye.rotation.y = Math.PI / 2
  this.turtleHeadGroup.add(this.rightEye)

  // Left Iris
  const leftIrisGeo = new BoxGeometry(1, 1, 1)
  this.leftIris = new Mesh(leftIrisGeo, flatBlack)
  this.leftIris.castShadow = true
  this.leftIris.receiveShadow = true
  this.leftIris.position.x = 3.4
  this.leftIris.position.y = 11
  this.leftIris.position.z = 2
  this.leftIris.rotation.y = Math.PI / 2
  this.turtleHeadGroup.add(this.leftIris)

  // Left Eyelid Top
  const leftEyelidTopGeo = new BoxGeometry(4.5, 2, 1)
  this.leftEyelidTop = new Mesh(leftEyelidTopGeo, flatGreen)
  this.leftEyelidTop.castShadow = true
  this.leftEyelidTop.receiveShadow = true
  this.leftEyelidTop.position.x = 3.5
  this.leftEyelidTop.position.y = 12.5
  this.leftEyelidTop.position.z = 1
  this.leftEyelidTop.rotation.y = Math.PI / 2
  this.turtleHeadGroup.add(this.leftEyelidTop)

  // Left Eyelid Bottom
  const leftEyelidBottomGeo = new BoxGeometry(4.5, 1, 1)
  this.leftEyelidBottom = new Mesh(leftEyelidBottomGeo, flatGreen)
  this.leftEyelidBottom.castShadow = true
  this.leftEyelidBottom.receiveShadow = true
  this.leftEyelidBottom.position.x = 3.2
  this.leftEyelidBottom.position.y = 9
  this.leftEyelidBottom.position.z = 1
  this.leftEyelidBottom.rotation.y = Math.PI / 2
  this.turtleHeadGroup.add(this.leftEyelidBottom)

  // Right Iris
  const rightIrisGeo = new BoxGeometry(1, 1, 1)
  this.rightIris = new Mesh(rightIrisGeo, flatBlack)
  this.rightIris.castShadow = true
  this.rightIris.receiveShadow = true
  this.rightIris.position.x = -3.4
  this.rightIris.position.y = 11
  this.rightIris.position.z = 2
  this.rightIris.rotation.y = Math.PI / 2
  this.turtleHeadGroup.add(this.rightIris)

  // Left Eyelid Top
  const rightEyelidTopGeo = new BoxGeometry(4.5, 2, 1)
  this.rightEyelidTop = new Mesh(rightEyelidTopGeo, flatGreen)
  this.rightEyelidTop.castShadow = true
  this.rightEyelidTop.receiveShadow = true
  this.rightEyelidTop.position.x = -3.5
  this.rightEyelidTop.position.y = 12.5
  this.rightEyelidTop.position.z = 1
  this.rightEyelidTop.rotation.y = Math.PI / 2
  this.turtleHeadGroup.add(this.rightEyelidTop)

  // Left Eyelid Bottom
  const rightEyelidBottomGeo = new BoxGeometry(4.5, 1, 1)
  this.rightEyelidBottom = new Mesh(rightEyelidBottomGeo, flatGreen)
  this.rightEyelidBottom.castShadow = true
  this.rightEyelidBottom.receiveShadow = true
  this.rightEyelidBottom.position.x = -3.2
  this.rightEyelidBottom.position.y = 9
  this.rightEyelidBottom.position.z = 1
  this.rightEyelidBottom.rotation.y = Math.PI / 2
  this.turtleHeadGroup.add(this.rightEyelidBottom)

  // Shell
  const shellGeo = new SphereGeometry(15, 8, 6.2, 0, 3.2, 0, 3)
  this.shell = new Mesh(shellGeo, flatGreen)
  this.shell.castShadow = true
  this.shell.receiveShadow = true
  this.shell.position.z = -25
  this.shell.rotation.x = 4.6
  this.turtleBodyGroup.add(this.shell)

  // Shell Bottom
  const shellBottomGeo = new CylinderGeometry(12, 17.3, 6, 8, 1)
  this.shellBottom = new Mesh(shellBottomGeo, flatYellow)
  this.shellBottom.position.z = -25
  this.shellBottom.position.y = 2
  this.shellBottom.rotation.x = -0.08
  this.turtleBodyGroup.add(this.shellBottom)

  // Shell Hole
  // const shellHoleGeo = new CylinderGeometry(3, 3, 2, 32)
  // this.shellHole = new Mesh(shellHoleGeo, flatBlack)
  // this.shellHole.position.z = -11.5
  // this.shellHole.position.y = 4
  // this.shellHole.rotation.x = Math.PI / 2 - 0.4
  // this.turtleBodyGroup.add(this.shellHole)

  // Front Left Leg
  const frontLeftLegGeo = new CylinderGeometry(1, 3, 3, 3, 1)
  this.frontLeftLeg = new Mesh(frontLeftLegGeo, flatGreen)
  this.shell.castShadow = true
  this.shell.receiveShadow = true
  this.frontLeftLeg.position.x = 6
  this.frontLeftLeg.position.z = -16
  this.frontLeftLeg.position.y = -3
  this.frontLeftLeg.rotation.x = -0.05
  this.turtleBodyGroup.add(this.frontLeftLeg)

  // Front Right Leg
  const frontRightLegGeo = new CylinderGeometry(1, 3, 3, 3, 1)
  this.frontRightLeg = new Mesh(frontRightLegGeo, flatGreen)
  this.shell.castShadow = true
  this.shell.receiveShadow = true
  this.frontRightLeg.position.x = -6
  this.frontRightLeg.position.z = -16
  this.frontRightLeg.position.y = -3
  this.frontRightLeg.rotation.x = -0.05
  this.turtleBodyGroup.add(this.frontRightLeg)

  // Back Left Leg
  const backLeftLegGeo = new CylinderGeometry(1, 3, 2, 3, 1)
  this.backLeftLeg = new Mesh(backLeftLegGeo, flatGreen)
  this.shell.castShadow = true
  this.shell.receiveShadow = true
  this.backLeftLeg.position.x = 6
  this.backLeftLeg.position.z = -32
  this.backLeftLeg.position.y = -5
  this.backLeftLeg.rotation.x = -0.05
  this.turtleBodyGroup.add(this.backLeftLeg)

  // Back Right Leg
  const backRightLegGeo = new CylinderGeometry(1, 3, 2, 3, 1)
  this.backRightLeg = new Mesh(backRightLegGeo, flatGreen)
  this.shell.castShadow = true
  this.shell.receiveShadow = true
  this.backRightLeg.position.x = -6
  this.backRightLeg.position.z = -32
  this.backRightLeg.position.y = -5
  this.backRightLeg.rotation.x = -0.05
  this.turtleBodyGroup.add(this.backRightLeg)

  this.turtleHeadGroup.position.z = -6
  this.turtleHeadGroup.position.y = -20
  this.allTurtleGroup.position.z = -10
  this.allTurtleGroup.add(this.turtleBodyGroup, this.turtleHeadGroup)

  this.headGroupIn = new TimelineMax({ repeat: 0 })
    .to(this.turtleHeadGroup.position, 0.8, {
      z: -25,
      x: 0,
      y: -10,
      ease: Elastic.ease,
    })
    .pause()

  this.shellDrop = new TimelineMax({ repeat: 0 })
    .to(this.turtleBodyGroup.position, 0.3, {
      y: -3,
      ease: Bounce.easeOut,
    })
    .pause()

  // TODO:  Lean while stretching.
  // TODO:  what will mouse hold? Food?
  // TODO:  pop in shell when clicked/too close?
}

Turtle.prototype.lookAt = function lookAt(hAngle, vAngle, xTarget, yTarget) {
  if (this.allowLookAt) {
    // Head animation
    this.turtleHeadGroup.rotation.y = 0.1 + hAngle * 0.5
    this.turtleHeadGroup.rotation.x = 0.1 + vAngle * 0.4
    this.turtleHeadGroup.position.y = 0.1 + yTarget * -0.02
    this.turtleHeadGroup.position.x = 0.1 + xTarget * 0.02
    this.turtleBodyGroup.rotation.x = 0.1 + vAngle * 0.01
    this.turtleBodyGroup.rotation.y = 0.1 + hAngle * 0.05

    // Mouth animation
    if (xTarget > 250 || xTarget < -250) {
      if (vAngle < 0) {
        this.mouth.rotation.x = vAngle * 0.7
        this.innerMouth.rotation.x = vAngle * 0.7
        this.tongue.rotation.x = 2.5 + vAngle * 0.4
        this.tongue.position.z = 3
      } else {
        this.mouth.rotation.x = vAngle * -0.7
        this.innerMouth.rotation.x = vAngle * -0.7
        this.tongue.rotation.x = 2.5 + vAngle * -0.4
        this.tongue.position.z = 3
      }
    } else {
      this.mouth.rotation.x = Math.PI / 2
      this.innerMouth.rotation.x = Math.PI / 2
      this.tongue.rotation.x = Math.PI / 2
      this.tongue.position.z = 1
    }

    // Iris animation
    const irisPosition = 0.1 + vAngle * -1.5 + 10
    this.leftIris.position.y = irisPosition > 9.8 ? irisPosition : 10
    this.rightIris.position.y = irisPosition > 9.8 ? irisPosition : 10

    // Top Eyelid animation
    if (yTarget < 12) {
      this.leftEyelidTop.position.y = 0.5 + vAngle * -1.5 + 12
      this.rightEyelidTop.position.y = 0.5 + vAngle * -1.5 + 12
    }
  }
}

Turtle.prototype.hide = function hide() {
  // console.log("click!")
  // if (xTarget < 0 && xTarget > -100 && yTarget > -100 && yTarget < 50) {
  this.headGroupIn.play()
  this.shellDrop.play()
  this.allowLookAt = false
  // this.headGroupIn.pause()
  // this.turtleHeadGroup.position.z = -30
  this.frontLeftLeg.position.y = 5
  this.frontRightLeg.position.y = 5
  this.backLeftLeg.position.y = 5
  this.backRightLeg.position.y = 5
  // } else {
  // this.headGroupIn.reverse()
  // this.headGroupIn.pause()
  // this.headGroupOut.play()
  // this.headGroupOut.pause()
  // this.turtleHeadGroup.position.z = -6
  // this.frontLeftLeg.position.y = -3
  // this.frontRightLeg.position.y = -3
  // this.backLeftLeg.position.y = -5
  // this.backRightLeg.position.y = -5
  // }
  // this.headGroupIn.play()
  // this.headGroupIn.pause()
}

Turtle.prototype.peek = function peek() {
  this.headGroupIn.reverse()
  this.shellDrop.reverse()
  this.allowLookAt = true
  this.frontLeftLeg.position.y = -3
  this.frontRightLeg.position.y = -3
  this.backLeftLeg.position.y = -5
  this.backRightLeg.position.y = -5
}

export default Turtle
