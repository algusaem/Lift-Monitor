import { Box, Flex, Text, Title } from "@mantine/core";
import { LiaDumbbellSolid } from "react-icons/lia";
import RegisterForm from "../../components/login/RegisterForm";
import { authRedirect } from "@/lib/authRedirect";
import CardItem from "@/components/ui/CardItem";

export default async function Home() {
  await authRedirect(); // Redirects user if already logged in
  return (
    <Flex
      bg={"snow"}
      h={"100%"}
      w={"100%"}
      direction={"column"}
      justify={"center"}
      align={"center"}
      gap={32}
    >
      <Header />
      <CardItem p={32} miw={{ base: "95%", sm: 480 }}>
        <Flex w={"full"} h={"full"} direction={"column"} gap={16}>
          <FormTitle />
          <RegisterForm />
        </Flex>
      </CardItem>
    </Flex>
  );
}

const Header = () => (
  <Box>
    <Flex align={"center"} justify={"center"} gap={4}>
      <LiaDumbbellSolid size={42} color="var(--mantine-color-persian-6)" />
      <Title fw={600}>Lift Monitor</Title>
    </Flex>
    <Text size="sm" fw={500}>
      Weight lift tracking made for everyone
    </Text>
  </Box>
);

const FormTitle = () => (
  <Flex direction={"column"} align={"center"}>
    <Title fw={500} order={3}>
      Register new account
    </Title>
    <Text size="sm" fw={400}>
      Please enter your data to create a new account.
    </Text>
  </Flex>
);
