

function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));

    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.google.com.br/")
//window.location.href = "https://www.google.com.br/";
} 

function trocar(element){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto")
    element.innerHTML = "Obrigado por passar o mouse"
}
function voltar(element){
    //document.getElementById("mousemove").innerHTML = "Passe o Mouse Aqui"
element.innerHTML = "Passe o Mouse Aqui"
}

function load(){
    alert("Página Carregada");
}

function funçaoChange(element){
    console.log (element.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

function validaidade (idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual sua idade");
console.log(validaidade(idade));


alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/
/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5) {
    console.log(count);
    count = count++;
};
*/

/*
var idade = prompt("Qual sua idade");
var idade = 18;
if (idade >= 18){
    alert("maior de idade")
}else{
    alert("menor de idade")
};
*/
/*
var frutas = [{nome: "maça" , cor: "vermelha"}, {nome:"uva" , cor:"roxa"}]
console.log(frutas)
alert(frutas[1].nome)
*/

//var fruta = {nome: "maça" , cor: "vermelha"}
//console.log(fruta.nome)
//alert(fruta.cor)

//var lista = ["maçã" , "banana" , "laranja"]
//lista.push("uva")
//lista.pop()
//console.log (lista);

/*
var nome = "Lucas P.I";
var idade = 22;
var n1 = 10;
var n2 = 5;
var frase = "Japão é muito bom";
alert(nome + " tem " +  idade + " anos");
console.log (nome);
console.log (n1 + n2);
console.log (frase.replace ("Japão" , "Brasil"));
*/
