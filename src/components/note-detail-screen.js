import React, { useEffect, useState } from "react";
import { ScrollView, Text, VStack, useColorModeValue } from "native-base";
import AnimatedColorBox from "./animated-color-box";
import { Masthead } from "./masthead";
import NavBar from "./navbar";
import { useSelector } from "react-redux";
import { MarkdownText } from "./markdown-text";

export function NoteDetailScreen({ route }) {
  const { noteId } = route.params;
  const data = useSelector((state) => state.notes);
  const [note, setNote] = useState(null);

  useEffect(() => {
    const foundNote = data.find((n) => n.id === noteId);
    setNote(foundNote);
  }, [noteId]);

  if (!note) {
    return <Text>Нотатка не знайдена</Text>;
  }
  console.log(note.content);
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
            fontSize={"2xl"}
          >
            {note.title}
          </Text>
        }
      >
        <NavBar />
      </Masthead>

      <ScrollView>
        <VStack
          flex={1}
          bg={useColorModeValue("light.default", "dark.default")}
          px="20px"
        >
          <MarkdownText card={true}>{note.content}</MarkdownText>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  );
}
