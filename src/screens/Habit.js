import * as React from "react";
import { Text, useColorModeValue } from "native-base";
import NavBar from "../components/navbar";
import { Masthead } from "../components/masthead";
import AnimatedColorBox from "../components/animated-color-box";

export function Habit() {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("light.default", "dark.default")}
      w="full"
    >
      <Masthead
        title={
          <Text
            color={useColorModeValue("dark.default", "light.default")}
            fontFamily={"eUkraineHead-NAME"}
            fontSize={"4xl"}
          >
            Habit
          </Text>
        }
      >
        <NavBar />
      </Masthead>
    </AnimatedColorBox>
  );
}
