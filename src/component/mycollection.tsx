import Gallery from "../page-sections/Gallery";

   const collectionImages = [
   'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
  'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg',
  'https://images.pexels.com/photos/459301/pexels-photo-459301.jpeg',
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
  'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
  'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
  'https://images.pexels.com/photos/957061/milky-way-starry-sky-night-sky-star-957061.jpeg',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b',
  ];
const Mycollection = () => {
  return (
<section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 uppercase tracking-wide">Collection</h2>
          <Gallery images={collectionImages} />
        </div>
      </section>
  );
};

export default Mycollection;
