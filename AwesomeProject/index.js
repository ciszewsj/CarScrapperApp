/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import HomeScreen from "./src/HomeScreen";

AppRegistry.registerComponent(appName, () => HomeScreen);
