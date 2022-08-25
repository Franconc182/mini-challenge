import Button from 'react-bootstrap/Button';
import "../styles/style.css"
import { useState } from 'react';

export default function ComponentForm() {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        // eslint-disable-next-line
        console.log("Nombre: " + datos.nombre + ' ' +"Apellido: "+ datos.apellido)
    }
    return (
        <div className='div-padre'>
            <div className='container-form'>
                <form onSubmit={enviarDatos}>
                    <div className="label-form">
                        <label>Nombre</label>
                        <input type="text" placeholder="Nombre" name="nombre" onChange={handleInputChange}/>
                    </div>
                    <div className="label-form">
                        <label>Apellido</label>
                        <input type="text" placeholder="Apellido" name="apellido" onChange={handleInputChange}/>
                    </div>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </form>
            </div>
        </div>
    );
}
