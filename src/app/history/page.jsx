import Navbar from "@/components/navbar/navbar";
import { nonAuthRedirect } from "@/lib/authRedirect";
import { ScrollArea, Stack, Text, Title } from "@mantine/core";
import { getExerciseLog } from "../actions/getExerciseLog";
import Loader from "@/components/ui/Loader";
import { getExercises } from "../actions/getExercises";
import HistoryContent from "@/components/history/HistoryContent";

export default async function History() {
  await nonAuthRedirect(); // Redirects user if not logged in

  // Fetch exercises and exercise log data
  const exercises = await getExercises();
  const exercise_log = await getExerciseLog();

  const noHistory = exercise_log.length === 0;
  if (!exercise_log || !exercises) return <Loader />;

  return (
    <Stack h="100%" w="100%" spacing={0} bg="snow">
      <Navbar />

      <ScrollArea w={"100%"} flex={1}>
        <Stack mih="100%" w="100%" align="center" px={16}>
          <Stack w={{ base: "100%", md: "60%" }}>
            <PageTitle />
            {noHistory ? (
              <Stack>No history found</Stack>
            ) : (
              <HistoryContent
                exercises={exercises}
                exercise_log={exercise_log}
              />
            )}
          </Stack>
        </Stack>
      </ScrollArea>
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
