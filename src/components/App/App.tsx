import React from 'react';
import { GlobalStyle, ThemeProvider } from 'theme';
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
