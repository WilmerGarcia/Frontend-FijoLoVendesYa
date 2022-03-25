import ImageSlider from "../../layouts/Slider/Slider";
import "../../styles/App.css";


import Footer from "../../layouts/footer/Footer";

const home = () => {
  return (
    <>

      <div className="container mt-5 carousel">
        <h1 className="slider_title"></h1>
        <ImageSlider />
      </div>
      <Footer />
    </>
  );
};

export default home;

//npm install react-slick --save
//npm install slick-carousel (this is for slick-carousel for css and font)
