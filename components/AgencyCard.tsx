import React from "react";
import { Box, Flex, Avatar, Text } from "@chakra-ui/react";
import { FaPhone } from "react-icons/fa";

const AgencyCard = ({
  agencyLogoUrl = "",
  agencyName = "",
  contactName = "",
  mobile = "",
  phone = "",
}) => {
  return (
    <Box
      height="350px"
      textAlign="center"
      borderRadius="md"
      boxShadow="md"
      position={{ lg: "sticky" }}
      top="10"
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
      <Text fontSize="xl" mt="2" mb="4" fontWeight="bold" color="gray.700">
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
  );
};

export default AgencyCard;
