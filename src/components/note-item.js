import React, { useCallback, useState } from "react";
import {
  Pressable,
  Box,
  useColorModeValue,
  Icon,
  Input,
  Text,
  VStack,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MarkdownText } from "./markdown-text";

const NoteItem = ({
  id,
  title,
  content,
  isEditing,
  onChangeNote,
  onFinishEditing,
  onRemoveNote,
}) => {
  const navigation = useNavigation();
  const handleNoteClick = (noteId) => {
    navigation.navigate("NoteDetail", { noteId });
  };

  return (
    <Pressable
      flexDirection="row"
      alignItems="center"
      w="full"
      p={2}
      mt={2}
      rounded={10}
      bg={useColorModeValue("dark.default", "light.default")}
      onPress={() => handleNoteClick(id)}
    >
      <VStack
        py={0.7}
        px={4}
        space={2}
        rounded={10}
        bg={useColorModeValue("dark.default", "light.default")}
      >
        <Text
          fontFamily={"eUkraineHead-NAME"}
          fontSize={"lg"}
          color={useColorModeValue("light.default", "dark.default")}
        >
          {title === "" ? "Undefined" : title}
        </Text>
      </VStack>
    </Pressable>
  );
};

export default NoteItem;
