import Image from "next/image";
import Link from "next/link";
import { Flex, Box, Heading, Text, Avatar } from "@chakra-ui/react";
import millify from "millify";
import { FaBed, FaBath } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { BsGridFill } from "react-icons/bs";
import { IProperty } from "../interfaces/property_interface";
import defaultHouse from "../public/img/default-house.jpg";

interface IProps {
  property: IProperty;
}

const PropertyComponent = ({ property }: IProps) => {
  const {
    externalID = "",
    price = 0,
    rentFrequency = "",
    title = "",
    coverPhoto = "",
    rooms = 0,
    baths = 0,
    area = 0,
    agency: { logo: { url: agencyLogo = "" } = {} } = {},
    isVerified = false,
  } = property;
  return (
    <Link href={`/property/${externalID}`} passHref>
      <Flex
        direction="column"
        maxW="400px"
        p="3"
        mr={{sm: 0, lg: '4'}}
        mb={{base: '4', lg: 0}}
        cursor="pointer"
        boxShadow="sm"
        borderRadius="md"
      >
        <Box>
          <Image
            width={400}
            height={260}
            alt="property"
            src={coverPhoto ? coverPhoto?.url : defaultHouse}
          />
        </Box>
        <Box>
          <Flex justifyContent="space-between" py="2">
            <Flex alignItems="center">
              <Box color="#FF6884" mr="2">
                {isVerified && <GoVerified />}
              </Box>
              <Box>
                AED
                <Box ml="1" as="span" fontWeight="medium">
                  {millify(price) || "n/a"}
                </Box>
                {rentFrequency && `/${rentFrequency}`}
              </Box>
            </Flex>
            <Box ml="2">
              <Avatar size="sm" src={agencyLogo || ""} />
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            w="230px"
            color="rgba(52,52,117)"
          >
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
            <BsGridFill />
          </Flex>
          <Text mt="4">
            {title?.length > 38 ? `${title.substring(0, 38)}...` : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default PropertyComponent;
