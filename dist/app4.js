"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Dao_1 = require("./Dao");
//let daoConcessionaria: ConcessionariaDao = new ConcessionariaDao()
//let daoPessoa: PessoaDao = new PessoaDao()
var concessionaria = new Concessionaria_1.default('', []);
var pessoa = new Pessoa_1.default('Lucas', 'Corolla');
var daoConcessionaria = new Dao_1.Dao();
var daoPessoa = new Dao_1.Dao();
daoConcessionaria.inserir(concessionaria);
daoPessoa.remover(1);
