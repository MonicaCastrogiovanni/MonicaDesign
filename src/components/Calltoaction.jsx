import React, { useState } from "react";

const CTA = () => {
  const [userEmail, setUserEmail] = useState("");

  const handleClick = () => {
    if (userEmail) {
      // Apre il client email dell'utente con destinatario fisso a te
      window.location.href = `mailto:monica.castro997@gmail.com?subject=Let's%20Discuss!&body=Hi,%20my%20email%20is%20${encodeURIComponent(
        userEmail
      )}%20and%20I%20want%20to%20talk%20about%20my%20project.`;
    } else {
      alert("Please enter your email address.");
    }
  };

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl lg:text-4xl font-extrabold mb-8">
        Have an Awesome <br className="lg:hidden" /> Project Idea? <br />
        <span className="text-fuchsia-600">Let's Discuss!</span>
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
        <div className="relative w-full max-w-md">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-fuchsia-600 focus:border-fuchsia-600 outline-none"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7"
            />
          </svg>
        </div>
        <button
          onClick={handleClick}
          className="py-3 px-8 bg-violet-700 text-white font-semibold rounded-full hover:bg-fuchsia-600 transition-colors duration-300 w-full sm:w-auto"
        >
          Send
        </button>
      </div>
    </section>
  );
};

export default CTA;
