const exibirClientes = () => {
    return fetch("http://localhost:4000/clientes")
    .then(resposta => {
        return resposta.json();
    })
    .then(json => {
        return json;
    });
};

const cadastrarClientes = (nome, cpf) => {
    return fetch("http://localhost:4000/clientes/cliente", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            cpf: cpf
        })  
    })
    .then(resposta => {
        return resposta.body;
    });
}

const deletarCliente = (id) => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: "DELETE"
    })
}

const buscaCliente = (id) => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`)
    .then(resposta => {
        return resposta.json();
    })
}

const editarCliente = (id, cpf, nome) => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            cpf: cpf
        })
    })
}