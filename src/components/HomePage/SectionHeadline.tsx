import { motion } from 'framer-motion';

const SectionHeadline = ({ title }: { title: string }) => {
  return (
    <section className="bg-gradient-to-r from-green-400 via-green-600 to-green-400 text-white text-center p-2 px-4">
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl  font-serif font-bold leading-tight bg-clip-text transition-transform duration-700 ease-in-out transform hover:scale-105"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h2>
    </section>
  );
};

export default SectionHeadline;
