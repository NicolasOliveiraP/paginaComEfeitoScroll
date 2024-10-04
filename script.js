let idades = [11, 22, 33, 44, 55, 66, 77, 88]
function pesquisar(){
    // let nome = prompt("Digite seu nome: ");
    let numero = Number(prompt("Pesquise um número: "));

    let indice = idades.indexOf(numero)
    if(indice != -1){
        console.log("Achei! Está na posição: "+indice);
    }
    else{
        console.log("Não foi possivel achar esse número...")
    }
}
function cadastrar(){
    let numero = Number(prompt("DIGITE O NÚMERO PARA CADASTRAR: "));
    idades.push(numero)
}
function mostrar(){
    let tabel = ""
    if(tabel == idades)
    alert(idades)
}