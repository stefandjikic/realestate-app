import { useMemo } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Image from "next/image";
import {
  Box,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Icon,
} from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import FilterComponent from "../../components/FilterComponent";
import PropertyComponent from "../../components/PropertyComponent";
import { baseUrl, fetchAPI } from "../../api/fetchApi";
import { IProperty } from "../../interfaces/property_interface";

interface IProps {
  properties: IProperty[];
}

const SearchPage = ({ properties = [] }: IProps) => {
  const router = useRouter();

  const parsedPropertyPurpose = useMemo(
    () => router && router?.query?.purpose?.toString()?.replace(/-/g, " "),
    [router]
  );

  return (
    <Box>
      <Accordion allowToggle>
        <AccordionItem borderTop="0">
          <AccordionButton
            display="flex"
            justifyContent="center"
            _hover={{ bg: "#fcfcfc" }}
          >
            <Box textAlign="center" fontWeight="bold">
              Filter Properties
            </Box>
            <Icon ml="2" as={BsFilter} />
          </AccordionButton>
          <AccordionPanel>
            <FilterComponent />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Text as="h2" mt="3" fontSize="3xl">
        Properties {parsedPropertyPurpose || ""}
      </Text>
      {properties?.length === 0 && (
        <Flex
          mt="20"
          justifyContent="center"
          alignContent="center"
          flexDirection="column"
        >
          <Image
            width={200}
            height={120}
            alt="No Data"
            src="/img/no-data.svg"
          />
          <Text fontSize="sm" textAlign="center" mt="5">
            Currently, there are no properties with these criteria.
          </Text>
        </Flex>
      )}
      <Flex
        flexWrap='wrap'
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        my="20px"
      >
        {properties?.map((property) => (
          <PropertyComponent key={property.id} property={property} />
        ))}
      </Flex>
    </Box>
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchAPI(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}&hitsPerPage=15`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
};
