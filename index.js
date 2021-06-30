const catalogo = require("./catalogo");

function adicionarFilme(titulo, duracao, atores, anoDoLancamento, emCartaz) {
  const novoFilme = {
    codigo: catalogo.length + 1,
    titulo,
    duracao,
    atores,
    anoDoLancamento,
    emCartaz,
  };

  catalogo.push(novoFilme);
  console.log("Filme adicionado com sucesso!");
}

function adicionarFilme(titulo, duracao, atores, anoDoLancamento, emCartaz) {
  const novoFilme = {
    codigo: catalogo.length + 1,
    titulo,
    duracao,
    atores,
    anoDoLancamento,
    emCartaz,
  };

  catalogo.push(novoFilme);
  console.log("Filme adicionado com sucesso!");
}

function buscarFilme(codigo) {
  const filmeProcurado = catalogo[codigo - 1];
  if (!filmeProcurado) {
    return console.log("Código não encontrado");
  }
  console.log(filmeProcurado);
}

buscarFilme(2);

function alterarStatusEmCartaz(codigo, novoStatus) {
  const filmeProcurado = catalogo[codigo - 1];

  if (!filmeProcurado) {
    return console.log("Código não encontrado");
  }

  catalogo[codigo - 1].emCartaz = novoStatus;

  console.log("Filme alterado!");
}

