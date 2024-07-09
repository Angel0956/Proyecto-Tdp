import { Box, Heading, HStack, Image, Flex, Grid } from "@chakra-ui/react";
import { useState } from "react";
import Oferta from "./Coponenetes/Ofertas";
import "./App.css";
import Logo from "/LOGOO.jpeg";
import carrito from "/carrito.webp";
import Producto from "./Coponenetes/Productos";
import Menu_car from "./Coponenetes/ventana-emerge";
import Productos from "./Productos.json";


function App() {
  const [Lista_deseados, setList] = useState([])
  return (
    <>
      <Box p={2} border="2px" borderColor="while" m="10px" borderRadius="50x">
        <HStack justifyContent="space-between " mr="2em" ml="2em">
          <Box>
            <Image src={Logo} boxSize="100px" w="100%"/>
          </Box>
          <Box>
            <Menu_car setList={setList} Lista_deseados={Lista_deseados}/>
          </Box>
        </HStack>
      </Box>
      <Flex m="1em" gap="2em">
        <Box className="Ofertas" w="100%" flex="1">
          <Heading mb="1em">Ofertas</Heading>
          <Flex>
            <Oferta />
          </Flex>
          
        </Box>
        <Box className="Productos" w="100%" flex="3">
          <Heading mb="1em">Productos</Heading>
          <Grid templateColumns="repeat(auto-fill,minmax(25em,1fr))" gap="2em">
            {Productos.map((iten, index) => (
              <Producto key={index} item={iten} setList = {setList} />
            ))}
          </Grid>
        </Box>
      </Flex>
    </>
  );
}

export default App;
