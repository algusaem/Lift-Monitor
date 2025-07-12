import { Flex, Text } from "@mantine/core";

const InputLabeled = ({ children, label }) => (
  <Flex direction={"column"} flex={1} gap={4}>
    <Text size="sm">{label}</Text>
    {children}
  </Flex>
);

export default InputLabeled;
