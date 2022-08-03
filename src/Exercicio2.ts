/* Como podemos melhorar o esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/


//Primeira resolucao
class Pessoa {
    public nome: string;
    public idade: number;
    public profissao: cargo;

    constructor(nome:string, idade:number, cargo:cargo){
        this.nome = nome;
        this.idade = idade;
        this.profissao = cargo;
    }
}

enum cargo {
    Atriz,
    Padeiro
}

let pessoa1 = new Pessoa("Maria", 29, cargo.Atriz);
let pessoa2 = new Pessoa("Roberto", 19, cargo.Padeiro);
let pessoa3 = new Pessoa("Laura", 32, cargo.Atriz);
let pessoa4 = new Pessoa("Carlos", 19, cargo.Padeiro);


//Segunda resolucao
interface IPessoa {
    nome: string,
    idade: number,
    profissao: cargo
}

let pessoa5: IPessoa = {
    nome: "Maria",
    idade: 29,
    profissao: cargo.Atriz
}

let pessoa6: IPessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: cargo.Padeiro
}

let pessoa7: IPessoa = {
    nome: "Laura",
    idade: 32,
    profissao: cargo.Atriz
}

let pessoa8: IPessoa = {
    nome: "Carlos",
    idade: 19,
    profissao: cargo.Padeiro
}