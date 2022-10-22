import Head from "next/head";
import { ReactNode } from "react";
import { Container, Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CONTAINER_WIDTH } from "../utils/constants";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => (
  <>
    <Head>
      <title>UEA Real Estate</title>
    </Head>
    <Box as="header">
      <Navbar />
    </Box>
    <Box as="main">
      <Container maxW={CONTAINER_WIDTH}>{children}</Container>
    </Box>
    <Box as="footer">
      <Footer />
    </Box>
  </>
);

export default Layout;
