import React from 'react';
import { GlobalStyle, ThemeProvider } from 'theme';
import Routes from 'routes';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
