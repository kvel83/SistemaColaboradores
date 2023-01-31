import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'

import "./listWorkers.css"
function ListWorkers(props) {
    const [show, setShow] = useState(false);
    const [updateWorker, setUpdateWorker] = useState({});
    const [inputName, setInputName] = useState("");
    const [inputMail, setInputMail] = useState("");
    const [updateOrDeleteWorker, setUpdateOrDeleteWorker] = useState(true);
    const [searchKeyUpdate, setSearchKeyUpdate] = useState(0);
    const [searchKeyDelete, setSearchKeyDelete] = useState(0);
    const handleChangeName = (event) => {
        const nameIsValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/.test(event.target.value);
        if (nameIsValid) {
            setInputName(event.target.value);
        }
    };
    const handleChangeMail = (event) => {
        const mailIsValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(event.target.value);
        if (mailIsValid) {
            setInputMail(event.target.value);
        }
    };
    const handleClose = () => setShow(false);
    const handleUpdate = (id) => {
        setUpdateWorker({});
        props.colaboradores.forEach(worker => {
            if (worker.id === id) {
                let newWorker = {
                    id: worker.id,
                    nombre: worker.nombre,
                    correo: worker.correo
                };

                setUpdateWorker(newWorker);
            }
        });
        setUpdateOrDeleteWorker(true);
        setShow(true);
    };
    useEffect(() => {
        if (updateOrDeleteWorker) {
            setSearchKeyUpdate(prevSearchKey => prevSearchKey + 1);
            updateFieldWorker();
        }
    }, [updateOrDeleteWorker]);
    const updateFieldWorker = () => {
        if (inputName !== '' && inputMail !== '') {
            const newColaboradores = props.colaboradores.map(worker => {
                if (worker.id === updateWorker.id) {
                    return {
                        ...worker,
                        nombre: inputName,
                        correo: inputMail
                    };
                }
                return worker;
            });
            props.setColaboradores(newColaboradores);
            setUpdateWorker({});
            handleClose();
        }

    };
    const handleDelete = (id) => {
        let newWorker = {};
            props.colaboradores.forEach(worker => {
                if (worker.id === id) {
                    newWorker = {
                        id: worker.id,
                        nombre: worker.nombre,
                        correo: worker.correo
                    };
                }
                setUpdateWorker(newWorker);
            });
                setUpdateOrDeleteWorker(false);
        };
        useEffect(() => {
            if (!updateOrDeleteWorker) {
                setSearchKeyDelete(prevSearchKey => prevSearchKey + 1);
                deleteFieldWorker();
            }
        }, [updateOrDeleteWorker]);
        const deleteFieldWorker = () => {
            let newListColaboradores = props.colaboradores.filter((colaborador) => colaborador.id !== updateWorker.id);
            props.setColaboradores(newListColaboradores);
        };

        return (
            <div className="listWorkers">
                <h2 className="text-center">Listado de Colaboradores</h2>
                <div className="list">
                    {<Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Mail</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            {props.searchWorker === '' ? (
                                props.colaboradores.map((worker, index) => <tr key={worker.id}>
                                    <td>{worker.id}</td>
                                    <td>{worker.nombre}</td>
                                    <td>{worker.correo}</td>
                                    <td>
                                        <div className="hstack gap-3">
                                            <Button variant="outline-secondary" size="sm" onClick={() => handleUpdate(worker.id)}
                                            >Actualizar</Button>
                                            <Button variant="outline-secondary" size="sm" onClick={() => handleDelete(worker.id)}
                                            >Eliminar</Button>
                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header>
                                                    <Modal.Title>Actualizar Colaborador</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Form>
                                                        <Form.Group className="mb-3 mt-3" controlId="formWorkerName">
                                                            <Form.Label>Nombre del colaborador:</Form.Label>
                                                            <Form.Control name="inputName" onBlur={handleChangeName} className="mb-4" type="text" />
                                                            <Form.Label>Correo del colaborador:</Form.Label>
                                                            <Form.Control name="inputMail" onBlur={handleChangeMail} className="mb-4" type="email" />
                                                        </Form.Group>
                                                    </Form>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClose}>
                                                        Cerrar
                                                    </Button>
                                                    <Button variant="secondary" onClick={updateFieldWorker}>
                                                        Actualizar Colaborador
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>
                                    </td>
                                </tr>
                                )
                            ) :
                                props.colaboradores.filter((worker) => worker.nombre.toLowerCase().includes(props.searchWorker.toLowerCase())).map((worker, index) => <tr key={worker.id}>

                                    <td>{worker.id}</td>
                                    <td>{worker.nombre}</td>
                                    <td>{worker.correo}</td>
                                    <td>
                                        <div className="hstack gap-3">
                                            <Button variant="outline-secondary" size="sm" onClick={() => handleUpdate(worker.id)}>Actualizar</Button>
                                            <Button variant="outline-secondary" size="sm" onClick={() => handleDelete(worker.id)}>Eliminar</Button>
                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header>
                                                    <Modal.Title>Actualizar Colaborador</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Form>
                                                        <Form.Group className="mb-3 mt-3" controlId="formWorkerName">
                                                            <Form.Label>Nombre del colaborador:</Form.Label>
                                                            <Form.Control name="inputName" onBlur={handleChangeName} className="mb-4" type="text" />
                                                            <Form.Label>Correo del colaborador:</Form.Label>
                                                            <Form.Control name="inputMail" onBlur={handleChangeMail} className="mb-4" type="email" />
                                                        </Form.Group>
                                                    </Form>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClose}>
                                                        Cerrar
                                                    </Button>
                                                    <Button variant="secondary" onClick={() => updateFieldWorker()}>
                                                        Actualizar Colaborador
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>
                                    </td>
                                </tr>
                                )}
                        </tbody>
                    </Table>}
                </div>
            </div>
        );
    };

export default ListWorkers;