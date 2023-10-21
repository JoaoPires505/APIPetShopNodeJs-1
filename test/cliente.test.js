const { describe, expect, it, beforeAll, afterAll } = require("@jest/globals");
const ServicoCliente = require("../src/services/cliente.js");
const conexao = require("../src/database");

describe("Testes clientes", () => {
  let save;

  beforeAll(async () => {
    save = await conexao.transaction();
  });

  afterAll(async () => {
    save.rollback();
  });

  const servico = new ServicoCliente();

  it("Should create a client", async () => {
    const result = await servico.Add(
      {
        nome: "Cliente 1",
        telefone: "123456789",
      },
      save
    );

    expect(result.nome).toBe("Cliente 1");
    expect(result.telefone).toBe("123456789");
  });

  it("Should get a client", async () => {
    const result = await servico.PegarUm(1, save);

    expect(result.id).toBe(1);
    expect(result.nome).toBe("Cliente 1");
    expect(result.telefone).toBe("123456789");
  });

  it("Should update a client", async () => {
    const updateData = {
      id: 1,
      nome: "Cliente Atualizado",
      telefone: "987654321",
    };

    const result = await servico.Atualizar(updateData, save);

    expect(result).toBe(true);
  });

  it("Should delete a client", async () => {
    const result = await servico.Deletar(1, save);

    expect(result).toBe(true);
  });
});
