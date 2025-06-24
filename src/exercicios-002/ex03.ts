function gerarSaudacao(pessoa: {primeiroNome: string, ultimoNome?: string}) {
  if (pessoa.ultimoNome) {
    return `Olá, ${pessoa.primeiroNome} ${pessoa.ultimoNome}`
  } else { 
    return `Olá, ${pessoa.primeiroNome}`
  }
};

console.log(gerarSaudacao({primeiroNome: "Layza", ultimoNome: "Medeiros"}));
console.log(gerarSaudacao({primeiroNome: "Layza"}));