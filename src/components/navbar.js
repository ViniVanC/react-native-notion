import React, { useCallback } from "react";
import { HStack, IconButton, useColorMode } from "native-base";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NavBar = () => {
  const { colorMode } = useColorMode();
  const navigation = useNavigation();
  const handlePressMenuButton = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  return (
    <HStack w="full" h={40} alignItems="center" alignContent="center" p={3}>
      <IconButton
        onPress={handlePressMenuButton}
        borderRadius={100}
        _icon={{
          as: Feather,
          name: "menu",
          size: 6,
          color: colorMode !== "light" && "white",
        }}
      />
    </HStack>
  );
};

export default NavBar;
