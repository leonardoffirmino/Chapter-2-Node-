import { describe, expect, it } from "@jest/globals";


describe("Create Category", () => {


  it("Espero que 2 + 2 seja 4", () => {
    const soma = 2 + 2;
    const resultado = 6;

    expect(soma).toBe(resultado);
  });

  it("Espero que 2 + 2 não seja 5", () => {
    const soma = 2 + 2;

    const resultado = 5;

    expect(soma).not.toBe(resultado);
  });


})