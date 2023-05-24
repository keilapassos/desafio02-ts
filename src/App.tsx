import { ChakraProvider } from "@chakra-ui/react";
import { login } from "./services/login";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { LittleCard } from "./components/LittleCards/LittleCard";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Card login={login} />
      <LittleCard />
    </ChakraProvider>
  );
}

export default App;
