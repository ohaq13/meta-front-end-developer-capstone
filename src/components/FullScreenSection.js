import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "#495E58" : "black"}
    >
      <VStack maxWidth="1030px" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
