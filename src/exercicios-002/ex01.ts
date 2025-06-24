function processarDados(nome: string, idades: number[]) {
  console.log("Olá, " + nome.toUpperCase() + "!!");

  let soma = 0;
  for (const idade of idades) {
    soma += idade;
  }
  console.log("Soma das idades: " , soma)

  if (idades[0] % 2 !== 0) {
    console.log("A primeira idade é ímpar.")
  } else {
    console.log("A primeira idade é par")
  }
}

processarDados( "João", [25, 30, 22])