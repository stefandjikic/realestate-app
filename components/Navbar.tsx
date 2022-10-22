import Link from "next/link";
import {
  Flex,
  Box,
  // Menu,
  // MenuButton,
  // IconButton,
  // MenuList,
  // MenuItem,
  Container,
} from "@chakra-ui/react";
import { FcMenu } from "react-icons/fc";
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
              <Box key={navLink.route} ml="4">
                <Link href={navLink.route}>{navLink.name}</Link>
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
          {/* <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<FcMenu />}
              variant="outline"
            />
            <MenuList>
              {NAV_LINKS?.map((navLink) => (
                <Link key={navLink.route} href={navLink.route} passHref>
                  <MenuItem icon={navLink.icon}>{navLink.name}</MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu> */}
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
            {/* <MenuItem icon={navLink.icon}>{navLink.name}</MenuItem> */}
          </Link>
          {NAV_LINKS?.map((navLink) => (
            <Link key={navLink.route} href={navLink.route} passHref>
              <Box className="mobile-nav-link">{navLink.icon}</Box>
              {/* <MenuItem icon={navLink.icon}>{navLink.name}</MenuItem> */}
            </Link>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
