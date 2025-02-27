import { Button } from "@/components/ui/button";
import React from "react";


const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section with Background Image */}
      <header className="bg-cover bg-center text-white p-16 text-center relative" style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-5xl font-extrabold z-10">About Our Bicycle Store</h1>
        <p className="mt-4 text-xl z-10">Your one-stop shop for all things bicycles</p>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* Mission Section with Shadow and Border Radius */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-6 border-l-4 border-green-600">
          <h2 className="text-3xl font-semibold text-green-800">Our Mission</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            At our Bicycle Store, we are dedicated to providing high-quality
            bicycles and accessories that promote healthy living and environmental
            sustainability. Whether you're a professional cyclist or a weekend
            rider, we have the perfect bike for you.
          </p>
        </section>

        {/* Our Story Section with Hover Effect */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-6 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-3xl font-semibold text-green-800">Our Story</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Founded in 2010, our bicycle store started as a small local shop with
            a passion for cycling. Over the years, we have grown into a trusted
            brand known for offering a wide selection of bikes, expert repair
            services, and cycling accessories. We aim to inspire more people to
            embrace cycling as a fun and eco-friendly activity.
          </p>
        </section>

        {/* Call to Action Section with Hovered Button */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-green-800">Join Us Today!</h2>
          <p className="mt-4 text-gray-700">
            Visit our store or browse online to find the best deals on bicycles
            and accessories. Let’s ride toward a healthier and greener future
            together.
          </p>
          <Button className="mt-4 bg-green-600 text-white hover:bg-green-700 py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all">
            Shop Now
          </Button>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
