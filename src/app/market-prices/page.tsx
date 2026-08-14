export default function MarketPrices() {
  const marketData = [
    { crop: "Wheat", mandi: "Azadpur, Delhi", price: "₹2,125 / Quintal", change: "+1.5%" },
    { crop: "Rice (Basmati)", mandi: "Karnal, Haryana", price: "₹3,850 / Quintal", change: "-0.8%" },
    { crop: "Cotton", mandi: "Rajkot, Gujarat", price: "₹6,200 / Quintal", change: "+2.1%" },
    { crop: "Mustard", mandi: "Jaipur, Rajasthan", price: "₹5,400 / Quintal", change: "+0.5%" },
    { crop: "Soybean", mandi: "Indore, MP", price: "₹4,950 / Quintal", change: "-1.2%" },
    { crop: "Potato", mandi: "Agra, UP", price: "₹1,100 / Quintal", change: "+3.0%" },
    { crop: "Onion", mandi: "Nashik, Maharashtra", price: "₹1,800 / Quintal", change: "-2.5%" },
    { crop: "Tomato", mandi: "Kolar, Karnataka", price: "₹2,200 / Quintal", change: "+5.0%" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 text-center">Real-time Market Prices</h1>
        <p className="text-base md:text-lg text-gray-600 mb-10 text-center">
          Stay updated with the latest Mandi prices across India to make informed selling decisions.
        </p>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8 flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Search for crop..." 
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
          />
          <select className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900">
            <option>All States</option>
            <option>Punjab</option>
            <option>Haryana</option>
            <option>Uttar Pradesh</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
          </select>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Search
          </button>
        </div>

        {/* Prices Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="p-4 font-semibold">Crop</th>
                  <th className="p-4 font-semibold">Mandi / Location</th>
                  <th className="p-4 font-semibold">Current Price</th>
                  <th className="p-4 font-semibold">Change (24h)</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-green-50 transition-colors">
                    <td className="p-4 font-medium text-gray-800">{item.crop}</td>
                    <td className="p-4 text-gray-600">{item.mandi}</td>
                    <td className="p-4 font-bold text-gray-800">{item.price}</td>
                    <td className={`p-4 font-medium ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                      {item.change}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          * Prices are updated every 4 hours. Last update: Today, 10:00 AM
        </div>
      </div>
    </div>
  );
}
