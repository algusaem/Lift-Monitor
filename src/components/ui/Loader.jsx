import { Flex, Loader as MantineLoader } from "@mantine/core";
import React from "react";

const Loader = () => {
  return (
    <Flex justify={"center"}>
      <MantineLoader />
    </Flex>
  );
};

export default Loader;
