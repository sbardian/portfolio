/** @jsx jsx */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
// eslint-disable-next-line
import React from "react"
import * as THREE from "three"
import { TweenMax, Back } from "gsap/TweenMax"
import { jsx, css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import mq from "./media-queries"
import sidebarBg from "../images/sidebar-bg.jpg"
import overlay from "../images/overlay.png"
import avatar from "../images/avatar.jpg"
import gatsby from "../images/gatsby.png"
import disc from "../images/disc.png"

export default () => {
  React.useEffect(() => {
    const canvas = document.querySelector("#scene")
    const sidebarContainer = document.querySelector("#sidebar-container")
    const width = sidebarContainer.offsetWidth
    const height = sidebarContainer.offsetHeight
    const innerRadius = 20
    const outterRadius = 100

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 2000)
    camera.position.set(0, 0, 100)
    camera.lookAt(0, 0, 0)
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    })
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1)
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()

    // const sphereGeom = new THREE.IcosahedronGeometry(radius, 5)
    // const sphereGeom = new THREE.TorusBufferGeometry(radius, 4, 15, 160, 7)
    const sphereGeom = new THREE.RingGeometry(
      innerRadius,
      outterRadius,
      30,
      30,
      0,
      6
    )

    const dotsGeom = new THREE.Geometry()
    const bufferDotsGeom = new THREE.BufferGeometry()
    const positions = new Float32Array(sphereGeom.vertices.length * 3)
    const colors = new Float32Array(sphereGeom.vertices.length * 3)

    function updateDot(index, vector) {
      positions[index * 3] = vector.x
      positions[index * 3 + 2] = vector.z
    }

    function animateDot(index, vector) {
      TweenMax.to(vector, 4, {
        x: 0,
        z: 100,
        ease: Back.easeOut,
        delay: Math.abs(vector.y / innerRadius) * 2,
        repeat: -1,
        yoyo: true,
        yoyoEase: Back.easeOut,
        onUpdate: () => {
          updateDot(index, vector)
        },
      })
    }

    const color = new THREE.Color()

    for (let i = 0, l = sphereGeom.vertices.length; i < l; i++) {
      const vector = sphereGeom.vertices[i]
      animateDot(i, vector)
      dotsGeom.vertices.push(vector)
      vector.toArray(positions, i * 3)
      // color.setHex(Math.random() * 0xffff0f)
      color.setHex(0x92e5f3)
      color.toArray(colors, i * 3)
    }

    const sprite = new THREE.TextureLoader().load(disc)

    const attributePositions = new THREE.BufferAttribute(positions, 3)
    const attributeColors = new THREE.BufferAttribute(colors, 3)
    bufferDotsGeom.addAttribute("position", attributePositions)
    bufferDotsGeom.addAttribute("color", attributeColors)

    const shaderMaterial = new THREE.PointsMaterial({
      vertexColors: THREE.VertexColors,
      size: 20,
      sizeAttenuation: false,
      map: sprite,
      alphaTest: 0.5,
      transparent: true,
    })
    // shaderMaterial.color.setHSL(1.0, 0.3, 0.7)
    console.log("bufferDotsGeom: ", bufferDotsGeom)
    const dots = new THREE.Points(bufferDotsGeom, shaderMaterial)

    scene.add(dots)

    function render() {
      dots.geometry.verticesNeedUpdate = true
      dots.geometry.attributes.position.needsUpdate = true
      dots.geometry.attributes.color.needsUpdate = true
      renderer.render(scene, camera)
    }

    TweenMax.ticker.addEventListener("tick", render)

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1200) {
        renderer.setSize(
          sidebarContainer.offsetWidth,
          sidebarContainer.offsetHeight - 20
        )
        camera.fov = 15
        camera.aspect =
          sidebarContainer.offsetWidth / sidebarContainer.offsetHeight
      } else {
        renderer.setSize(
          sidebarContainer.offsetWidth,
          sidebarContainer.offsetHeight
        )
        camera.fov = 50
        camera.aspect =
          sidebarContainer.offsetWidth / sidebarContainer.offsetHeight
      }
      camera.updateProjectionMatrix()
      render()
    })
  })

  return (
    <div
      id="sidebar-container"
      css={css`
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 150px 250px;
        justify-content: center;
        align-content: center;
        min-height: 100%;
        min-width: 35%;
        position: fixed;
        background: lightgray;
        /* background-image: url(${overlay}), url(${sidebarBg});
        background-size: cover;
        background-repeat: no-repeat; */
        transition: all 0.3s linear;
        padding: 20px 0 20px 0px;
        ${mq.xl(css`
          min-width: 100%;
          min-height: 300px;
          position: absolute;
        `)};
        ${mq.sm(css`
          grid-template-columns: 1fr;
          justify-items: center;
          min-height: 500px;
        `)}
      `}
    >
      <canvas
        css={css`
          background: transparent;
          position: fixed;
        `}
        id="scene"
      />
      <div
        css={css`
          align-self: center;
          z-index: 20;
        `}
      >
        <img
          css={css`
            height: 150px;
            width: 150px;
            padding-top: 20px;
          `}
          src={avatar}
          alt="Avatar"
        />
      </div>
      <div
        css={css`
          display: grid;
          grid-gap: 20px;
          grid-template-rows: 60px 150px 50px;
          color: #474444;
          transition: all 8s;
          ${mq.sm(css`
            grid-template-rows: 80px auto 50px;
            justify-items: center;
          `)}
        `}
      >
        <div>
          <h1>Brian Andrews</h1>
        </div>
        <div
          css={css`
            padding: 0px 20px 0px 20px;
          `}
        >
          <span>
            {`Web developer and problem solver! I enjoy using code to solve
            complex problems so other people don't have to. Hopefully you will
            find something here to make your life easier. Sorry about the dots, learning animation...`}
          </span>
        </div>
        <div
          css={css`
            display: grid;
            grid-gap: 20px;
            grid-template-columns: 35px 35px 35px;
            padding-bottom: 20px;
            align-items: center;
            justify-items: center;
          `}
        >
          <a
            css={css`
              color: #666;
            `}
            href="https://github.com/sbardian"
          >
            <FontAwesomeIcon size="2x" icon={faGithub} />
          </a>
          <a
            css={css`
              color: #666;
            `}
            href="https://twitter.com/xsbardianx"
          >
            <FontAwesomeIcon size="2x" icon={faTwitter} />
          </a>
          <a
            css={css`
              color: #666;
            `}
            href="mailto:sbardian@gmail.com?Subject=Dear Developer..."
          >
            <FontAwesomeIcon size="2x" icon={faEnvelope} />
          </a>
        </div>
      </div>
      <div
        css={css`
          position: absolute;
          bottom: 3px;
          right: 5px;
        `}
      >
        <a href="https://gatsby.com">
          <img
            css={css`
              height: 1em;
            `}
            src={gatsby}
            alt="Gatsby"
            title="Built with Gatsby"
          />
        </a>
      </div>
    </div>
  )
}
