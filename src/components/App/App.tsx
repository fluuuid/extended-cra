import React from 'react';
import { GlobalStyle, ThemeProvider } from 'theme';
import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <main>
        <Header />
        <Content />
        <Footer />
      </main>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
