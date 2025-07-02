"use client";

import { Flex, Select, Loader, Text } from "@mantine/core";
import useFetchAllExercises from "../hooks/useFetchAllExercises";
import { DatePickerInput } from "@mantine/dates";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

const CardContent = () => {
  const { exercises } = useFetchAllExercises();

  if (!exercises) {
    return (
      <Flex justify={"center"}>
        <Loader />
      </Flex>
    );
  }

  return (
    <Flex
      w={"full"}
      justify={"space-between"}
      gap={16}
      direction={{ base: "column", sm: "row" }}
    >
      <InputLabeled label="Exercise">
        <Select
          placeholder="Select exercise"
          flex={1}
          data={exercises.map((exercise) => exercise.name)}
        />
      </InputLabeled>

      <InputLabeled label="Date">
        <DatePickerInput placeholder="Pick date and time" flex={1} />
      </InputLabeled>
    </Flex>
  );
};

export default CardContent;

const InputLabeled = ({ children, label }) => (
  <Flex direction={"column"} flex={1} gap={4}>
    <Text size="sm">{label}</Text>
    {children}
  </Flex>
);
