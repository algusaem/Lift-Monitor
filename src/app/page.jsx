import Navbar from "@/components/navbar/navbar";
import { Card, Flex, Group } from "@mantine/core";

export default function Home() {
  return (
    <Flex bg={"snow"} h={"100%"} w={"100%"} direction={"column"}>
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
    </Flex>
  );
}
