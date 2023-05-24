import { Center, Input, Box, Button, Flex } from "@chakra-ui/react";
import { CustomButton } from "../Button/CustomButton";

interface ICard {
  login: () => void;
}

export const Card = ({ login }: ICard) => {
  return (
    <Box minHeight="30vh" backgroundColor="#2e0f4b" padding="25px">
      <Box
        backgroundColor="#FFFFFF"
        borderRadius="25px"
        padding="15px"
        maxWidth="500px"
        m="20px auto"
      >
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Center>
          <CustomButton login={login} />
        </Center>
      </Box>
    </Box>
  );
};
