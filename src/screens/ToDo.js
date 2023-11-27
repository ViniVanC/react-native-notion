import React, { useState } from "react";
import { Icon, VStack, useColorModeValue, Fab, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import AnimatedColorBox from "../components/animated-color-box";
import TaskList from "../components/task-list";
import shortid from "shortid";
import { Masthead } from "../components/masthead";
import NavBar from "../components/navbar";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/actions";

export function ToDo({}) {
  const dispatch = useDispatch();
  const [editingItemId, setEditingItemId] = useState(null);
  const [currentFolder, setCurrentFolder] = useState("all");

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
            ToDo
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
        <TaskList
          currentFolder={currentFolder}
          editingItemId={editingItemId}
          setEditingItemId={setEditingItemId}
          setCurrentFolder={setCurrentFolder}
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
            addTask({
              id,
              subject: "",
              done: false,
              folders: ["all"],
              reminder: "",
            })
          );
          setEditingItemId(id);
          setCurrentFolder("all");
        }}
      />
    </AnimatedColorBox>
  );
}
