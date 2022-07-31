import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Icon,
} from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import FilterComponent from "../../components/FilterComponent";

const SearchPage = () => {
  return (
    <Box>
      <Accordion bg='gray.50' allowToggle>
        <AccordionItem>
            <AccordionButton display='flex' justifyContent='center'>
              <Box textAlign="center" fontWeight='bold'>
                Filter Properties
              </Box>
              <Icon ml='2' as={BsFilter} />
            </AccordionButton>
          <AccordionPanel>
            <FilterComponent />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default SearchPage;
