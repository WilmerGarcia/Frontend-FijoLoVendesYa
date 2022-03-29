import Button from "../../components/button/index";
import NavAndFooter from "../../layouts/NavAndFooter";
import ImageSlider from "../../components/Slider/Slider";
import Slider from "react-slick";
import styled from "@emotion/styled";

const Container = styled.div``;

const index = () => {
  return (
    <NavAndFooter>
      <div className="container mt-5 carousel">
        <h1 className="slider_title"></h1>
        <ImageSlider />
      </div>
    </NavAndFooter>
  );
};

export default index;
