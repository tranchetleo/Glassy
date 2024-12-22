import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import './assets/glassy.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/'
        element={
          <Accueil />
        } />
        <Route path='/'
        element={
          <Accueil />
        } />        
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App; 
