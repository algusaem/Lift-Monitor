"use client";
import { Flex, Select, Text, Button, Textarea } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { IoAddSharp, IoSaveOutline } from "react-icons/io5";
import { useState } from "react";
import Sets from "./Sets";
import Form from "./Form";

const CardContent = ({ exercises }) => {
  const [selectExerc, setSelectExerc] = useState(null);
  const [selectDate, setSelectDate] = useState(null);
  const [sets, setSets] = useState([{ weight: "", reps: "" }]);
  const [form, setForm] = useState(undefined);

  const handleAddSet = () => {
    setSets((prev) => [...prev, { weight: "", reps: "" }]);
  };

  const handleDeleteSet = (index) => {
    setSets((prev) => prev.filter((_, i) => i !== index));
  };

  const updateSet = (index, field, value) => {
    setSets((prev) =>
      prev.map((set, i) => (i === index ? { ...set, [field]: value } : set))
    );
  };

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
            placeholder="Pick date"
            flex={1}
            variant="filled"
            value={selectDate}
            onChange={setSelectDate}
          />
        </InputLabeled>
      </Flex>

      {/* Second row */}
      <Flex w={"full"} justify={"space-between"} align={"center"}>
        <Text fw={500} size="lg">
          Sets
        </Text>
        <Button
          leftSection={<IoAddSharp size={24} />}
          variant="outline"
          onClick={handleAddSet}
        >
          Add set
        </Button>
      </Flex>

      {/* Third row */}
      {sets.map((set, i) => (
        <Sets
          key={i}
          index={i + 1}
          reps={set.reps}
          weight={set.weight}
          onChange={(field, value) => updateSet(i, field, value)}
          isDeletable={sets.length > 1}
          onDelete={() => handleDeleteSet(i)}
        />
      ))}

      {/* Fourth row */}
      <Form form={form} setForm={setForm} />

      {/* Fifth row */}
      <Flex w={"full"} direction={"column"} gap={4}>
        <Text size="sm">Notes</Text>
        <Textarea w={"full"} placeholder="How did you feel?" />
      </Flex>

      {/* Sixth row */}
      <Flex w={"full"} justify={"center"}>
        <Button
          leftSection={<IoSaveOutline size={20} />}
          variant="filled"
          onClick={() => {}}
        >
          Save exercise
        </Button>
      </Flex>
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
