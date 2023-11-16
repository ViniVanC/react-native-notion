import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Reminder({
  showDatePicker,
  showTimePicker,
  selectedDate,
  handleDateChange,
  handleTimeChange,
}) {
  return (
    <>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      {showTimePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handleTimeChange}
        />
      )}
    </>
  );
}
