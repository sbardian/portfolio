/** @jsx jsx */
/* eslint-disable react/jsx-props-no-spreading */
import { jsx } from "theme-ui"
import posed from "react-pose"
// eslint-disable-next-line
import { Link, GatsbyLinkProps } from "gatsby"
import { GoRepo } from "react-icons/go"
import { MdMovieFilter, MdMessage } from "react-icons/md"

const PosedThinUL = posed.ul({
  open: {
    x: "0%",
    delayChildren: 100,
    staggerChildren: 100,
    height: "auto",
  },
  closed: {
    x: "-100%",
    delay: 700,
    delayChildren: 0,
    staggerChildren: 50,
    height: 0,
    staggerDirection: -1,
  },
})

const PosedThinLI = posed.li({
  open: { opacity: 1, delay: 100 },
  closed: { opacity: 0, duration: 0 },
})

const PosedStyledThinLI: React.FC = ({ children }) => (
  <PosedThinLI
    sx={{
      borderColor: "primary",
      color: "primary",
      backgroundColor: "primary",
      backgroundSize: "cover",
      margin: "30px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderRadius: "100%",
      height: "60px",
      width: "60px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "all 200ms ease-in-out",
      "&:hover": {
        borderRadius: "20px",
        backgroundColor: "primary",
        color: "text",
      },
      "@media (max-width: 520px)": {
        borderRadius: "0",
        margin: "0 0.67rem 0 0.67rem",
        backgroundColor: "transparent",
        width: "auto",
        "&:hover": {
          borderRadius: "20px",
          backgroundColor: "primary",
          color: "text",
        },
      },
    }}
  >
    {children}
  </PosedThinLI>
)

const StyledLink: React.FC<Omit<GatsbyLinkProps<null>, "ref">> = (props) => (
  <Link
    {...props}
    sx={{
      fontSize: 3,
      textDecoration: "none",
      color: "text",
      borderRadius: "100%",
      display: "flex",
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      transition: "font-size 400ms ease-in-out",
      "&:hover": {
        color: "text",
      },
      "&:hover:after": {
        content: "attr(data-name-start)attr(data-name-end)",
      },
      "@media (max-width: 520px)": {
        color: "text",
        "::after": {
          content: "attr(data-name-start)attr(data-name-end)",
        },
      },
    }}
  />
)

const MenuButtons: React.FC<{ menuStatus: boolean }> = ({ menuStatus }) => {
  return (
    <PosedThinUL
      pose={menuStatus ? "open" : "closed"}
      sx={{
        margin: 0,
        marginTop: 2,
        marginBottom: 4,
        padding: 0,
        maxHeight: "320px",
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        alignContent: "start",
        "@media (max-width: 520px)": {
          display: "grid",
          gap: "0.67rem",
          minHeight: "0px",
          gridTemplateColumns: "minmax(200px, 1fr)",
          gridTemplateRows: "repeat(auto-fit)",
        },
      }}
    >
      <PosedStyledThinLI>
        <StyledLink
          to="/"
          data-name-start="P"
          data-name-end="rojects"
          aria-label="Projects"
        >
          <GoRepo
            sx={{
              "@media (max-width: 520px)": {
                display: "none",
              },
            }}
            size="40"
          />
        </StyledLink>
      </PosedStyledThinLI>
      <PosedStyledThinLI>
        <StyledLink
          to="/animations"
          data-name-start="A"
          data-name-end="nimations"
          aria-label="Animations"
        >
          <MdMovieFilter
            sx={{
              "@media (max-width: 520px)": {
                display: "none",
              },
            }}
            size="40"
          />
        </StyledLink>
      </PosedStyledThinLI>
      <PosedStyledThinLI>
        <StyledLink
          to="/contact"
          data-name-start="C"
          data-name-end="ontact"
          aria-label="Contact"
        >
          <MdMessage
            sx={{
              "@media (max-width: 520px)": {
                display: "none",
              },
            }}
            size="40"
          />
        </StyledLink>
      </PosedStyledThinLI>
    </PosedThinUL>
  )
}

export default MenuButtons
