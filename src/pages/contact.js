import React from "react"
import Contact from "../components/contact"
import PageLayout from "../components/page-layout"
import PageAnimation from "../components/page-animation"
import usePose from "../components/hooks/usePose"
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
