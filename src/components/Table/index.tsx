import React, { FC, useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { column } from "../../helpers";

interface TableProps {
    header?: string
    columns?: column[]
    Data: any
}

const TableComponent: FC<TableProps> = ({header , columns, Data}) => {
  

  const [value, setValue] = useState("");
  const handleChange = (event: any) => setValue(event.target.value);

  const filteredTable = Data.filter((item: any) => {
    const searchText = value.toLowerCase();
    const nameSearch = item.name.toLowerCase();
    const descriptionSearch = item.description.toLowerCase();
    return nameSearch.includes(searchText) || descriptionSearch.includes(searchText)
  });

  return (
    <Flex width={"100%"} justifyContent={"center"}>
      <Flex width={"100%"} justifyContent={"center"}>
        <Flex width={"80%"} direction={"column"} justifyContent={"center"}>
          <Flex my={5} justifyContent={"center"}>
            <Heading> {header} </Heading>
          </Flex>
          <Flex justifyContent="flex-end">
            <Input
              value={value}
              onChange={handleChange}
              width="300px"
              placeholder="Search"
            />
          </Flex>
          <TableContainer>
            <Table variant="striped" colorScheme="teal">
              <TableCaption>
                Products brought to you by LesleyOnline!!
              </TableCaption>
              <Thead>

                <Tr>
                  {columns?.map((item) => (
                    <Th key={String(item.fieled)}>{item.title}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {filteredTable.map((item: any) => (
                  <Tr>
                    {columns?.map((element: column, idx) =>
                     (
                        <Td key={idx}>{item[String(element.title)]}</Td>
                      )
                    )}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TableComponent;
