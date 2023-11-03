import { Box, HStack, Text, useColorModeValue } from "native-base";
import React from "react";
import { Circle, Path, Rect, Svg } from "react-native-svg";

export const Masthead = ({ title, children }) => {
  return (
    <HStack safeArea h={"150px"} pb={5} alignItems={"center"}>
      <Svg
        position="absolute"
        top={"1/2"}
        left={"1/2"}
        opacity={0.5}
        viewBox="0 0 746 746"
        fill="transparent"
      >
        <Circle
          cx="228"
          cy="350"
          r="90"
          fill={useColorModeValue("#E2CBCD", "#0a1930")}
        />
        <Circle
          cx="518"
          cy="350"
          r="90"
          fill={useColorModeValue("#E2CBCD", "#0a1930")}
        />
        <Circle
          cx="376"
          cy="215"
          r="90"
          fill={useColorModeValue("#E2CBCD", "#0a1930")}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M255.857 374.142C263.667 366.332 276.331 366.332 284.141 374.142L374.104 464.105L464.066 374.142C471.877 366.332 484.54 366.332 492.35 374.142L499.421 381.213C507.232 389.024 507.232 401.687 499.421 409.497L409.401 499.518C409.794 501.619 410 503.785 410 506V586C410 605.33 394.33 621 375 621C355.67 621 340 605.33 340 586V506C340 504.322 340.118 502.672 340.346 501.058L248.786 409.497C240.975 401.687 240.975 389.024 248.786 381.213L255.857 374.142Z"
          fill={useColorModeValue("#E2CBCD", "#0a1930")}
        />
        <Rect
          x="349"
          y="328"
          width="50"
          height="90"
          rx="25"
          fill={useColorModeValue("#E2CBCD", "#0a1930")}
        />
        <Circle
          cx="373"
          cy="373"
          r="343"
          stroke={useColorModeValue("#E2CBCD", "#0a1930")}
          strokeWidth="60"
        />
      </Svg>
      <Box
        position="absolute"
        left={0}
        bottom={0}
        w="full"
        h="150px"
        opacity={0.4}
        // bg={{
        //   linearGradient: {
        //     colors: [
        //       useColorModeValue("pink.default", "black.default"),
        //       "transparent",
        //     ],
        //     start: [0, 0],
        //     end: [0, 1],
        //   },
        // }}
      />
      {children}
      <Text
        color={useColorModeValue("pink.default", "black.default")}
        px={3}
        fontSize={"4xl"}
        bold
      >
        {title}
      </Text>
    </HStack>
  );
};
