"use client";
import { Group, SimpleGrid, Text } from "@mantine/core";
import CardItem from "../ui/CardItem";

export function StatsCards({ stats }) {
  const cards = [
    {
      title: "Total Workouts",
      value: stats.totalWorkouts,
      description: "This year",
      color: "blue",
    },
    {
      title: "Exercises Done",
      value: stats.totalExercises,
      description: "Different exercises",
      color: "teal",
    },
    {
      title: "Total Volume",
      value: `${Math.round(stats.totalVolume).toLocaleString()} kg`,
      description: "Weight × reps",
      color: "indigo",
    },
  ];

  return (
    <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
      {cards.map((card) => (
        <CardItem key={card.title}>
          <Group justify="space-between" mb="xs">
            <Text size="sm" c="dimmed" fw={500}>
              {card.title}
            </Text>
          </Group>
          <Text size="xl" fw={700} c={card.color}>
            {card.value}
          </Text>
          <Text size="xs" c="dimmed" mt="xs">
            {card.description}
          </Text>
        </CardItem>
      ))}
    </SimpleGrid>
  );
}
