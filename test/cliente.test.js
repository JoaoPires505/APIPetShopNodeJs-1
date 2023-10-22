const { describe, expect, it, beforeAll, afterAll } = require('@jest/globals');
const ClienteService = require('../src/services/cliente');
const connection = require('../src/database');

describe('Testes', () => {
  const service = new ClienteService();
  let save;

  beforeAll(async () => {
    this.save = await connection.transaction();
  });

  afterAll(async () => {
    this.save.rollback();
  });

  it('Should get person', async () => {
    const result = await service.GetById(1, this.save);

    expect(result.id).toBe(1);
    expect(result.nome).toBe('Batata Potato');
    expect(result.telephone).toBe('244466666');
  });

  it('Should create a person', async () => {
    const result = await service.Add(
      {
        nome: 'joao',
        email: 'teste2@teste.com',
        telephone: '1293456789',
        cachorros: [
          {
            nome: 'Galaxy Destroyer',
            breed: 'shitzu',
            clientes_id: 1,
          },
        ],
      },
      this.save
    );

    expect(result.message).toBe('Cliente added successfully!');

    expect(result.cliente.nome).toBe('joao');
    expect(result.cliente.email).toBe('teste2@teste.com');
    expect(result.cliente.telephone).toBe('1293456789');

    expect(result.cliente.cachorros).toHaveLength(1);
    expect(result.cliente.cachorros[0].nome).toBe('Galaxy Destroyer');

  });
});