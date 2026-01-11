const WelcomeSection: React.FC<{ backgroundImage: string }> = ({ backgroundImage }) => (
  <section className="relative min-h-[600px] flex items-center justify-center">
    <img
      src={backgroundImage}
      alt="Abstract vibrant art"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40" />
    <div className="relative z-10 text-center text-white px-6 max-w-4xl">
      <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-wide leading-tight mb-6">
        Welcome To
        <br />
        The Art And History Gallery
        <br />
        Lumière Arts
      </h2>
      <button className="mt-8 px-10 py-5 bg-white text-black font-bold text-xl uppercase tracking-wider hover:bg-gray-200 transition">
        Learn More →
      </button>
    </div>
  </section>
);
export default WelcomeSection