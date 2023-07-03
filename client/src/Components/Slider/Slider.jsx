import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://media.istockphoto.com/id/1283056430/photo/grunge-background-with-african-traditional-patterns.jpg?s=612x612&w=0&k=20&c=FPHYvcxjHSAmWuhx6RSVizyggd8PCH6ZpeEbXgJbcpA=",
    "https://media.istockphoto.com/id/125792740/photo/african-national-patterns.jpg?s=612x612&w=0&k=20&c=wEiWa7UWfIIrEKAkuNOx-OJ4oI1gUSWVHvjAWJeFq_A=",
    "https://media.istockphoto.com/id/1161123116/photo/ceramic-pots-on-the-eastern-market-in-asia-in-which-they-make-food-or-grow-plants-stock-photo.jpg?s=612x612&w=0&k=20&c=hFBjAV34_sEmq5JxPhwVwMtWefdEncNvDiOBmmkgTYQ=",
,
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;