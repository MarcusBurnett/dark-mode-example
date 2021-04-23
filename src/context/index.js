import React from 'react';
import {ThemeProvider} from './theme';

const AppProviders = ({children}) => <ThemeProvider>{children}</ThemeProvider>;

export default AppProviders;
