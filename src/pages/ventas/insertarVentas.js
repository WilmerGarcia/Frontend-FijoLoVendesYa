import axios from "axios";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
//import { useFormik } from "formik";
//import * as yup from "yup";
//IMPORTAR
const URI = "http://localhost:4000/api/tienda/crearVenta/";

const CompRegistrarVentas = () => {
  const [idUsuario, setIdUsuario] = useState("");
  const [estado, setEstado] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [producto, setProducto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [fechaPublicacion, setFechaPublicacion] = useState("");

  const router = useRouter();

  //Procedimiento guardar
  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI,{
      //idVenta: idVenta,
      //idUsuario: idUsuario,
      estado: estado,
      producto: producto,
      cantidad: cantidad,
      descripcion: descripcion,
      categoria: categoria,
      precio: precio,
    }, {withCredentials: true});
    router.push("/listarVenta");
  };

  return (
    <div>
      <h1>CREAR VENTA</h1>

      <form onSubmit={store}>
        {/* <div className="mb-3">
                    <label className="form-label">ID</label>
                    <input value={idVenta}
                        onChange={(e) => setIdVenta(e.target.value)}
                        type="number"
                        className="form-control"
                    >
                    </input>
                </div> */}
        {/* <td>{venta.idVenta}</td>
                                    <td>{venta.idUsuario}</td>
                                    <td>{venta.estado}</td>
                                    <td>{venta.producto}</td>
                                    <td>{venta.cantidad}</td>
                                    <td>{venta.descripcion}</td>
                                    <td>{venta.categoria}</td>
                                    <td>{venta.precio}</td>
                                    <td>{venta.fechaPublicacion}</td> */}
        {/* <div className="mb-3">
          <label className="form-label">idUsuario</label>
          <input
            value={idUsuario}
            onChange={(e) => setIdUsuario(e.target.value)}
            type="number"
            className="form-control"
          ></input>
        </div> */}

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
          <input
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            type="text"
            className="form-control"
          ></input>
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
    </div>
  );
};

export default CompRegistrarVentas;
