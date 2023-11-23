import React, { useCallback } from "react";
import { ScrollView, VStack } from "native-base";
import MoneyItem from "./money-item";
import { useDispatch, useSelector } from "react-redux";
import { makeStyledComponent } from "../utils/styled";
import { AnimatePresence, View } from "moti";

const StyledView = makeStyledComponent(View);
const StyledScrollView = makeStyledComponent(ScrollView);

export const AnimatedFolderItem = ({ data }) => {
  return (
    <StyledView
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        marginRight: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
      }}
    >
      <MoneyItem
        id={data.id}
        date={data.date}
        value={data.value}
        status={data.status}
      />
    </StyledView>
  );
};

function MoneyList({ data }) {
  return (
    <StyledScrollView>
      <AnimatePresence>
        <VStack flexDirection={"column-reverse"} mt={5} px={5} space={3}>
          {data.history.map((item) => (
            <AnimatedFolderItem key={item.id} data={item} />
          ))}
        </VStack>
      </AnimatePresence>
    </StyledScrollView>
  );
}

export default MoneyList;
