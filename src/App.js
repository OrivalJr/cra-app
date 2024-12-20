import './App.css';
import Alunos from './Components/Alunos.js';
import Home from './Components/Home.js';
import Sobre from './Components/Sobre.js'

import  { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
       <h1>Novo título</h1>
       <BrowserRouter>
       <ul>
        <li> <Link to="/">Página inicial</Link></li>
        <li> <Link to="/alunos">Cadastro de alunos</Link></li>
        <li> <Link to="/sobre">Sobre</Link></li>
       </ul>
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
