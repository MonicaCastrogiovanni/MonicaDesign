import React from "react";

const images = Array.from({ length: 15 }, (_, i) => `/gd/gd${i + 1}.jpg`);

const GraphicDesignPage = () => {
  return (
    <section className="py-20 bg-white">
      <h1 className="text-4xl font-bold text-center text-violet-700 mb-12">
        Graphic Design
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-20">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl shadow-lg group transition-all"
          >
            <img
              src={src}
              alt={`Graphic Design Work ${index + 1}`}
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GraphicDesignPage;
