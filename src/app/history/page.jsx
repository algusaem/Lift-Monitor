import Navbar from "@/components/navbar/navbar";
import { nonAuthRedirect } from "@/lib/authRedirect";
import { Stack, Text, Title } from "@mantine/core";
import { getExerciseLog } from "../actions/getExerciseLog";
import Loader from "@/components/ui/Loader";
import { getExercises } from "../actions/getExercises";
import HistoryContent from "@/components/history/HistoryContent";

export default async function History() {
  await nonAuthRedirect(); // Redirects user if not logged in

  const exercises = await getExercises();
  const exercise_log = await getExerciseLog();

  if (!exercise_log || !exercises) return <Loader />;
  if (exercise_log.length === 0) return <Stack> No history found </Stack>;

  return (
    <Stack bg={"snow"} h={"100%"} w={"100%"}>
      <Stack w={"full"} align="center">
        <Navbar />
        <Stack w={{ base: "100%", md: "60%" }} px={16}>
          <PageTitle />
          <HistoryContent exercises={exercises} exercise_log={exercise_log} />
        </Stack>
      </Stack>
    </Stack>
  );
}

const PageTitle = () => (
  <Stack gap={0}>
    <Title fz={"h1"} fw={700}>
      Exercise History
    </Title>
    <Text c="gray">
      Track your recent lifts and monitor your progress over time.
    </Text>
  </Stack>
);
