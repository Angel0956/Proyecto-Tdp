import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  useDisclosure,
  Button,
  Card,
  CardBody,
  CardHeader,
  Text,
  Heading,
  Flex,
} from "@chakra-ui/react";



function Card_carrito(props) {
  const { dato, setList,Lista_deseado } = props;
  const {name, precio, image, id} = dato
  const Eliminar =(idEliminar)=>{
    const NuevaLista = Lista_deseado.filter((item)=>item.id != idEliminar);
    console.log(NuevaLista)
    setList(NuevaLista)
  }
  return (
    <Card>
      <Flex gap={1}>
        <Image src={image} flex="1" boxSize="100px" />
        <CardBody flex="1">
          <Heading>{name}</Heading>
          <Text>Precio: ${precio}</Text>
        </CardBody>
      </Flex>
      <Button onClick={()=>Eliminar(id)} leftIcon={<AiOutlineClose />} colorScheme="red">
        Eliminar
      </Button>
    </Card>
  );
}

function Menu_car(props) {
  const {setList ,Lista_deseados } = props
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  let total = Lista_deseados.reduce((acc,item)=> acc + item.precio, 0)
  return (
    <>
      <Button onClick={onOpen}>
        <Image src="/carrito.webp" boxSize="60px" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Lista de compras</DrawerHeader>
            <DrawerBody>
              {Lista_deseados.map((Item, index) => (
                <Card_carrito key={index} dato={Item} setList={setList} Lista_deseado={Lista_deseados} />
              ))}
            </DrawerBody>
            <DrawerFooter>
              <Text>Total: $ {total}</Text>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}


export default Menu_car;
