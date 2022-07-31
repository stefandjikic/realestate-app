import Link from "next/link";
import {
  Flex,
  Box,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FcMenu } from "react-icons/fc";
import { NAV_LINKS } from "../utils/links";

const Navbar = () => {
  return (
    <>
      {/* Desktop Nav */}
      <Flex
        display={{ base: "none", md: "flex" }}
        justifyContent="space-between"
        py="6"
        borderBottom="1px"
        borderColor="gray.200"
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
    </>
  );
};

export default Navbar;
