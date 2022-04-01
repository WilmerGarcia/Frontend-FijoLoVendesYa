import NavAndFooter from "./NavAndFooter";
import LeftNavbar from "../components/admin/leftNavbar";

const categorias = (props) => {
  const { children } = props;
  return (
    <>
      <LeftNavbar />
      <NavAndFooter>
        <div className="container">{children}</div>
      </NavAndFooter>
    </>
  );
};

export default categorias;
