import {
  Badge,
  Box,
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Program } from "../../interfaces/program";

interface ProgramTableProps {
  programs: Program[];
}

const ProgramTable = ({ programs }: ProgramTableProps) => {
  return (
    <Box overflowX={"auto"}>
      <Table variant={"simple"}>
        <Thead>
          <Tr>
            <Th>Program Name</Th>
            <Th>Description</Th>
            <Th>Period</Th>
            <Th>N.O Clients</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {programs.map((program) => (
            <Tr key={program.id} _hover={{ bg: "blue.100" }}>
              <Td fontWeight={"medium"}>{program.name}</Td>
              <Td>{program.description}</Td>
              <Td>
                <Badge colorScheme="blue">{program.start_date}</Badge>
                <Badge colorScheme="orange">{program.end_date}</Badge>
              </Td>
              <Td>1</Td>
              <Td>
                <Button variant={"ghost"} colorScheme="blue">
                  View
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ProgramTable;
