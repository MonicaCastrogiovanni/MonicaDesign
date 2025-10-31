import { useEffect, useRef, useState } from "react";

const About = () => {
  const skillRef = useRef(null);
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAnimateSkills(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (skillRef.current) observer.observe(skillRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Graphic Design", level: "90%" },
    { name: "Website Design", level: "80%" },
    { name: "App Design", level: "75%" },
    { name: "UX", level: "85%" },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
      {/* TITOLO */}
      <h2 className="text-7xl font-bold mb-14 text-center">
        About <span className="text-fuchsia-600">Me</span>
      </h2>

      {/* CONTENUTO */}
      <div className="flex flex-col lg:flex-row items-start gap-16">
        {/* TESTO */}
        <div className="lg:w-1/2 text-left space-y-5 text-[1.13rem] leading-relaxed">
          <p>
            I'm a passionate and adaptable professional with a background in
            <span className="font-semibold text-fuchsia-600">
              {" "}
              Graphic Design{" "}
            </span>
            and a strong foundation in
            <span className="font-semibold text-fuchsia-600">
              {" "}
              Full-Stack Development
            </span>
            .
          </p>

          <p>
            Enthusiasm, initiative, and flexibility define my approach to work
            and learning. I hold a Bachelor’s Degree in Graphic Design from the
            Academy of Fine Arts of Palermo, with a focus on inclusive and
            multisensory design. <br/><br/> Through Develhope’s Full-Stack program, I’ve
            gained hands-on experience in HTML5, CSS, JavaScript, TypeScript,
            React, Node.js, and REST APIs. I’m also familiar with Git, Agile
            methodology, and the basics of CI and testing.<br/><br/> Always eager to grow,
            collaborate, and take on new challenges, even in new places.
          </p>
        </div>

        {/* FOTO */}
        <div className="lg:w-1/2 flex justify-end">
          <img
            src="/Component1.png"
            alt="Me"
            className="w-full max-w-110 h-auto object-cover"
          />
        </div>
      </div>

      {/* SKILL SECTION */}
      <div ref={skillRef} className="mt-24">
        <h3 className="text-6xl font-bold mb-12 text-left">Skill</h3>

        <div className="space-y-8">
          {skills.map((skill) => (
            <div key={skill.name}>
              <p className="font-semibold mb-2 text-left text-2xl">{skill.name}</p>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-fuchsia-600 rounded-full transition-all duration-[1200ms] ease-out"
                  style={{ width: animateSkills ? skill.level : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
