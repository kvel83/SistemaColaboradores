import React from "react";
import { useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"


const CreateWorker = (props) =>{
    const [newColaborador, setNewColaborador] = useState({id:null, nombre:'', correo:''});
    const [name, setName] = useState("");
    const [mail, setMail] = useState("")

    const colaboradoresUpdate = (e) =>{
        e.preventDefault();
        const nameIsValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/.test(name);
        const mailIsValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail);
        if (nameIsValid && mailIsValid){
            //setNewColaborador({...newColaborador, id:props.colaboradores.length + 1, nombre:name, correo: mail});
            let idCol = props.colaboradores.length + 1
            setNewColaborador(prev => ({...prev, id: idCol, nombre:name, correo: mail}));
            props.setColaboradores(prev => [...prev, {id: idCol, nombre:name, correo: mail}]);
        }
    }
    return (
       <Form>
            <Form.Group className="mb-3 mt-3" controlId="formWorkerName">
                <Form.Label>Nombre del colaborador:</Form.Label>
                <Form.Control className="mb-4" type="text" placeholder="Ingrese el nombre del nuevo colaborador" onChange = {(event) => setName(event.target.value)}/>
                <Form.Label>Correo del colaborador:</Form.Label>
                <Form.Control className= "mb-4" type="email" placeholder="Ingrese el correo del nuevo colaborador"  onChange = {(event) => setMail(event.target.value)}/>
                <Button onClick={colaboradoresUpdate} variant="secondary">Agregar Colaborador</Button>
            </Form.Group>
       </Form>
    );
}

export default CreateWorker;