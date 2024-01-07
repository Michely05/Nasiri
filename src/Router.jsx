import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MusicPage from "./pages/MusicPage";
import VideoPage from "./pages/VideoPage";


export default function Router() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
  );
}
