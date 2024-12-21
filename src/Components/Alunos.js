import React from "react";
import Table from 'react-bootstrap/Table';


class Alunos extends React.Component {

    constructor(props){
        super(props);
        this.state={
            Alunos: [
                {'id':1, 'nome':'Luiz Fernando Silva', 'email': 'luiz@teste.com'},
                {'id':2, 'nome':'João Felipe', 'email': 'joao@teste.com'},
                
            ]

        }

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