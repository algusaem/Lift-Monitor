import CardContent from "@/components/main/CardContent";
import CardTitle from "@/components/main/CardTitle";
import Section from "@/components/main/Section";
import Navbar from "@/components/navbar/navbar";
import pool from "@/lib/db";
import { Card, Flex, Loader, Stack } from "@mantine/core";

export default async function Home() {
  const exercises = (await pool.query("SELECT id, name FROM exercises")).rows;

  if (!exercises) {
    return (
      <Flex justify={"center"}>
        <Loader />
      </Flex>
    );
  }

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
