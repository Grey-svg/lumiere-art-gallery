import { ArrowRight } from "lucide-react";

interface CategoryData {
  title: string;
  image: string;
  description: string;
}

interface CardProps {
  data: CategoryData;
  isTall?: boolean;
}

const Card = ({ data, isTall }: CardProps) => (
  /* mx-auto ensures the cards are centered horizontally */
  <div className="group cursor-pointer flex flex-col w-full max-w-[360px] md:max-w-[420px]">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-[10px] md:text-[30px] font-bold tracking-[0.15em] uppercase">
        {data.title}
      </h3>
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
    </div>

    {/* FIXED: Smaller heights for mobile view (h-[180px]) */}
    <div
      className={`relative overflow-hidden mb-4 bg-gray-100 ${
        isTall
          ? "h-[280px] md:h-[480px] aspect-[3/4.2]"
          : "h-[160px] md:h-[240px] aspect-video"
      }`}
    >
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    <div className="flex flex-col items-center text-center px-2">
      <p className="text-[10px] md:text-xs font-medium leading-snug">
        {data.description}
      </p>
      {/* Centered line matching Figma */}
      <div className="w-10 md:w-12 h-px bg-black mt-3 md:mt-4 transition-all group-hover:w-14 md:group-hover:w-16" />
    </div>
  </div>
);

const CategoriesSection = () => {
  const categories: Record<string, CategoryData> = {
    ancient: {
      title: "ANCIENT ORIGINS",
      image:
        "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800&q=80",
      description:
        "Early artworks like cave paintings and carvings that show human history and culture",
    },
    pixel: {
      title: "PIXEL ART",
      image:
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&q=80",
      description: "Creative artworks made with digital tools and photography",
    },
    modern: {
      title: "MODERN ART",
      image:
        "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&q=80",
      description:
        "Digital images made from tiny colored squares, popular in games and illustrations",
    },
  };

  return (
    <>
      

      <section className="bg-white pb-32 py-10 px-10 md:px-12 flex justify-center overflow-hidden">
        {/* max-w-5xl keeps the layout centralized */}
        <div className="max-w-5xl w-full flex flex-row gap-6 md:gap-12 lg:gap-20 items-start justify-center">
          {/* Left Column (Ancient + Modern) */}
          <div className="w-[55%] flex flex-col gap-12 md:gap-10">
            <Card data={categories.ancient} />
            <Card data={categories.modern} />
          </div>

          {/* Right Column (Pixel Art) */}
          {/* md:mt-32 offsets this column to match the Figma asymmetry */}
          <div className="w-[45%] mt-12 md:mt-24">
            <Card data={categories.pixel} isTall={true} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesSection;

// const CategoriesSection = () => {
//   const categories = [
//     {
//       title: 'ANCIENT ORIGINS',
//       image: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=500&q=80',
//       description: 'Early artworks like cave paintings and carvings that show human history and culture'
//     },
//     {
//       title: 'PIXEL ART',
//       image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=500&q=80',
//       description: 'Creative artworks made with digital tools and technology'
//     },
//     {
//       title: 'MODERN ART',
//       image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=500&q=80',
//       description: 'Digital images made from tiny colored squares, popular in games and illustrations'
//     }
//   ];

//   return (
//     <section className="bg-[#f5f3f0] py-20 px-20">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//         {categories.map((category, index) => (
//           <div key={index} className="group cursor-pointer">
//             <div className="relative overflow-hidden mb-5 h-[320px]">
//               <img
//                 src={category.image}
//                 alt={category.title}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//             </div>
//             <div className="flex items-center gap-3 mb-3">
//               <h3 className="text-lg font-bold tracking-wide">{category.title}</h3>
//               <span className="text-2xl">→</span>
//             </div>
//             <p className="text-gray-700 text-sm leading-relaxed">
//               {category.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
//  export default CategoriesSection;
