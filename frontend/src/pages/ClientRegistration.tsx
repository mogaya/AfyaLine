import { Heading, Text } from "@chakra-ui/react";
import ClientForm from "../components/Client/ClientForm";

const ClientRegistration = () => {
  return (
    <>
      <Heading size="lg" mb={2}>
        Register New Client
      </Heading>
      <Text color="gray.600" mb={6}>
        Enter the client's information to register them in the system.
      </Text>
      <ClientForm />
    </>
  );
};

export default ClientRegistration;
