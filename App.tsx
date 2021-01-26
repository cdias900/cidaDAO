import { StatusBar } from 'expo-status-bar';
import {decode, encode} from 'base-64';

import React from 'react';

import Routes from './src/routes';

if (!global.btoa) global.btoa = encode;
if (!global.atob) global.atob = decode;

const App: React.FC = () => (
  <>
    <Routes />
    <StatusBar style="dark" />
  </>
);

export default App;
