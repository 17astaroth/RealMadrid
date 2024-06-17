import React from "react";
import Image from "./Image.js";
import Img1 from "../imagenes/imagen1.jpg";
import Img2 from "../imagenes/imagen2.jpg";
import Img3 from "../imagenes/imagen3.jpeg";
export const Section = () => {
  return (
    <div>
  <div
    id="carouselExampleFade"
    className="carousel slide carousel-fade relative"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner relative w-full overflow-hidden">
      <div className="carousel-item active float-left w-full">
        {/*Practica6*/}
        <Image
          //Uso de los PRODS
          src={Img1}
          className="block w-full"
          alt="..."
        />
      </div>
      <div className="carousel-item float-left w-full">
        <Image
          src={Img2}
          className="block w-full"
          alt="..."
        />
      </div>
      <div className="carousel-item float-left w-full">
        <Image
          src={Img3}
          className="block w-full"
          alt="..."
        />
      </div>
    </div>
    <button
      className="carousel-control-prev absolute top-0 bottom-0 left-0 z-10 flex items-center justify-center p-0 text-center bg-none border-0 opacity-50 hover:opacity-100 focus:outline-none focus:ring-0"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="prev"
    >
      <span
        className="carousel-control-prev-icon inline-block bg-no-repeat"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next absolute top-0 bottom-0 right-0 z-10 flex items-center justify-center p-0 text-center bg-none border-0 opacity-50 hover:opacity-100 focus:outline-none focus:ring-0"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="next"
    >
      <span
        className="carousel-control-next-icon inline-block bg-no-repeat"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

  );
};
export default Section;