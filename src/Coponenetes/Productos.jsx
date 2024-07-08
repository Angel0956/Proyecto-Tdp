import { useState } from "react";
import {
  Card,
  CardBody,
  GridItem,
  CardHeader,
  Text,
  Heading,
  Image,
  Button,
  HStack,
} from "@chakra-ui/react";

function Producto(props) {
  const add_list = (producto) =>{
    setList((productoPrev)=>[...productoPrev,producto])
  }
  const { item, setList} = props;
  const {Name,Precio,img, id} = item
  const Aniadir = ()=>{
    const producto = {
      name:Name,
      precio:Precio,
      image:img,
      id:id
    }
    add_list(producto)
  }

  return (
    <GridItem>
      <Card>
        <HStack>
          <Image src={img} boxSize="250px" />

          <CardBody
            display="flex"
            flexDir="column"
            alignItems="center"
            gap="0.8em"
          >
            <Heading>{Name}</Heading>
            <Text>Precio: ${Precio}$</Text>
           
            <Button onClick={Aniadir}>Añadir</Button>
          </CardBody>
        </HStack>
      </Card>
    </GridItem>
  );
}
export default Producto;
























