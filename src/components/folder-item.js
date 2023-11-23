import React, { useCallback } from "react";
import {
  useColorModeValue,
  Pressable,
  Text,
  Input,
  HStack,
  Icon,
} from "native-base";
import { Feather } from "@expo/vector-icons";

function FolderItem({
  id,
  name,
  onChangeName,
  onFinishEditing,
  onRemoveFolder,
  isEditing,
  currentFolder,
  setCurrentFolder,
}) {
  const handleChangeSubject = useCallback(
    (e) => {
      onChangeName && onChangeName(e.nativeEvent.text);
    },
    [onChangeName]
  );

  return isEditing ? (
    <Input
      placeholder="Name"
      value={name}
      variant="unstyled"
      color={useColorModeValue("dark.default", "light.default")}
      fontWeight={"bold"}
      fontSize={"lg"}
      px={2.5}
      py={0}
      autoFocus
      blurOnSubmit
      onChange={handleChangeSubject}
      onBlur={onFinishEditing}
    />
  ) : (
    <HStack
      bg={
        id === currentFolder
          ? useColorModeValue("dark.default", "light.default")
          : "transparent"
      }
      rounded={5}
      px={1.5}
      alignItems={"center"}
      space={1.5}
    >
      <Pressable
        flex={1}
        flexDirection="row"
        rounded={5}
        onPress={() => setCurrentFolder(id)}
      >
        <Text
          fontSize={"lg"}
          fontWeight={"bold"}
          color={
            id === currentFolder
              ? useColorModeValue("light.default", "dark.default")
              : useColorModeValue("dark.default", "light.default")
          }
        >
          {name}
        </Text>
      </Pressable>
      {id !== "all" && (
        <Pressable
          _pressed={{
            opacity: 0.5,
          }}
          onPress={() => onRemoveFolder(id)}
        >
          <Icon
            color={
              id === currentFolder
                ? useColorModeValue("light.default", "dark.default")
                : useColorModeValue("dark.default", "light.default")
            }
            as={<Feather name="trash-2" />}
            size="sm"
          />
        </Pressable>
      )}
    </HStack>
  );
}

export default FolderItem;
