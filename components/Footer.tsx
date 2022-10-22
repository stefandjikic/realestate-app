import { Container, Box, Text } from "@chakra-ui/react";
import { CONTAINER_WIDTH } from "../utils/constants";

const Footer = () => {
  return (
    <Box
      textAlign="center"
      mt="40px"
      p="6"
      borderTop="1px"
      borderColor="gray.100"
      textColor="gray.500"
    >
      <Container maxW={CONTAINER_WIDTH}>
        <Text>UAE Real Estate &copy; {new Date().getFullYear()}</Text>
      </Container>
    </Box>
  );
};

export default Footer;
