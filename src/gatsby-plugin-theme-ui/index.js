import merge from "deepmerge"
import colors from "./colors"
import theme from "./theme"

export default merge({ initialColorMode: `dark`, colors }, theme)
