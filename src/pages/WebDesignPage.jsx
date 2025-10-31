import React from "react";

const websites = [
  {
    id: 1,
    img: "/wd/wd1.jpg",
    name: "Adidas Store",
    url: "https://alfonsolambiase.github.io/Adidas-Project/",
    presentation: "https://monicacastro.my.canva.site/adidas",
  },
  {
    id: 2,
    img: "/wd/wd2.jpg",
    name: "SpaceMath",
    url: "https://space-math-landing-page.vercel.app/",
    presentation: "https://monicacastro.my.canva.site/spacemath-presentazione",
  },
];

const WebDesignPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-semibold text-center mb-14 text-violet-700">
        Web Design
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {websites.map((site) => (
          <div key={site.id} className="group text-center">
            {/* Immagine */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={site.img}
                alt={site.name}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Nome */}
            <h2 className="text-xl mt-4 font-medium">{site.name}</h2>

            {/* Bottone Primary */}
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-6 py-2 border border-fuchsia-600 text-fuchsia-600 rounded-full
                         hover:bg-fuchsia-600 hover:text-white transition-all duration-300"
            >
              Visit Website
            </a>

            {/* Link Presentazione (piccolo e elegante) */}
            {site.presentation && (
              <a
                href={site.presentation}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm text-gray-600 hover:text-fuchsia-600 transition-colors duration-300"
              >
                View Presentation →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDesignPage;
