// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { IEnvironment } from 'src/core/interfaces/IEnvironment';
import { global } from 'src/core/settings/global';
import { TEnvironmentName } from 'src/core/types/TEnvironmentName';
const environmentName: TEnvironmentName = 'prod';

export const environment: IEnvironment = {
  environmentName,
  appName: 'Dashboard',
  production: false,
  urlBase: global[environmentName].urlBase,
  urlBrazilianGeography: global[environmentName].urlBrazilianGeography,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
