function Enviar(){
    let nome = document.getElementById("nomeid");
    let fone = document.getElementById("foneid");
    let email = document.getElementById("emailid");
    if(nome.value != ""){
        alert(`Obrigado sr(a) ${nome.value} seus dados foram encaminhados com sucesso!\nTelefone: ${fone}\nE-mail: ${email}`);
    }
}

function Trocar(){
    let nome = document.getElementById("nomeid");
    let email = document.getElementById("emailid");
[nome.value, email.value] = [email.value, nome.value];

}