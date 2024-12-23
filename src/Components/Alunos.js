import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Alunos extends React.Component {

    constructor(props){
        super(props);
        this.state={
          nome: "",
          email: "",
            Alunos: []

        }

    }
    componentDidMount(){
        this.buscarAluno();
        
    }
    buscarAluno = () =>{
        fetch("http://localhost:3001/Alunos/")
        .then(resposta => resposta.json())
        .then(dados => {
            this.setState({ Alunos : dados})
        })
    }
    deletarAlunos = (id) =>{
        fetch("http://localhost:3001/Alunos/"+id, {method: 'DELETE'})
        .then(resposta =>{
            if(resposta.ok){
                this.buscarAluno();
            }
        })
        
    }

    renderTabela(){
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
            <td><Button variant="primary">Atualizar</Button> <Button variant="danger" onClick={() =>this.deletarAlunos(Alunos.id)}>Excluir</Button></td>
          </tr>   
                )
            }
         
          
         
        </tbody>
      </Table>
      
   )
}
   render(){
    return(
        <div>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Digite o email do aluno</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Utilize o seu melhor e-mail
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Digite o nome do aluno" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Salvar
      </Button>
    </Form>
            {this.renderTabela()}
        </div>
    )

   } 
    
       
    
    
    }

    
    export default Alunos;