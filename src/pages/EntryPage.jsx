import React, { useEffect, useState } from "react";
import prestige_logo from "../assets/logos/prestige-group-logo.png";
import security from "../assets/images/security.jpg";
import club_house from "../assets/images/club-house.jpg";
import pool from "../assets/images/pool.jpg";
import gym_spa from "../assets/images/gym-spa.png";
import world_class from "../assets/images/world-class.webp";
import prime_location from "../assets/images/prime-location.jpeg";
import high_end_spec from "../assets/images/high-end.jpg";
import { images } from "../utils/data";
import emailjs from "emailjs-com";

const EntryPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone } = formData;

    if (!name || !email || !phone) {
      setStatus("Please fill all fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_88rw20q",
        "template_fv21irg",
        e.target, 
        "XP0GNNdex9hHYTxZ9" 
      )
      .then(
        (response) => {
          setStatus("Your message has been sent!");
          setFormData({
            name: "",
            email: "",
            phone: "",
          });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };
  
  const observeElements = () => {
    const elements = document.querySelectorAll(".highlight-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("highlight");
          } else {
            entry.target.classList.remove("highlight");
          }
        });
      },
      { threshold: 0.5 }
    );

    elements.forEach((el) => observer.observe(el));
  };


  useEffect(() => {
    observeElements();
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); 
      }, 500); 
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-[#C9A76A] overflow-y-auto scrollbar-transparent">
      <div className="w-full bg-[#161617] py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-white text-lg font-semibold">
          🔥 Limited-Time Offer! Pre-Launch Discounts Available – Call Now! ☎️
          +91 98765 43210 🔥
        </div>
      </div>

      <header
        className={`h-[90vh] flex items-center justify-center text-center p-5 bg-cover bg-center relative transition-opacity duration-800 ease-in-out ${
          fade ? "opacity-100" : "opacity-80"
        }`}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <img
          src={prestige_logo}
          alt="Project Logo"
          className="absolute top-5 right-5 w-20 sm:w-24 md:w-32"
        />
        <div className="inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-20 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Upcoming Real Estate Project in Bangalore
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white">
            Luxury living in the heart of the city
          </p>
          <button className="mt-6 px-6 py-3 bg-[#5C1E28] text-[#C9A76A] rounded-lg text-lg hover:bg-[#3d1420] transition duration-300 cursor-pointer">
            <a
              href="/brochure.pdf"
              download
              className="w-full h-full text-white"
            >
              Get Brochure
            </a>
          </button>
        </div>
      </header>

      <section className="py-12 px-6 bg-[#2C2C2C]">
        <h2 className="text-3xl font-semibold text-center text-white">
          Project Highlights
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="highlight-card p-6 bg-[#161617] rounded-lg shadow min-h-[250px] flex flex-col items-center justify-center text-center text-lg font-semibold cursor-pointer">
            <img
              src={high_end_spec}
              alt="High-end Specifications"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            High-end Specifications
          </div>
          <div className="highlight-card p-6 bg-[#161617] rounded-lg shadow min-h-[250px] flex flex-col items-center justify-center text-center text-lg font-semibold cursor-pointer">
            <img
              src={world_class}
              alt="World-class Amenities"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            World-class Amenities
          </div>
          <div className="highlight-card p-6 bg-[#161617] rounded-lg shadow min-h-[250px] flex flex-col items-center justify-center text-center text-lg font-semibold cursor-pointer">
            <img
              src={prime_location}
              alt="Prime Location"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            Prime Location
          </div>
        </div>
      </section>

      <section className="py-4 bg-[#2C2C2C] px-6">
        <h2 className="text-3xl font-semibold text-center text-white">
          Amenities
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="highlight-card p-6 bg-[#161617] rounded-lg shadow min-h-[200px] flex flex-col items-center justify-center text-center text-lg font-semibold cursor-pointer">
            <img
              src={pool}
              alt="Swimming Pool"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            Swimming Pool
          </div>
          <div className="highlight-card p-6 bg-[#161617] rounded-lg shadow min-h-[200px] flex flex-col items-center justify-center text-center text-lg font-semibold cursor-pointer">
            <img
              src={gym_spa}
              alt="Gym & Spa"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            Gym & Spa
          </div>
          <div className="highlight-card p-6 bg-[#161617] rounded-lg shadow min-h-[200px] flex flex-col items-center justify-center text-center text-lg font-semibold cursor-pointer">
            <img
              src={club_house}
              alt="Clubhouse"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            Clubhouse
          </div>
          <div className="highlight-card p-6 bg-[#161617] rounded-lg shadow min-h-[200px] flex flex-col items-center justify-center text-center text-lg font-semibold cursor-pointer">
            <img
              src={security}
              alt="24/7 Security"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            24/7 Security
          </div>
        </div>
      </section>

      <div className="py-12 px-6 bg-[#2C2C2C] flex flex-col md:flex-row gap-10">
        <section className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-center text-white">
            Project Location
          </h2>
          <div className="mt-6 flex justify-center">
            <iframe
              className="w-full h-64 md:h-80 rounded-lg shadow-lg"
              src="https://maps.google.com/maps?q=12.971598,77.594566&z=16&output=embed"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>

        <section className=" bg-[#2C2C2C] px-6">
        <h2 className="text-3xl font-semibold text-center text-white">
          Get in Touch
        </h2>
        <form className="mt-6 bg-[#0B0B0B] p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded mb-4"
            value={formData.name} // Use formData.name here
            onChange={handleChange} // Use handleChange
            name="name" // Ensure this matches the state key
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded mb-4"
            value={formData.email} // Use formData.email here
            onChange={handleChange} // Use handleChange
            name="email" // Ensure this matches the state key
            required
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full p-3 border rounded mb-4"
            value={formData.phone} // Use formData.phone here
            onChange={handleChange} // Use handleChange
            name="phone" // Ensure this matches the state key
            required
          />
          <button
            type="submit"
            className="w-full p-3 mt-[26px] bg-[#5C1E28] text-white rounded hover:bg-[#5c1e2891] cursor-pointer transition"
          >
            Submit
          </button>
        </form>
        {status && (
          <div className="mt-4 text-center text-white bg-green-500 p-3 rounded">
            {status}
          </div>
        )}
      </section>
      </div>

      <footer className="py-6 bg-black text-white text-center">
        <p>© 2025 Prestige Real Estate | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default EntryPage;
