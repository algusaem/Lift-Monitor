import CardContent from "@/components/main/CardContent";
import CardTitle from "@/components/main/CardTitle";
import Section from "@/components/main/Section";
import Navbar from "@/components/navbar/navbar";
import { nonAuthRedirect } from "@/lib/authRedirect";
import { Card, Flex, Stack } from "@mantine/core";
import Loader from "@/components/ui/Loader";
import { getExercises } from "../actions/getExercises";

export default async function Home() {
  await nonAuthRedirect(); // Redirects user if not logged in

  const exercises = await getExercises();
  if (!exercises) return <Loader />;

  return (
    <Stack bg={"snow"} h={"100%"} w={"100%"}>
      <Stack w={"full"} align="center">
        <Navbar />
        <Stack w={{ base: "100%", md: "60%" }} px={16}>
          <Section exercises={exercises} />
          <Card w={"full"} h={"100%"} padding="lg" radius="md" withBorder>
            <Flex w={"full"} h={"100%"} direction={"column"} gap={32}>
              <CardTitle />
              <CardContent exercises={exercises} />
            </Flex>
          </Card>
        </Stack>
      </Stack>
    </Stack>
  );
}
