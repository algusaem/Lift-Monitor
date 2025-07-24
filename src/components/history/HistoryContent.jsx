"use client";

import { Flex, Text } from "@mantine/core";
import Filters from "./Filters";
import { FiltersProvider } from "./useFilters";
import CardItem from "../ui/CardItem";

const HistoryContent = ({ exercises, exercise_log }) => {
  return (
    <FiltersProvider>
      <Filters exercises={exercises} />
      {exercise_log.map((log) => (
        <HistoryItem log={log} key={log.id} />
      ))}
    </FiltersProvider>
  );
};

export default HistoryContent;

const HistoryItem = ({ log }) => {
  console.log(log);
  return (
    <CardItem w={"full"} h={"100%"}>
      <Flex w={"full"} h={"100%"} direction={"column"} gap={32}>
        <Text>Name: {log.exercise_name}</Text>
        <Text>
          Date:
          {new Date(log.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Text>

        <Text>Quality: {log.form_quality}</Text>
        <Text>Sets:</Text>
        {log.sets.map((set, index) => (
          <Flex key={index} gap={16}>
            <Text>Weight: {set.weight}</Text>
            <Text>Reps: {set.reps}</Text>
          </Flex>
        ))}

        <Text>Notes: {log.notes}</Text>
      </Flex>
    </CardItem>
  );
};
