/** @jsx jsx */
/* eslint-disable react/jsx-pascal-case */
import { jsx, Styled } from "theme-ui"
import Gravatar from "react-gravatar"

const Avatar: React.FC = () => {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr",
        justifyItems: "center",
        alignItems: "center ",
      }}
    >
      <Styled.h1
        sx={{
          fontSize: "3rem",
          marginBottom: "0.04rem",
        }}
      >
        Brian Andrews
      </Styled.h1>
      <a
        href="https://github.com/sbardian"
        title="Github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Gravatar
          email="sbardian@gmail.com"
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
      <Styled.h5
        sx={{
          marginTop: "0.5rem",
          color: "white",
        }}
      >
        portfolio
      </Styled.h5>
    </div>
  )
}

export default Avatar
