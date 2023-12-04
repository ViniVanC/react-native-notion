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

  const handlePressMenuHabit = useCallback(() => {
    navigation.navigate("Habit");
  }, [navigation]);

  const handlePressMenuMoney = useCallback(() => {
    navigation.navigate("Money");
  }, [navigation]);

  const handlePressMenuTasks = useCallback(() => {
    navigation.navigate("Tasks");
  }, [navigation]);

  const handlePressMenuNotes = useCallback(() => {
    navigation.navigate("Notes");
  }, [navigation]);

  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate("About");
  }, [navigation]);

  return (
    <AnimatedColorBox
      safeArea
      flex={1}
      bg={useColorModeValue("light.default", "dark.default")}
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
          active={currentRoute === "Habit"}
          onPress={handlePressMenuHabit}
          icon="calendar-check"
        >
          Habit
        </MenuButton> */}
        <MenuButton
          active={currentRoute === "Money"}
          onPress={handlePressMenuMoney}
          icon="coins"
        >
          Money
        </MenuButton>
         <MenuButton
          active={currentRoute === "Notes"}
          onPress={handlePressMenuNotes}
          icon="book"
        >
          Notes
        </MenuButton>
          {/*
        <MenuButton
          active={currentRoute === "About"}
          onPress={handlePressMenuAbout}
          icon="info"
        >
          About
        </MenuButton> 
        */}
      </VStack>
      <Center>
        <ThemeToggle />
      </Center>
    </AnimatedColorBox>
  );
};

export default Sidebar;
