/** @jsx jsx */
import { jsx } from "theme-ui"
import gatsby from "../images/gatsby.png"

const Footer: React.FC = () => (
  <div
    data-testid="footer-container"
    sx={{
      display: "grid",
      gridTemplateRows: "1fr 1fr",
      justifyItems: "center",
      alignItems: "center",
      padding: "0.67rem",
      backgroundColor: "background",
    }}
  >
    <pre sx={{ fontSize: 9 }}>built with</pre>
    <a data-testid="footer-link" href="https://gatsbyjs.org">
      <img
        data-testid="footer-image"
        sx={{ height: "3em" }}
        src={gatsby}
        alt="Gatsby"
        title="Built with Gatsby"
      />
    </a>
  </div>
)

export default Footer
