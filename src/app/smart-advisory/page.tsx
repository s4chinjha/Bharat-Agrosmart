export default function SmartAdvisory() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 text-center">Smart Farming Advisory</h1>
        <p className="text-base md:text-lg text-gray-600 mb-10 text-center">
          Get personalized recommendations for your farm based on soil health, weather forecasts, and crop stage.
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Get Your Advisory</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Crop Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Select Crop</option>
                  <option>Wheat</option>
                  <option>Rice</option>
                  <option>Corn</option>
                  <option>Cotton</option>
                  <option>Sugarcane</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Crop Stage</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Select Stage</option>
                  <option>Sowing</option>
                  <option>Vegetative</option>
                  <option>Flowering</option>
                  <option>Fruiting</option>
                  <option>Harvesting</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Soil Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Select Soil</option>
                  <option>Alluvial</option>
                  <option>Black Soil</option>
                  <option>Red Soil</option>
                  <option>Laterite</option>
                  <option>Sandy</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Irrigation Method</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Select Method</option>
                  <option>Rainfed</option>
                  <option>Canal</option>
                  <option>Tube Well</option>
                  <option>Drip Irrigation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Location (Pincode)</label>
              <input 
                type="text" 
                placeholder="Enter 6-digit Pincode" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button type="button" className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition shadow-md">
              Generate Advisory
            </button>
          </form>
        </div>

        <div className="mt-12 bg-green-50 p-6 rounded-xl border border-green-200">
          <h3 className="text-xl font-bold text-green-800 mb-3">Why use Smart Advisory?</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Reduce input costs by using fertilizers efficiently.</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Prevent pest attacks with timely warnings.</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Optimize irrigation based on weather forecasts.</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Increase overall crop yield and quality.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
