/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Button,
  Flex,
  Stack,
  useColorMode,
  useColorModeValue,
  useToast,
  useDisclosure,
  IconButton,
  HStack,
  Slide,
  Collapse,
} from "@chakra-ui/react";
import { BsFillBrightnessLowFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { Link, useLocation, useParams } from "react-router-dom";
import { Logo } from "../Logo";
import { ProfileMenu } from "../ProfileMenu";
import { useState, useEffect } from "react";
import { SendFormLinkModal } from "@modules/forms/components/Form/FormBuilder/sendFormLink";
import { useAppState } from "@store/index";
import { CustomTooltipWithIcon } from "@modules/forms/components/Form/FormBuilder/dragAndDropList";
import { AiOutlineLink } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { useAuth } from "@modules/auth/hooks";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

interface Props {
  children: React.ReactNode;
  href: string;
}
const Links = [
  { label: "Overview", href: "#Overview" },
  { label: "How It Works", href: "#how_it_works" },
  { label: "Features", href: "#feature" },
  { label: "Interviewer", href: "/interviewer" },
  { label: "About Us", href: "/about-us" },
];

const NavLink = (props: Props) => {
  const { children, href } = props;

  return (
    <Link to={href}>
      <Box
        as="a"
        p={2}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("#dbceff", "gray.700"),
        }}
        color={useColorModeValue("#6d63fc", "white")}
      >
        {children}
      </Box>
    </Link>
  );
};

export function Navbar() {
  const [state] = useAppState();
  const { formId, id } = useParams();
  const location = useLocation();
  const toast = useToast();
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const { getAccount } = useAuth();

  useEffect(() => {
    const getCurrentAccount = async () => {
      await getAccount();
    };
    if (!state.userProfile?.id) {
      getCurrentAccount();
    }
  }, [state.userProfile?.id]);

  const { colorMode, toggleColorMode } = useColorMode();
  const [openModal, setOpenModal] = useState(false);

  const handleCopyLinkToClipboard = (e: Event) => {
    e.stopPropagation();
    if (location.pathname.includes("/forms/forms-response/")) {
      navigator.clipboard.writeText(
        `${window.location.origin}/forms/forms-response/${formId}`
      );
    } else {
      navigator.clipboard.writeText(
        `${window.location.origin}/forms/update/${id}`
      );
    }
    toast({
      title: "Link Copied",
      description: "Link copied to clipboard",
      status: "success",
      position: "bottom-right",
      duration: 5000,
      isClosable: true,
    });
  };
  const formUrl = `${window.location.origin}/forms/forms-response/${formId?formId:id}`;
  return (
    <>
      {openModal && (
        <SendFormLinkModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          formUrl={formUrl}
        />
      )}

      <Box
        zIndex={999}
        position="fixed"
        width="100%"
        backdropFilter="blur(20px)"
        px={4}
        transition="background-color 0.3s ease"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {state.userProfile?.id &&
            !(
              location.pathname.includes("/forms/update/") ||
              location.pathname.includes("/forms/forms-response/")
            ) && (
              <IconButton
                size={"md"}
                aria-label={"Open Menu"}
                display={{ md: "none", base: "inline-flex" }}
                onClick={onToggle}
                bg={useColorModeValue("#dbceff", "#6D63FC")}
              >
                {isOpen ? <GrFormClose /> : <GiHamburgerMenu />}
              </IconButton>
            )}
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link to="/">
                <Logo />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={7}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.label} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                {state.userProfile?.id &&
                  (location.pathname.includes("/forms/update/") ||
                    location.pathname.includes("/forms/forms-response/")) && (
                    <>
                      <CustomTooltipWithIcon
                        icon={<AiOutlineLink />}
                        label="Copy Link"
                        color="#fff"
                        onClick={(e: Event) => {
                          handleCopyLinkToClipboard(e);
                        }}
                      />

                      <Button
                        colorScheme="purple"
                        rightIcon={<RiSendPlaneFill size={17} />}
                        onClick={() => setOpenModal(true)}
                      >
                        Send
                      </Button>
                    </>
                  )}

                <Button
                  onClick={toggleColorMode}
                  bg={"#a390fe"}
                  color={"#fff"}
                  _hover={{ bg: "#6d63fc" }}
                  display={{ base: "none", md: "inline-flex" }}
                >
                  {colorMode === "light" ? (
                    <MdDarkMode />
                  ) : (
                    <BsFillBrightnessLowFill />
                  )}
                </Button>

                {!(
                  location.pathname.includes("/update") ||
                  location.pathname.includes("/forms-response")
                ) && (
                  <Button
                    colorScheme="purple"
                    display={{ base: "none", md: "inline-flex" }}
                  >
                    <Link to="/forms">Get Started 🚀</Link>
                  </Button>
                )}
                {!state.userProfile?.id ? (
                  <Button
                    variant="outline"
                    colorScheme="purple"
                    rightIcon={<FiLogIn />}
                  >
                    <Link to="/login">Sign In</Link>
                  </Button>
                ) : (
                  <ProfileMenu />
                )}
              </Stack>
            </Flex>
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink href={link.href} key={link.label}>
                  {link.label}
                </NavLink>
              ))}
              {!(
                location.pathname.includes("/update") ||
                location.pathname.includes("/forms-response")
              ) && (
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={3}
                >
                  <Button
                    onClick={toggleColorMode}
                    bg={"#a390fe"}
                    color={"#fff"}
                    _hover={{ bg: "#6d63fc" }}
                  >
                    {colorMode === "light" ? (
                      <MdDarkMode />
                    ) : (
                      <BsFillBrightnessLowFill />
                    )}
                  </Button>
                  <Box>
                    <Button colorScheme="purple">
                      <Link to="/forms">Get Started</Link>
                    </Button>
                  </Box>
                </Box>
              )}
            </Stack>
          </Box>
        </Collapse>
      </Box>
    </>
  );
}
