import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import About from './components/About/index';
import Construction from './components/Construction/index';
import Contact from './components/Contact/index';
import Home from './components/Home/index';
import NavbarComp from './components/NavbarComp/index';
import State from './components/State';
import PoR from './components/PoR';
import theme from './styles/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <NavbarComp />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/community" element={<Construction />} />
              <Route path="/state" element={<State />} />
              <Route path="/por" element={<PoR />} />
              <Route path="*" element={<Construction />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
