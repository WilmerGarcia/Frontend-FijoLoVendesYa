import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const URI = "http://localhost:4000/api/tienda/editarVenta/";

const CompEditarVentas = () => {
  
  const [idUsuario, setIdUsuario] = useState("");
  const [estado, setEstado] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [producto, setProducto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [fechaPublicacion, setFechaPublicacion] = useState("");
  

  const router = useRouter();
  const {idVenta} = router.query;
  //const { query } = router;
  //console.log(query);

  //const { idVenta } = useParams()

  //Procedimiento para actualizar
  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + idVenta, {
      idUsuario: idUsuario,
      estado: estado,
      cantidad: cantidad,
      producto: producto,
      descripcion: descripcion,
      categoria: categoria,
      precio: precio,
      fechaPublicacion: fechaPublicacion,
    });
    router.push("/listarVenta");
  };

  useEffect(() => {
    getVentaById();
  }, []);

  const getVentaById = async () => {
    
    const response = await axios.get(
      "http://localhost:4000/api/tienda/buscarVenta/" + [idVenta], {withCredentials: true}
    );
    setEstado(response.data.estado);
    setCantidad(response.data.cantidad);
    setProducto(response.data.producto);
    setDescripcion(response.data.descripcion);
    setCantidad(response.data.categoria);
    setPrecio(response.data.precio);
    setFechaPublicacion(response.data.fechaPublicacion);
  };

  return (
    <div>
      <h1>EDITAR VENTA</h1>

      <form onSubmit={update}>
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
                <input value={idUsuario}
                    onChange={(e) => setIdUsuario(e.target.value)}
                    type="number"
                    className="form-control"
                >
                </input>
            </div> */}
        <div className="mb-3">
          <label className="form-label">idUsuario</label>
          <input
            value={idUsuario}
            onChange={(e) => setIdUsuario(e.target.value)}
            type="number"
            className="form-control"
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Estado</label>
          <input
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            type="radio"
            className="form-control form-check-input"
            checked
          ></input>
          <label className="form-check-label" for="exampleRadios1">
            Disponible
          </label>
          <input
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
          Editar
        </button>
      </form>
    </div>
  );
};
export default CompEditarVentas;
