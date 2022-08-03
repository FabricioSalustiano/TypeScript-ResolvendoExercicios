"use strict";
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
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = cargo;
    }
}
var cargo;
(function (cargo) {
    cargo[cargo["Atriz"] = 0] = "Atriz";
    cargo[cargo["Padeiro"] = 1] = "Padeiro";
})(cargo || (cargo = {}));
let pessoa1 = new Pessoa("Maria", 29, cargo.Atriz);
let pessoa2 = new Pessoa("Roberto", 19, cargo.Padeiro);
let pessoa3 = new Pessoa("Laura", 32, cargo.Atriz);
let pessoa4 = new Pessoa("Carlos", 19, cargo.Padeiro);
let pessoa5 = {
    nome: "Maria",
    idade: 29,
    profissao: cargo.Atriz
};
let pessoa6 = {
    nome: "Roberto",
    idade: 19,
    profissao: cargo.Padeiro
};
let pessoa7 = {
    nome: "Laura",
    idade: 32,
    profissao: cargo.Atriz
};
let pessoa8 = {
    nome: "Carlos",
    idade: 19,
    profissao: cargo.Padeiro
};
