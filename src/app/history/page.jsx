import Navbar from "@/components/navbar/navbar";
import { nonAuthRedirect } from "@/lib/authRedirect";
import { Stack } from "@mantine/core";
import { getExerciseLog } from "../actions/getExerciseLog";
import Loader from "@/components/ui/Loader";

export default async function History() {
  await nonAuthRedirect(); // Redirects user if not logged in

  const exercise_log = await getExerciseLog();
  if (!exercise_log) return <Loader />;
  if (exercise_log.length === 0) return <Stack> No history found </Stack>;

  return (
    <Stack bg={"snow"} h={"100%"} w={"100%"}>
      <Stack w={"full"} align="center">
        <Navbar />
        <Stack w={{ base: "100%", md: "60%" }} px={16}>
          History
        </Stack>
      </Stack>
    </Stack>
  );
}
