import { Button, Flex, Text, Title } from "@mantine/core";

const Form = ({ form, setForm }) => {
  const buttons = [1, 2, 3, 4, 5];

  return (
    <Flex direction={"column"} gap={4}>
      <Flex direction={"column"}>
        <Title order={3} fw={600}>
          Form quality
        </Title>
        <Text c="gray">How was your form today?</Text>
      </Flex>

      <Flex w="full" gap={8} direction={{ base: "column", sm: "row" }}>
        <Button
          color="black"
          variant="outline"
          bor={form === undefined ? "default" : "transparent"}
          style={{
            borderColor:
              form === undefined
                ? "var(--mantine-color-persian-5)"
                : "var(--mantine-color-modern-5)",
          }}
          onClick={() => setForm(undefined)}
        >
          Skip
        </Button>

        {buttons.map((num) => (
          <Button
            color="black"
            key={num}
            variant="outline"
            style={{
              borderColor:
                form === num
                  ? "var(--mantine-color-persian-5)"
                  : "var(--mantine-color-modern-5)",
            }}
            onClick={() => setForm(num)}
          >
            {num}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default Form;
