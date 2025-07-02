import CardContent from "@/components/main/CardContent";
import CardTitle from "@/components/main/CardTitle";
import Section from "@/components/main/Section";
import Navbar from "@/components/navbar/navbar";
import { Card, Flex, Stack } from "@mantine/core";

export default function Home() {
  return (
    <Stack bg={"snow"} h={"100%"} w={"100%"}>
      <Stack w={"full"} align="center">
        <Navbar />
        <Stack w={{ base: "100%", md: "60%" }} px={16}>
          <Section />
          <Card w={"full"} h={"100%"} padding="lg" radius="md" withBorder>
            <Flex
              w={"full"}
              h={"100%"}
              display={"flex"}
              direction={"column"}
              gap={32}
            >
              <CardTitle />
              <CardContent />
            </Flex>
          </Card>
        </Stack>
      </Stack>
    </Stack>
  );
}
