// Importar dependencias para rutas (Component = element)
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/nav/Navbar';
import Portada from './assets/portada.jpg';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Router path="/" />
            <Router path="/proyectos" />
          </Routes>
        </Navbar>
      </BrowserRouter>
      <img src={Portada} alt="Logo" />
    </>
  );
}

export default App;
