import LoginForm from "@/components/login/LoginForm";
import CardItem from "@/components/ui/CardItem";
import { authRedirect } from "@/lib/authRedirect";
import { Box, Flex, Text, Title } from "@mantine/core";
import { LiaDumbbellSolid } from "react-icons/lia";

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
          <LoginForm />
        </Flex>
      </CardItem>
    </Flex>
  );
}

const Header = () => (
  <Box>
    <Flex align={"center"} justify={"center"} gap={4}>
      <LiaDumbbellSolid size={42} color="var(--mantine-color-persian-6)" />
      <Title fw={600}>Lift Logger</Title>
    </Flex>
    <Text size="sm" fw={500} ta={"center"}>
      Weight lift tracking made for everyone
    </Text>
  </Box>
);

const FormTitle = () => (
  <Flex direction={"column"} align={"center"}>
    <Title fw={500} order={3}>
      Welcome back
    </Title>
    <Text size="sm" fw={400} ta={"center"}>
      Sign in to your account to continue logging your workouts.
    </Text>
  </Flex>
);
