import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente("Iuri", 11122233394);

const contaCliente1 = new ContaCorrente(cliente1, 1001);
contaCliente1.depositar(500);
contaCliente1.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCliente1 );