import './App.css';
import Alunos from './Components/Alunos.js';
import Home from './Components/Home.js';
import Sobre from './Components/Sobre.js';
import { Nav } from 'react-bootstrap';
import  { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
       <h1>Novo título</h1>
       <BrowserRouter>

       <Nav variant='tabs'>
        <Nav.Link as={Link} to="/">Página inicial</Nav.Link>
        <Nav.Link as={Link} to="/alunos">Cadastro de alunos</Nav.Link>
        <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
       </Nav>
       
       <Routes>
        <Route path="/" index element={<Home/>}></Route>
        <Route path="/alunos"  element={<Alunos/>}></Route>
        <Route path="/sobre"  element={<Sobre/>}></Route>
       </Routes>

       </BrowserRouter>
    </div>
  )
}

export default App;
