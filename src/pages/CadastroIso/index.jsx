import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsTrashFill } from 'react-icons/bs';
import { MdEdit } from 'react-icons/md';
import './styles.css';

function CadastroISO() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Form className="" noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="formulario-iso">
          <h1 className="title-iso">Cadastro de ISO</h1>

          <Row className="mr-mx-4 mt-3">
            <Form.Group as={Col} md="2" controlId="validationCustom01">
              <Form.Label className='label-iso'>Nome</Form.Label>
              <Form.Control required type="text" placeholder="Nome" defaultValue="ISO XXXX" className='input-nome-iso' />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label className='label-iso'>Cadastrar certificados requiridos</Form.Label>
              <>
                <Button variant="primary" onClick={handleShow} className="button-adicionar">
                  Adicionar
                </Button>

                <Form.Group as={Col} md="2" controlId="validationCustom01">
                  <Form.Label className='label-iso'>Ações</Form.Label>
                  <Button className='editar-iso'><MdEdit/></Button>
                  <Button className='excluir-iso'><BsTrashFill/></Button>

                </Form.Group>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Certificado requerido</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>

                      <Form.Group className="mb-3" controlId="Form.ControlInput1">
                        <Form.Label className='label-iso'>Curso</Form.Label>
                        <Form.Control />
                      </Form.Group>

                      <Form.Group
                        className="mb-3" controlId="Form.ControlInput1">
                        <Form.Label className='label-iso'>Tempo de Validade</Form.Label>
                        <Form.Control />
                      </Form.Group>

                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} className="button-cancelar">
                      Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose} className="button-add">
                      Add +
                    </Button>
                    <Button variant="primary" onClick={handleClose} className="button-salvar">
                      Salvar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label className='label-iso'>Certificados cadastrados</Form.Label>
              <Button className="button-consultar">Consultar!</Button>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className="mr-3 mb-3" controlId="Form.ControlTextarea1">
              <Form.Label className='label-iso'>Descrição da Iso</Form.Label>
              <Form.Control as="textarea" rows={2} className='fundo-descricao' />
            </Form.Group>
          </Row>

        </div>

      </Form>
    </>
  );
}

export default CadastroISO;