"use client";

import { Box, Flex, Stack, Text } from "@mantine/core";
import Link from "next/link";
import { LiaDumbbellSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import { CiLogout } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

const Navbar = () => {
  return (
    <Flex
      w={"100%"}
      p={"lg"}
      bg={"white"}
      style={{ borderBottom: "1px solid var(--mantine-color-modern-5)" }}
    >
      <DesktopNavBar />
      <MobileDrawer />
    </Flex>
  );
};

export default Navbar;

const MobileDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Box display={{ base: "block", sm: "none" }}>
      <Button onClick={open} variant="transparent" color="gray" p={0}>
        <IoReorderThreeOutline size={28} />
      </Button>

      <Drawer.Root opened={opened} onClose={close}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Flex direction="column" h="100%">
            <Drawer.Header>
              <Drawer.Title>
                <NavIcon />
              </Drawer.Title>
              <Drawer.CloseButton />
            </Drawer.Header>

            <Stack flex={1} px={18}>
              <NavbarLink href="/log">Logs</NavbarLink>
              <NavbarLink href="/history">History</NavbarLink>

              <Flex mt="auto" mb={8} py={8} justify={"center"}>
                <CiLogout
                  size={24}
                  cursor={"pointer"}
                  onClick={() => {
                    console.log("logout");
                  }}
                />
              </Flex>
            </Stack>
          </Flex>
        </Drawer.Content>
      </Drawer.Root>
    </Box>
  );
};

const DesktopNavBar = () => (
  <Flex
    justify="space-between"
    align="center"
    w={"100%"}
    display={{ base: "none", sm: "flex" }}
  >
    <NavIcon />
    <Flex gap={18}>
      <NavbarLink href="/">Logs</NavbarLink>
      <NavbarLink href="/history">History</NavbarLink>
    </Flex>
    <FaRegUser />
  </Flex>
);

const NavbarLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Text
      component={Link}
      href={href}
      fw={500}
      sx={{
        color: isActive ? "var(--mantine-color-persian-6)" : "inherit",
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

const NavIcon = () => (
  <Flex align={"center"} gap={4}>
    <LiaDumbbellSolid size={24} color="var(--mantine-color-persian-6)" />
    <Text fw={600}>Lift Logger</Text>
  </Flex>
);
