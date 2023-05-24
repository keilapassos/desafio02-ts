import { Button } from "@chakra-ui/react";

interface ILogin {
  login: () => void;
}

export const CustomButton = ({ login }: ILogin) => {
  return (
    <Button
      onClick={login}
      colorScheme="teal"
      size="sm"
      width="100%"
      marginTop="5px"
    >
      Botão Personalizado
    </Button>
  );
};
