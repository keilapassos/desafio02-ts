import { Center, Box, Flex, Container } from "@chakra-ui/react";
import javascript from "../../assets/javascript-logo.png";
import typescript from "../../assets/typescript-logo.png";
import reactjs from "../../assets/reactjs-logo.png";

interface ILittleCard {
  id: number;
  name: string;
  image: string;
  details: string;
}

const techCards: ILittleCard[] = [
  {
    id: 1,
    name: "Javascript",
    image: javascript,
    details: "Linguagem de programação",
  },
  {
    id: 2,
    name: "Typescript",
    image: typescript,
    details: "Linguagem de programação, superset de Javascript",
  },
  {
    id: 3,
    name: "React Js",
    image: reactjs,
    details: "Biblioteca front-end de JavaScript com foco em criar páginas web",
  },
];

export const LittleCard = () => {
  return (
    <Box maxWidth="70vw" m="0 auto">
      <Center m="20px" fontSize="26px">
        <h2>Curiosidades</h2>
      </Center>
      <Flex justifyContent="space-around" wrap="wrap">
        {techCards.map((tech) => {
          return (
            <Box
              bg="#FFFFFF"
              borderRadius="15px"
              padding="15px"
              m="10px 20px"
              minHeight="100px"
              w="200px"
              border="2px solid #2e0f4b"
            >
              <Center fontWeight="bold">
                <p>{tech.name}</p>
              </Center>
              <Center padding="10px">
                <img width="60px" src={tech.image} alt={tech.name} />
              </Center>
              <Center textAlign="center">
                <p>{tech.details}</p>
              </Center>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};
