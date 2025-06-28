import Section from "@/components/main/Section";
import Navbar from "@/components/navbar/navbar";
import { Card, Stack } from "@mantine/core";

export default function Home() {
  return (
    <Stack bg={"snow"} h={"100%"} w={"100%"}>
      <Stack w={"full"} align="center">
        <Navbar />
        <Stack w={{ base: "100%", md: "60%" }} px={16}>
          <Section />
          <Card w={"full"} h={"100%"} padding="lg" radius="md" withBorder>
            Card
          </Card>
        </Stack>
      </Stack>
    </Stack>
  );
}
