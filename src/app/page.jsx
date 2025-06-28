import Navbar from "@/components/navbar/navbar";
import { Card, Group, Stack } from "@mantine/core";

export default function Home() {
  return (
    <Stack bg={"snow"} h={"100%"} w={"100%"}>
      <Group justify="center">
        <Navbar />
        <Card
          padding="lg"
          radius="md"
          withBorder
          w={{ base: "100%", md: "60%" }}
          mx={{ base: "md", md: 0 }}
          h={"100%"}
        >
          Card
        </Card>
      </Group>
    </Stack>
  );
}
