import Table from 'react-bootstrap/Table';
import {data} from '../static/data';
import '../styles/style.css'

export default function ComponentTable() {
    return (
        
        <div className='table-container'>
        
        <Table striped bordered hover  >
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Carrera</th>
                    <th>Hobbie</th>
                </tr>
            </thead>
            <tbody >
            {data.map((datos, index)=> (
                <tr key={index}>
                    <td>{datos.nombre}</td>
                    <td>{datos.edad}</td>
                    <td>{datos.carrera}</td>
                    <td>{datos.hobbie}</td>
                </tr>
            ))}
            </tbody>
        </Table>
        </div>
    );
}

