import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";

function Oferta() {
  return (
    <Card>
      
      <CardBody >
        <Image src="/Camiseta.avif" />
        <Heading size='lg'>Camisetas 2x1</Heading>
        <Text>
          Ofertas 2x1 en Camisetas Proximamente!!
          Tendremos gran variedad de camisetas en 
          ofertas, ademas de muchos productos mas.
        </Text>
      </CardBody>
    </Card>
  );
}
export default Oferta;