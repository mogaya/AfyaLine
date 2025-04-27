import { Heading, Text } from "@chakra-ui/react";
import ProgramForm from "../components/Program/ProgramForm";

const ProgramRegistration = () => {
  return (
    <>
      <Heading size="lg" mb={2}>
        Register New Program
      </Heading>
      <Text color="gray.600" mb={6}>
        Enter program details to register it in the system.
      </Text>
      <ProgramForm />
    </>
  );
};

export default ProgramRegistration;
