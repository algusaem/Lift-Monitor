import { Card, Flex, Text, ActionIcon, Input } from "@mantine/core";
import { IoTrashOutline } from "react-icons/io5";

const Sets = ({ index, reps, weight, onChange, isDeletable, onDelete }) => {
  return (
    <Card w={"full"} padding="lg" radius="md" withBorder>
      <Flex w={"full"} align={"center"} gap={16} justify={"space-between"}>
        <Text>Set {index}</Text>
        <Input
          type="number"
          variant="filled"
          placeholder="0 kg"
          value={weight}
          onChange={(e) => onChange("weight", e.currentTarget.value)}
          flex={1}
        />
        <Input
          type="number"
          variant="filled"
          placeholder="0 reps"
          value={reps}
          onChange={(e) => onChange("reps", e.currentTarget.value)}
          flex={1}
        />
        {isDeletable && (
          <ActionIcon
            variant="subtle"
            color="gray"
            aria-label="Delete set"
            onClick={onDelete}
          >
            <IoTrashOutline size={20} />
          </ActionIcon>
        )}
      </Flex>
    </Card>
  );
};

export default Sets;
