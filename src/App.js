import React from 'react';
import { ThemeProvider } from 'styled-components';
//import { DefaultTheme } from 'styled-components/native';
import usePersistedState from './utils/usePersistedSate';

import lightMode from './styles/themes/light-mode';
import darkMode from './styles/themes/dark-mode';

import GlobalStyle from './styles/global';
import Header from './components/Header';

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
      </div>
    </ThemeProvider>
  );
}

export default App;