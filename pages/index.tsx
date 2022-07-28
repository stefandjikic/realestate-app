import type { NextPage } from "next";
import Image from "next/image";
import { Box, Heading } from "@chakra-ui/react";
import CtaComponent from "../components/CtaComponent";

const Home: NextPage = () => {
  return (
    <Box>
      <Box
        mt="60px"
        mb="60px"
        h="500px"
        w="100%"
        pos="relative"
        borderRadius="md"
        bg="linear-gradient(30deg, rgba(52,52,117,1) 0%, rgba(90,113,183,1) 35%, rgba(140,201,242,1) 100%)"
      >
        <Image
          src="/img/town.svg"
          // className="round-img"
          // src="/img/pexels-building.jpg"
          // objectFit="cover"
          alt="search properties"
          layout="fill"
        />
      </Box>
      <CtaComponent
        type="Rent a home"
        imgSrc="/img/pexels-rent.jpg"
        title="Your destination for renting a home!"
        description="Find houses, apartments, villas and more."
        buttonText="Explore Renting"
        link="/search?type=for-rent"
      />
      <CtaComponent
        type="Buy a home"
        imgSrc="/img/pexels-buy.jpg"
        title="Find, buy and own a house you 'll call home!"
        description="Search homes for sale, villas, apartments and more."
        buttonText="Explore Buying"
        link="/search?type=for-buy"
      />
    </Box>
  );
};

export default Home;
