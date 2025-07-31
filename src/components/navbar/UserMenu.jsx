import { Menu } from "@mantine/core";
import { CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { logout } from "../../lib/logoutUser";

const UserMenu = () => {
  return (
    <Menu shadow="md" width={200} position="bottom-end" withArrow>
      <Menu.Target>
        <FaRegUser cursor={"pointer"} />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Account</Menu.Label>
        <Menu.Item onClick={() => console.log("Settings clicked")}>
          Settings
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          color="red"
          leftSection={<CiLogout size={18} />}
          onClick={async () => await logout()}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
