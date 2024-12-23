import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/glassy.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Accueil from './pages/Accueil';
import Produits from './pages/Produits';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/'
        element={
          <Accueil />
        } />
        <Route path='/contact'
        element={
          <Contact />
        } />
        <Route path='/produits'
        element={
          <Produits />
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App; 
