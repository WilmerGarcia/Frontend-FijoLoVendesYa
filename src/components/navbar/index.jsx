import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../button";
import { StyledNavbarContainer } from "./styled";
import { Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Navbar = () => {
  const router = useRouter();
  return (
    <StyledNavbarContainer>
      <div className="container">
        <Link href="/">
          <img className="logo" src="/images/logo.png" />
        </Link>

        <div className="search">
          <Input
            className="item-input"
            action={{ icon: "search" }}
            placeholder="Search..."
          />
        </div>
        <div className="content">
          <ul className="ul">
            <li className="li">
              <Link href="/register">
                <a className="link">Registrar</a>
              </Link>
            </li>
            <li className="li">
              <Link href="/">
                <a className="nolin">o</a>
              </Link>
            </li>
            <li className="li">
              <Link href="/login">
                <a className="link">Iniciar sesión</a>
              </Link>
            </li>
          </ul>
          <div className="loginButtons">
            <Button
              as="a"
              width="120px"
              onClick={() => {
                router.push("/categorias");
              }}
            >
              Publicar
            </Button>
          </div>
        </div>
      </div>
    </StyledNavbarContainer>
  );
};

export default Navbar;
