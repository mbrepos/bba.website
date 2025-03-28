import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, Global } from '@emotion/react';
import About from './components/About/index';
import Construction from './components/Construction/index';
import Contact from './components/Contact/index';
import Home from './components/Home/index';
import NavbarComp from './components/NavbarComp/index';
import State from './components/State';
import PoR from './components/PoR';
import theme from './styles/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContainer, MainContent, globalStyles } from './styles/app';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Router>
        <AppContainer>
          <NavbarComp />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/community" element={<Construction />} />
              <Route path="/state" element={<State />} />
              <Route path="/por" element={<PoR />} />
              <Route path="*" element={<Construction />} />
            </Routes>
          </MainContent>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;