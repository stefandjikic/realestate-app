import { useRouter } from "next/router";
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
import { useMemo } from "react";
import { PROPERTIES } from "../../utils/constants";
import PropertyComponent from "../../components/PropertyComponent";

const SearchPage = () => {
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
      {PROPERTIES?.length === 0 && (
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
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        my="20px"
      >
        {PROPERTIES?.map((property) => (
          <PropertyComponent key={property.id} property={property} />
        ))}
      </Flex>
    </Box>
  );
};

export default SearchPage;

//TODO: connect with api
// export async function getServerSideProps() {
//   //TODO: add filters from URL query and append them in fetch request

//   const properties = fetchAPI(`${baseUrl}/properties/list?locationExternalIDs=5002&hitsPerPage=10`);

//   return {
//     props: {
//       propertiesForSale: properties?.hits,
//     }
//   }
// }
