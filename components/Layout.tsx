import Head from "next/head";
import { ReactNode } from "react";
import { Container, Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => (
  <>
    <Head>
      <title>Real Estate App</title>
    </Head>
    <Container maxW="1400px">
      <Box as="header">
        <Navbar />
      </Box>
      <Box as="main">{children}</Box>
    </Container>
  </>
);

export default Layout;
