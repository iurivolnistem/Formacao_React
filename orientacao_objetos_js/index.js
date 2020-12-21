import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente("Iuri", 11122233394);
const cliente2 = new Cliente("Alice", 22233344487);

const contaCliente1 = new ContaCorrente(cliente1, 1001);

const contaCliente2 = new ContaCorrente(cliente2, 102);

contaCliente1.depositar(100);
console.log("Conta do cliente -> ", contaCliente1);

contaCliente1.transferir(50, contaCliente2);

console.log("conta cliente -> ", contaCliente2);
console.log(ContaCorrente.numeroDeContas);

//undefined -> não teve nenhuma instancia, null -> foi instanciado mas não contem dados