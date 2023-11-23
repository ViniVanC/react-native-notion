import { extendTheme } from "native-base";

const LinearGradient = require("expo-linear-gradient").LinearGradient;

const config = {
  useSystemColorMode: true,
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

const colors = {
  light: { default: "#F5E7C6", defaultOpacity: "#F5E7C695" },
  dark: { default: "#222222", defaultOpacity: "#22222295" },
  red: "#e03169",
  blueGreen: "#4aa889",
  myYellow: "#e6b86c",
};

export default extendTheme({ config, colors });
