import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./components/Layout/Sidebar";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <Flex minH={"100vh"}>
        <Sidebar />
        <Box flex={"1"} bg={"gray.50"} p={8} w={"100%"}>
          <Outlet />
        </Box>
      </Flex>
    </>
  );
};

export default App;
