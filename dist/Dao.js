"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (obeject) {
        console.log('lógica de insert');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('lógica de update');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('lógica de remove');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('lógica de select');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('lógica de select all');
        return Object();
    };
    return Dao;
}());
exports.Dao = Dao;
