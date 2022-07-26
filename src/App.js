import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedSate';

import RoutesNav from './routes';

import lightMode from './styles/themes/light-mode';
import darkMode from './styles/themes/dark-mode';

import GlobalStyle from './styles/global';
import Header from './components/Header';

import CadastroISO from './pages/CadastroIso';

const App = () => {
  const [theme, setTheme] = usePersistedState('theme', lightMode);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkMode : lightMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <RoutesNav/>
      </div>
    </ThemeProvider>
  );
}

export default App;