import * as React from "react"
import PageLayout from "../components/page-layout"
import Success from "../components/success"
import RestrictPageWidth from "../components/restrict-page-width"
import "normalize.css"
import "../assets/main.css"

const ContactPage: React.FC = () => (
  <PageLayout>
    <RestrictPageWidth>
      <Success />
    </RestrictPageWidth>
  </PageLayout>
)

export default ContactPage
