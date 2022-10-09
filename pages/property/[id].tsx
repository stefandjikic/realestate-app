import React from "react";
import {
  Flex,
  Box,
  Text,
  Avatar,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { BsGridFill } from "react-icons/bs";
import millify from "millify";
import { IPropertyDetails } from "../../interfaces/property_interface";
import { PROPERTY_DETAILS } from "../../utils/constants";
import ImageCarousel from "../../components/ImageCarousel";

interface IProps {
  propertyDetails: IPropertyDetails;
}

const PropertyPage = ({
  propertyDetails: {
    // id,
    // title,
    // purpose,
    // price,
    // type,
    // rentFrequency,
    // rooms,
    // baths,
    // area,
    // agency,
    // isVerified,
    // description,
    // furnishingStatus,
    // amenities,
    // photos,
  } = {},
}: IProps) => {
  const {
    photos = [],
    title = "",
    rooms = 0,
    baths = 0,
    area = 0,
    price = 0,
    rentFrequency = 0,
    // type = '',
  } = PROPERTY_DETAILS;
  return (
    <Box>
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "1fr 1.75fr" }}
        alignItems="center"
        px="16px"
        gap="16px"
      >
        <GridItem order={{ base: 2, md: 1 }}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "4xl" }}
            mt={{ base: "20px", md: 0 }}
          >
            {title}
          </Heading>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            w="230px"
            color="rgba(52,52,117)"
            mt="30px"
          >
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
            <BsGridFill />
          </Flex>
          <Flex mt='50px' fontSize='xl' fontWeight='bold'>
            <Box>AED</Box>
            <Box ml="1">
              {millify(price) || "n/a"}
            </Box>
            {rentFrequency && `/${rentFrequency}`}
          </Flex>
        </GridItem>
        <GridItem order={{ base: 1, md: 2 }}>
          <ImageCarousel photos={photos.map((photo) => photo.url)} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default PropertyPage;
