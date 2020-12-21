import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente();
cliente1.nome = "Iuri";
cliente1.cpf = 11122233394;

const contaCliente1 = new ContaCorrente();
contaCliente1.agencia = 1001;
contaCliente1.cliente = cliente1;

contaCliente1.depositar(100);
console.log("Conta do cliente -> ", contaCliente1);

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 22233344487;

const contaCliente2 = new ContaCorrente();
contaCliente2.agencia = 102;
contaCliente2.cliente = cliente2;
// contaCliente2.cliente = new Cliente();
// contaCliente2.cliente.nome = "Alice";
// contaCliente2.cliente.cpf = 22233344487;

contaCliente1.transferir(50, contaCliente2);

console.log("conta cliente -> ", contaCliente2);

//undefined -> não teve nenhuma instancia, null -> foi instanciado mas não contem dados