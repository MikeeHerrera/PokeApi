"use strict";
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
exports.__esModule = true;
exports.environment = void 0;
exports.environment = {
    production: false,
    endpoints: {
        api: 'https://pokeapi.co/api/v2/',
        pokemon: {
            id: 'pokemon/_id_',
            name: 'pokemon/_name_'
        },
        type: {
            id: 'type/_id_'
        },
        ability: {
            id: 'ability/_id_'
        }
    }
};
//Se recomienda poner todas las vairbales que se repetiran en el proyecto.
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
