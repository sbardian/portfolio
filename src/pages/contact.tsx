import * as React from "react"
import Contact from "../components/contact"
import PageLayout from "../components/page-layout"
import "normalize.css"
import "../assets/main.css"

const ContactPage: React.FC = () => {
  return (
    <PageLayout>
      <Contact />
    </PageLayout>
  )
}

export default ContactPage
