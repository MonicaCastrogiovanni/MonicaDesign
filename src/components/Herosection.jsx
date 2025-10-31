const Hero = () => {
  const COLORS = {
    primary: "text-violet-700",
    secondary: "text-fuchsia-600",
    shadow: "from-purple-500",
  };

  return (
    <section className="pt-10 pb-20 text-center bg-white">
      <p className={`${COLORS.secondary} font-semibold text-2xl mb-4`}>Hello!</p>

      <h1 className="text-5xl lg:text-5xl font-extrabold mb-10 px-4">
        I'm <span className={COLORS.secondary}>Monica</span>,{" "}
        <br className="lg:hidden" /> Graphic Designer<br />
       and Web Developer
      </h1>

      {/* Immagine con sfondo viola/rosa sfumato */}
      <div className="relative inline-block mx-auto">
        {/* Sfondo sfumato e sfocato */}
        <div
          className={`absolute inset-0 m-auto w-72 h-72 lg:w-96 lg:h-96 
                      bg-gradient-to-br ${COLORS.shadowFrom} ${COLORS.shadowTo}
                      rounded-full opacity-70 blur-3xl z-0 
                      transform scale-150`}
        ></div>
      </div>

      {/* Immagine del Profilo */}
      <div className="relative z-10 w-64 h-64 lg:w-[28rem] lg:h-[28rem] mx-auto rounded-full overflow-hidden">
        <img
          src="./public/io.png"
          alt="Monica, Graphic Designer and Web Developer"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
