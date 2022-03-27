import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : "max-content")};
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin: ${(props) => props.margin ?? "0px 10px"};
  padding: ${(props) => props.padding ?? "8px 30px"};
  border-radius: ${(props) => props.borderradius ?? "4px"};
  background-color: ${(props) => props.backgroundcolor ?? "#2b4ec2"};
  border: ${(props) => props.border ?? "1px solid #2b4ec2"};
  color: ${(props) => props.color ?? "#ffffff"};
`;
