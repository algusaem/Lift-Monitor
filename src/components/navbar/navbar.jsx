import { Avatar, Button, Flex, Text } from "@mantine/core";
import { LiaDumbbellSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <Flex
      w={"100%"}
      p={"lg"}
      mb={"md"}
      bg={"white"}
      style={{ borderBottom: "1px solid var(--mantine-color-modern-5)" }}
      justify="space-between"
      align="center"
    >
      <Flex align={"center"} gap={4}>
        <LiaDumbbellSolid size={24} color="var(--mantine-color-persian-6)" />
        <Text fw={600}>Lift Logger</Text>
      </Flex>
      <Flex gap={8}>
        <NavButton>Logs</NavButton>
        <NavButton>History </NavButton>
      </Flex>
      <Avatar color="persian" />
    </Flex>
  );
};

export default Navbar;

const NavButton = ({ children }) => {
  return (
    <Button
      variant="transparent"
      color="black"
      size="compact-sm"
      miw={75}
      styles={{
        root: {
          "&:hover": {
            textDecoration: "underline",
          },
        },
      }}
    >
      {children}
    </Button>
  );
};
