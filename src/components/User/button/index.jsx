import { StyledButton } from "./styled";

const Animation = {
  whileHover: { scale: 1.02, transition: { duration: 0.3 } },
  whileTap: { scale: 0.98, opacity: 0.8 },
};

const button = (props) => {
  const { children } = props;
  return (
    <StyledButton {...props} {...Animation}>
      {children ?? "button text default"}
    </StyledButton>
  );
};

export default button;
