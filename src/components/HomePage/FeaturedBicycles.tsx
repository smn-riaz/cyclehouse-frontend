import BicycleCard from "./BicycleCard"


const FeaturedBicycles = () => {
 
  const bicycles = [
    {
    _id:"2343",
    image:"https://www.bicyclebd.com/images/products/Kaimarte-21-Speed-Carbon-Stee.JPG",
    name:"Roadster 5000",
    type:"SpeedX",
    description:"A premium road bike designed for speed and performance.",
    price:500
  },
    {
    _id:"2343",
    image:"https://www.bicyclebd.com/images/products/Kaimarte-21-Speed-Carbon-Stee.JPG",
    name:"Roadster 5000",
    type:"SpeedX",
    description:"A premium road bike designed for speed and performance.",
    price:500
  },
    {
    _id:"2343",
    image:"https://www.bicyclebd.com/images/products/Kaimarte-21-Speed-Carbon-Stee.JPG",
    name:"Roadster 5000",
    type:"SpeedX",
    description:"A premium road bike designed for speed and performance.",
    price:500
  },
    {
    _id:"2343",
    image:"https://www.bicyclebd.com/images/products/Kaimarte-21-Speed-Carbon-Stee.JPG",
    name:"Roadster 5000",
    type:"SpeedX",
    description:"A premium road bike designed for speed and performance.",
    price:500
  },
    {
    _id:"2343",
    image:"https://www.bicyclebd.com/images/products/Kaimarte-21-Speed-Carbon-Stee.JPG",
    name:"Roadster 5000",
    type:"SpeedX",
    description:"A premium road bike designed for speed and performance.",
    price:500
  },
    {
    _id:"2343",
    image:"https://www.bicyclebd.com/images/products/Kaimarte-21-Speed-Carbon-Stee.JPG",
    name:"Roadster 5000",
    type:"SpeedX",
    description:"A premium road bike designed for speed and performance.",
    price:500
  },
]
  return (
    <div>
       <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bicycles.map((bicycle) => (
         <BicycleCard image={bicycle.image} name={bicycle.name} _id={bicycle._id} price={bicycle.price} description={bicycle.description} type={bicycle.type} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default FeaturedBicycles