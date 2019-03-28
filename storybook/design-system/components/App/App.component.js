import React from 'react';
import { AppProvider } from './App.context';

const App = ({ children, ...props }) => (
  <AppProvider value={props}>{children}</AppProvider>
);

export default App;
