// "#e2cbcd", "#0a1930"
import { extendTheme } from "native-base";

const config = {
  useSystemColorMode: true,
};

const colors = {
  primary: {
    50: "#EEF2F6",
    100: "#CFD9E7",
    200: "#B1C1D8",
    300: "#92A9C9",
    400: "#7491B9",
    500: "#5578AA",
    600: "#446088",
    700: "#334866",
    800: "#223044",
    900: "#111822",
  },
  green: { default: "#a6ccc5", active: "#819f99" },
  black: { default: "#0a1930", active: "#0c1d39" },
};

export default extendTheme({ config, colors });
