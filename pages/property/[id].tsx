import React from "react";
import {
  Flex,
  Box,
  Text,
  Avatar,
  Grid,
  GridItem,
  Heading,
  Container,
} from "@chakra-ui/react";
import { FaBed, FaBath, FaPhone } from "react-icons/fa";
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
    description = "",
    agency: {
      logo: { url: agencyLogoUrl = "" } = {},
      name: agencyName = "",
    } = {},
    contactName = "",
    phoneNumber: { mobile = "", phone = "" } = {},
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
          <Flex mt="50px" fontSize="xl" fontWeight="bold">
            <Box>AED</Box>
            <Box ml="1">{millify(price) || "n/a"}</Box>
            {rentFrequency && `/${rentFrequency}`}
          </Flex>
        </GridItem>
        <GridItem order={{ base: 1, md: 2 }}>
          <ImageCarousel photos={photos.map((photo) => photo.url)} />
        </GridItem>
      </Grid>
      <Container maxW="container.lg">
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "2fr 1fr" }}
          gap="50px"
          mt="20"
        >
          <GridItem>
            <Text lineHeight="2" color="gray.600">
              {description}
            </Text>
            <Box
              borderBottom="1px solid #eee"
              borderTop="1px solid #eee"
              py="8"
              mt="5"
            >
              <Heading fontSize="20px" mb='6' as="h3">
                Property Features
              </Heading>
              <Flex alignItems='center' mt='3'>
              <Flex alignItems='center' mr={{base: '40px', md: '140px'}}>
                <Box mr='2'>Size: {millify(area)} sqft </Box>
                 <BsGridFill />
              </Flex>
              <Flex alignItems='center'>
                <Box mr='2'>Rooms: {rooms} </Box>
                <FaBed />
              </Flex>
              </Flex>
            </Box>
          </GridItem>
          <GridItem>
            {/* TODO: Create component for this */}
            <Box
              height="350px"
              textAlign="center"
              borderRadius="md"
              boxShadow="md"
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                p="4"
                borderBottom="1px solid #eee"
              >
                <Avatar
                  size="md"
                  src={agencyLogoUrl || "/img/agency-logo-default.svg"}
                />
              </Flex>
              <Text
                fontSize="xl"
                mt="2"
                mb="4"
                fontWeight="bold"
                color="gray.700"
              >
                {agencyName}
              </Text>
              <Text fontSize="x-small" fontWeight="bold" color="gray.500">
                CONTACT
              </Text>
              <Text fontWeight="bold" mt="4" mb="4">
                {contactName}
              </Text>
              <Flex alignItems="center" justifyContent="center" mt="3">
                <FaPhone size="15px" />
                <Text ml="2">{mobile}</Text>
              </Flex>
              <Flex alignItems="center" justifyContent="center" mt="3">
                <FaPhone size="15px" />
                <Text ml="2">{phone}</Text>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default PropertyPage;
