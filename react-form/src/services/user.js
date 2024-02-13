"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const users_json_1 = __importDefault(require("../api/users.json"));
function getUserById(userId) {
    return users_json_1.default.find(user => user.id === userId)
        || null;
}
exports.getUserById = getUserById;
;
