import {
  Box,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Button,
} from "@chakra-ui/react";
import { Client } from "../../interfaces/client";
import { calculateAge } from "../../utils/calculateAge";

interface ClientTableProps {
  clients: Client[];
}

const ClientTable = ({ clients }: ClientTableProps) => {
  return (
    <Box overflowX={"auto"}>
      <Table variant={"simple"}>
        <Thead>
          <Tr>
            <Th>Client Name</Th>
            <Th>Age</Th>
            <Th>Gender</Th>
            <Th>Contact</Th>
            <Th>Enrolled Programs</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {clients.map((client) => (
            <Tr key={client.id} _hover={{ bg: "blue.100" }}>
              <Td fontWeight={"medium"}>{client.full_name}</Td>
              <Td>{calculateAge(client.date_of_birth)}</Td>
              <Td>{client.gender}</Td>
              <Td>
                <Text fontSize={"sm"}>{client.phone_number}</Text>
                <Text fontSize={"xs"} color={"blue.400"}>
                  {client.email}
                </Text>
              </Td>
              <Td>Program</Td>
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

export default ClientTable;
