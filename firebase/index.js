/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Listado from './src/containers/lista-container';
import Router from './src/components/router';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
