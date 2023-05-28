// Definição da classe base Funcionario

class Funcionario {
    // Construtor da classe Funcionario
    constructor(nome, idade, salario) {
      this.nome = nome;  // Atributo nome do funcionário;
      this.idade = idade;  // Atributo idade do funcionário;
      this.salario = salario;  // Atributo salário do funcionário;
    }
  
    // Métodos getter para acessar os atributos;
    getNome() {
      return this.nome;
    }
  
    getIdade() {
      return this.idade;
    }
  
    getSalario() {
      return this.salario;
    }
  
    // Métodos setter para atualizar os atributos;
    setNome(nome) {
      this.nome = nome;
    }
  
    setIdade(idade) {
      this.idade = idade;
    }
  
    setSalario(salario) {
      this.salario = salario;
    }
  }
  
  // Definição da classe Gerente, que herda da classe Funcionario
  class Gerente extends Funcionario {
    // Construtor da classe Gerente
    constructor(nome, idade, salario, departamento) {
      // Chamando o construtor da classe base (Funcionario)
      super(nome, idade, salario);
      this.departamento = departamento;  // Atributo departamento específico do Gerente
    }
  
    // Método getter para acessar o atributo departamento
    getDepartamento() {
      return this.departamento;
    }
  
    // Método setter para atualizar o atributo departamento
    setDepartamento(departamento) {
      this.departamento = departamento;
    }
  }
  
  // Definição da classe Programador, que herda da classe Funcionario
  class Programador extends Funcionario {
    // Construtor da classe Programador
    constructor(nome, idade, salario, linguagem) {
      // Chamando o construtor da classe base (Funcionario)
      super(nome, idade, salario);
      this.linguagem = linguagem;  // Atributo linguagem específico do Programador
    }
  
    // Método getter para acessar o atributo linguagem
    getLinguagem() {
      return this.linguagem;
    }
  
    // Método setter para atualizar o atributo linguagem
    setLinguagem(linguagem) {
      this.linguagem = linguagem;
    }
  }
  
  // Exemplo de uso
  
  // Criando um objeto Gerente
  const gerente = new Gerente("Lucas", 35, 5000, "FullStack");
  
  // Exibindo os detalhes do Gerente
  console.log("Detalhes do Gerente:");
  console.log("Nome:", gerente.getNome());  // Obtendo o nome do gerente
  console.log("Idade:", gerente.getIdade());  // Obtendo a idade do gerente
  console.log("Salário:", gerente.getSalario());  // Obtendo o salário do gerente
  console.log("Departamento:", gerente.getDepartamento());  // Obtendo o departamento do gerente
  console.log("-----------------------");
  
  // Criando um objeto Programador
  const programador = new Programador("Francisca", 28, 3000, "JavaScript");
  
  // Exibindo os detalhes do Programador
  console.log("Detalhes do Programador:");
  console.log("Nome:", programador.getNome());  // Obtendo o nome do programador
  console.log("Idade:", programador.getIdade());  // Obtendo a idade do programador
  console.log("Salário:", programador.getSalario()); 
  