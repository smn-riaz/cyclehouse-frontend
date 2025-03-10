import { testimonials } from "@/constants/testimonials";
import  { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";


const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="px-6 sm:px-10 py-12 sm:py-16  sm:mx-16max-w-lg mx-auto bg-white shadow-lg rounded-lg text-center">
      <img
        src={testimonials[currentTestimonial].photo}
        alt={testimonials[currentTestimonial].name}
        className="w-20 h-20 mx-auto rounded-full mb-3"
      />
      <p className="text-lg text-gray-600">"{testimonials[currentTestimonial].message}"</p>
      <p className="mt-2 font-semibold">- {testimonials[currentTestimonial].name}</p>
      <p className="text-yellow-500">{"⭐".repeat(testimonials[currentTestimonial].rating)}</p>
      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
          className="px-4 font-semibold text-white bg-green-600 rounded py-2"
        >
         <GrPrevious />
        </button>
        <button
          onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
          className=" px-4 font-semibold text-white bg-green-600 rounded py-2"
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
