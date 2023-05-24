import { login } from "./login";

describe("login", () => {
  const mockPrompt = jest.fn();
  window.prompt = mockPrompt;

  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("Deve exibir um alert perguntando nome do usuário", () => {
    login();
    expect(mockPrompt).toHaveBeenCalledWith("Digite o seu nome: ");
  });

  it("Deve exibir um alert com boas vindas", () => {
    const name = prompt("Digite o seu nome: ");
    login();
    expect(mockAlert).toHaveBeenCalledWith(`Seja bem vindo(a), ${name}!`);
  });
});
