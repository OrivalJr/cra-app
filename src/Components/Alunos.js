import React from "react";
import Table from 'react-bootstrap/Table';


class Alunos extends React.Component {

    constructor(props){
        super(props);
        this.state={
            Alunos: []

        }

    }
    componentDidMount(){
        fetch("http://localhost:3001/Alunos/")
        .then(resposta => resposta.json())
        .then(dados => {
            this.setState({ Alunos : dados})
        })
    }

    componentWillUnmount(){
        
    }


    render(){
    return(
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>

            {
                this.state.Alunos.map((Alunos)=>
             <tr>            
            <td>{Alunos.nome}</td>
            <td>{Alunos.email}</td>
            <td>Atualizar | Excluir</td>
          </tr>   
                )
            }
         
          
         
        </tbody>
      </Table>
       
   )
        
    
    
    }
}
    
    export default Alunos;