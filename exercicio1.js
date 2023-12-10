const cliente = {
  nome: "Jeferson",
  idade: 42,
  altura: "1.86",
  temCnh: true,
  apelidos: ["Jef", "Jefinho", "Jefão"],
};

console.log(
  `${cliente.nome} tem ${cliente.idade} anos, ${cliente.altura}m de altura, ${
    cliente.temCnh ? "possui" : "não possui"
  } CNH. e os seguintes apelidos: ${cliente.apelidos.join(", ")}`
);
