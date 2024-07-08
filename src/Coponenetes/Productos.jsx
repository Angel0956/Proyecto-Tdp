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
  
  const { Name, Precio ,img} = props.Producto ;

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
            <Text> `Precio: ${Precio} $`</Text>
            <Button >Añadir</Button>
          </CardBody>
        </HStack>
      </Card>
    </GridItem>
  );
}
export default Producto;
























