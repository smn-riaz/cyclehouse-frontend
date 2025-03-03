import  { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  message: string;
  rating: number;
  photo: string;
}

const testimonials: Testimonial[] = [
  { id: 1, name: "Alice Johnson", message: "This product changed my life! Highly recommended.", rating: 5, photo: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 2, name: "Mark Spencer", message: "Great service and support. Will buy again!", rating: 4, photo: "https://randomuser.me/api/portraits/men/2.jpg" },
  { id: 3, name: "Sophia Lee", message: "An absolute game-changer in the industry.", rating: 5, photo: "https://randomuser.me/api/portraits/women/3.jpg" },
  { id: 4, name: "Daniel Brown", message: "Quality exceeded my expectations.", rating: 5, photo: "https://randomuser.me/api/portraits/men/4.jpg" },
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
          className="p-2 bg-gray-300 rounded"
        >
          Prev
        </button>
        <button
          onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
          className="p-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
