function calcularIMC(){
    let peso = document.getElementById('WisPeso').value
    let altura = document.getElementById('WisAltura').value

    let imc = peso / (altura**2)
    console.log(imc)

    document.getElementById('pResultado').innerHTML = "Seu IMC é: "+ imc
    // alert("Se fosse o jack, ele diria que o imc é: " +imc)
    // console.log(peso)
}