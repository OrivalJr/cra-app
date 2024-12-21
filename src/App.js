import './App.css';
import Alunos from './Components/Alunos.js';
import Home from './Components/Home.js';
import Sobre from './Components/Sobre.js';
import Itens from './Components/Itens.js';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
        <Nav.Link as={Link} to="/itens">Itens</Nav.Link>    

        <NavDropdown title="Itens" id="nav-dropdown">
        <NavDropdown.Item href='/Itens' >Subitem</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown> 

        </Nav>



  
       <Routes>
        <Route path="/" index element={<Home/>}></Route>
        <Route path="/alunos"  element={<Alunos/>}></Route>
        <Route path="/sobre"  element={<Sobre/>}></Route>
        <Route path="/itens"  element={<Itens/>}></Route>

       </Routes>

       </BrowserRouter>
    </div>
  )
}

export default App;
