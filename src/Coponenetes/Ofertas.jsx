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
        <Image src="/Oferta1.jpeg" />
        <Heading size='lg'>Coputadora oferta</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas,
          maiores ab? Ab modi reiciendis mollitia rem dignissimos, alias iste
          distinctio facere. Iure illo vero deleniti aliquid, architecto sit
          obcaecati tempore.
        </Text>
      </CardBody>
    </Card>
  );
}
export default Oferta;