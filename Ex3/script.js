class CaixaRegistradora {
  // Construtor da classe CaixaRegistradora, inicializa os atributos
  constructor(estoque) {  
    this.estoque = estoque || [];//  para armazenar os produtos em estoque
    this.cliente = ""; // String vazia para armazenar o nome do cliente
    this.contaCliente = 0; // Valor inicial da conta do cliente é 0
  }

  adicionarProduto(codigoBarra, preco, nome, quantidade) {
      // Método para adicionar um novo produto no estoque
    const novoProduto = {// definição dos parâmetros como obrigatórios é estabelecida pela assinatura do método uma vez que fornece os valores dos argumentos no método para o produto ser criado 
      codigoBarra: codigoBarra,
      preco: preco,
      nome: nome,
      quantidade: quantidade
    };

    this.estoque.push(novoProduto);//Adciona um novo produto ao estoque
    console.log(` Código de Barras: ${novoProduto.codigoBarra},Produto adicionado: ${novoProduto.nome}, Preço: R$${novoProduto.preco}, Quantidade: ${novoProduto.quantidade}`);
  }
  iniciarAtendimento(nomeCliente) {
      this.cliente = nomeCliente; // Atribui o nome do cliente ao atributo "cliente"
      this.contaCliente = 0; // Zera o valor da conta do cliente
      console.log(`Nome cliente: ${this.cliente}, Total conta: ${this.contaCliente}`);
    }
    
   adicionarItem(codigoBarra, quantidade) {
   // Método para adicionar um item à conta do cliente
   const produto = this.estoque.find(item => item.codigoBarra === codigoBarra);//para procurar um produto no estoque com base no código de barras fornecido

   if (produto) {
     // Verifica se o produto existe no estoque
     this.contaCliente += produto.preco * quantidade; // Calcula o valor do item e adiciona à conta do cliente
   } else {
     console.log("Produto não encontrado no estoque.");
     // Se o produto não existe, exibe uma mensagem de erro
   }
 }
 verificarTotalConta() {
     // Método para verificar o valor total da conta do cliente
     return this.contaCliente; // Retorna o valor da conta do cliente
   }
   fecharConta(formaPagamento, valorPago) {
      const totalConta = this.contaCliente; // Salva o valor da conta do cliente em uma constante
      let troco = 0;
    
      if (formaPagamento === "dinheiro") {
        troco = valorPago - totalConta;
        console.log(`Valor pago em dinheiro: R$ ${valorPago.toFixed(2)}`);
        console.log(`Troco: R$ ${troco.toFixed(2)}`);
      } else if (formaPagamento === "cartao_credito") {
        console.log("Pagamento realizado com cartão de crédito.");
      } else if (formaPagamento === "cartao_debito") {
        console.log("Pagamento realizado com cartão de débito.");
      } else {
        console.log("Forma de pagamento inválida.");
      }
    
      this.contaCliente = 0; // Zera o valor da conta do cliente para o próximo atendimento
    }
    
}
const caixa = new CaixaRegistradora();// Cria a Instanciaa da classe caixaRegistradora

caixa.adicionarProduto(123, 100.50, "whisky", 1);//Chama o método na instancia "caixa" e adiciona o produto
caixa.adicionarProduto(456, 50.75, "vinho", 2);//Chama o método na instancia "caixa" e adiciona o produto

caixa.iniciarAtendimento("Lucas"); // Chama o método na instancia "caixa" e Inicia o atendimento ao cliente informando o nome

caixa.adicionarItem(123, 2); // Chama o método na instancia "caixa" e Adiciona itens à conta do cliente //aqui soma 2 itens A
caixa.adicionarItem(456, 1); //aqui soma somente 1 item o B

console.log("Total da conta:", caixa.verificarTotalConta()); // Exibe o valor total da conta do cliente

caixa.fecharConta("dinheiro", 300); //Chama o método na instancia "caixa" , Fecha a conta do cliente, informando o valor em dinheiro recebido(ou forma de pagamento,cartões) 

