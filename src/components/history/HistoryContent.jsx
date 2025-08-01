"use client";

import { CiCalendarDate } from "react-icons/ci";
import { Badge, Divider, Flex, Group, Stack, Text } from "@mantine/core";
import Filters from "./Filters";
import { FiltersProvider, useFilters } from "./useFilters";
import CardItem from "../ui/CardItem";

const HistoryContent = ({ exercises, exercise_log }) => (
  <FiltersProvider>
    <FilteredLogs exercises={exercises} exercise_log={exercise_log} />
  </FiltersProvider>
);

const FilteredLogs = ({ exercises, exercise_log }) => {
  const { selectExerc, startDate, endDate } = useFilters();

  const filtered = exercise_log.filter((log) => {
    const matchesExercise = !selectExerc || log.exercise_id === selectExerc;

    const toDateOnly = (date) => {
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    };

    const logDate = toDateOnly(new Date(log.date));
    const matchesStart =
      !startDate || logDate >= toDateOnly(new Date(startDate));
    const matchesEnd = !endDate || logDate <= toDateOnly(new Date(endDate));

    return matchesExercise && matchesStart && matchesEnd;
  });

  return (
    <>
      <Filters exercises={exercises} />
      {filtered.map((log) => (
        <HistoryItem log={log} key={log.id} />
      ))}
      {filtered.length === 0 && (
        <Text align="center" c="dimmed" mt={32}>
          No entries match your filters.
        </Text>
      )}
    </>
  );
};

export default HistoryContent;

const HistoryItem = ({ log }) => (
  <CardItem w={"full"} h={"100%"} mb={16}>
    <Flex w={"full"} h={"100%"} direction={"column"} gap={32}>
      <HistoryHeader log={log} />

      <Flex direction={"column"} gap={16}>
        <Text fw={600}>Sets:</Text>
        <Flex gap={16} wrap={"wrap"} w={"full"}>
          {log.sets.map((set, index) => (
            <SetItem set={set} key={index} index={index} />
          ))}
        </Flex>
      </Flex>

      <Divider />

      <Flex mb={16} direction={"column"} gap={8}>
        <Text fw={600}>Notes:</Text>
        <Text size="sm">{log.notes}</Text>
      </Flex>
    </Flex>
  </CardItem>
);

const HistoryHeader = ({ log }) => {
  const qualities = ["Horrible", "Bad", "Decent", "Good", "Excellent"];
  const qualityLabel = qualities[log.form_quality] || "Unknown";
  const qualityColor = log.form_quality >= 2 ? "green" : "red";

  return (
    <Flex w="100%" justify="space-between" align="flex-start">
      <Stack gap={4} spacing={4}>
        <Text fw={600} size="lg">
          {log.exercise_name}
        </Text>
        <Group gap={4} align="center">
          <CiCalendarDate size={20} color="gray" />
          <Text size="sm" c="dimmed">
            {new Date(log.date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
        </Group>
      </Stack>
      <Badge size="sm" variant="dot" color={qualityColor}>
        {qualityLabel}
      </Badge>
    </Flex>
  );
};

const SetItem = ({ set, index }) => (
  <CardItem gap={16}>
    <Text fw={600} size="sm">
      Set {index + 1}
    </Text>
    <Text size="xl" c="var(--mantine-color-persian-6)" fw={700}>
      {set.weight} kg x {set.reps} reps
    </Text>
    <Text fw={600} c={"gray"} size="xs">
      Volume: {set.weight * set.reps} kg
    </Text>
  </CardItem>
);
