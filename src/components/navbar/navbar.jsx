import { Avatar, Flex, Text } from "@mantine/core";
import Link from "next/link";
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
      <Flex gap={18}>
        <NavbarLink href="/">Logs</NavbarLink>
        <NavbarLink href="/history">History</NavbarLink>
      </Flex>
      <Avatar color="persian" />
    </Flex>
  );
};

export default Navbar;

const NavbarLink = ({ href, children }) => {
  return (
    <Text
      component={Link}
      href={href}
      fw={500}
      sx={{
        "&:hover": {
          color: "var(--mantine-color-persian-6)",
          textDecoration: "underline",
        },
      }}
    >
      {children}
    </Text>
  );
};
