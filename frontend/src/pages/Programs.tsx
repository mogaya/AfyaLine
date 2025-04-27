import { Flex, Button, Heading } from "@chakra-ui/react";
import { ClipboardPlus } from "lucide-react";
import { Link } from "react-router";
import ProgramTable from "../components/Program/ProgramTable";
import { UsePrograms } from "../hooks/UsePrograms";

const Programs = () => {
  const { programs } = UsePrograms();

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
        <Heading size={"lg"}>Program List</Heading>
        <Button
          as={Link}
          to={"/program/add"}
          leftIcon={<ClipboardPlus size={18} />}
          colorScheme="blue"
        >
          Add New Program
        </Button>
      </Flex>
      <ProgramTable programs={programs}></ProgramTable>
    </>
  );
};

export default Programs;
