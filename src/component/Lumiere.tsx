import CategorySection from "../page-sections/CategorySection";
import ContactForm from "../page-sections/ContactForm";
import ArtCollectionMasonry from "./ArtCollection";
import ArtCollection from "./ArtCollection";
import CategoriesSection from "./Categories";
import Collection, { defaultArtworks } from '../component/Collection';
import Footer from "../page-sections/Footer";
import HeroSection from "./HeroSection";
import Mycollection from "./mycollection";
import Navbar from "./Navbar";
import WelcomeSection from "./Welcome";

const LumiereArts = () => {
  return (
    <div className="min-h-screen bg-[#8B7355] font-sans">
      <Navbar />
      <HeroSection />
      {/* <CategoriesSection /> */}
      <CategorySection/>
       {/* <WelcomeSection
        backgroundImage='https://images.unsplash.com/photo-1501854140801-50d01698950b' // vibrant geometric abstract with figures
      /> */}
      {/* <ArtCollectionMasonry /> */}
      {/* <Mycollection/> */}
      {/* <Collection artworks={} /> */}
      <ContactForm/>
      <Footer />
      
    </div>
  );
};

export default LumiereArts;
