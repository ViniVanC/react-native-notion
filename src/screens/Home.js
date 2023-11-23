import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  HStack,
  Icon,
  Pressable,
  ScrollView,
  Text,
  VStack,
  useColorModeValue,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import NavBar from "../components/navbar";
import Card from "../components/card";
import { Masthead } from "../components/masthead";
import AnimatedColorBox from "../components/animated-color-box";
import TaskList from "../components/task-list";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import NameModal from "../components/name-modal";
import {
  addTask,
  addUserName,
  createFolder,
} from "../redux/actions/todoActions";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const data = useSelector((state) => state);
  const [nameModal, setNameModal] = useState(false);
  const [editingItemId, setEditingItemId] = useState(null);
  const [currentFolder, setCurrentFolder] = useState("all");

  const loadTasksFromStorage = async () => {
    try {
      const storedData = await AsyncStorage.getItem("todoData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        parsedData.folders.forEach((folder) => dispatch(createFolder(folder)));
        parsedData.tasks.forEach((task) => dispatch(addTask(task)));
        dispatch(addUserName(parsedData.userName));
        if (parsedData.userName === "") {
          openNameModal();
        }
      }
    } catch (error) {
      console.error("Помилка завантаження f&t:", error);
    }
  };

  useEffect(() => {
    if (data.folders.length === 0) {
      loadTasksFromStorage();
    }
  }, []);

  const openNameModal = () => {
    setNameModal(true);
  };
  const closeNameModal = () => {
    setNameModal(false);
  };

  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("light.default", "dark.default")}
      w="full"
    >
      <NameModal nameModal={nameModal} closeNameModal={closeNameModal} />
      <Masthead
        title={
          <>
            <Text
              color={useColorModeValue("dark.default", "light.default")}
              fontSize={"4xl"}
              fontWeight={"bold"}
            >
              hi
              <Text
                color={useColorModeValue("dark.default", "light.default")}
                px={3}
                fontSize={"4xl"}
                onPress={openNameModal}
              >
                {data.userName !== "" ? ", " + data.userName : ""}
              </Text>
              !
            </Text>
            <Icon
              color={useColorModeValue("dark.default", "light.default")}
              as={<Feather name="edit" />}
              mt={2}
              ml={1}
              opacity={0.7}
              size={"15px"}
              onPress={openNameModal}
            />
          </>
        }
      >
        <NavBar />
      </Masthead>

      <ScrollView vertical contentContainerStyle={{ minHeight: "100px" }}>
        <VStack flex={1} px={6} pb={5} space={3}>
          {/* <HStack space={3}>
            <Card title="Habit" width="50%">
              <HStack
                p={5}
                flex={1}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  _text={{
                    color: useColorModeValue("dark.default", "light.default"),
                    opacity: 0.5,
                    fontSize: 20,
                  }}
                >
                  <Text
                    fontSize={60}
                    lineHeight={60}
                    fontWeight={"bold"}
                    color={useColorModeValue("dark.default", "light.default")}
                  >
                    3
                  </Text>
                  /5
                </Box>
              </HStack>
            </Card>

            <Card title="Money" width="45%" dark={true}>
              <HStack
                p={5}
                pb={2}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text
                  fontSize={40}
                  lineHeight={40}
                  fontWeight={"semibold"}
                  color={useColorModeValue("dark.default", "light.default")}
                >
                  352
                </Text>
              </HStack>
              <HStack justifyContent={"center"} space={2.5}>
                <Pressable
                  p={3}
                  rounded={"full"}
                  borderWidth={3}
                  borderColor={"blueGreen"}
                  _pressed={{
                    opacity: 0.5,
                  }}
                >
                  <Icon
                    as={Feather}
                    name={"arrow-up"}
                    size="md"
                    color={"blueGreen"}
                  />
                </Pressable>
                <Pressable
                  p={3}
                  rounded={"full"}
                  borderWidth={3}
                  borderColor={"red"}
                  _pressed={{
                    opacity: 0.5,
                  }}
                >
                  <Icon
                    as={Feather}
                    name={"arrow-down"}
                    size="md"
                    color={"red"}
                  />
                </Pressable>
              </HStack>
            </Card>
          </HStack> */}
          <Card title="Tasks">
            <Box maxH={200}>
              {data.tasks.length !== 0 ? (
                <TaskList
                  currentFolder={currentFolder}
                  editingItemId={editingItemId}
                  setEditingItemId={setEditingItemId}
                  setCurrentFolder={setCurrentFolder}
                />
              ) : (
                <Pressable
                  alignItems={"center"}
                  justifyContent={"center"}
                  rounded={10}
                  p={2}
                  mt={3}
                  bg={useColorModeValue("dark.default", "light.default")}
                  _pressed={{
                    bg: useColorModeValue(
                      "dark.defaultOpacity",
                      "light.defaultOpacity"
                    ),
                  }}
                  onPress={() => navigation.navigate("Tasks")}
                >
                  <Icon
                    as={Feather}
                    name={"plus"}
                    size="md"
                    color={useColorModeValue("light.default", "dark.default")}
                  />
                </Pressable>
              )}
            </Box>
          </Card>
          {/* <Card title="Notes" dark={true}>
            <VStack maxH={200}>
              <ScrollView
                vertical
                nestedScrollEnabled={true}
                contentContainerStyle={{ minHeight: "100px" }}
              >
                <VStack
                  p={4}
                  mt={2}
                  rounded={10}
                  bg={useColorModeValue("dark.default", "light.default")}
                >
                  <Text
                    fontSize={"lg"}
                    fontWeight={"bold"}
                    color={useColorModeValue("dark.default", "light.default")}
                  >
                    Note #1
                  </Text>
                  <Text
                    fontSize={"sm"}
                    color={useColorModeValue("dark.default", "light.default")}
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi sequi enim expedita provident dicta similique ipsum
                    delectus voluptas. Aspernatur quae fugit ab dolores
                    excepturi magnam temporibus doloribus? Quae, quibusdam
                    consequatur.
                  </Text>
                </VStack>
              </ScrollView>
            </VStack>
          </Card> */}
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  );
}
