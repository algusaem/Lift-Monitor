import CardContent from "@/components/main/CardContent";
import CardTitle from "@/components/main/CardTitle";
import Section from "@/components/main/Section";
import Navbar from "@/components/navbar/navbar";
import { nonAuthRedirect } from "@/lib/authRedirect";
import { Flex, ScrollArea, Stack } from "@mantine/core";
import Loader from "@/components/ui/Loader";
import CardItem from "@/components/ui/CardItem";
import { getExercises } from "../actions/getExercises";

export default async function Home() {
  await nonAuthRedirect();

  const exercises = await getExercises();
  if (!exercises) return <Loader />;

  return (
    <Stack h="100%" w="100%" bg="snow">
      <Navbar />

      <ScrollArea w="100%" flex={1}>
        <Stack mih="100%" w="100%" align="center" px={16} pb={16}>
          <Stack w={{ base: "100%", md: "60%" }}>
            <Section exercises={exercises} />
            <CardItem w="100%" h="100%">
              <Flex w="100%" h="100%" direction="column" gap={32}>
                <CardTitle />
                <CardContent exercises={exercises} />
              </Flex>
            </CardItem>
          </Stack>
        </Stack>
      </ScrollArea>
    </Stack>
  );
}
