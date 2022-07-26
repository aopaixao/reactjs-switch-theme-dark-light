import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom"

import "./styles.css";

const CadastroOptions = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="cadastro-options">
        <div className="title-cadastro-options">
          <b>Qual pagina deseja acessar?</b>
        </div>

        <div className="grup-button-cadastro-options">
        <Link to ="/colaborador"><a class="bn20"> Colaborador </a></Link>
          <a onClick={handleShow} class="bn20"> Cadastrar Administrador </a>
        <Link to="/cadastro-iso"><a class="bn20"> ISO </a></Link> 
        </div>
        
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registre um Administrador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Usuário</Form.Label>
              <Form.Control type="text" placeholder="Exemplo" autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="nome@exemplo.com" autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="senha" />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Sair</Button>
          <Button variant="primary" onClick={handleClose}>Salvar</Button>
        </Modal.Footer>
      </Modal>
      
    </>
  );
};

export default CadastroOptions;
