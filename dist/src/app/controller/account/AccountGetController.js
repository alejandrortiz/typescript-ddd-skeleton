"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountGetController = void 0;
const httpStatus = __importStar(require("http-status"));
const FindAccountQuery_1 = require("../../../main/financial/account/application/find/FindAccountQuery");
const DomainError_1 = require("../../../main/shared/domain/DomainError");
const awilix_express_1 = require("awilix-express");
let AccountGetController = class AccountGetController {
    constructor(queryBus) {
        this.queryBus = queryBus;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            try {
                const account = yield this.queryBus.ask(new FindAccountQuery_1.FindAccountQuery(id));
                response.status(httpStatus.OK).send(account);
            }
            catch (error) {
                if (error instanceof DomainError_1.DomainError) {
                    response.status(httpStatus.NOT_FOUND).json({
                        error: {
                            code: error.errorCode(),
                            message: error.errorMessage()
                        }
                    });
                }
                else {
                    response.status(httpStatus.INTERNAL_SERVER_ERROR).send();
                }
            }
        });
    }
};
__decorate([
    awilix_express_1.GET(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AccountGetController.prototype, "handle", null);
AccountGetController = __decorate([
    awilix_express_1.route('/api/accounts/:id'),
    __metadata("design:paramtypes", [Object])
], AccountGetController);
exports.AccountGetController = AccountGetController;
