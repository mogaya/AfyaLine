import {
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import StatCard from "../components/Dashboard/StatCard";
import { Notebook, Users } from "lucide-react";
import { useClients } from "../hooks/UseClients";

const Dashboard = () => {
  const { clients, loading } = useClients();
  return (
    <>
      <Box>
        {" "}
        <Heading size={"lg"} mb={6}>
          Dashboard
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5} mb={8}>
          <StatCard
            bgColor="#E6F0FF"
            icon={Notebook}
            iconColor="#007BFF"
            title="Total Programs"
            value={5}
          ></StatCard>
          <StatCard
            bgColor="#E6F0FF"
            icon={Users}
            iconColor="#007BFF"
            title="Total Clients"
            value={5}
          ></StatCard>
        </SimpleGrid>
        <Grid templateColumns={{ base: "1fr", lg: "1fr 300px" }} gap={6}>
          <GridItem>
            <Box bg={"white"} borderRadius={"lg"} boxShadow={"sm"} p={5} mb={6}>
              <Heading size={"md"} mb={4}>
                {" "}
                Recent Clients
              </Heading>
              <Box overflowX={"auto"}>
                <Table variant={"simple"}>
                  <Thead>
                    <Tr>
                      <Th>Full Name</Th>
                      <Th>Email</Th>
                      <Th>Gender</Th>
                    </Tr>
                  </Thead>
                  {loading ? (
                    <Box textAlign="center" mt={10} mx={"auto"} w={"100%"}>
                      <Spinner size="lg" />
                    </Box>
                  ) : (
                    <Tbody>
                      {clients.map((client) => (
                        <Tr key={client.id}>
                          <Td>{client.full_name}</Td>
                          <Td>{client.email}</Td>
                          <Td>{client.gender}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  )}
                  <Tbody>
                    {clients.map((client) => (
                      <Tr key={client.id}>
                        <Td>{client.full_name}</Td>
                        <Td>{client.email}</Td>
                        <Td>{client.gender}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
