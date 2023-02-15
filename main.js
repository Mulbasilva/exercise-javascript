let title1 = document.querySelector(".inicio__title-1");
let title2 = document.querySelector(".inicio__title-2");


title1.textContent = "O titulo alterado a partir do DOM";

title2.textContent = "O titulo alterado a partir do DOM";

// ==========Theor area=========

// diferença entre innerWidth e textContent ?
//innerHTML = 
// textContent =

// =========JVs object exercise ==========

// ==========crindo literal do objeto===========
const pessoa1 = {
    Nome: "Fatima", 
    Apelido: "Silva", 
    Idade: 20,
    Cor_bandeira: "azul",
    Zona: "Norte"
};

document.getElementById("test1").innerHTML = "A candidata se chama " + pessoa1.Nome + " e tem " + pessoa1.Idade + " anos de. Ela representa a zona " + pessoa1["Zona"] + " cuja bandeira é a cor " + pessoa1.Cor_bandeira + ".";

// -------------------------------


//adiconei uma propriedade no objeto, nacionalidade.
const pessoa2 = {
    Nome: "Marcos", 
    Apelido: "Intchama", 
    Idade: 70,
    Cor_bandeira: "azul",
    Zona: "Leste",
};

pessoa2.nacionalidade = "Guineense";
document.getElementById("test2").innerHTML = "O candidato se chama " + pessoa2.Nome + " de nacionalidade " + pessoa2.nacionalidade + " " + pessoa2.Idade + " anos de idade. Ele representa a zona " + pessoa2["Zona"] + " cuja bandeira é a cor " + pessoa2.Cor_bandeira + ".";

// ----------------------------------------------


//excluir propriedade. 
//Exemplo, excluir propriedade "zona" do objeto "pessoa2".
const pessoa3 = {
    Nome: "Jorge", 
    Apelido: "Correia", 
    Idade: 50,
    Cor_bandeira: "Vermelho",
    Zona: "Sul"
};

delete pessoa3.Zona
// Se tentarmos acessar esse valor, aparecerá o resultado "undefined"
document.getElementById("test3").innerHTML = pessoa3.Zona


//objetos aninhados, ou seja, objetos dentro de objetos
const myBuss = {
    fName: "Lia", 
    lName: "da Silva",
    Empresa: "Carlia",
    mCars: {
        Car1: "Fiat",
        Car2: "Mercedes",
        Car3: "4x4", 
         } 
}

document.getElementById("description").innerHTML = `A senhorita ${myBuss.fName} ${myBuss.lName}, cuja loja de venda de carros se chama ${myBuss.Empresa}, declara que, o negócio está válido e livre de compra, venda e troca de carros cujo parceiro do negocio, ficará da inteira responsablidade da senhorita ${myBuss.fName} ${myBuss.lName} escolher. 
Modelos de carros disponíveis na loja, são:
<ul>
    <li>${myBuss.mCars.Car1}</li>
    <li>${myBuss.mCars.Car2}</li>
    <li>${myBuss.mCars.Car3}</li>
</ul>`;
