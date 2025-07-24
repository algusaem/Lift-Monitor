import { Flex, Text, ActionIcon, Input } from "@mantine/core";
import { IoTrashOutline } from "react-icons/io5";
import CardItem from "../ui/CardItem";

const Sets = ({ index, reps, weight, onChange, isDeletable, onDelete }) => {
  return (
    <CardItem w={"full"}>
      <Flex
        w={"full"}
        align={"center"}
        gap={16}
        justify={"space-between"}
        direction={{ base: "column", sm: "row" }}
      >
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
    </CardItem>
  );
};

export default Sets;
