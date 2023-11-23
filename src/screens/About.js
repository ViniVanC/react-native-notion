import * as React from "react";
import { useColorModeValue } from "native-base";
import NavBar from "../components/navbar";
import { Masthead } from "../components/masthead";
import AnimatedColorBox from "../components/animated-color-box";

export function About() {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("dark.default", "light.default")}
      w="full"
    >
      <Masthead title={"About"}>
        <NavBar />
      </Masthead>
    </AnimatedColorBox>
  );
}
