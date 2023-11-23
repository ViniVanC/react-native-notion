import React, { useCallback } from "react";
import {
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NavBar = () => {
  const navigation = useNavigation();
  const handlePressMenuButton = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  return (
    <HStack h={40} alignItems="center" alignContent="center" p={3}>
      <IconButton
        onPress={handlePressMenuButton}
        borderRadius={100}
        _icon={{
          as: Feather,
          name: "menu",
          size: 6,
          color: useColorModeValue("dark.default", "light.default"),
        }}
        _light={{
          colorScheme: "light",
          _pressed: {
            bg: "#00000020",
          },
        }}
        _dark={{
          colorScheme: "dark",
          _pressed: {
            bg: "#ffffff20",
          },
        }}
      />
    </HStack>
  );
};

export default NavBar;
