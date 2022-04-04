import Navbar from "../admin/Navbar";
import Footer from "../admin/Footer";
import Main from "../admin/main";

const NavAndFooter = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default NavAndFooter;
