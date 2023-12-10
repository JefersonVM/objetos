const cartaoCliente = {
    nome: "Ana Paula",
    idade: 26,
    produtosConsumidos: [
      {
        nome: "Coxinha",
        valor: 350,
        quantidade: 3,
      },
      {
        nome: "Suco",
        valor: 200,
        quantidade: 2,
      },
      {
        nome: "Bolo de cenoura",
        valor: 450,
        quantidade: 2,
      },
      {
        nome: "Brigadeiro",
        valor: 200,
        quantidade: 10,
      }
    ],
  };
  
console.log(cartaoCliente.nome);

console.log(cartaoCliente.idade);

cartaoCliente.idade = 27;

console.log(cartaoCliente.idade);

console.log(cartaoCliente.produtosConsumidos[0].nome);

console.log(cartaoCliente.produtosConsumidos[cartaoCliente.produtosConsumidos.length - 1].valor);


