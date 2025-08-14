"use client";
import { Flex, Select, Text, Button, Textarea } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { IoAddSharp, IoSaveOutline } from "react-icons/io5";
import Sets from "./Sets";
import Form from "./Form";
import useFormLogic from "./useFormLogic";
import InputLabeled from "../ui/InputLabeled";

const CardContent = ({ exercises }) => {
  const {
    selectExerc,
    setSelectExerc,
    selectDate,
    setSelectDate,
    sets,
    quality,
    setQuality,
    notes,
    setNotes,
    handleAddSet,
    handleDeleteSet,
    updateSet,
    onSubmit,
    isSubmitting,
  } = useFormLogic();

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
            data={exercises.map((exercise) => ({
              value: exercise.id,
              label: exercise.name,
            }))}
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
      <Form form={quality} setForm={setQuality} />

      {/* Fifth row */}
      <Flex w={"full"} direction={"column"} gap={4}>
        <Text size="sm">Notes</Text>
        <Textarea
          w={"full"}
          placeholder="How did you feel?"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </Flex>

      {/* Sixth row */}
      <Flex w={"full"} justify={"center"}>
        <Button
          leftSection={<IoSaveOutline size={20} />}
          variant="filled"
          onClick={onSubmit}
          disabled={isSubmitting}
        >
          Save exercise
        </Button>
      </Flex>
    </Flex>
  );
};

export default CardContent;
