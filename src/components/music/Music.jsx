import React from 'react';
import Gallery from '../../components/Gallery';


import isa1 from "../../assets/img/isa2.png";
import isa2 from "../../assets/img/isa3.png";
import isa3 from "../../assets/img/isa4.png";
import isa4 from "../../assets/img/isa5.png";
import isa5 from "../../assets/img/isa8.png";

function Music() {
  const title = "Music";
  const images = [isa1, isa2, isa3, isa4, isa5];
  const imageLinks = [
    "https://soundcloud.com/jackiesbarcelona/jackies-music-house-session-154-isa-enes",
    "https://soundcloud.com/isaenes/isa-enes-bfh",
    "https://soundcloud.com/etherealgroovesofficial/ethereal-mix-068-isa-enes",
    "https://soundcloud.com/isaenes/djsetweirdsose",
    "https://soundcloud.com/rblmedia/isa-enes-rbl-goes-to-crack",
  ];
  const btn = "SoundCloud";
  const captions = [
    "Jackies Music House Session #154 - Isa Enes",
    "Isa Enes - BFH",
    "Ethereal mix 068: Isa Enes",
    "Weirdose - dj set",
    "Isa Enes - RBL goes to Crack Bellmer | BRL-220723",
  ];

  return (
    <div>
      <Gallery title={title} images={images} imageLinks={imageLinks} btn={btn} captions={captions} />
    </div>
  );
}

export default Music;
