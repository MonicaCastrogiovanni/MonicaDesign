import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_qrseadr", 
        "template_8l3pucq", 
        formData,
        "b9FXtXJ_uZZ5JrdMH" 
      )
      .then(
        () => {
          alert("Message sent successfully 💜");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
      <h2 className="text-7xl font-bold mb-14 text-center">
        Contact <span className="text-fuchsia-600">Me</span>
      </h2>

      <div className="flex flex-col lg:flex-row items-start gap-16">
        {/* TESTO A SINISTRA */}
        <div className="lg:w-1/2 text-left space-y-5 text-[1.13rem] leading-relaxed">
          <p>
            Let's create something{" "}
            <span className="text-fuchsia-600 font-semibold">amazing</span>{" "}
            together! Whether you have a project in mind or just want to
            connect, I’d love to hear from you.
          </p>

          <p className="text-gray-700">
            <span className="font-semibold text-violet-700">Email:</span>{" "}
            monica.castro997@gmail.com
            <br />
            <span className="font-semibold text-violet-700">Phone:</span> 329 /
            7349840
          </p>

          <p className="text-gray-700">
            Based in{" "}
            <span className="text-fuchsia-600 font-medium">Toscana, Italy</span>{" "}
            🌍
          </p>
        </div>

        {/* FORM A DESTRA */}
        <div className="lg:w-1/2 w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-gray-100"
          >
            <div>
              <label className="block text-xl font-semibold mb-2 text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-fuchsia-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xl font-semibold mb-2 text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-fuchsia-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xl font-semibold mb-2 text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message..."
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-fuchsia-500 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-violet-700 text-white font-semibold rounded-full hover:bg-fuchsia-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
