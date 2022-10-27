import { useState } from "react";
// import Router from "next/router";
import { useRouter } from "next/router";
import { Flex, Box, Select, Button } from "@chakra-ui/react";
import { FILTER_VALUES } from "../utils/constants";
import { IFilterValues } from "../interfaces/filters_interface";
import { parseFilterValues } from "../utils/helpers";

const FilterComponent = () => {
  const router = useRouter();
  const [activeFilters, setActiveFilters] = useState(false);
  const [filterValues, setFilterValues] =
    useState<Array<IFilterValues>>(FILTER_VALUES);

  const filterProperties = (filterValue: any) => {
    const { pathname, query } = router;
    const values = parseFilterValues(filterValue);

    values.forEach((item) => {
      if (item.value) {
        query[item.name] = item.value;
      }
    });
    router.push({ pathname, query });
  };

  const clearFilters = () => {
    const { pathname } = router;
    router.push({ pathname });
    setActiveFilters(false)
  };
  return (
    <Flex direction="column" alignItems="center">
      <Flex flexWrap="wrap" justifyContent="center">
        {filterValues?.map((filter) => (
          <Box key={filter.queryName}>
            <Select
              bg="white"
              width="fit-content"
              p="1"
              placeholder={filter.placeholder}
              onChange={(e) => {
                filterProperties({ [filter.queryName]: e.target.value });
                !activeFilters && setActiveFilters(true);
              }}
            >
              {filter?.items?.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </Select>
          </Box>
        ))}
      </Flex>
      {activeFilters && Object.keys(router.query).length !== 0 && (
        <Button onClick={clearFilters} mt="5">
          Clear Filters
        </Button>
      )}
    </Flex>
  );
};

export default FilterComponent;
