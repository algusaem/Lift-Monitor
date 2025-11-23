"use client";
import { LineChart } from "@mantine/charts";
import { Text, Title } from "@mantine/core";
import CardItem from "../ui/CardItem";

export function TrainingsChart({ data }) {
  return (
    <CardItem w="full">
      <Title order={3} mb="md">
        Training Sessions This Year
      </Title>
      <Text size="sm" c="dimmed" mb="lg">
        Number of training days per month
      </Text>
      <LineChart
        h={300}
        data={data}
        dataKey="month"
        series={[
          { name: "trainings", color: "blue.6", label: "Training Days" },
        ]}
        curveType="linear"
        gridAxis="xy"
        withLegend
        legendProps={{ verticalAlign: "bottom" }}
      />
    </CardItem>
  );
}
