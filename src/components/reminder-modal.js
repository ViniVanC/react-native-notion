import React, { useEffect, useState } from "react";
import {
  Modal,
  useColorModeValue,
  Pressable,
  Text,
  VStack,
  Icon,
  HStack,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import Reminder from "../components/reminder";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const ReminderModal = ({ reminderModal, closeReminderModal, subject }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    setupNotifications();
  }, []);

  const setupNotifications = async () => {
    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
    setShowTimePicker(false);
  };

  const showTimePickerModal = () => {
    setShowTimePicker(true);
    setShowDatePicker(false);
  };

  const handleDateChange = (event, selected) => {
    setShowDatePicker(false);
    if (selected) {
      setSelectedDate(selected);
    }
  };

  const handleTimeChange = (event, selected) => {
    setShowTimePicker(false);
    if (selected) {
      const newDate = new Date(selectedDate);
      newDate.setHours(selected.getHours());
      newDate.setMinutes(selected.getMinutes());
      setSelectedDate(newDate);
    }
  };

  const scheduleReminder = async () => {
    if (!selectedDate) {
      alert("Please select a date and time for the reminder.");
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Нагадування",
        body: subject,
      },
      trigger: { date: selectedDate },
    });

    setSelectedDate(new Date());
  };

  return (
    <Modal isOpen={reminderModal} onClose={closeReminderModal} size={"md"}>
      <Modal.Content bg={useColorModeValue("pink.default", "black.default")}>
        <Modal.CloseButton
          bg={useColorModeValue("black.default", "pink.default")}
          rounded={100}
          _icon={{
            color: useColorModeValue("pink.default", "black.default"),
          }}
        />
        <Modal.Header
          bg={useColorModeValue("pink.default", "black.default")}
          borderBottomWidth={0}
          _text={{
            color: useColorModeValue("black.default", "pink.default"),
            fontWeight: "bold",
          }}
        >
          Reminder
        </Modal.Header>
        <Modal.Body>
          <VStack rounded={5} px={1.5} space={5}>
            <HStack justifyContent={"center"} space={3}>
              <Reminder
                showDatePicker={showDatePicker}
                showTimePicker={showTimePicker}
                selectedDate={selectedDate}
                handleDateChange={handleDateChange}
                handleTimeChange={handleTimeChange}
              />
              <Pressable
                onPress={showDatePickerModal}
                p={4}
                rounded={50}
                bg={useColorModeValue("black.default", "pink.default")}
                _pressed={{
                  bg: useColorModeValue(
                    "black.defaultOpacity",
                    "pink.defaultOpacity"
                  ),
                }}
              >
                <Icon
                  color={useColorModeValue("pink.default", "black.default")}
                  as={<Feather name="calendar" />}
                  size="lg"
                />
              </Pressable>
              <Pressable
                onPress={showTimePickerModal}
                p={4}
                rounded={50}
                bg={useColorModeValue("black.default", "pink.default")}
                _pressed={{
                  bg: useColorModeValue(
                    "black.defaultOpacity",
                    "pink.defaultOpacity"
                  ),
                }}
              >
                <Icon
                  color={useColorModeValue("pink.default", "black.default")}
                  as={<Feather name="clock" />}
                  size="lg"
                />
              </Pressable>
            </HStack>
            {selectedDate && (
              <VStack alignItems={"center"}>
                <Text
                  color={useColorModeValue("black.default", "pink.default")}
                  fontSize="24px"
                  fontWeight={"bold"}
                >
                  {selectedDate.toLocaleTimeString("uk-UA", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
                <Text
                  color={useColorModeValue("black.default", "pink.default")}
                  fontSize="19px"
                >
                  {selectedDate.toLocaleString([], {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })}
                </Text>
              </VStack>
            )}
            <Text
              color={useColorModeValue("black.default", "pink.default")}
              fontSize="16px"
              textAlign={"center"}
            >
              select the date and time for the reminder{" "}
            </Text>
          </VStack>
        </Modal.Body>
        <Modal.Footer
          borderTopWidth={0}
          py={2}
          bg={useColorModeValue("pink.default", "black.default")}
        >
          <Pressable
            onPress={() => {
              scheduleReminder();
              closeReminderModal();
            }}
            p={2}
            rounded={50}
            bg={useColorModeValue("black.default", "pink.default")}
            _pressed={{
              bg: useColorModeValue(
                "black.defaultOpacity",
                "pink.defaultOpacity"
              ),
            }}
          >
            <Icon
              color={useColorModeValue("pink.default", "black.default")}
              as={<Feather name="check" />}
              size="sm"
            />
          </Pressable>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default ReminderModal;
