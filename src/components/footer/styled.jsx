import styled from "@emotion/styled";

export const StyledFooterContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 200px;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    padding: 0px 60px;
  }
  .logo {
    height: 70%;
  }

  .ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: max-content;

    .li {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0px 20px;

      a {
        color: #333333;
        font-size: 16px;
        font-weight: 600;
        text-decoration: none;
        font-family: "Montserrat", sans-serif;
      }
    }
  }
`;
