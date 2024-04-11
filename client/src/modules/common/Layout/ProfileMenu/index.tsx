import {
  Avatar,
  AvatarBadge,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAppState } from "@store/index";
import { useAuth } from "@modules/auth/hooks";

export function ProfileMenu() {
  const [state] = useAppState();
  const { Logout } = useAuth();

  const handleLogout = () => {
    Logout();
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"outline"}
        cursor={"pointer"}
        minW={0}
        p={"1px"}
        color={"#fff"}
        borderRadius="99%"
        border={useColorModeValue("3px solid #6d63fc ", "3px solid #fff")}
      >
        <Avatar
          size={"sm"}
          name={
            state?.userProfile?.firstName + " " + state?.userProfile?.lastName
          }
          src={
            state?.userProfile?.username === "zakariya.khan"
              ? "https://zakariya-ardent10.vercel.app/images/profile3.png"
              : ""
          }
        >
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
      </MenuButton>
      <MenuList alignItems={"center"}>
        <br />
        <Center>
          <Avatar
            size={"2xl"}
            name={
              state?.userProfile?.firstName + " " + state?.userProfile?.lastName
            }
            src={
              state?.userProfile?.username === "zakariya.khan"
                ? "https://zakariya-ardent10.vercel.app/images/profile3.png"
                : ""
            }
          />
        </Center>
        <br />
        <Center>
          <Text>{state?.userProfile?.username}</Text>
        </Center>
        <br />
        <MenuDivider />
        <MenuItem>Your Forms</MenuItem>
        <MenuItem>Account Settings</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}
