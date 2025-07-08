import { notifications } from "@mantine/notifications";

export const notifyError = (title, message) => {
  notifications.show({ title, message, color: "red" });
};

export const notifySuccess = (title, message) => {
  notifications.show({ title, message, color: "teal" });
};
