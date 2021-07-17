"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
var CreateUserService_1 = __importDefault(require("./CreateUserService"));
function createUser(request, response) {
    CreateUserService_1.default.execute({
        name: "vini",
        sexo: "M",
    });
    return response.send();
}
exports.createUser = createUser;
