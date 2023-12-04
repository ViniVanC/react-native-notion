import React, { useCallback, useRef } from "react";
import { ScrollView } from "react-native-gesture-handler";
import NoteItem from "./note-item";
import { useDispatch, useSelector } from "react-redux";
import { makeStyledComponent } from "../utils/styled";
import { deleteNote, editNote } from "../redux/actions/actions";
import { AnimatePresence, View } from "moti";

const StyledView = makeStyledComponent(View);
const StyledScrollView = makeStyledComponent(ScrollView);

export const AnimatedNoteItem = ({
  data,
  isEditing,
  onChangeNote,
  onFinishEditing,
  onRemove,
}) => {
  const handleChangeNote = useCallback(
    (title, content) => {
      onChangeNote(data, title, content);
    },
    [data, onChangeNote]
  );

  const handleFinishEditing = useCallback(() => {
    onFinishEditing(data);
  }, [data, onFinishEditing]);

  const handleRemoveNote = useCallback(() => {
    onRemove(data);
  }, [data, onRemove]);

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
      <NoteItem
        id={data.id}
        title={data.title}
        content={data.content}
        isEditing={isEditing}
        onChangeNote={handleChangeNote}
        onFinishEditing={handleFinishEditing}
        onRemoveNote={handleRemoveNote}
      />
    </StyledView>
  );
};

function NoteList({ editingItemId, setEditingItemId }) {
  const refScrollView = useRef(null);
  const data = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleChangeNote = useCallback(
    (item, newTitle, newContent) => {
      const updatedNote = { ...item, title: newTitle, content: newContent };
      dispatch(editNote(updatedNote));
    },
    [dispatch]
  );

  const handleFinishEditingNote = useCallback((_item) => {
    setEditingItemId(null);
  }, []);

  const removeNote = useCallback(
    (note) => {
      dispatch(deleteNote(note.id));
    },
    [dispatch]
  );

  return (
    <StyledScrollView ref={refScrollView}>
      <AnimatePresence>
        {data.map((item) => (
          <AnimatedNoteItem
            key={item.id}
            data={item}
            isEditing={item.id === editingItemId}
            onChangeNote={handleChangeNote}
            onFinishEditing={handleFinishEditingNote}
            onRemove={removeNote}
          />
        ))}
      </AnimatePresence>
    </StyledScrollView>
  );
}

export default NoteList;
