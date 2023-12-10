const pessoa = {
    nome: 'Ana',
    idade: 5,
    cidade: 'São Paulo',
    profissao: 'Desenvolvedora'
};

const endereco = {
    rua: 'Rua dos pinheiros',
    numero: 1293,
    bairro: 'Centro',
    cidade: 'São Paulo',
    uf: 'SP'
};





const usuario = {...pessoa, ...endereco};

console.log(usuario); // {nome: "Ana", idade: 5, cidade: "São Paulo", profissao: "Desenvolvedora", rua: "Rua dos pinheiros", …}

