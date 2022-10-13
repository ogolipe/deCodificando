let frase = document.querySelector(".entertext");
let opcoesCripto = document.querySelector(".opcoes-cripto");
let incrementoUsuario = document.querySelector(".incremento");
let containerSubmit = document.querySelector(".container-submit");
let radioCodifica = document.querySelector(".radio-codifica");
let radioDecodifica = document.querySelector(".radio-decodifica");
let submitValue = document.querySelector(".codordecod");
let codecMensagem = document.querySelector(".decodMensagem");

let stringAlfa = new String("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
let reGex = new String("[@_!#$%^&*()<>?/|}{~:]0123456789");



opcoesCripto.addEventListener("change", function(){

    if(opcoesCripto.value == "cifracesar"){
        incrementoUsuario.style.display = 'block';
    }
    else if(opcoesCripto.value == "base64"){
        incrementoUsuario.style.display = 'none';
    }
    else{
        alert("Escolha uma opção de codificação ou decodificação!");
        incrementoUsuario.style.display = 'none';
    }
})

radioCodifica.addEventListener("click", function(){
    submitValue.style.display = 'block';
    submitValue.value = "Codificar";
});

radioDecodifica.addEventListener("click", function(){
    submitValue.style.display = 'block';
    submitValue.value = "Decodificar";
});

function codCaesar() {

    let criptoFrase = frase.value;
    let valorIncremento = Number(incrementoUsuario.value);
    let altFrase = "";

    for(let i = 0; i < criptoFrase.length; i++){
        
        for(let c = 0; c < stringAlfa.length; c++){
            
            if(criptoFrase[i] === reGex[c]){
                altFrase += reGex[c];
                break;
            }

            else if(criptoFrase[i] == " ")
            {
                altFrase += " ";
                break;
            }
            else if(criptoFrase[i] === stringAlfa[c]){
                
                if(stringAlfa[c].charCodeAt() <= '96'){
                    altFrase += stringAlfa[(c + valorIncremento/*Colocar o indice definido pelo usuario*/)%26].toUpperCase();
                }else{
                    altFrase += stringAlfa[(c + valorIncremento/*Colocar o indice definido pelo usuario*/)%26];
                }
            }

        }
    }

   return altFrase;

}

//Função desencripta a entrada do usuário já encriptada para a Cifra de César
function decodCaesar() {

    let criptoFrase = frase.value;
    let valorIncremento = (Number(incrementoUsuario.value) % 26);
    let altFrase = "";

    for(let i = 0; i < criptoFrase.length; i++){
        
        for(let c = 0; c < stringAlfa.length; c++){
            
            if(criptoFrase[i] === reGex[c]){
                altFrase += reGex[c];
                break;
            }

            else if(criptoFrase[i] == " ")
            {
                altFrase += " ";
                break;
            }
            else if(criptoFrase[i] === stringAlfa[c]){
                
                if(c-valorIncremento < 0){

                    if(stringAlfa[c].charCodeAt() <= '96'){
                        altFrase += stringAlfa[(c - valorIncremento) + 26].toUpperCase();
                    }else{
                        altFrase += stringAlfa[(c - valorIncremento) + 26];
                    }
                }else{
                    if(stringAlfa[c].charCodeAt() <= '96'){
                        altFrase += stringAlfa[c - valorIncremento].toUpperCase();
                    }else{
                        altFrase += stringAlfa[c - valorIncremento];
                    }
                }
                    
                }
                
                
            }

        }

   return altFrase;

}


//Codifica a frase inserida pelo usuário para Base 64
function codBase64(){

    let criptoFrase = frase.value;
    let altFrase = btoa(criptoFrase);

    return altFrase;


}

//Decodifica a frase inserida em base 64 pelo usuário
function decodBase64(){

    let criptoFrase = frase.value;
    let altFrase = atob(criptoFrase);

    return altFrase;


}

submitValue.addEventListener("click", function(){

    if(radioCodifica.checked && opcoesCripto.value == "cifracesar"){
        codecMensagem.innerText = codCaesar();
    }
    else if(radioDecodifica.checked && opcoesCripto.value == "cifracesar"){
        codecMensagem.innerHTML = decodCaesar();
    }
    else if(radioCodifica.checked && opcoesCripto.value == "base64"){
        codecMensagem.innerHTML = codBase64();
    }
    else if(radioDecodifica.checked && opcoesCripto.value == "base64"){
        codecMensagem.innerHTML = decodBase64();
    }
})

