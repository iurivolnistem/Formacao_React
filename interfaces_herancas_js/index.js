import {Cliente} from './Cliente.js';
import {Gerente} from './Funcionarios/Gerente.js';
import {Diretor} from './Funcionarios/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor("Iuri", 10000, 12345678900);
const gerente = new Gerente("Ricardo", 5000, 12345679802);
const cliente = new Cliente("Rodrigo", 12345679802);

diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("1234567");

const logado = SistemaAutenticacao.login(cliente, "1234567");

console.log(logado);