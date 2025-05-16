import accessories from "../../assets/accessories.jpg";
import component from "../../assets/components.jpg";
import wheel from "../../assets/wheel.jpg";
import helmet from "../../assets/helmet.jpg";

const data = [
  {
    title: "Components",
    description:
      "Ultra-premium components, engineered by Cannondale – the ultimate upgrade.",
    image: component,
    alt: "Components",
  },
  {
    title: "HollowGram Wheels",
    description: "Premium wheel performance that makes you faster everywhere.",
    image: wheel,
    alt: "HollowGram Wheels",
  },
  {
    title: "Accessories",
    description: "Outfit your bike with these essential accessories.",
    image: accessories,
    alt: "Accessories",
  },
  {
    title: "Helmets",
    description: "Ride safe. Ride stylish. Cannondale helmets.",
    image: helmet,
    alt: "Helmets",
  },
];

const Accessories = () => {
  return (
    <div className="lg:py-16 bg-white px-6 py-6 xl:max-w-[1300px] xl:mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div key={index} className="group text-center border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-64 sm:h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transform transition duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mt-4 text-gray-800">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2 px-4">{item.description}</p>
            </div>
          ))}
        </div>
 
    </div>
  );
};

export default Accessories;
