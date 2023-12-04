import React, { useState } from "react";
import { Icon, VStack, useColorModeValue, Fab, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import AnimatedColorBox from "../components/animated-color-box";
import { Masthead } from "../components/masthead";
import NavBar from "../components/navbar";
import { useDispatch } from "react-redux";
import NoteList from "../components/note-list";
import shortid from "shortid";
import { addNote } from "../redux/actions/actions";

export function Notes() {
  const dispatch = useDispatch();
  const [editingItemId, setEditingItemId] = useState(null);

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
            Notes
          </Text>
        }
      >
        <NavBar />
      </Masthead>

      <VStack
        flex={1}
        bg={useColorModeValue("light.default", "dark.default")}
        px="20px"
      >
        <NoteList
          editingItemId={editingItemId}
          setEditingItemId={setEditingItemId}
        />
      </VStack>
      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={
          <Icon
            color={useColorModeValue("light.default", "dark.default")}
            as={<AntDesign name="plus" />}
            size="sm"
          />
        }
        _pressed={{
          bg: useColorModeValue("dark.defaultOpacity", "light.defaultOpacity"),
        }}
        bg={useColorModeValue("dark.default", "light.default")}
        onPress={() => {
          const id = shortid.generate();
          dispatch(
            addNote({
              id: id,
              title: "",
              content: ``,
              folders: ["all"],
            })
          );
          setEditingItemId(id);
        }}
      />
    </AnimatedColorBox>
  );
}
