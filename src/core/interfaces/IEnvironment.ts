import { TEnvironmentName } from '../types/TEnvironmentName';

export interface IEnvironment {
  name: TEnvironmentName;
  production: boolean;
  urlBase: string;
  urlBrazilianGeography: string;
}
