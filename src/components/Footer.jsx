import React from "react";
import "./Footer.css";
import Instagram from "../assets/icons/instagram.svg";
import Soundcloud from "../assets/icons/soundcloud.svg";
import Spotify from "../assets/icons/spotify.svg";
import Youtube from "../assets/icons/youtube.svg";
import Facebook from "../assets/icons/facebook.svg";

export default function Footer() {
    return (
    <section className="footerContainer">
        <div className="socialLinks">
            <a href="https://soundcloud.com/nasiri_music" target="_blank" rel="noopener noreferrer">
                <img className="souncloudIcon footerIcons" src={Soundcloud} alt="Logo de Soundcloud"/>  
             </a>
            <a href="https://open.spotify.com/intl-es/artist/0KADrahn2Nf9vYPudng8mW?si=VoBFzf0XRyaX6Z5QoA3nXw&nd=1&dlsi=bd3778593ba441b2" target="_blank" rel="noopener noreferrer">
                <img className="spotifyIcon footerIcons" src={Spotify} alt="Logo de Spotify"/>  
            </a>
            <a href="https://www.youtube.com/channel/UCC3_MdrNjGKOJKYI4Dns_HA" target="_blank" rel="noopener noreferrer">
                <img className="youtubeIcon footerIcons" src={Youtube} alt="Logo de Youtube"/>  
            </a>
            <a href="https://www.instagram.com/nasiri.music" target="_blank" rel="noopener noreferrer">
                <img className="instagramIcon footerIcons" src={Instagram} alt="Logo de Instagram"/>  
            </a>
            <a href="https://www.facebook.com/nasiri.music/" target="_blank" rel="noopener noreferrer">
                <img className="facebookIcon footerIcons" src={Facebook} alt="Logo de Facebook"/>  
            </a>
        </div>
       
            <p className="footerParraf">© 2023 Nasiri Official. All Rights Reserved.</p>
       
    </section>
    );
}