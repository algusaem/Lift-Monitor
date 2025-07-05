"use client";
import { Flex, Select, Text, Button } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { IoAddSharp } from "react-icons/io5";
import { useState } from "react";
import Sets from "./Sets";

const CardContent = ({ exercises }) => {
  const [selectExerc, setSelectExerc] = useState(null);
  const [selectDate, setSelectDate] = useState(null);
  const [sets, setSets] = useState(1);

  return (
    <Flex w={"full"} direction={"column"} flex={1} gap={16}>
      {/* First row */}
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
            variant="filled"
            value={selectExerc}
            onChange={setSelectExerc}
          />
        </InputLabeled>

        <InputLabeled label="Date">
          <DatePickerInput
            placeholder="Pick date and time"
            flex={1}
            variant="filled"
            value={selectDate}
            onChange={setSelectDate}
          />
        </InputLabeled>
      </Flex>

      {/* Second row */}
      <Flex w={"full"} justify={"space-between"}>
        <Text fw={500} size="lg">
          Sets
        </Text>
        <Button leftSection={<IoAddSharp size={24} />} variant="outline">
          Add Set
        </Button>
      </Flex>

      {/* Third row */}
      {Array.from({ length: sets }, (_, i) => (
        <Sets key={i + 1} index={i + 1} reps={0} weight={0} />
      ))}
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
