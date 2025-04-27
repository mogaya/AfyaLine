import { Button, Flex, Heading } from "@chakra-ui/react";
import { UserRoundPlus } from "lucide-react";
import { Link } from "react-router";
import { useClients } from "../hooks/UseClients";
import ClientTable from "../components/Client/ClientTable";

const Clients = () => {
  const { clients } = useClients();
  return (
    <>
      <Flex
        justify={"space-between"}
        align={{
          base: "start",
          md: "center",
        }}
        direction={{
          base: "column",
          md: "row",
        }}
        mb={6}
        gap={{ base: 4, md: 0 }}
      >
        {" "}
        <Heading size={"lg"}>Client List</Heading>
        <Button
          as={Link}
          to={"/clients/register"}
          leftIcon={<UserRoundPlus size={18} />}
          colorScheme="green"
        >
          Register New Client
        </Button>
      </Flex>
      <ClientTable clients={clients}></ClientTable>
    </>
  );
};

export default Clients;
