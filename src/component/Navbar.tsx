const Navbar = () => {
  return (
    <header className="flex justify-between items-center  px-8 py-4 bg-[#2a2522]">
      <a href="#" ><h1 className="text-white text-2xl font-bold">Lumiere Arts</h1></a>
      <nav className="flex gap-8 text-white text-sm uppercase">
        <a href="#" className="hover:text-gray-300 transition">
          About
        </a>
        <a href="#" className="hover:text-gray-300 transition">
          Gallery
        </a>
        <a href="" className="hover:text-gray-300 transition">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
