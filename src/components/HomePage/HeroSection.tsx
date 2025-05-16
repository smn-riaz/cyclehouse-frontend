import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import bg from '../../assets/bggg.jpg'
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section
    className="relative z-0 bg-cover w-full bg-center bg-no-repeat min-h-[80vh] lg:min-h-[100vh] flex items-center justify-center text-white px-4 sm:px-8 lg:px-12"
      style={{
        backgroundImage: `url(${bg})`, // Corrected syntax
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-50 text-center max-w-3xl w-full"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
          Ride into the Future
        </h1>
        <p className="text-lg sm:text-xl mb-6 text-gray-200">
          Whether for recreation or transportation, we’ve built the perfect e-bike for your city journey.
        </p><Link to="/bicycles">
        <Button
          className=" text-lg sm:text-xl p-6 bg-green-500 hover:bg-black hover:text-white transition-all duration-300 rounded-md"
        >
          BUY CYCLE
        </Button></Link>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
