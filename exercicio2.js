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
  ],
};

const valorTotalAPagar = cartaoCliente.produtosConsumidos.reduce(
  (acc, produto) => acc + produto.valor * produto.quantidade,
  0
);

console.log(
  ` Sr(a) ${cartaoCliente.nome} valor total da sua comanda ficou R$${(
    valorTotalAPagar / 100
  ).toFixed(2)}, por favor dirija-se ao caixa para efetuar o pagamento.`
);
