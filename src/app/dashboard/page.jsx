import Navbar from "@/components/navbar/navbar";
import { nonAuthRedirect } from "@/lib/authRedirect";
import { ScrollArea, Stack, Text, Title } from "@mantine/core";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { TrainingsChart } from "@/components/dashboard/TrainingsChart";
import { ExerciseProgressChart } from "@/components/dashboard/ExerciseProgressChart";
import { getTrainingsByMonth } from "@/app/actions/getTrainingsByMonth";
import { getExerciseProgress } from "@/app/actions/getExerciseProgress";
import { getTotalStats } from "@/app/actions/getTotalStats";

export default async function Dashboard() {
  await nonAuthRedirect(); // Redirects user if not logged in

  // Fetch all dashboard data
  const [trainingsByMonth, exerciseProgress, totalStats] = await Promise.all([
    getTrainingsByMonth(),
    getExerciseProgress(),
    getTotalStats(),
  ]);

  return (
    <Stack h="100%" w="100%" bg="snow">
      <Navbar />

      <ScrollArea w="100%" flex={1}>
        <Stack mih="100%" w="100%" align="center" px={16} pb={16}>
          <Stack w={{ base: "100%", md: "60%" }}>
            <PageTitle />
            <StatsCards stats={totalStats} />
            <TrainingsChart data={trainingsByMonth} />
            <ExerciseProgressChart exerciseData={exerciseProgress} />
          </Stack>
        </Stack>
      </ScrollArea>
    </Stack>
  );
}

const PageTitle = () => (
  <Stack gap={0}>
    <Title fz={"h1"} fw={700}>
      Dashboard
    </Title>
    <Text c="gray">Track your progress and stay motivated!</Text>
  </Stack>
);
