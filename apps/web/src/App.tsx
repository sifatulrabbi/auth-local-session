import { logo } from './assets';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './global-styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Button, Input } from './components';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <img src={logo} alt="logo" width="100px" />
                <Button label="Button" />
                <Input id="input" name="input" type="text" />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
