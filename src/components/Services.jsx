import { Link } from "react-router-dom";
import { useState } from "react";

const ServiceCard = ({ title, imageUrl, link, hasSubmenu = false }) => {
  const [hovered, setHovered] = useState(false);

  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setHovered(false), 200); // delay 200ms
  };

  return (
    <div
      className="service-wrap relative group w-full max-w-[420px] mx-auto transition-all duration-500"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* CARD CLICKABLE */}
      <Link
        to={hasSubmenu ? "#" : link}
        onClick={(e) => hasSubmenu && e.preventDefault()}
        className="card-link block rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500"
        aria-label={title}
      >
        <div className="relative">
          <img
            src={imageUrl}
            alt={title}
            className={`w-full h-64 object-cover transition-transform duration-700 ${
              hovered ? "scale-105" : "scale-100"
            }`}
          />

          {/* overlay sfumato */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-violet-900/65 via-fuchsia-600/30 to-transparent transition-opacity duration-500"
            style={{ pointerEvents: "none" }}
          />

          {/* titolo e freccina */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <h3
              className={`text-white text-2xl font-bold drop-shadow-lg transition-all duration-400 ${
                hovered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
            >
              {title}
            </h3>

            <div
              className={`bg-white p-2 rounded-full flex items-center justify-center transform transition-all duration-300 ${
                hovered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }`}
            >
              <span className="sr-only">Explore</span>
              <svg
                className="w-5 h-5 text-violet-700 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>

      {/* SOTTOMENU */}
      {hasSubmenu && (
        <div
          className={`submenu-container absolute left-0 right-0 mt-4 z-50 flex justify-center transition-all duration-400 ${
            hovered
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
          style={{ paddingLeft: 8, paddingRight: 8 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full max-w-[420px] grid grid-cols-1 gap-3">
            <Link to="/portfolio/photography/portrait" className="block">
              <div className="mini-card bg-white/95 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg border border-white/20 p-4 flex items-center justify-between transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src="/Castrogiovanni-11.jpg"
                      alt="Portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-violet-800 font-semibold">Portrait</div>
                </div>
                <svg
                  className="w-5 h-5 text-violet-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>

            <Link to="/portfolio/photography/still-life" className="block">
              <div className="mini-card bg-white/95 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg border border-white/20 p-4 flex items-center justify-between transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src="/stilllife.jpg"
                      alt="Still Life"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-violet-800 font-semibold">
                    Still Life
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-violet-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>

            <Link to="/portfolio/photography/motocross" className="block">
              <div className="mini-card bg-white/95 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg border border-white/20 p-4 flex items-center justify-between transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src="/mx.jpg"
                      alt="Motocross Riders"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-violet-800 font-semibold">Motocross</div>
                </div>
                <svg
                  className="w-5 h-5 text-violet-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
