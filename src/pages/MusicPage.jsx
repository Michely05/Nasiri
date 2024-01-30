import React from "react";
import Music from "../components/music/Music";
import Footer from "../components/Footer";
import "./MusicPage.css"

export default function MusicPage() {
  return (
    <div className="musicPageCss">
      <Music />
      <Footer />
    </div>
  );
}
