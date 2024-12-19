import './App.css';
import Sobre from './Components/Sobre';
import Alunos from './Components/Alunos';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      
       <h1>Novo título</h1>
       <p><Sobre/></p>
       <p><Home/></p>
       <p><Alunos/></p>
      
    </div>
  )
}

export default App;
