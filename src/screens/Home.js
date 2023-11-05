import React, { useRef } from "react";
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
import TaskItem from "../components/task-item";
import TaskList from "../components/task-list";

export function Home() {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("black.default", "pink.default")}
      w="full"
    >
      <Masthead title={"hi, Vini!"}>
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
                    color: useColorModeValue("pink.default", "black.default"),
                    opacity: 0.5,
                    fontSize: 20,
                  }}
                >
                  <Text
                    fontSize={60}
                    lineHeight={60}
                    fontWeight={"bold"}
                    color={useColorModeValue("pink.default", "black.default")}
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
                  color={useColorModeValue("black.default", "pink.default")}
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
              <TaskList />
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
                  bg={useColorModeValue("black.default", "pink.default")}
                >
                  <Text
                    fontSize={"lg"}
                    fontWeight={"bold"}
                    color={useColorModeValue("pink.default", "black.default")}
                  >
                    Note #1
                  </Text>
                  <Text
                    fontSize={"sm"}
                    color={useColorModeValue("pink.default", "black.default")}
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
