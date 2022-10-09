import Link from "next/link";
import {
  Flex,
  Box,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Container,
} from "@chakra-ui/react";
import { FcMenu } from "react-icons/fc";
import { NAV_LINKS } from "../utils/links";
import { CONTAINER_WIDTH } from "../utils/constants";

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
          <Box>
            <Link href="/">Real Estate App</Link>
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
          <Box py="6">
            <Link href="/">Real Estate App</Link>
          </Box>
          <Menu>
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
          </Menu>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
