import Link from "next/link";
import { Flex, Box, Container, Link as ChakraLink } from "@chakra-ui/react";
import { NAV_LINKS } from "../utils/links";
import { CONTAINER_WIDTH } from "../utils/constants";
import { FcGrid } from "react-icons/fc";

const Navbar = () => {
  return (
    <Box
      borderBottom={{ base: "none", md: "1px" }}
      borderColor={{ base: "none", md: "gray.100" }}
    >
      <Container maxW={CONTAINER_WIDTH}>
        {/* Desktop Nav */}
        <Flex
          py="6"
          display={{ base: "none", md: "flex" }}
          justifyContent="space-between"
        >
          <Box color="#FF6884" fontWeight="bold" fontFamily="fantasy">
            <Link href="/">UAE Real Estate</Link>
          </Box>
          <Flex>
            {NAV_LINKS?.map((navLink) => (
              <Box key={navLink.route} fontWeight='bold' color='gray.600' ml="4">
                {navLink.external ? (
                  <ChakraLink
                    _hover={{ textDecoration: "none" }}
                    href={navLink.route}
                    isExternal
                  >
                    {navLink.name}
                  </ChakraLink>
                ) : (
                  <Link href={navLink.route}>{navLink.name}</Link>
                )}
              </Box>
            ))}
          </Flex>
        </Flex>
        {/* Mobile Nav */}
        <Flex
          display={{ base: "flex", md: "none" }}
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px"
          borderColor="gray.200"
        >
          <Box color="#FF6884" fontWeight="bold" fontFamily="fantasy" py="6">
            <Link href="/">UAE Real Estate</Link>
          </Box>
        </Flex>
        <Flex
          display={{ base: "flex", md: "none" }}
          justifyContent="space-between"
          width="100%"
          bg="#fff"
          p="4"
          borderTop="1px solid #fcf3fe"
          position="fixed"
          zIndex="999"
          bottom="0"
          left="0"
        >
          <Link href="/" passHref>
            <Box className="mobile-nav-link">
              <FcGrid />
            </Box>
          </Link>
          {NAV_LINKS?.map((navLink) => (
            <Box key={navLink.route}>
              {navLink.external ? (
                <ChakraLink
                  _hover={{ textDecoration: "none" }}
                  href={navLink.route}
                  isExternal
                >
                  <Box className="mobile-nav-link">{navLink.icon}</Box>
                </ChakraLink>
              ) : (
                <Link href={navLink.route} passHref>
                  <Box className="mobile-nav-link">{navLink.icon}</Box>
                </Link>
              )}
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
