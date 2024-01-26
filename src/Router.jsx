import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/homeFolder/HomePage";
import App from "./App";
import BiographyPage from "./pages/BiographyPage";
import ContactPage from "./pages/ContactPage"
import EventsPage from "./pages/EventsPage"
import MusicPage from "./pages/MusicPage"
import VideoPage from "./pages/VideoPage"

export default function Router(){
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/biography" element={<BiographyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
  )
}
