// Importar dependencias para rutas (Component = element)
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/nav/Navbar';
import { Contact } from './components/pages/contacto';
import { Home } from './components/pages/home';
import { Proyectos } from './components/pages/proyectos';
import { AboutUs } from './components/pages/nosotros';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/nosotros" Component={AboutUs} />
          <Route path="/proyectos" Component={Proyectos} />
          <Route path="/contacto" Component={Contact} />
          <Route path="*" element={<h1>Página no encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
