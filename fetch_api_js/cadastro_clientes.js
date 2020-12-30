const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", evento => {
    evento.preventDefault();

    const nome = evento.target.querySelector("[data-nome]").value;
    const cpf = evento.target.querySelector("[data-cpf]").value;

    if(validaCPF(cpf)){
        cadastrarClientes(nome, cpf);
    }
    else{
        alert("CPF inválido!!");
    }
});