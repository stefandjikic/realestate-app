import type { NextPage } from "next";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";
import CtaComponent from "../components/CtaComponent";
import PropertyComponent from "../components/PropertyComponent";
import { baseUrl, fetchAPI } from "../api/fetchApi";
import { IProperty } from "../interfaces/property_interface";

// accentColor = #FF6884
// bg and gradient
// background: rgb(52,52,117);
// background: linear-gradient(30deg, rgba(52,52,117,1) 0%, rgba(90,113,183,1) 35%, rgba(140,201,242,1) 100%);

interface IProps {
  propertiesForSale: Array<IProperty>;
  propertiesForRent: Array<IProperty>;
}

const Home: NextPage<IProps> = ({ propertiesForSale, propertiesForRent }) => {
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
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        my="60px"
      >
        {propertiesForRent &&
          propertiesForRent?.length > 0 &&
          propertiesForRent?.map((property: IProperty) => (
            <PropertyComponent key={property.id} property={property} />
          ))}
      </Flex>
      <CtaComponent
        type="Buy a home"
        imgSrc="/img/pexels-buy.jpg"
        title="Find, buy and own a house you 'll call home!"
        description="Search homes for sale, villas, apartments and more."
        buttonText="Explore Buying"
        link="/search?type=for-buy"
      />
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        my="60px"
      >
        {propertiesForSale &&
          propertiesForSale?.length > 0 &&
          propertiesForSale?.map((property) => (
            <PropertyComponent key={property.id} property={property} />
          ))}
      </Flex>
    </Box>
  );
};

export default Home;

export async function getStaticProps() {
  const propertiesForSale = await fetchAPI(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=3`
  );
  const propertiesForRent = await fetchAPI(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=3`
  );

  return {
    props: {
      propertiesForSale: propertiesForSale.hits || null,
      propertiesForRent: propertiesForRent.hits || null,
    },
  };
}
