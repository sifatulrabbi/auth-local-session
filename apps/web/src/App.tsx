import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './global-styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { HomePage, LoginPage, SignUpPage, UserPage } from './pages';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <Navbar />
        <div style={{ width: '100%', marginBottom: 100 }} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/users/:userId" element={<UserPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
