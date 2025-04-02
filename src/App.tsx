import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContainer, MainContent, globalStyles } from './styles/app';
import { ThemeProvider, Global } from '@emotion/react';
import theme from './styles/theme';
import { SpeedInsights } from '@vercel/speed-insights/react';
import About from './components/About/index';
import Construction from './components/Construction/index';
import Contact from './components/Contact/index';
import Home from './components/Home/index';
import NavbarComp from './components/NavbarComp/index';
import Publications from './components/Publications/index';
import { State } from './components/Publications/State';
import { PoR } from './components/Publications/PoR';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <SpeedInsights />
      <Router>
        <AppContainer>
          <NavbarComp />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Construction />} />
              <Route path="/construction" element={<Construction />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/community" element={<Construction />} />
              <Route path="/publications" element={<Publications />} />
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
