function gerarSaudacao(pessoa) {
    if (pessoa.ultimoNome) {
        return "Ol\u00E1, ".concat(pessoa.primeiroNome, " ").concat(pessoa.ultimoNome);
    }
    else {
        return "Ol\u00E1, ".concat(pessoa.primeiroNome);
    }
}
;
console.log(gerarSaudacao({ primeiroNome: "Layza", ultimoNome: "Medeiros" }));
console.log(gerarSaudacao({ primeiroNome: "Layza" }));
