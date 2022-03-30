import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

//Nos ayuda a llamar el enlace del servidor del backend
const URI = "http://localhost:4000/api/tienda/todosUsuarios";

const CompMostrarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    getUsuarios();
  }, []);

  //procedimiento para crear todos los usuarios
  const getUsuarios = async () => {
    const response = await axios.get(URI);
    setUsuarios(response.data);
    console.log(response);
  };

  //procedimiento para eliminar
  const deleteUsuarios = async (idUsuario) => {
    await axios.delete(`${URI}${idUsuario}`);
    getUsuarios();
  };

  //Vista de usuarios, tabla con todos los registros
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link
            href="/usuarios/insertarUsuarios"
            className="btn btn-prim mt-2 mb-2"
          >
            <Icon icon="bxs:user-plus" color="#0c97aa" height="35" />
          </Link>
          <Link
            href="/categorias/mostrarCategorias"
            className="btn btn-prim mt-2 mb-2"
          >
            CATEGORIAS
          </Link>
          <Link href="/ventas/mostarVentas" className="btn btn-prim mt-2 mb-2">
            VENTAS
          </Link>
          <table className="table table-dark table-sm">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Nombre de Usuario</th>
                <th>Correo Electrónico</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.idUsuario}>
                  <td>{usuario.idUsuario}</td>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.correo}</td>
                  <td>
                    {/*Link to URL Definida para hacer la peticion en el back*/}
                    <Link
                      href={`/usuarios/editarUsuarios${usuario.idUsuario}`}
                      className="btn btn-primary"
                    >
                      <Icon
                        icon="fa-regular:edit"
                        color="#f5b921"
                        height="35"
                      />
                    </Link>
                    <button
                      onClick={() => deleteUsuarios(usuario.idUsuario)}
                      className="btn btn-danger"
                    >
                      <i class="fa-solid fa-delete-left"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

//Exportamos el Componente para poder llamarla en App.js de la carpeta src
export default CompMostrarUsuarios;
