import * as React from "react"
import PageLayout from "../components/page-layout"
import Animations from "../components/animations"
import RestrictPageWidth from "../components/restrict-page-width"
import "../assets/main.css"
import "normalize.css"

const AnimationsPage: React.FC = () => {
  return (
    <PageLayout>
      <RestrictPageWidth>
        <Animations />
      </RestrictPageWidth>
    </PageLayout>
  )
}
export default AnimationsPage
