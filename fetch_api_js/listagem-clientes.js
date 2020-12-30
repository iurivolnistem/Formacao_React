const exibeCliente = (cpf, nome, id) => {
    
    const linha = document.createElement("tr");
    
    const conteudoLinha = `
        <td>${cpf}</td>
        <td>${nome}</td>
        <td>
            <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button>
            <a href="editar_clientes.html?id=${id}" class="btn btn-dark">Editar</a>
        </td>
    `;

    linha.innerHTML = conteudoLinha;

    return linha;

};

const removeCliente = id => {
    if(confirm("Deseja realmente excluir o cliente ?")){
        deletarCliente(id);
    }
}

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

exibirClientes().then(exibir => {
    exibir.forEach(elemento => {
        corpoTabela.appendChild(exibeCliente(elemento.cpf, elemento.nome, elemento.id));
    });
});