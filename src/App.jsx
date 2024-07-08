import { Box, Heading, HStack, Image, Flex, Grid } from "@chakra-ui/react";
import Oferta from "./Coponenetes/Ofertas";
import "./App.css";
import Logo from "/Logo.png";
import carrito from "/carrito.webp";
import Producto from "./Coponenetes/Productos";
import Productos from "./Productos.json";


function App() {
  return (
    <>
      <Box p={2} border="2px" borderColor="while" m="10px" borderRadius="5px">
        <HStack justifyContent="space-between " mr="2em" ml="2em">
          <Box>
            <Image src={Logo} boxSize="100px" />
          </Box>
          <Box>
            <Image src={carrito} boxSize="100px" />
          
            
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
              <Producto Key={index} Producto={iten} />
            ))}
          </Grid>
        </Box>
      </Flex>
    </>
  );
}

export default App;
