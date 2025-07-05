import { Button, Flex, Stack, Text, Title } from "@mantine/core";
import { IoAddSharp } from "react-icons/io5";

const Section = () => {
  return (
    <Flex
      w={"full"}
      justify="space-between"
      align={{ base: false, sm: "center" }}
      direction={{ base: "column", sm: "row" }}
      gap={8}
    >
      <Stack gap={0}>
        <Title fz={"h1"} fw={700}>
          Log Exercise
        </Title>
        <Text c="gray">
          Track individual exercises with sets, reps and weight
        </Text>
      </Stack>
      <Button leftSection={<IoAddSharp size={24} />}>New Exercise</Button>
    </Flex>
  );
};

export default Section;
