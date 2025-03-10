import { Link } from "react-router-dom";


const TopBanner = () => {
  return (
    <section className="flex p-4 flex-col-reverse md:flex-row items-center justify-center  sm:px-10  sm:mx-16">
      <div className="md:w-full text-center md:text-left flex-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-600"> Cycle More, drive Less  <br />  Stay Healthy, save the Earth! </h1>
        <p className="mt-4 text-green-800 text-sm sm:text-base">
          Discover top-quality bicycles designed for speed, comfort, and adventure. Whether you're into racing,
          mountain biking, or city commuting, we have the perfect ride for you.
        </p>
       <Link to="/bicycles">
       <button className="mt-6 px-6 py-2 border border-green-700 text-green-600 font-semibold hover:bg-green-600 hover:text-white transition">
          DISCOVER
        </button>
        </Link>
      </div>
      <div className="md:w-1/2 flex justify-center flex-1">
        <img
          src="/src/assets/topBanner.png"
          alt="Bicycle Banner"
          className=" w-full md:w-auto lg:max-w-xl xl:max-w-2xl object-cover"
        />
      </div>
    </section>
  );
};

export default TopBanner;