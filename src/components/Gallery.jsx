import "./Gallery.css";
import React from "react";

const Gallery = ({ title, images, imageLinks, btn, captions }) => {
  return (
      <div className="galleryContainer">
        <h1 className="titleGallery">{title}</h1>
        <div className="imgGalleryContainer">
          {images && images.map((image, index) => (
            <div key={index} className="galleryItem">
              <a href={imageLinks[index]} target="_blank" rel="noopener noreferrer">
                <img className="galleryImg" src={image} alt={`Slide ${index}`}/>
                <button className="galleryBtn">{btn}</button>
              </a>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Gallery;