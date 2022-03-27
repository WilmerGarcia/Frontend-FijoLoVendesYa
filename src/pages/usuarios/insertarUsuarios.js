import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

//Nos ayuda a llamar el enlace del servidor del backend
const URI = "http://localhost:4000/api/tienda/usuarios/";

const CompRegistrarUsuario = () => {
  //Obtenemos la informacion para poder gestionar la acción
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [clave, setClave] = useState("");
  const [direccion, setDireccion] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [idRol, setIdRol] = useState("");

  //Procedimiento guardar
  const router = useRouter();
  const guardar = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      telefono: telefono,
      clave: clave,
      direccion: direccion,
      departamento: departamento,
    });
    //Volver a ruta raiz
    router.push("/");
  };

  return (
    //Vista de usuario, formulario para insertar
    <div>
      <h1>REGISTRAR</h1>
      <Link href="/" className="btn btn-prim mt-2 mb-2">
        <i className="fa-solid fa-arrow-rotate-left"></i>
      </Link>
      <form onSubmit={guardar}>
        <div className="mb-3">
          <label className="form-label" placeholder="Ingrese su nombre">
            Nombre
          </label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" placeholder="Ingrese su apellido">
            Nombre
          </label>
          <input
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label
            className="form-label"
            placeholder="Ingrese su correo Electrónico"
          >
            Correo
          </label>
          <input
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" placeholder="Ingrese su Telefono">
            Nombre
          </label>
          <input
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label
            className="form-label"
            placeholder="Ingrese su correo contraseña"
          >
            password
          </label>
          <input
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            type="password"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" placeholder="Ingrese su Direccion">
            Direccion
          </label>
          <input
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" placeholder="Ingrese su Departamento">
            Nombre
          </label>
          <input
            value={departamento}
            onChange={(e) => setDepartamento(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          REGISTRARME
        </button>
      </form>
    </div>
  );
};

//Exportamos el Componente para poder llamarla en App.js de la carpeta src
export default CompRegistrarUsuario;
