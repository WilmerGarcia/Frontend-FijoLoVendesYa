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
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table table-bordered">
            <thead className="table-primary">
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
              </tr>
            </thead>
            <tbody>
              {categ.map((Categorias) => (
                <tr key={Categorias.nombre}>
                  <td>{Categorias.nombre}</td>
                  <td>{Categorias.descripcion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompMostrarCategorias;
