function volta(){
    window.open("index.HTML")
}

function calculaWis(){
    /*let n1 = Number(prompt("Digite o primeiro número: "));
    for (let sequencia = 0; sequencia <= n1; sequencia ++){
        if (sequencia % 2 == 0){
            alert(sequencia);
        }
    } */
    let qtdTotal = Number(prompt("Qual o numero de atividades que deseja cadastrar?"));
    let map = Number(prompt("Digite a media para aprovação?"));
    let media = 0;
    let totalPeso = 0;
    let qtdCad = 0;
    while(qtdCad < qtdTotal){
        let atv = Number(prompt("Digite a nota da atividade."));
        let peso = Number(prompt("Digite o peso da atividade."))
        totalPeso = totalPeso + peso;
        media += (atv * peso);
        qtdCad ++;
    }
    media /= totalPeso;
    let mensagem = media + ", portnato está reprovado";
    if(media >= map){
        mensagem = media + ", portnato está aprovado";
    }
    else if(media >= map-0.5){
        mensagem = media + ", por tanto está aprovado por conselho.";
    }
    alert(mensagem)
}