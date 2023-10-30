import * as React from "react";
import { useColorModeValue } from "native-base";
import NavBar from "../components/navbar";
import { Masthead } from "../components/masthead";
import AnimatedColorBox from "../components/animated-color-box";

export function ToDo() {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("black.default", "green.default")}
      w="full"
    >
      <Masthead title={"ToDo"}>
        <NavBar />
      </Masthead>
    </AnimatedColorBox>
  );
}