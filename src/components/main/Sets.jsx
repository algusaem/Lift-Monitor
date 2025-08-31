import { Flex, Text, ActionIcon, NumberInput } from "@mantine/core";
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

        <NumberInput
          variant="filled"
          placeholder="0 kg"
          value={weight}
          onChange={(val) =>
            onChange(
              "weight",
              val === null || val === undefined ? "" : String(val)
            )
          }
          decimalSeparator="."
          step={0.5}
          min={0}
          flex={1}
        />

        <NumberInput
          variant="filled"
          placeholder="0 reps"
          value={reps}
          onChange={(val) =>
            onChange(
              "reps",
              val === null || val === undefined ? "" : String(val)
            )
          }
          min={0}
          allowDecimal={false}
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
