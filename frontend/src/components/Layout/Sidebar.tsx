import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Home, LucideIcon, NotepadText, Users, Menu } from "lucide-react";
import { NavLink } from "react-router";

interface SidebarProps {
  label: string;
  uri: string;
  icon?: LucideIcon;
}

const SidebarItems: SidebarProps[] = [
  { label: "Dashboard", uri: "/", icon: Home },
  { label: "Clients", uri: "/clients", icon: Users },
  { label: "Programs", uri: "/programs", icon: NotepadText },
];

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const SidebarContent = () => (
    <VStack spacing={4} align="stretch">
      <Heading size="md" mb={5}>
        AfyaLine
      </Heading>
      {SidebarItems.map((item) => (
        <Button
          key={item.label}
          as={NavLink}
          to={item.uri}
          variant="ghost"
          justifyContent="start"
          colorScheme="whiteAlpha"
          onClick={onClose}
        >
          {item.icon && <item.icon size={20} style={{ marginRight: 8 }} />}
          {item.label}
        </Button>
      ))}
    </VStack>
  );

  return (
    <>
      {/* Mobile Hamburger */}
      <Flex
        color="white"
        p={4}
        display={{ base: "flex", md: "none" }}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <IconButton icon={<Menu />} aria-label="Open Menu" onClick={onOpen} />
      </Flex>

      {/* Sidebar for desktop */}
      <Box
        w="250px"
        bg="gray.800"
        color="white"
        p={5}
        display={{ base: "none", md: "flex" }}
        flexDirection="column"
        justifyContent="space-between"
        minHeight="100vh"
      >
        <SidebarContent />
        <Box>
          <Heading size="xs" textAlign="center" color="gray.400">
            © 2025 AfyaLine
          </Heading>
        </Box>
      </Box>

      {/* Drawer for mobile */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="gray.800" color="white">
          <DrawerBody p={5}>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
