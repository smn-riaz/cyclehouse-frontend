// import React, { useState, useEffect } from 'react';

// interface Bike {
//   id: number;
//   name: string;
//   brand: string;
//   category: string;
//   price: number;
//   availability: boolean;
// }

// const BikeSearch = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedBrand, setSelectedBrand] = useState<string>('');
//   const [selectedCategory, setSelectedCategory] = useState<string>('');
//   const [selectedModel, setSelectedModel] = useState<string>('');
//   const [priceMin, setPriceMin] = useState<number>(0);
//   const [priceMax, setPriceMax] = useState<number>(1000);
//   const [availability, setAvailability] = useState<string>('all');
//   const [results, setResults] = useState<Bike[]>([]);
//   const [loading, setLoading] = useState(false);

//   const brands = ['Trek', 'Specialized', 'Giant', 'Cannondale'];
//   const categories = ['Mountain', 'Road', 'Hybrid', 'Electric'];
//   const models = ['Explorer', 'Racer', 'Comfort', 'Zoom'];
  
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);

//       const allBikes: Bike[] = [
//         { id: 1, name: 'Mountain Explorer', brand: 'Trek', category: 'Mountain', price: 500, availability: true },
//         { id: 2, name: 'Road Racer', brand: 'Specialized', category: 'Road', price: 1000, availability: true },
//         { id: 3, name: 'Hybrid Comfort', brand: 'Giant', category: 'Hybrid', price: 750, availability: false },
//         { id: 4, name: 'Electric Zoom', brand: 'Cannondale', category: 'Electric', price: 1500, availability: true },
//       ];

     

//       setResults(filteredBikes);
//       setLoading(false);
//     };

//     fetchData();
//   }, [searchQuery, selectedBrand, selectedCategory, selectedModel, priceMin, priceMax, availability]);

//   return (
//     <div className="max-w-screen-lg mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center mb-8">Bike Search</h1>

//       {/* Search Bar */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Search by bike name..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Filters */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//         {/* Brand Filter */}
//         <div>
//           <label className="block text-lg font-medium mb-2">Brand</label>
//           <select
//             onChange={(e) => setSelectedBrand(e.target.value)}
//             value={selectedBrand}
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Select Brand</option>
//             {brands.map((brand) => (
//               <option key={brand} value={brand}>
//                 {brand}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Category Filter */}
//         <div>
//           <label className="block text-lg font-medium mb-2">Category</label>
//           <select
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             value={selectedCategory}
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Select Category</option>
//             {categories.map((category) => (
//               <option key={category} value={category}>
//                 {category}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Model Filter */}
//         <div>
//           <label className="block text-lg font-medium mb-2">Model</label>
//           <select
//             onChange={(e) => setSelectedModel(e.target.value)}
//             value={selectedModel}
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Select Model</option>
//             {models.map((model) => (
//               <option key={model} value={model}>
//                 {model}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Price Range Filter */}
//         <div className="flex gap-6">
//           <div className="w-1/2">
//             <label className="block text-lg font-medium mb-2">Min Price</label>
//             <input
//               type="number"
//               placeholder="Min"
//               value={priceMin}
//               onChange={(e) => setPriceMin(Number(e.target.value))}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="w-1/2">
//             <label className="block text-lg font-medium mb-2">Max Price</label>
//             <input
//               type="number"
//               placeholder="Max"
//               value={priceMax}
//               onChange={(e) => setPriceMax(Number(e.target.value))}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>

//         {/* Availability Filter */}
//         <div>
//           <label className="block text-lg font-medium mb-2">Availability</label>
//           <select
//             onChange={(e) => setAvailability(e.target.value)}
//             value={availability}
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="all">All</option>
//             <option value="inStock">In Stock</option>
//             <option value="outOfStock">Out of Stock</option>
//           </select>
//         </div>
//       </div>

//       {/* Results */}
//       <div className="space-y-6">
//         {loading ? (
//           <p className="text-center text-xl">Loading...</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {results.length ? (
//               results.map((bike) => (
//                 <div key={bike.id} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
//                   <h3 className="text-xl font-semibold">{bike.name}</h3>
//                   <p className="text-lg text-gray-600">{bike.brand}</p>
//                   <p className="text-lg text-gray-600">{bike.category}</p>
//                   <p className="text-lg font-bold">{`$${bike.price}`}</p>
//                   <p className={`text-lg ${bike.availability ? 'text-green-500' : 'text-red-500'}`}>
//                     {bike.availability ? 'In Stock' : 'Out of Stock'}
//                   </p>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-xl">No results found</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BikeSearch;
