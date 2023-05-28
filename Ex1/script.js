class Person {
    constructor(name, age, height) {
      this.name = name;
      this.age = age;
      this.height = height;
    }
    apresentar() {
      console.log(
        `Olá, meu nome é ${this.name} e tenho ${this.age} anos e ${this.height} de altura.`
      );
    }
  }
  class PersonProfessional extends Person {
    constructor(name, age, height, profession) {
      super(name, age, height);
      this.profession = profession;
    }
    apresentar() {
      console.log(
        `Olá, meu nome é ${this.name} e tenho ${this
  .age} anos e ${this.height} de altura e meu trabalho é ${this.profession}.`
      );
    }
  }
  const pessoa1 = new PersonProfessional( "João", 18, 1.8, "Programador");
  pessoa1.apresentar();
  /* const pessoa = new Person("João", 18, 1.8);
  pessoa.apresentar(); */