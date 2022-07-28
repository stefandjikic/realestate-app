import Link from "next/link";
import { Flex, Box } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      justifyContent="space-between"
      py="6"
      borderBottom="1px"
      borderColor="gray.600"
    >
      <Box>
        <Link href="/">Real Estate App</Link>
      </Box>
      <Flex>
        <Box ml="4">
          <Link href="/search">Search</Link>
        </Box>
        <Box ml="4">
          <Link href="/search?purpose=for-sale">Buy</Link>
        </Box>
        <Box ml="4">
          <Link href="/search?purpose=for-rent">Rent</Link>
        </Box>
        <Box ml="4">
          <Link href="/tips">Tips</Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
