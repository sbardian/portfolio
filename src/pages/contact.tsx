import * as React from "react"
import Contact from "../components/contact"
import PageLayout from "../components/page-layout"
import RestrictPageWidth from "../components/restrict-page-width"
// import "normalize.css"
// import "../assets/main.css"

const ContactPage: React.FC = () => {
  return (
    <PageLayout>
      <RestrictPageWidth>
        <Contact />
      </RestrictPageWidth>
    </PageLayout>
  )
}

export default ContactPage
