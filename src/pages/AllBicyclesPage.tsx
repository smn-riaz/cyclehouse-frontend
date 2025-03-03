import FeaturedBicycles from "@/components/HomePage/FeaturedBicycles";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import { useEffect, useState } from "react";

const AllBicyclesPage = () => {
  const [selectedBrand, setSelectedBrand] = useState({
    name: "brand",
    value: "",
  });
  const [selectedAvailability, setSelectedAvailability] = useState({
    name: "inStock",
    value: true,
  });
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState({
    name: "searchTerm",
    value: "",
  });
  const [selectedType, setSelectedType] = useState({ name: "type", value: "" });
  const [filterArray, setFilterArray] = useState<
    { name: string; value: string | boolean }[]
  >([{ name: "", value: "" }]);

 
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery({
        name: "searchTerm",
        value: searchInput,
      })
    }, 500);
  
    return () => clearTimeout(handler); 
  }, [searchInput]);


  
  useEffect(() => {
    let newFilters:{ name: string; value: string | boolean }[] = [];

    if (selectedBrand.value) {
      newFilters = [...newFilters,selectedBrand]
    } 
     else if (searchQuery.value) {
      newFilters = [...newFilters,searchQuery]
    }
    else if (selectedType.value) {
      newFilters = [...newFilters,selectedType]
    } 
    else if (selectedAvailability.value !== undefined) {
      newFilters = [...newFilters,selectedAvailability]
    }

    setFilterArray(newFilters);

  }, [selectedBrand, selectedType, selectedAvailability, searchQuery]);

 console.log(filterArray);

  const { data } = useGetAllProductsQuery(filterArray);

  const bicycles = data?.data;

  return (
    <div className="mt-20">
      <div className="flex justify-between px-6">
        <div className="flex space-x-4">
          <div>
            <label className="text-lg block font-medium mb-1">Brand</label>
            <select
              onChange={(e) =>
                setSelectedBrand({ name: "brand", value: e.target.value })
              }
              value={selectedBrand.value}
              className=" border border-gray-300 rounded-md focus:outline-none focus:ring-green-500"
            >
              <option value="">Select Brand</option>
              {[
                "UrbanRide",
                "SpeedWay",
                "SpeedCycle",
                "EcoRide",
                "GreenWheels",
              ].map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-lg block font-medium mb-1">Type</label>
            <select
              onChange={(e) =>
                setSelectedType({ name: "type", value: e.target.value })
              }
              value={selectedType.value}
              className=" border border-gray-300 rounded-md focus:outline-none focus:ring-green-500"
            >
              <option value="">Select Type</option>
              {["Electric", "Mountain", "Road", "Hybrid"].map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-lg block font-medium mb-1">
              Availability
            </label>
            <select
              onChange={(e) => {
                if (e.target.value === "In stock") {
                  setSelectedAvailability({ name: "inStock", value: true });
                } else {
                  setSelectedAvailability({ name: "inStock", value: false });
                }
              }}
              value={selectedAvailability.value ? "In stock" : "Stock out"}
              className="border border-gray-300 rounded-md focus:outline-none focus:ring-green-500"
            >
              <select value="">Select Availability</select>
              {["In stock", "Stock out"].map((available) => (
                <option key={available} value={available}>
                  {available}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <div className="mb-6 flex space-x-1 ">
            <input
              type="text"
              placeholder="Search by bike name..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
          </div>
        </div>
      </div>
      <h2 className="text-center text-green-600 text-3xl my-2 font-bold">
        Our All Collections
      </h2>
      <FeaturedBicycles bicycles={bicycles} />
    </div>
  );
};

export default AllBicyclesPage;
