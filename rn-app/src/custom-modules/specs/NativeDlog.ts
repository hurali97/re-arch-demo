import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  log(message: string): Promise<string>;
}

export default TurboModuleRegistry.get<Spec>('Dlog');
