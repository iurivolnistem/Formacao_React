function verificaCpfInvalidos(cpf){
    const cpfInvalidos = [
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ];

    return cpfInvalidos.indexOf(cpf) === -1;
}

function somaNumeros(cpf, numeroDeDigitos, peso){
    let soma = 0;
    for(let i = 1; i <= numeroDeDigitos; i++){
        soma += parseInt(cpf.substring(i - 1, i)) * (peso - i);
    }

    return soma;
}

function verificaDigito(cpf, numeroDeDigitos, peso, digitoDeVerificacao){
    const soma = somaNumeros(cpf, numeroDeDigitos, peso);
    const resto = (soma * 10) % 11;

    return resto === digitoDeVerificacao;
}

function verificaPrimeiroDigito(cpf){
    const peso = 11;
    const totalPrimeirosDigitos = 9;
    const digitoDeVerificacao = parseInt(cpf.substring(9, 10));

    return verificaDigito(cpf, totalPrimeirosDigitos, peso, digitoDeVerificacao);
}

function verificaSegundoDigito(cpf){
    const peso = 12;
    const totalDigitosSegundaParte = 10;
    const digitoDeVerificacao = parseInt(cpf.substring(10, 11));
    
    return verificaDigito(cpf, totalDigitosSegundaParte, peso, digitoDeVerificacao);
}

function validaCPF(cpf){
    return(
        verificaPrimeiroDigito(cpf) &&
        verificaSegundoDigito(cpf) &&
        verificaCpfInvalidos(cpf)
    );
}