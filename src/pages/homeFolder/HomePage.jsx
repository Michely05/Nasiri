import './Home.css'
import Facebook from '../../assets/icons/Facebook.png'
import Instagram from '../../assets/icons/Instagram.png'
import Soundcloud from '../../assets/icons/SoundCloud.png'
import Spotify from '../../assets/icons/Spotify.png'
import Youtube from '../../assets/icons/Youtube.png'

export default function HomePage(){
    return(
        <div className='homeContainer'>
        <div className="background"></div>
        
        <div className="textContainer">
            <h1 id='title'>Nasiri</h1>
            <span>ORIENTAL INSTRUMENTS <span>&</span> ELECTRONIC LIVE</span>
            <p>"A journey through the spiritual and the material, the real and the unreal, that reflects mysticism and the meaning of our existence"</p>
        </div>
        <div className="icons">
            <a href="https://soundcloud.com/nasiri_music" target="_blank">
            <img id="soundcloudIcon" src={Soundcloud} alt="SoundCLoud icon"/>
            </a>
            <a href="https://open.spotify.com/intl-es/artist/0KADrahn2Nf9vYPudng8mW" target="_blank">
            <img src={Spotify} alt="Spotify icon" />
            </a>
            <a href="https://www.youtube.com/@nasiri_music" target="_blank">
            <img id='youtubeIcon' src={Youtube} alt="Youtube icon" />
            </a>
            <a href="https://www.facebook.com/nasiri.music/" target="_blank">
            <img src={Facebook} alt="Facebook icon" />
            </a>
            <a href="https://www.instagram.com/nasiri.music/"target='_blank'>
            <img src={Instagram} alt="Instagram icon" />
            </a>
        </div>
        
    </div>
    )
}