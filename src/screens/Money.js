import React, { useState } from "react";
import { Text, useColorModeValue } from "native-base";
import NavBar from "../components/navbar";
import { Masthead } from "../components/masthead";
import AnimatedColorBox from "../components/animated-color-box";
import MoneyList from "../components/money-list";
import { useSelector } from "react-redux";
import { Purse } from "../components/purse";

export function Money() {
  const data = useSelector((state) => state.money);

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
            Money
          </Text>
        }
      >
        <NavBar />
      </Masthead>
      <Purse />

      <MoneyList data={data} />
    </AnimatedColorBox>
  );
}
