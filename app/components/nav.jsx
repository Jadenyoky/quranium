"use client";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Example() {
  return (
    <Box
      as={motion.div}
      height="40px"
      width="40px"
      bg="orange.400"
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition="0.5s linear"
      // not work: transition={{ transition: "0.5", ease: "linear" }}
    />
  );
}

export default Example;
