import { Card, Flex, Text, TextInput } from "@mantine/core";

const Sets = ({ index, reps, weight, setReps, setWeight }) => {
  return (
    <Card w={"full"} padding="lg" radius="md" withBorder>
      <Flex w={"full"} align={"center"} gap={16}>
        <Text>Set {index}</Text>
        <TextInput
          type="number"
          variant="filled"
          placeholder={0}
          label="Weight (kg)"
          value={weight}
        />
        <TextInput
          type="number"
          variant="filled"
          placeholder={0}
          label="Reps"
          value={reps}
        />
      </Flex>
    </Card>
  );
};

export default Sets;
