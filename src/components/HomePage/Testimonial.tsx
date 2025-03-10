import  { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

interface Testimonial {
  id: number;
  name: string;
  message: string;
  rating: number;
  photo: string;
}

const testimonials: Testimonial[] = [
  { id: 1, name: "Abdur Rahim", message: "This product changed my life! Highly recommended.", rating: 5, photo: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww" },
  { id: 2, name: "A. Rob", message: "Great service and support. Will buy again!", rating: 4, photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww" },
  { id: 3, name: "A. Malek", message: "An absolute game-changer in the industry.", rating: 5, photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww" },
  { id: 4, name: "A. Rahman", message: "Quality exceeded my expectations.", rating: 5, photo: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" },
];



const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="px-6 sm:px-10 py-12 sm:py-16  sm:mx-16max-w-lg mx-auto bg-white shadow-lg rounded-lg text-center">
      <img
        src={testimonials[currentTestimonial].photo}
        alt={testimonials[currentTestimonial].name}
        className="w-20 h-20 mx-auto rounded-full mb-3"
      />
      <p className="text-lg italic">"{testimonials[currentTestimonial].message}"</p>
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
