import {
  Badge,
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
import {
  ClipboardPlus,
  LucideIcon,
  Notebook,
  UserRoundPlus,
  Users,
  UsersRound,
} from "lucide-react";
import { useClients } from "../hooks/UseClients";
import { UsePrograms } from "../hooks/UsePrograms";
import QuickActionBtn from "../components/Dashboard/QuickActionBtn";

export interface QuickActionMenu {
  label: string;
  icon: LucideIcon;
  url: string;
  colorScheme: string;
}

const QuickActionMenuItems: QuickActionMenu[] = [
  {
    colorScheme: "blue",
    icon: ClipboardPlus,
    label: "Add Program",
    url: "/programs/register",
  },
  {
    colorScheme: "purple",
    icon: Notebook,
    label: "View All Programs",
    url: "/programs",
  },
  {
    colorScheme: "green",
    icon: UserRoundPlus,
    label: "Add Client",
    url: "/clients/register",
  },

  {
    colorScheme: "orange",
    icon: UsersRound,
    label: "View All Clients",
    url: "/clients",
  },
];

const Dashboard = () => {
  const { clients, loading } = useClients();
  const { programs, progLoading } = UsePrograms();

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
            value={programs.length}
          ></StatCard>
          <StatCard
            bgColor="#E6F0FF"
            icon={Users}
            iconColor="#007BFF"
            title="Total Clients"
            value={clients.length}
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
                {loading ? (
                  <Box textAlign="center" mt={10} mx={"auto"} w={"100%"}>
                    <Spinner size="lg" />
                  </Box>
                ) : (
                  <Table variant={"simple"}>
                    <Thead>
                      <Tr>
                        <Th>Full Name</Th>
                        <Th>Email</Th>
                        <Th>Gender</Th>
                      </Tr>
                    </Thead>
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
                )}
              </Box>
            </Box>

            {/* Program Statistics */}
            <Box bg={"white"} borderRadius={"lg"} boxShadow={"sm"} p={5}>
              <Heading size={"md"} mb={4}>
                {" "}
                Programs
              </Heading>
              <Box overflowX={"auto"}>
                {progLoading ? (
                  <Box textAlign="center" mt={10} mx={"auto"} w={"100%"}>
                    <Spinner size="lg" />
                  </Box>
                ) : (
                  <Table variant={"simple"}>
                    <Thead>
                      <Tr>
                        <Th>Program Name</Th>
                        <Th>Start Date</Th>
                        <Th>Status</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {programs.map((program) => (
                        <Tr key={program.id}>
                          <Td>{program.name}</Td>
                          <Td>{program.start_date}</Td>
                          <Td>
                            <Badge
                              colorScheme={program.is_active ? "green" : "red"}
                            >
                              {program.is_active ? "Active" : "Inactive"}
                            </Badge>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                )}
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg={"white"} borderRadius={"lg"} boxShadow={"sm"} p={5} mb={6}>
              <Heading size={"md"} mb={4}>
                {" "}
                Quick Actions
              </Heading>
              <SimpleGrid columns={1} spacing={3}>
                <QuickActionBtn items={QuickActionMenuItems} />
              </SimpleGrid>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
