import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Main from "../components/main";

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
