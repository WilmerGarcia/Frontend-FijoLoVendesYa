import styled from "@emotion/styled";




export const SubmitButton = styled.button`
  width: 100%;
  padding: 9px 20%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  border: none;
 
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
  text-align: center;
  &:hover {
    filter: brightness(1.05);
   
  }
`;
