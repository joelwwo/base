import { IEnvironment } from 'src/core/interfaces/IEnvironment';
import { TEnvironmentName } from './../core/types/TEnvironmentName';
import { global } from 'src/core/settings/global';

const name: TEnvironmentName = 'prod';
export const environment: IEnvironment = {
  name,
  production: false,
  urlBase: global[name].urlBase,
  urlBrazilianGeography: global[name].urlBrazilianGeography,
};
