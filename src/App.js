import './App.css';

import  { BrowserRouter, Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
       <h1>Novo título</h1>
       <BrowserRouter>
       <ul>
        <li> <Link to="/Home">Página inicial</Link></li>
        <li> <Link to="/Alunos">Cadastro de alunos</Link></li>
        <li> <Link to="/Sobre">Sobre</Link></li>
       </ul>
       </BrowserRouter>
    </div>
  )
}

export default App;
