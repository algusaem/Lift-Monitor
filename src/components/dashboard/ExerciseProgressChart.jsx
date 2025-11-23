"use client";
import { LineChart } from "@mantine/charts";
import { Select, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import CardItem from "../ui/CardItem";

export function ExerciseProgressChart({ exerciseData }) {
  const exercises = Object.keys(exerciseData);
  const [selectedExercise, setSelectedExercise] = useState(exercises[0] || "");

  if (exercises.length === 0) {
    return (
      <CardItem w="full">
        <Title order={3} mb="md">
          Exercise Progress
        </Title>
        <Text c="dimmed">
          No exercise data available yet. Start logging workouts!
        </Text>
      </CardItem>
    );
  }

  const chartData =
    exerciseData[selectedExercise]?.map((item) => ({
      date: new Date(item.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      "Max Weight": item.maxWeight,
      "Total Volume": item.totalVolume,
    })) || [];

  return (
    <CardItem w="full">
      <Stack gap="md">
        <div>
          <Title order={3} mb="xs">
            Exercise Progress
          </Title>
          <Text size="sm" c="dimmed">
            Track your strength progression over time
          </Text>
        </div>

        <Select
          label="Select Exercise"
          placeholder="Choose an exercise"
          data={exercises}
          value={selectedExercise}
          onChange={(value) => setSelectedExercise(value)}
          variant="filled"
          searchable
          nothingFoundMessage="No matches"
        />

        {chartData.length > 0 ? (
          <LineChart
            h={300}
            data={chartData}
            dataKey="date"
            series={[
              { name: "Max Weight", color: "indigo.6" },
              { name: "Total Volume", color: "teal.6" },
            ]}
            curveType="monotone"
            gridAxis="xy"
            withLegend
            legendProps={{ verticalAlign: "bottom" }}
            yAxisProps={{ width: 60 }}
          />
        ) : (
          <Text c="dimmed">No data available for this exercise</Text>
        )}
      </Stack>
    </CardItem>
  );
}
