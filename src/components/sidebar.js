import React, { useCallback } from "react";
import { VStack, Center, useColorModeValue } from "native-base";
import AnimatedColorBox from "./animated-color-box";
import ThemeToggle from "./theme-toggle";
import MenuButton from "./menu-button";

const Sidebar = ({ state, navigation }) => {
  const currentRoute = state.routeNames[state.index];

  const handlePressMenuHome = useCallback(() => {
    navigation.navigate("Home");
  }, [navigation]);

  const handlePressMenuTasks = useCallback(() => {
    navigation.navigate("Tasks");
  }, [navigation]);

  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate("About");
  }, [navigation]);

  return (
    <AnimatedColorBox
      safeArea
      flex={1}
      bg={useColorModeValue("pink.default", "black.default")}
      p={7}
    >
      <VStack flex={1} space={2}>
        <MenuButton
          active={currentRoute === "Home"}
          onPress={handlePressMenuHome}
          icon="home"
        >
          Home
        </MenuButton>
        <MenuButton
          active={currentRoute === "Tasks"}
          onPress={handlePressMenuTasks}
          icon="inbox"
        >
          Tasks
        </MenuButton>
        {/* <MenuButton
          active={currentRoute === "About"}
          onPress={handlePressMenuAbout}
          icon="info"
        >
          About
        </MenuButton> */}
      </VStack>
      <Center>
        <ThemeToggle />
      </Center>
    </AnimatedColorBox>
  );
};

export default Sidebar;
