"use client";

import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { testimonials } from "@/constants/testimonials";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const variants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95,
  }),
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  }),
};

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const testimonial = testimonials[index];

  return (
 <section className="bg-gradient-to-b py-4 min-h-[500px] xl:max-w-[1300px] xl:mx-auto flex items-center">
  <div className="w-full max-w-2xl mx-auto text-center">
    <div className="relative">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full flex justify-center"
        >
          <Card className=" lg:min-h-[250px] rounded-xl shadow-md border p-2 sm:p-6 bg-white">
            <CardContent className="flex flex-col items-center gap-2 text-center">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-2 border-green-100 object-cover"
              />
              <p className="text-gray-600 italic text-sm sm:text-base leading-snug">
                “{testimonial.message}”
              </p>
              <div className="mt-1">
                <p className="font-medium text-gray-800 text-base">{testimonial.name}</p>
                <p className="text-yellow-500 text-sm">
                  {"⭐".repeat(testimonial.rating)}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="mt-5 flex justify-center space-x-3">
        <Button
          variant="outline"
          onClick={prevTestimonial}
          className="rounded-full p-2 hover:bg-black hover:text-white transition"
        >
          <GrPrevious />
        </Button>
        <Button
          variant="outline"
          onClick={nextTestimonial}
          className="rounded-full p-2 hover:bg-black hover:text-white transition"
        >
          <GrNext />
        </Button>
      </div>
    </div>
  </div>
</section>


  );
}
