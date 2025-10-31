import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Blocca lo scroll del body quando la sidebar è aperta
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // chiude sidebar e (opzionale) potresti aggiungere navigazione programmata
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <nav className="flex justify-between items-center p-6 pb-0 lg:px-20 bg-white relative z-20">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/Risorsa2.svg"
            alt="Logo"
            className="w-20 h-auto object-contain"
          />
        </div>

        {/* HAMBURGER MOBILE */}
        <button
          aria-label="Apri menu"
          className="lg:hidden text-3xl p-2"
          onClick={() => setIsOpen(true)}
        >
          {/* semplice hamburger: tre linee */}
          <span className="block">☰</span>
        </button>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex space-x-8 text-lg items-center">
          <NavLink
            name="Home"
            path="/"
            location={location}
            onClick={handleClose}
          />
          <NavLink
            name="About"
            path="/about"
            location={location}
            onClick={handleClose}
          />
          <DropdownDesktop location={location} onClose={handleClose} />
          <NavLink
            name="Contact"
            path="/contact"
            location={location}
            onClick={handleClose}
          />
        </div>
      </nav>

      {/* SIDEBAR + OVERLAY */}
      {/* overlay: appare solo quando isOpen */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          aria-hidden="true"
          onClick={handleClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu principale"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <img
            src="/Risorsa2.svg"
            alt="Logo"
            className="w-28 h-auto object-contain"
          />
          <button
            aria-label="Chiudi menu"
            className="text-2xl"
            onClick={handleClose}
          >
            ×
          </button>
        </div>

        <nav className="p-6">
          <div className="flex flex-col space-y-4 text-lg">
            <MobileNavLink
              name="Home"
              path="/"
              location={location}
              onClick={handleClose}
            />
            <MobileNavLink
              name="About"
              path="/about"
              location={location}
              onClick={handleClose}
            />

            {/* Dropdown mobile: accordion con sotto-menu cascata */}
            <MobileDropdown location={location} onNavigate={handleClose} />

            <MobileNavLink
              name="Contact"
              path="/contact"
              location={location}
              onClick={handleClose}
            />
          </div>
        </nav>
      </aside>
    </>
  );
};

/* NAVLINK (desktop) */
const NavLink = ({ name, path, location, onClick }) => {
  const isActive = location.pathname === path;
  return (
    <Link
      to={path}
      onClick={onClick}
      className={`relative group font-semibold pb-1 transition-colors duration-300 ${
        isActive ? "text-violet-700" : "text-black"
      }`}
    >
      {name}
      <span
        className={`absolute left-0 bottom-0 h-[2px] w-full bg-fuchsia-600 origin-left transition-transform duration-300 ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
};

/* MobileNavLink (per assicurare onClick chiudi sidebar) */
const MobileNavLink = ({ name, path, location, onClick }) => {
  const isActive = location.pathname === path;
  return (
    <Link
      to={path}
      onClick={onClick}
      className={`font-semibold ${isActive ? "text-violet-700" : "text-black"}`}
    >
      {name}
    </Link>
  );
};

/* DROPDOWN DESKTOP (stesso dropdown a cascata che volevi) */
const DropdownDesktop = ({ location, onClose }) => {
  return (
    <div className="relative group cursor-pointer">
      <span
        className={`relative font-semibold pb-1 transition-colors duration-300 ${
          location.pathname.startsWith("/portfolio")
            ? "text-violet-700"
            : "text-black"
        }`}
      >
        Project
        <span
          className={`absolute left-0 bottom-0 h-[2px] w-full bg-fuchsia-600 origin-left transition-transform duration-300 ${
            location.pathname.startsWith("/portfolio")
              ? "scale-x-100"
              : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </span>

      <div className="absolute left-1/2 -translate-x-1/2 mt-3 bg-white shadow-lg rounded-lg py-2 w-48 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <Link
          to="/portfolio/graphic-design"
          onClick={onClose}
          className="block px-4 py-2 hover:bg-fuchsia-100 text-sm"
        >
          Graphic Design
        </Link>

        <Link
          to="/portfolio/web-design"
          onClick={onClose}
          className="block px-4 py-2 hover:bg-fuchsia-100 text-sm"
        >
          Web Design
        </Link>

        {/* Photograph + sotto-dropdown */}
        <div className="relative group/inner">
          <div className="px-4 py-2 text-sm hover:bg-fuchsia-100 cursor-pointer flex items-center justify-between">
            Photograph{" "}
            <span className="ml-2 text-xs transition-transform duration-300 group-hover/inner:rotate-180">
              ▼
            </span>
          </div>

          <div className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover/inner:opacity-100 group-hover/inner:visible transition-all duration-300">
            <Link
              to="/portfolio/photograph/portrait"
              onClick={onClose}
              className="block px-4 py-2 hover:bg-fuchsia-100 text-sm"
            >
              Portrait
            </Link>
            <Link
              to="/portfolio/photograph/still-life"
              onClick={onClose}
              className="block px-4 py-2 hover:bg-fuchsia-100 text-sm"
            >
              Still Life
            </Link>
            <Link
              to="/portfolio/photograph/motocross"
              onClick={onClose}
              className="block px-4 py-2 hover:bg-fuchsia-100 text-sm"
            >
              Motocross
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/* MOBILE DROPDOWN (accordion che mantiene la cascata) */
const MobileDropdown = ({ location, onNavigate }) => {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(false);

  // helper per chiudere sidebar appena navghi
  const handleNavigate = (onNavigateFn) => {
    if (onNavigateFn) onNavigateFn();
  };

  return (
    <div>
      <button
        className={`w-full text-left font-semibold flex items-center justify-between ${
          location.pathname.startsWith("/portfolio")
            ? "text-violet-700"
            : "text-black"
        }`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        Project <span className="ml-2">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="mt-2 ml-3 space-y-2 text-base">
          <Link
            to="/portfolio/graphic-design"
            onClick={() => handleNavigate(onNavigate)}
            className="block hover:text-fuchsia-600"
          >
            Graphic Design
          </Link>
          <Link
            to="/portfolio/web-design"
            onClick={() => handleNavigate(onNavigate)}
            className="block hover:text-fuchsia-600"
          >
            Web Design
          </Link>

          <div>
            <button
              className="w-full text-left flex items-center justify-between mt-1"
              onClick={() => setOpenSub((v) => !v)}
              aria-expanded={openSub}
            >
              Photograph <span>{openSub ? "▲" : "▼"}</span>
            </button>

            {openSub && (
              <div className="mt-2 ml-3 space-y-2">
                <Link
                  to="/portfolio/photograph/portrait"
                  onClick={() => handleNavigate(onNavigate)}
                  className="block hover:text-fuchsia-600"
                >
                  Portrait
                </Link>
                <Link
                  to="/portfolio/photograph/still-life"
                  onClick={() => handleNavigate(onNavigate)}
                  className="block hover:text-fuchsia-600"
                >
                  Still Life
                </Link>
                <Link
                  to="/portfolio/photograph/motocross"
                  onClick={() => handleNavigate(onNavigate)}
                  className="block hover:text-fuchsia-600"
                >
                  Motocross
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
