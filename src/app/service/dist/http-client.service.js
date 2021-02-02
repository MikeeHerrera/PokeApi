"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HttpClientService = void 0;
var core_1 = require("@angular/core");
var HttpClientService = /** @class */ (function () {
    function HttpClientService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.urlBase = '';
    }
    HttpClientService.prototype.getResponse = function (http) {
        return new Promise(function (resolve, reject) {
            http.subscribe(function (res) {
                resolve(res);
            }, function (err) {
                switch (err.status) {
                    case 400:
                        reject('La informacion enviada no es correcta');
                        break;
                    case 401:
                        reject('Requieres autentificacion ');
                        break;
                    case 404:
                        reject('La informacion no se encontro');
                        break;
                    case 500:
                        reject('Error en el servidor');
                        break;
                }
            });
        });
    };
    HttpClientService.prototype.get = function (url) {
        return this.getResponse(this.httpClient.get("" + this.urlBase + url));
    };
    HttpClientService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HttpClientService);
    return HttpClientService;
}());
exports.HttpClientService = HttpClientService;
