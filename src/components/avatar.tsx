/** @jsx jsx */
/* eslint-disable react/jsx-pascal-case */
import { jsx, Themed } from "theme-ui"
import Gravatar from "react-gravatar"

const Avatar: React.FC = () => (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr",
        justifyItems: "center",
        alignItems: "center ",
        color: "text",
      }}
    >
      <Themed.h1
        sx={{
          fontSize: "3rem",
          margin: "0.67rem",
        }}
      >
        Brian Andrews
      </Themed.h1>
      <a
        href="https://github.com/sbardian"
        title="Github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Gravatar
          email="sbardian@gmail.com"
          data-testid="gravatar-image"
          size={150}
          sx={{
            height: "150px",
            width: "150px",
            borderRadius: "90px",
            perspective: "100px",
            marginTop: "0.67em",
          }}
        />
      </a>
      <Themed.h5
        sx={{
          marginTop: "0.67rem",
        }}
      >
        portfolio
      </Themed.h5>
    </div>
  )

export default Avatar
