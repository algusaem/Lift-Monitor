import { Button, Flex, Stack, Text } from "@mantine/core";
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
        <Text fz={"h1"} fw={700}>
          Log Exercise
        </Text>
        <Text c="gray">
          Track individual exercises with sets, reps and weight
        </Text>
      </Stack>
      <Button>
        <Flex gap={4} align={"center"} justify={"center"}>
          <IoAddSharp size={24} />
          <Text fw={600} fz={"md"}>
            New Exercise
          </Text>
        </Flex>
      </Button>
    </Flex>
  );
};

export default Section;
