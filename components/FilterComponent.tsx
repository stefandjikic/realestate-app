import { useState } from "react";
import Router from "next/router";
import { Flex, Box, Select } from "@chakra-ui/react";
import { FILTER_VALUES } from "../utils/constants";
import { IFilterValues } from "../interfaces/filters_interface";
import { parseFilterValues } from "../utils/helpers";

const FilterComponent = () => {
  const [filterValues, setFilterValues] =
    useState<Array<IFilterValues>>(FILTER_VALUES);

  const filterProperties = (filterValue: any) => {
    const { pathname, query } = Router;
    const values = parseFilterValues(filterValue);

    values.forEach((item) => {
      if (item.value) {
        query[item.name] = item.value;
      }
    });
    Router.push({ pathname, query });
  };
  return (
    <Flex flexWrap="wrap" justifyContent="center">
      {filterValues?.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            bg="white"
            width="fit-content"
            p="1"
            placeholder={filter.placeholder}
            onChange={(e) =>
              filterProperties({ [filter.queryName]: e.target.value })
            }
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
  );
};

export default FilterComponent;
