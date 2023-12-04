import React from "react";
import { Platform } from "react-native";
import { useColorModeValue, useToken } from "native-base";
import Markdown from "react-native-markdown-display";

export function MarkdownText({ children, card = false }) {
  const textColor = useToken(
    "colors",
    useColorModeValue(
      `${card ? "dark" : "light"}.default`,
      `${card ? "light" : "dark"}.default`
    )
  );
  const bgColor = useToken(
    "colors",
    useColorModeValue(
      `${card ? "light" : "dark"}.default`,
      `${card ? "dark" : "light"}.default`
    )
  );

  return (
    <Markdown
      style={{
        body: {
          color: textColor,
          fontFamily: "eUkraine-Regular",
          fontSize: 14,
        },
        hr: {
          backgroundColor: textColor,
          height: 1,
        },
        table: {
          borderWidth: 1,
          borderColor: textColor,
          borderRadius: 3,
        },
        tr: {
          borderBottomWidth: 1,
          borderColor: textColor,
          flexDirection: "row",
        },
        blocklink: {
          flex: 1,
          borderColor: textColor,
          borderBottomWidth: 1,
        },
        blockquote: {
          backgroundColor: bgColor,
          borderColor: textColor,
          borderLeftWidth: 4,
          marginLeft: 5,
          paddingHorizontal: 5,
        },

        code_inline: {
          borderWidth: 1,
          borderColor: textColor,
          backgroundColor: bgColor,
          padding: 10,
          borderRadius: 4,
          ...Platform.select({
            ["ios"]: {
              fontFamily: "Courier",
            },
            ["android"]: {
              fontFamily: "monospace",
            },
          }),
        },
        code_block: {
          borderWidth: 1,
          borderColor: textColor,
          backgroundColor: bgColor,
          padding: 10,
          borderRadius: 4,
          ...Platform.select({
            ["ios"]: {
              fontFamily: "Courier",
            },
            ["android"]: {
              fontFamily: "monospace",
            },
          }),
        },
        fence: {
          borderWidth: 1,
          borderColor: textColor,
          backgroundColor: bgColor,
          padding: 10,
          borderRadius: 4,
          ...Platform.select({
            ["ios"]: {
              fontFamily: "Courier",
            },
            ["android"]: {
              fontFamily: "monospace",
            },
          }),
        },
      }}
    >
      {children}
    </Markdown>
  );
}
