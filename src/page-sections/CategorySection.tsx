import CategoryCard from "../component/CategoryCard";

const CategorySection = () => {
  return (
   <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <CategoryCard
            title="Ancient Origins"
            description="Early artworks like cave paintings and carvings that show human history and culture"
            imageUrl="https://images.unsplash.com/photo-1500468756762-a401b6f17b46?w=800" // prehistoric cave art style
            linkTo="/ancient"
          />
          <CategoryCard
            title="Pixel Art"
            description="Digital images made from tiny colored squares, popular in games and illustrations"
            imageUrl="https://images.unsplash.com/photo-1550744829-eb0a3e8b8c5f?w=800" // pixel-inspired portrait
            linkTo="/pixel"
          />
          <CategoryCard
            title="Modern Art"
            description="Creative artworks made with digital tools and photography"
            imageUrl="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800" // reaching hands abstract
            linkTo="/modern"
          />
        </div>
      </section>
  );
};

export default CategorySection;