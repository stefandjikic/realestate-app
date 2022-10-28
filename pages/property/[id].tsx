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
import { BsGridFill } from "react-icons/bs";
import millify from "millify";
import { IPropertyDetails } from "../../interfaces/property_interface";
// import { PROPERTY_DETAILS } from "../../utils/constants";
import ImageCarousel from "../../components/ImageCarousel";
import MapEmbed from "../../components/MapEmbed";
import { baseUrl, fetchAPI } from "../../api/fetchApi";
import AgencyCard from "../../components/AgencyCard";

interface IProps {
  propertyDetails: IPropertyDetails;
}

const PropertyPage = ({
  propertyDetails: {
    photos = [],
    title = "",
    rooms = 0,
    baths = 0,
    area = 0,
    price = 0,
    rentFrequency = "",
    description = "",
    purpose = "",
    agency: {
      logo: { url: agencyLogoUrl = "" },
      name: agencyName = "",
    },
    contactName = "",
    phoneNumber: { mobile = "", phone = "" },
    furnishingStatus = null,
    amenities = [],
    geography: { lat = 0, lng = 0 },
  } = {} as IPropertyDetails,
}: IProps) => {
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
            <Box borderBottom="1px solid #eee" py="8">
              <Text lineHeight="2" color="gray.600">
                {description}
              </Text>
            </Box>
            <Box borderBottom="1px solid #eee" py="8">
              <Heading fontSize="20px" mb="6" as="h3">
                Property Features
              </Heading>
              <Flex alignItems="center" mt="3">
                <Flex alignItems="center" mr={{ base: "40px", md: "60px" }}>
                  <Box mr="2">Size: {millify(area)} sqft </Box>
                  <BsGridFill />
                </Flex>
                <Flex alignItems="center" mr={{ base: "40px", md: "60px" }}>
                  <Box mr="2">Rooms: {rooms} </Box>
                  <FaBed />
                </Flex>
                <Flex alignItems="center">
                  <Box mr="2">Baths: {baths} </Box>
                  <FaBed />
                </Flex>
              </Flex>
            </Box>
            <Box borderBottom="1px solid #eee" py="8">
              <Heading fontSize="20px" mb="6" as="h3">
                Property Purpose
              </Heading>
              <Flex color="gray.600">
                <Text fontWeight="bold" mr="4">
                  {purpose?.replace("-", " ")?.toUpperCase()}
                </Text>
                <Text>{millify(price)}</Text>
              </Flex>
            </Box>
            {furnishingStatus !== null && (
              <Box borderBottom="1px solid #eee" py="8">
                <Heading fontSize="20px" mb="6" as="h3">
                  Furnishing Status
                </Heading>
                <Text
                  color="gray.600"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  {furnishingStatus !== null && furnishingStatus}
                </Text>
              </Box>
            )}
            {amenities && amenities?.length > 0 && (
              <Box borderBottom="1px solid #eee" py="8">
                <Heading fontSize="20px" mb="6" as="h3">
                  Amenities
                </Heading>
                <Flex flexWrap="wrap">
                  {amenities?.map((amenityItem: any) =>
                    amenityItem?.amenities.map((amenity: any) => (
                      <Box
                        key={amenity.text}
                        bg="gray.100"
                        m="1"
                        p="1"
                        borderRadius="4"
                      >
                        {amenity.text}
                      </Box>
                    ))
                  )}
                </Flex>
              </Box>
            )}
            <Box py="8">
              <Heading fontSize="20px" mb="6" as="h3">
                Location
              </Heading>
              <MapEmbed lat={lat} lng={lng} />
            </Box>
          </GridItem>
          <GridItem>
            <AgencyCard
              agencyLogoUrl={agencyLogoUrl}
              agencyName={agencyName}
              contactName={contactName}
              mobile={mobile}
              phone={phone}
            />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default PropertyPage;

export async function getServerSideProps({ params: { id = "" } }) {
  const data = await fetchAPI(`${baseUrl}/properties/detail?externalID=${id}`);
  return {
    props: {
      propertyDetails: data,
    },
  };
}
