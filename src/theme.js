import { extendTheme } from "native-base";

const LinearGradient = require("expo-linear-gradient").LinearGradient;

const config = {
  useSystemColorMode: true,
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

const colors = {
  pink: { default: "#e2cbcd", defaultOpacity: "#e2cbcd95" },
  black: { default: "#0a1930", defaultOpacity: "#0a193095" },
  red: "#e03169",
  blueGreen: "#4aa889",
  myYellow: "#e6b86c",
};

export default extendTheme({ config, colors });
