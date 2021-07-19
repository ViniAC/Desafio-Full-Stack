"use strict";
/**
 * Nome - string - obrigatório
 * Sexo - 'M','F'
 * E-mail - string - não obrigatório, deve ser validado
 * Data nascimento - Date - obrigatório, deve ser validada
 * Naturalidade - string
 * Nacionalidade - string
 * CPF - string
 * Data cadastro
 * Data atualizaçao
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUserService = /** @class */ (function () {
    function CreateUserService() {
    }
    CreateUserService.prototype.execute = function (_a) {
        var name = _a.name, sexo = _a.sexo;
    };
    return CreateUserService;
}());
exports.default = new CreateUserService();
