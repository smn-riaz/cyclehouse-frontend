import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const MiddleBanner = () => {
  return (
   <section className="px-8 py-4 xl:max-w-[1300px] xl:mx-auto lg:space-x-10  flex flex-col-reverse lg:flex-row items-center justify-around lg:py-8 bg-white">
     
       {/* Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <img
          src="https://i.ibb.co.com/pBhPHc3b/top-Banner.png"
          alt="Bicycle Banner"
          className="w-full md:w-auto max-w-[500px] lg:max-w-xl xl:max-w-2xl object-contain"
        />
      </motion.div>
     
      {/* Text Section */}
      <motion.div
        className="md:w-1/2 text-center md:text-left space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 leading-tight">
          Cycle More, Drive Less. <br className="hidden sm:block" />
          <span className="text-green-500">Stay Healthy, Save the Earth!</span>
        </h1>
        <p className="text-green-800 text-base sm:text-lg">
          Discover top-quality bicycles designed for speed, comfort, and adventure.
          Whether you're into racing, mountain biking, or city commuting — we’ve got the perfect ride for you.
        </p>
        <Link to="/bicycles">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-4 px-6 py-3 rounded-md text-md bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 transition-all"
          >
            DISCOVER
          </motion.button>
        </Link>
      </motion.div>

    
    </section>
  );
};

export default MiddleBanner;