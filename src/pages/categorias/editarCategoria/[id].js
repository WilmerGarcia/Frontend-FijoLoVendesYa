import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
//NOS CONECTAMOS CON EL SERVIDOR DEL BACKEND
const URI = "http://localhost:4000/api/tienda/editarCategoria/";

const CompActualizarCategoria = () => {
  //OBTENEMOS INFORMACION PARA PODER GESTIONAR LA ACCION
  // const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const router = useRouter();
  const { id: nombre } = router.query;

  console.log(router.query);
  const categoriaPorId = async () => {
    const respuesta = await axios
      .get(`http://localhost:4000/api/tienda/unaCategoria/${nombre}`, {
        withCredentials: true,
      })
      .catch((err) => {
        console.log(err);
      });
    //setNombre(respuesta.data.nombre);
    setDescripcion(respuesta.data.descripcion);
  };
  useEffect(() => {
    categoriaPorId();
  }, []);

  //PROCEDIMIENTO PARA ACTUALIZAR
  const modifCateg = async (e) => {
    e.preventDefault();
    await axios.put(
      URI + nombre,
      {
        nombre: nombre,
        descripcion: descripcion,
      },
      {
        withCredentials: true,
      }
    );
    router.push("/categorias");
  };

  //VISTA PARA EL USUARIO
  return (
    <div>
      <h1>EDITAR CATEGORIA</h1>
      <Link href="/categorias" className="btn btn-prim mt-2 mb-2">
        <i className="fa-solid fa-arrow-rotate-left"></i>
      </Link>
      <form onSubmit={modifCateg}>
        <div className="mb-3">
          <label className="form-label" placeholder="Ingrese el nombre">
            Nombre de la categoría
          </label>
          <input
            value={nombre}
            // onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" placeholder="Ingrese su Descripcion">
            Descripción
          </label>
          <input
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          ACTUALIZAR
        </button>
      </form>
    </div>
  );
};

export default CompActualizarCategoria;
