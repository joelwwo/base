import { IEnvironment } from 'src/core/interfaces/IEnvironment';
import { TEnvironmentName } from '../core/types/TEnvironmentName';
import { global } from 'src/core/settings/global';

const environmentName: TEnvironmentName = 'hml';
export const environment: IEnvironment = {
  environmentName,
  appName: 'Dashboard',
  production: false,
  urlBase: global[environmentName].urlBase,
  urlBrazilianGeography: global[environmentName].urlBrazilianGeography,
};
