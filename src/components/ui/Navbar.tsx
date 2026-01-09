const Navbar = () => {
  return (
    <div className="flex items-center w-full h-0.5 mb-16 p-2">
      <h1 className="absolute left-4 text-2xl font-bold text-black">VD</h1>
      <nav className="flex items-center justify-center">
        <ul className="flex gap-8 text-sm font-medium text-black">
          <li className="cursor-pointer hover:text-orange-500 font-semibold text-xl">
            Skills
          </li>
          <li className="cursor-pointer hover:text-orange-500 font-semibold text-xl">
            Projects
          </li>
          <li className="cursor-pointer hover:text-orange-500 font-semibold text-xl">
            About
          </li>
          <li className="cursor-pointer hover:text-orange-500 font-semibold text-xl">
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
