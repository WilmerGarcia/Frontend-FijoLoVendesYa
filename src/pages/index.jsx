import Button from "../components/button";
import NavAndFooter from "../layouts/NavAndFooter";
import ImageSliderHome from "../components/SliderHome/Slider";
import CarouselDemo from "../components/carousel/CarouselDemo";

//import Slider from "react-slick";
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
`;

const index = () => {
  return (
    <NavAndFooter>
      <ImageSliderHome />
      <Container>
        <CarouselDemo />
      </Container>
    </NavAndFooter>
  );
};

export default index;
