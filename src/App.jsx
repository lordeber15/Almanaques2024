import "./App.module.css";
import { Button } from "@chakra-ui/react";
import { AddIcon, ViewIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

function App() {
  return (
    <div className="body">
      <div className="title">
        <Heading>Almanaques 2024</Heading>
      </div>
      <div className="bodyalm">
        <Tabs variant="enclosed">
          <TabList>
            <Tab>Pedidos</Tab>
            <Tab>Stock Moreno</Tab>
            <Tab>Stock Riva</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Button leftIcon={<AddIcon />} colorScheme="teal" variant="solid">
                Agregar Pedido
              </Button>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Cliente</Th>
                      <Th>Cantidad</Th>
                      <Th>Modelo</Th>
                      <Th>Detalles</Th>
                      <Th isNumeric>Precio</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Juan</Td>
                      <Td>100</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>
                        <IconButton
                          colorScheme="teal"
                          aria-label="Call Segun"
                          size="lg"
                          icon={<ViewIcon />}
                        />
                      </Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>Pedro</Td>
                      <Td>300</Td>
                      <Td>centimetres (cm)</Td>
                      <Td>
                        <IconButton
                          colorScheme="teal"
                          aria-label="Call Segun"
                          size="lg"
                          icon={<ViewIcon />}
                        />
                      </Td>
                      <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                      <Td>Lucho</Td>
                      <Td>100</Td>
                      <Td>metres (m)</Td>
                      <Td>
                        <IconButton
                          colorScheme="teal"
                          aria-label="Call Segun"
                          size="lg"
                          icon={<ViewIcon />}
                        />
                      </Td>
                      <Td isNumeric>0.91444</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>

            <TabPanel>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Cantidad</Th>
                      <Th>Modelo</Th>
                      <Th isNumeric>Precio</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>100</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>300</Td>
                      <Td>centimetres (cm)</Td>
                      <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                      <Td>100</Td>
                      <Td>metres (m)</Td>
                      <Td isNumeric>0.91444</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Cantidad</Th>
                      <Th>Modelo</Th>
                      <Th isNumeric>Precio</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>100</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>300</Td>
                      <Td>centimetres (cm)</Td>
                      <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                      <Td>100</Td>
                      <Td>metres (m)</Td>
                      <Td isNumeric>0.91444</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
