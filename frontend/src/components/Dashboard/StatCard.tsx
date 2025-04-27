import { Box, Flex, Icon, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
}

const StatCard = ({
  title,
  value,
  icon,
  iconColor,
  bgColor,
}: StatCardProps) => {
  return (
    <>
      <Box
        maxW={"300px"}
        bg={"white"}
        borderRadius={"lg"}
        boxShadow={"sm"}
        p={5}
        transition={"transform 0.2s"}
        _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
      >
        <Flex justify={"space-between"}>
          {/* Stat Label and Number */}
          <Stat>
            <StatLabel color={"gray.500"} fontSize={"sm"}>
              {title}
            </StatLabel>
            <StatNumber fontSize={"2xl"} fontWeight={"bold"}>
              {value}
            </StatNumber>
          </Stat>

          {/* Icon */}
          <Flex
            align={"center"}
            justify={"center"}
            bg={bgColor}
            color={iconColor}
            borderRadius={"full"}
            w={"45px"}
            h={"45px"}
          >
            <Icon as={icon} boxSize={5}></Icon>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default StatCard;
