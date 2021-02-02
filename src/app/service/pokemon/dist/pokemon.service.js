"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PokemonService = void 0;
var http_client_service_1 = require("../http-client.service");
var environment_1 = require("src/environments/environment");
var core_1 = require("@angular/core");
var PokemonService = /** @class */ (function (_super) {
    __extends(PokemonService, _super);
    function PokemonService(httpClient, router) {
        var _this = _super.call(this, httpClient, router) || this;
        _this.urlBase = environment_1.environment.endpoints.api;
        _this.endpoint = environment_1.environment.endpoints.pokemon;
        return _this;
    }
    PokemonService.prototype.getPokemonByName = function (name) {
        var url = this.endpoint.name;
        return this.get(url.replace('_name_', name));
    };
    PokemonService.prototype.getPokemonById = function (id) {
        var url = this.endpoint.id;
        return this.get(url.replace('_id_', id));
    };
    PokemonService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PokemonService);
    return PokemonService;
}(http_client_service_1.HttpClientService));
exports.PokemonService = PokemonService;
