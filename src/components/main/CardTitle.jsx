import { Flex, Text, Title } from "@mantine/core";

const CardTitle = () => {
  return (
    <Flex direction={"column"}>
      <Title order={3} fw={600}>
        Exercise details
      </Title>
      <Text c="gray">Log your exercise with all sets and notes</Text>
    </Flex>
  );
};

export default CardTitle;
