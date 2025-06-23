import Navbar from "@/components/navbar/navbar";
import { Flex, Group } from "@mantine/core";

export default function History() {
  return (
    <Flex bg={"snow"} h={"100%"} w={"100%"} direction={"column"}>
      <Group justify="center">
        <Navbar />
        History
      </Group>
    </Flex>
  );
}
