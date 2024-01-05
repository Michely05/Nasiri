import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";


export default function Router() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/events" element={<EventsPage />} />
        <Route path="/biography" element={<BiographyPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
  );
}
