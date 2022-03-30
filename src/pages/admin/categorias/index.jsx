import NavAndFooter from "../../../layouts/NavAndFooter";
import Categoria from "../../categorias/mostrarCategorias";
import LeftNavbar from "../../../components/admin/leftNavbar";

const categorias = () => {
  return (
    <>
      <LeftNavbar />
      <NavAndFooter>
        <Categoria />
      </NavAndFooter>
    </>
  );
};

export default categorias;
