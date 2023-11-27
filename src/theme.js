import { extendTheme } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
  colors: {
    light: { default: "#F5E7C6", defaultOpacity: "#F5E7C695" },
    dark: { default: "#222222", defaultOpacity: "#22222295" },
    red: "#e03169",
    blueGreen: "#4aa889",
    myYellow: "#e6b86c",
  },
});

export default theme;
