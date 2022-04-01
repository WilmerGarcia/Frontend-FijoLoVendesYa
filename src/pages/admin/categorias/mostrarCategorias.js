import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const URI = "http://localhost:4000/api/tienda/todasCategorias";

const CompMostrarCategorias = () => {
  const [categ, setCateg] = useState([]);
  useEffect(() => {
    getCategorias();
  }, []);

  //PROCEDIMIENTO PARA OBTENER LAS CATEGORIAS
  const getCategorias = async () => {
    const response = await axios.get(URI);
    setCateg(response.data);
  };

  //PROCEDIMIENTO PARA ELIMINAR
  const deleteCategorias = async (nombre) => {
    await axios.delete(
      `http://localhost:4000/api/tienda/eliminarCategoria/${nombre}`,
      {
        withCredentials: true,
      }
    );
    getCategorias();
  };

  //VISTA DE USUARIOS TABLA CON LAS CATEGORIAS
  return (
    <>
      <div className="row">
        <div className="col">
          <Link
            href="/admin/categorias/insertarCategorias"
            className="btn btn-prim mt-2 mb-2"
          >
            <Icon icon="bi:plus-square-fill" color="#0c97aa" height="30" />
          </Link>
          <Link href="/categorias/" className="btn btn-prim mt-2 mb-2">
            <Icon icon="ph:key-return-bold" color="#0c97aa" height="40" />
          </Link>
          <table className="table table-dark table-sm">
            <thead className="table-primary">
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {categ.map((Categorias) => (
                <tr key={Categorias.nombre}>
                  <td>{Categorias.nombre}</td>
                  <td>{Categorias.descripcion}</td>

                  <td>
                    {/*Link to URL Definida para hacer la peticion en el back*/}
                    <Link
                      href={`/admin/categorias/editarCategoria/${Categorias.nombre}`}
                      className="btn btn-primary"
                    >
                      <Icon
                        icon="akar-icons:edit"
                        color="#f5b921"
                        height="35"
                      />
                    </Link>

                    <button
                      onClick={() => deleteCategorias(Categorias.nombre)}
                      className="btn btn-danger"
                    >
                      <Icon icon="ic:round-delete" color="#f5b921" height="3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CompMostrarCategorias;
