import React from "react"
import Contact from "../components2/contact"
import PageLayout from "../components2/page-layout"
import PageAnimation from "../components2/page-animation"
import usePose from "../components2/hooks/usePose"
import "normalize.css"
import "../assets/main.css"

const ContactPage = () => {
  const visible = usePose()

  return (
    <PageLayout>
      <PageAnimation pose={visible ? "visible" : "hidden"}>
        <Contact />
      </PageAnimation>
    </PageLayout>
  )
}

export default ContactPage
