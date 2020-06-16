interface ProjectNode {
  id: string
  name: string
  description: string
  demoUrl: string
  repoUrl: string
  technologies: [string]
  image: {
    asset: {
      fluid: {
        base64: string
        aspectRatio: number
        src: string
        srcSet: string
        srcWebp: string
        srcSetWebp: string
        sizes: string
      }
    }
  }
  rank: number
}

interface AllSanityProjectsEdges {
  edges: Array<{ node: ProjectNode }>
}

interface AllsanityProjects {
  allSanityProjects: AllSanityProjectsEdges
}

interface ProjectsData {
  data: {
    allSanityProjects: AllSanityProjects
  }
}

interface ProjectsProps {
  projects: AllSanityProjectsEdges
}

interface ArticleProps {
  name?: string
}

interface PageLayoutProps {
  showFooter?: boolean
}

/** Gatsby Site meta data */
interface SiteMetadata {
  site: {
    siteMetadata: {
      author: string
      title: string
      description: string
      keywords: string
    }
  }
}

interface AnimationsObject {
  to: string
  title: string
}

interface AnimationProps {
  animations: AnimationsObject[]
}

interface AnimationNavProps extends AnimationProps {
  current: AnimationsObject
}

interface AnimationImageLinkProps {
  imageSrc: string
  to: string
  name: string
}

interface SetMenuStatusFn {
  (status: boolean): void
}

type PortfolioColorMode = "dark" | "light"

interface SetColorMode {
  setColorMode: React.Dispatch<React.SetStateAction<PortfolioColorMode>>
}

interface MenuBarProps extends SetColorMode {
  menuStatus: boolean
  setMenuStatus: SetMenuStatusFn
  colorMode: PortfolioColorMode
}

interface TechnologiesProps {
  technologies?: Array<string>
}

interface UseShowMenu {
  (current: number): Omit<MenuBarProps, "colorMode" | "setColorMode">
}

interface UseGetColorMode {
  ({ setColorMode }: SetColorMode): void
}
