import "./Gallery.css";
import React from "react";
import bannergallery from "../../src/assets/covers/nasiriHome.jpg"
import arrow315dg from "../../src/assets/icons/arrow-right-solid-315dg.svg"

const Gallery = ({ title, images, imageLinks, btn,}) => {
  return (
    <section className="galleryContainer">
      
      <div className="bannerGallery">
        <img src={bannergallery} alt="" />
        <h1 className="titleGallery">{title}</h1>
      </div>
      <div className="itemGalleryContainer">
        {images && images.map((image, index) => (
          <div key={index} className="galleryImgBtnsContainer">
              <a href={imageLinks[index]} target="_blank" rel="noopener noreferrer">
                <img className="galleryImg" src={image} alt={`Slide ${index}`} /> 
                <button className="galleryBtn">{btn} 
                  <img className="diagonalArrow" src={arrow315dg} alt="" />
                </button>
              </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
