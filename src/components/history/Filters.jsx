"use client";

import { Flex, Select } from "@mantine/core";
import InputLabeled from "../ui/InputLabeled";
import { DatePickerInput } from "@mantine/dates";
import { useFilters } from "./useFilters";

const Filters = ({ exercises }) => {
  const {
    selectExerc,
    setSelectExerc,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  } = useFilters();

  return (
    <Flex
      w={"full"}
      gap={16}
      direction={{ base: "column", sm: "row" }}
      wrap="wrap"
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

      <InputLabeled label="From date">
        <DatePickerInput
          placeholder="Pick date"
          flex={1}
          variant="filled"
          value={startDate}
          onChange={setStartDate}
        />
      </InputLabeled>

      <InputLabeled label="To date">
        <DatePickerInput
          placeholder="Pick date"
          flex={1}
          variant="filled"
          value={endDate}
          onChange={setEndDate}
        />
      </InputLabeled>
    </Flex>
  );
};

export default Filters;
