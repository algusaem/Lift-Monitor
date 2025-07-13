import Navbar from "@/components/navbar/navbar";
import { nonAuthRedirect } from "@/lib/authRedirect";
import { Flex, Group } from "@mantine/core";

export default async function History() {
  await nonAuthRedirect(); // Redirects user if not logged in
  return (
    <Flex bg={"snow"} h={"100%"} w={"100%"} direction={"column"}>
      <Group justify="center">
        <Navbar />
        History
      </Group>
    </Flex>
  );
}
