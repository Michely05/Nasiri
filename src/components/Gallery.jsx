import "./Gallery.css";
import React from "react";
import bannergallery from "../../src/assets/covers/nasiriHome.jpg"

const Gallery = ({ title, images, imageLinks, btn, captions }) => {
  return (
    <section className="galleryContainer">
      <div className="bannerGallery">
        <img src={bannergallery} alt="" />
        <h1 className="titleGallery">{title}</h1>
      </div>
      <div className="imgGalleryContainer">
        {images && images.map((image, index) => (
          <div key={index} className="galleryItemContainer">
            <a href={imageLinks[index]} target="_blank" rel="noopener noreferrer">
                <img className="galleryImg" src={image} alt={`Slide ${index}`} />
                <button className="galleryBtn">{btn}</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
