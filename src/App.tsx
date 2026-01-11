
import { Routes, Route } from 'react-router-dom'
import LumiereArts from "./component/Lumiere";
import AncientArtPage from "./pages/AncientArtPage";
import HomePage from "./pages/HomePage";
import ModernArtPage from "./pages/ModernArtPage";
import PixelArtPage from "./pages/PixelArtPage";



 const App: React.FC = () => {
  
  return (
   
   <Routes>
      <Route path="/" element={<LumiereArts/>} />
      <Route path="/modern" element={<ModernArtPage />} />
      <Route path="/pixel" element={<PixelArtPage />} />
      <Route path="/ancient" element={<AncientArtPage />} />
      
      {/* Optional: 404 page or redirect */}
      <Route path="*" element={<div>404 - Page not found</div>} />
    </Routes>
  );
};

export default App;