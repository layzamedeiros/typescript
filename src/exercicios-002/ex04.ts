function processarID(id: number | string) {
  if (typeof id === "string") {
    console.log("Seu ID (string) em minúsculas: " + id.toLowerCase())
  } else {
    console.log("Seu ID (number) multiplicado por 2: " + id * 2)
  }
}

processarID("ABCD1234");
processarID(10); 

const nomes = ["João", "Maria", "Lúcia"];
  nomes.forEach((nome) => {
    console.log(nome.toUpperCase());
  });