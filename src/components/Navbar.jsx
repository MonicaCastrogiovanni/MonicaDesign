import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex justify-between items-center p-6 lg:px-20 bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/Risorsa2.svg"
          alt="Logo"
          className="w-20 h-auto object-contain"
        />
      </div>

      {/* Menu */}
      <div className="hidden lg:flex space-x-8 text-lg">
        {/* Home */}
        <NavLink name="Home" path="/" location={location} />

        {/* About */}
        <NavLink name="About" path="/about" location={location} />

        {/* PROJECT + DROPDOWN */}
        <div className="relative group cursor-pointer">
          <span
            className={`
              relative font-semibold pb-1 transition-colors duration-300
              ${
                location.pathname.startsWith("/projects") ||
                location.pathname === "/project"
                  ? "text-violet-700"
                  : "text-black"
              }
            `}
          >
            Project
            <span
              className={`
                absolute left-0 bottom-0 h-[2px] w-full bg-fuchsia-600 
                origin-left transition-transform duration-300
                ${
                  location.pathname.startsWith("/projects") ||
                  location.pathname === "/project"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }
              `}
            ></span>
          </span>

          {/* --- FIRST DROPDOWN --- */}
          <div
            className="absolute left-1/2 -translate-x-1/2 mt-3
                       bg-white shadow-lg rounded-lg py-2 w-48 z-50
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible
                       transition-all duration-300"
          >
            <Link
              to="/portfolio/graphic-design" 
              className="block px-4 py-2 hover:bg-fuchsia-100 text-sm"
            >
              Graphic Design
            </Link>

            <Link
              to="/portfolio/web-design"
              className="block px-4 py-2 hover:bg-fuchsia-100 text-sm"
            >
              Web Design
            </Link>

            {/* --- PHOTOGRAPH + SOTTOMENU VERTICALE --- */}
            <div className="relative group/inner">
              <div className="px-4 py-2 text-sm hover:bg-fuchsia-100 cursor-pointer flex items-center justify-between">
                Photograph
                {/* FRECCETTA */}
                <span className="ml-2 text-xs transition-transform duration-300 group-hover/inner:rotate-180">
                  ▼
                </span>
              </div>

              {/* SECOND DROPDOWN (SOTTO) */}
              <div
                className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-lg py-2 w-48
               opacity-0 invisible group-hover/inner:opacity-100 group-hover/inner:visible
               transition-all duration-300"
              >
                <Link
                  to="/portfolio/photograph/portrait"
                  className="block px-4 py-2 hover:bg-fuchsia-100 text-sm"
                >
                  Portrait
                </Link>

                <Link
                  to="/portfolio/photograph/still-life"
                  className="block px-4 py-2 hover:bg-fuchsia-100 text-sm"
                >
                  Still Life
                </Link>

                <Link
                  to="/portfolio/photograph/motocross"
                  className="block px-4 py-2 hover:bg-fuchsia-100 text-sm"
                >
                  Motocross
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <NavLink name="Contact" path="/contact" location={location} />
      </div>
    </nav>
  );
};

/* COMPONENTE LINK RIUTILIZZABILE */
const NavLink = ({ name, path, location }) => {
  const isActive = location.pathname === path;
  return (
    <Link
      to={path}
      className={`
        relative group font-semibold pb-1 transition-colors duration-300
        ${isActive ? "text-violet-700" : "text-black"}
      `}
    >
      {name}
      <span
        className={`
          absolute left-0 bottom-0 h-[2px] w-full bg-fuchsia-600
          origin-left transition-transform duration-300
          ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
        `}
      ></span>
    </Link>
  );
};

export default Navbar;
