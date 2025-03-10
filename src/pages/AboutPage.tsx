
import { Link } from "react-router-dom";


const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
  
  <header className="bg-cover bg-center text-white p-16 text-center relative" style={{ backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/background/20210421/pngtree-world-bicycle-day-cycling-rider-background-image_639195.jpg")' }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <h1 className="text-4xl sm:text-5xl font-extrabold z-10">About Our Bicycle Store</h1>
    <p className="mt-4 text-lg sm:text-xl z-10">Your one-stop shop for all things bicycles</p>
  </header>

  <main className="max-w-7xl mx-auto p-6">
    <section className="bg-white shadow-lg rounded-lg p-8 mb-6 border-l-4 border-green-600">
      <h2 className="text-2xl sm:text-3xl font-semibold text-green-800">Our Mission</h2>
      <p className="mt-4 text-gray-700 leading-relaxed">
        At our Bicycle Store, we are dedicated to providing high-quality
        bicycles and accessories that promote healthy living and environmental
        sustainability. Whether you're a professional cyclist or a weekend
        rider, we have the perfect bike for you.
      </p>
    </section>

    <section className="bg-white shadow-lg rounded-lg p-8 mb-6 border-2 border-green-600">
      <h2 className="text-2xl sm:text-3xl font-semibold text-green-800">Our Story</h2>
      <p className="mt-4 text-gray-700 leading-relaxed">
        Founded in 2025, our bicycle store started as a small local shop with
        a passion for cycling. Over the years, we have grown into a trusted
        brand known for offering a wide selection of bikes, expert repair
        services, and cycling accessories. We aim to inspire more people to
        embrace cycling as a fun and eco-friendly activity.
      </p>
    </section>


    <section className="text-center border-green-600">
      <h6 className="text-xl sm:text-2xl font-semibold text-green-800"><button className="bg-green-600 text-white p-2 rounded-lg"><Link to="/bicycles">Our Bicycles</Link></button></h6>
      <p className="mt-4 text-gray-700">
        Visit our store or browse online to find the best Bicycles
      </p>
    </section>
  </main>
</div>

  );
};

export default AboutPage;
