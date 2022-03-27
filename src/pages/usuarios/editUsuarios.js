import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "next/link"
import { useRouter } from 'next/router'

//Nos ayuda a llamar el enlace del servidor del backend
const URI = 'http://localhost:4000/api/tienda/';

const ComponenteActualizar = () => {

    //Obtenemos la informacion para poder gestionar la acción
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [clave, setClave] = useState('')
    const [direccion, setDireccion] = useState('')
    const [departamento, setDepartamento] = useState('')
    const idUsuario = 1
    const router = useRouter()
    const { query } = router
    console.log(query)


    //procedimiento para actualizar
    const modificar = async (e) => {
        e.preventDefault()
        await axios.put(URI + idUsuario, {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            telefono: telefono,
            calve: clave,
            direccion: direccion,
            departamento: departamento,

        })
        //Nos devuelve a la pagina raiz (Mostrar usuarios))
        router.push('/')
    }

    useEffect(() => {
        usuarioPorId()
    }, [])

    //Procedimiento para obtener el usuario a modificar
    const usuarioPorId = async () => {
        const respuesta = await axios.get(URI + idUsuario)
        setNombre(respuesta.data.nombre)
        setApellido(respuesta.data.apellido)
        setCorreo(respuesta.data.correo)
        setTelefono(respuesta.data.telefono)
        setClave(respuesta.data.clave)
        setDireccion(respuesta.data.direccion)
        setDepartamento(respuesta.data.departamento)





    }

    //Vista de usuarios, formulario para obtener los datos
    return (
        <div>
            <h1>EDITAR</h1>
            <Link href="/" className="btn btn-prim mt-2 mb-2"><i className="fa-solid fa-arrow-rotate-left"></i></Link>
            <form onSubmit={modificar}>
                <div className="mb-3">
                    <label className="form-label" placeholder="Ingrese su nombre">Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label" placeholder="Ingrese su apellido">Nombre</label>
                    <input
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        type="text"
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label" placeholder="Ingrese su correo Electrónico">Correo</label>
                    <input
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        type="email"
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label" placeholder="Ingrese su Telefono">Nombre</label>
                    <input
                        value={telefono}
                        onChange={(e) => setNombre(e.target.value)}
                        type="number"
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label" placeholder="Ingrese su correo contraseña">password</label>
                    <input
                        value={clave}
                        onChange={(e) => setClave(e.target.value)}
                        type="password"
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label" placeholder="Ingrese su Direccion">Nombre</label>
                    <input
                        value={direccion}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label" placeholder="Ingrese su Departamento">Nombre</label>
                    <input
                        value={departamento}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">ACTUALIZAR</button>
            </form>
        </div>
    )
}

//Exportamos el Componente para poder llamarla en App.js de la carpeta src 
export default ComponenteActualizar