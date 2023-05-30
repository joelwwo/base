import { TEnvironmentName } from '../types/TEnvironmentName';

export interface IEnvironment {
  environmentName: TEnvironmentName;
  appName: string;
  production: boolean;
  urlBase: string;
  urlBrazilianGeography: string;
}
