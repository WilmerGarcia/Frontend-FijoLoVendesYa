import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';
//import { Controller, useForm } from "react-hook-form";
//import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
//import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


//NOS AYUDA A CONECTARNOS CON EL SERVIDOR DEL BACKEND
const URI = 'http://localhost:4000/api/tienda/todasVenta';

const CompMostrarVentas = () => {
    const [ventas, setVentas] = useState([])

    useEffect(() => {
        getVentas()
    }, [])

    //PROCEDIMIENTO PARA OBTENER TODOS LAS VENTAS
    const getVentas = async () => {
        const response = await axios.get(URI)
        //then((response) => { console.log(response) })
        setVentas(response.data)
    }

    //PROCEDIMIENTO PARA ELIMINAR
    const deleteVentas = async (idVenta) => {
        await axios.delete(`${URI}${idVenta}`)
        getVentas()
    }

    //VISTA DE INTERFAZ DE USUARIO
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link href="/crearVenta" className="btn btn-prim mt-2 mb-2"><i class="fa-solid fa-circle-plus"></i></Link>
                    <Link href="/" className="btn btn-prim mt-2 mb-2"><i className="fa-solid fa-arrow-rotate-left"></i></Link>


                    <table className="table table-dark table-sm">
                        <thead className='table-primary'>
                            <tr >
                                <th>ID</th>
                                <th>Usuario</th>
                                <th>Estado</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Descripción</th>
                                <th>Categoria</th>
                                <th>Precio</th>
                                <th>Fecha</th>
                                <h>ACCIONES</h>
                            </tr>
                        </thead>
                        <tbody>
                            {ventas.map((venta) => (

                                <tr key={venta.idVenta}>
                                    <td>{venta.idVenta}</td>
                                    <td>{venta.Usuario.nombre}</td>
                                    <td>{venta.estado}</td>
                                    <td>{venta.producto}</td>
                                    <td>{venta.cantidad}</td>
                                    <td>{venta.descripcion}</td>
                                    <td>{venta.categoria}</td>
                                    <td>{venta.precio}</td>
                                    <td>{venta.fechaPublicacion}</td>



                                    <td>
                                        {/*Link to URL Definida para hacer la peticion en el back*/}
                                        <Link href={`/editarVenta/${venta.idVenta}`} className="btn btn-primary" ><i class="fa-solid fa-file-pen"></i></Link>
                                        <button onClick={() => deleteVentas(venta.idVenta)} className="btn btn-danger"><i class="fa-solid fa-delete-left"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >
        </div >
    )

}

export default CompMostrarVentas