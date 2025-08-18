"use client";
import {
  Button,
  Flex,
  Modal,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IoAddSharp } from "react-icons/io5";
import { GiWeightLiftingUp } from "react-icons/gi";
import { useState } from "react";
import { postExercise } from "@/app/actions/postExercise";
import { notifyError, notifySuccess } from "../notifications/notify";
import { useRouter } from "next/navigation";

const Section = ({ exercises, isUser }) => {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const [newExercise, setNewExercise] = useState(false);

  const onSave = async () => {
    if (!newExercise) {
      return notifyError(
        "Incorrect input",
        "Remember to write text on your input!"
      );
    }

    const input = newExercise?.trim();
    const duplicate = exercises.some(
      (e) => e.name.toLowerCase() === input.toLowerCase()
    );

    if (duplicate) {
      return notifyError("Already exists", "Exercise already exists!");
    }

    try {
      await postExercise(input);
      notifySuccess("Success", "Exercise added");
      close();
      router.refresh();
    } catch (err) {
      notifyError("Error", err?.message || "Something went wrong");
    }
  };

  const onUserClick = () => {
    notifySuccess(
      "Exercise permission requested",
      "The admin has been notified. Please wait for approval."
    );
  };

  return (
    <Flex
      w={"full"}
      justify="space-between"
      align={{ base: false, sm: "center" }}
      direction={{ base: "column", sm: "row" }}
      gap={8}
    >
      <Stack gap={0}>
        <Title fz={"h1"} fw={700}>
          Log Exercise
        </Title>
        <Text c="gray">
          Track individual exercises with sets, reps and weight
        </Text>
      </Stack>
      <Button
        leftSection={<IoAddSharp size={24} />}
        onClick={isUser ? onUserClick : open}
      >
        New exercise type
      </Button>
      <Modal opened={opened} onClose={close} title="New exercise type" centered>
        <Flex direction={"column"} w={"full"} gap={16}>
          <TextInput
            label="Exercise"
            placeholder="Your new exercise"
            leftSection={<GiWeightLiftingUp />}
            onChange={(e) => {
              setNewExercise(e.target.value);
            }}
          />
          <Button variant="filled" onClick={onSave}>
            Save
          </Button>
        </Flex>
      </Modal>
    </Flex>
  );
};

export default Section;
