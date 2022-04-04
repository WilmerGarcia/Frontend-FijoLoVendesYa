import NavAndFooter from "../admin/NavAndFooter"
import LeftNavbar from "../admin/leftNavbar";

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
