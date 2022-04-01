import axios from "axios";
import { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import SideBar from "../../../layouts/SideBar";
const URI = "http://localhost:4000/api/tienda/crearVenta/";

const CompRegistrarVentas = () => {
  useEffect(() => {
    listacategorias();
  }, []);

  const listacategorias = async (e) => {
    const response = await fetch(
      "http://localhost:4000/api/tienda/todasCategorias/"
    );
    const data = await response.json();
    setCategorias(data);
    setCategoria(data[0].nombre);
  };
  const [idUsuario, setIdUsuario] = useState("");
  const [estado, setEstado] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [producto, setProducto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [fechaPublicacion, setFechaPublicacion] = useState("");

  const router = useRouter();

  //Procedimiento guardar
  const store = async (e) => {
    e.preventDefault();
    await axios.post(
      URI,
      {
        //idVenta: idVenta,
        //idUsuario: idUsuario,
        estado: estado,
        producto: producto,
        cantidad: cantidad,
        descripcion: descripcion,
        categoria: categoria,
        precio: precio,
      },
      { withCredentials: true }
    );
    router.push("/admin/ventas");
  };

  return (
    <SideBar>
      <h1>CREAR VENTA</h1>

      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Estado</label>
          <input
            name="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            type="radio"
            className="form-control form-check-input"
            checked
          ></input>
          <label class="form-check-label" for="exampleRadios1">
            Disponible
          </label>
          <input
            name="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            type="radio"
            className="form-control form-check-input"
            checked
          ></input>
          <label class="form-check-label" for="exampleRadios1">
            No Disponible
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">Producto</label>
          <input
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
            type="text"
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Cantidad</label>
          <input
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            type="number"
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Descripcion</label>
          <input
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            type="text"
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Categoria</label>
          <select
            className="form-control"
            multiple={false}
            value={categoria}
            onChange={(e) => {
              setCategoria(e.target.value);
            }}
          >
            {categorias.map((elemento) => (
              <option key={elemento.nombre} value={elemento.nombre}>
                {elemento.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            type="number"
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha</label>
          <input
            value={fechaPublicacion}
            onChange={(e) => setFechaPublicacion(e.target.value)}
            type="date"
            className="form-control"
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Crear
        </button>
      </form>
    </SideBar>
  );
};

export default CompRegistrarVentas;
