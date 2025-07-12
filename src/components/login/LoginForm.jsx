import { Button, Card, Flex, Input, Text } from "@mantine/core";
import InputLabeled from "../ui/InputLabeled";

const LoginForm = () => {
  return (
    <>
      <InputLabeled label="Email">
        <Input placeholder="Enter your email" />
      </InputLabeled>
      <InputLabeled label="Password">
        <Input placeholder="*******" />
      </InputLabeled>

      <Button>Sign in</Button>

      <Flex justify={"center"} gap={4}>
        <Text size="sm">Don&apos;t have an account?</Text>
        <Text size="sm" c={"persian"} fw={600} style={{ cursor: "pointer" }}>
          Sign up
        </Text>
      </Flex>

      <Card padding="lg" radius="md" withBorder>
        <Flex direction={"column"} gap={1}>
          <Text size={"xs"} fw={600}>
            Demo credentials:
          </Text>
          <Text size={"xs"}>Email: test01</Text>
          <Text size={"xs"}>Password: test123</Text>
        </Flex>
      </Card>
    </>
  );
};

export default LoginForm;
