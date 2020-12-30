const recebeUrl = new URL(window.location);
const id = recebeUrl.searchParams.get("id");

const campoCPF = document.querySelector("[data-cpf]");
const campoNome = document.querySelector("[data-nome]");

buscaCliente(id).then(dados => {
    campoCPF.value = dados[0].cpf;
    campoNome.value = dados[0].nome;
})

const formulario = document.querySelector("[data-form]");

const mensagemSucesso = (mensagem) => {

    const linha = document.createElement("div");

    const conteudoLinha = `
        <div class="alert alert-success">
            ${mensagem}
        </div>
    `;

    linha.innerHTML = conteudoLinha

    return linha;
}

const mensagemErro = (mensagem) => {

    const linha = document.createElement("div");

    const conteudoLinha = `
        <div class="alert alert-danger">
            ${mensagem}
        </div>
    `;

    linha.innerHTML = conteudoLinha

    return linha;
}


formulario.addEventListener("submit", evento => {
    evento.preventDefault();

    if(!validaCPF(campoCPF.value)){
        alert("CPF inválido!!");
        return;
    }

    editarCliente(id, campoCPF.value, campoNome.value).then(resposta => {
        if(resposta.status === 200){
            formulario.appendChild(mensagemSucesso("Cliente editado com sucesso!"));
        }
        else{
            formulario.appendChild(mensagemErro("Ocorreu um erro durante a edição!"));
        }
    })
})