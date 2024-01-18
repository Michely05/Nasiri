import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/homeFolder/HomePage";
import BiographyPage from "./pages/BiographyPage";
import MusicPage from "./pages/MusicPage";
import VideoPage from "./pages/VideoPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";

export default function Router(){
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/biography" element={<BiographyPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
  )
}
