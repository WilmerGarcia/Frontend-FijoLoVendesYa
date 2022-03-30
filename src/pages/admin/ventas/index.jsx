import NavAndFooter from "../../../layouts/NavAndFooter";
import LeftNavbar from "../../../components/admin/leftNavbar";
import Ventas from "../../../components/ventas/mostrarVentas";

const index = () => {
  return (
    <>
      <LeftNavbar />
      <NavAndFooter>
        <Ventas />
      </NavAndFooter>
    </>
  );
};

export default index;
