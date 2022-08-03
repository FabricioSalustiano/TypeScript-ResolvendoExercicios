/*Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";
*/


//Primeira resolucao
let employee = {
    name: "John",
    code: 10
}

//Segunda resolucao
interface IEmployees {
    name: string,
    code: number
}

let employee2: IEmployees = {
    name: "Maria",
    code: 11
}