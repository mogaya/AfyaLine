import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { Link } from "react-router";
import { QuickActionMenu } from "../../pages/Dashboard";

export interface QuickActionBtnProps {
  items: QuickActionMenu[];
}

const QuickActionBtn = ({ items }: QuickActionBtnProps) => {
  return (
    <>
      {items.map((item) => (
        <Button
          key={item.label}
          as={Link}
          to={item.url}
          colorScheme={item.colorScheme}
          size={"md"}
          height={"auto"}
          p={4}
          borderRadius={"lg"}
          w={"100%"}
          _hover={{
            transform: "translateY(-2px)",
          }}
          transition={"transform 0.2s"}
        >
          <Flex direction={"column"} align={"center"} w={"100%"}>
            <Icon as={item.icon} boxSize={6} mb={2} />
            <Text fontSize={"sm"} fontWeight={"medium"} textAlign={"center"}>
              {item.label}
            </Text>
          </Flex>
        </Button>
      ))}
    </>
  );
};

export default QuickActionBtn;
