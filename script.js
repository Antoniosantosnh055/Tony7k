function mostrarTexto() {
  const texto = document.getElementById("texto-escondido");
  if (texto.style.display === "none") {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }
}

function gerarTabela() {
  const jogos = [
    { nome: "GTA V", genero: "Mundo Aberto", ano: 2013 },
    { nome: "Minecraft", genero: "Sobrevivência", ano: 2011 },
    { nome: "Fortnite", genero: "Battle Royale", ano: 2017 },
  ];

  const tabela = document.getElementById("tabela-jogos");
  tabela.innerHTML = "<tr><th class='cabecalho-tabela'>Nome</th><th class='cabecalho-tabela'>Gênero</th><th class='cabecalho-tabela'>Ano</th></tr>";

  for (let jogo of jogos) {
    const linha = `<tr><td class='celula'>${jogo.nome}</td><td class='celula'>${jogo.genero}</td><td class='celula'>${jogo.ano}</td></tr>`;
    tabela.innerHTML += linha;
  }
}
