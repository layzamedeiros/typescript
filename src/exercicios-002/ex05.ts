type statusPedido = "pendente" | "processando" | "concluido" | "cancelado";

interface Produto {
  id: number,
  nome: string,
  preco: number
}

enum PrioridadeEnvio {
  Baixa = 1,
  Media = 2,
  Alta = 3
}

function exibirDetalhesPedido(produto: Produto, status: statusPedido, prioridade: PrioridadeEnvio) {
  console.log("Detalhes do Pedido:");
  console.log(`Produto ID: ${produto.id}`);
  console.log(`Nome do Produto: ${produto.nome}`);
  console.log(`Preço: ${produto.preco}`);
  console.log(`Status do Pedido: ${status}`)
  console.log(`Prioridade de Envio: ${prioridade}`)
}
exibirDetalhesPedido({id: 101, nome: "Camiseta", preco: 29.99}, "processando", 2);