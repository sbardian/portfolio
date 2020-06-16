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
  children: React.ReactNode
  name?: string
}

interface PageLayoutProps extends Omit<ArticleProps, "name"> {
  showFooter?: boolean
  useFullScreen?: boolean
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

interface AnimationNavProps {
  animations: AnimationsObject[]
  current: AnimationsObject
}

interface AnimationImageLinkProps {
  imageSrc: string
  to: string
  name: string
}

/** Array of animation objects including their titles and to fields  */
interface AnimationProps {
  animations: AnimationsObject[]
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
