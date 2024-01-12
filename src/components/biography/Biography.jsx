import "./Biography.css"
import nasiriPic1 from "../../assets/img/nasiri5.png"

export default function Biography() {
    return(
     <div className="biographyContainer">
         <img className="coverImg" src={nasiriPic1} alt="pic1" />
         <div>
            <p>Nasiri, the renowned international multi-instrumentalist and producer, takes audiences on a sensory-rich world music voyage, fusing oriental instruments like the oud, flute, and clarinet with an electronic foundation, featuring deep bass lines, rhythmic synths and organic percussionli</p>
            <p>"A journey through the spiritual and the material, the real and the unreal, that reflects the mysticism and the meaning of our existence".</p>
            <p>"The purpose is to enlighten the beauty that exists in the different cultures of the world and merge them with the world languages: Music, Dance & Harmony".</p>
            <p>"Nasiri's music feels like a spiritual experience that leaves you feeling something special". - Kord Agency</p>
         </div>
    </div>
    )
}
