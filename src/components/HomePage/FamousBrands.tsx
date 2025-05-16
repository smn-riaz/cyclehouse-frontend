import trek from "../../assets/trek.png";
import giant from "../../assets/giant.png";
import specialized from "../../assets/specialized.png";
import cannodale from "../../assets/cannondale.png";
import bianchi from "../../assets/bianchi.svg";
import scott from "../../assets/scott.svg";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
import { Card, CardContent } from "@/components/ui/card";

const FamousBrands = () => {
  const brands = [trek, giant, specialized, cannodale, bianchi, scott];
  return (
    <section className="lg:py-16 py-6 xl:max-w-[1300px] xl:mx-auto">
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
        {brands.map((logo, i) => (
          <motion.div
            key={logo}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Card className="p-1 shadow-md hover:shadow-xl transition rounded-xl w-36 sm:w-40">
              <CardContent className="flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Brand ${i}`}
                  className="w-32 h-20 sm:w-40 sm:h-30 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FamousBrands;
