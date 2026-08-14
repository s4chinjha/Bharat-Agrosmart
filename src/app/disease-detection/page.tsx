import Image from "next/image";

export default function DiseaseDetection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 text-center">Crop Disease Detection</h1>
        <p className="text-base md:text-lg text-gray-600 mb-10 text-center">
          Upload a photo of your crop leaf to identify diseases and get instant treatment recommendations.
        </p>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="border-2 border-dashed border-green-300 rounded-xl p-8 text-center bg-green-50 hover:bg-green-100 transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Upload Image</h3>
              <p className="text-sm text-gray-500">Click to browse or drag and drop your image here</p>
              <input type="file" className="hidden" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">How it works</h3>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <p className="text-gray-600">Take a clear photo of the affected leaf or plant part.</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <p className="text-gray-600">Upload the image to our AI-powered system.</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <p className="text-gray-600">Get instant diagnosis and expert treatment advice.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Common Diseases Detected</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Disease Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 relative">
                <Image 
                  src="https://t3.ftcdn.net/jpg/02/27/11/84/360_F_227118499_Ll80OghWf8YB5FcIR9KA9cYrq2KOUvff.jpg" 
                  alt="Leaf Blight" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg mb-1 text-gray-900">Leaf Blight</h4>
                <p className="text-sm text-gray-500">Common in corn and tomatoes.</p>
              </div>
            </div>
             {/* Disease Card 2 */}
             <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop" 
                  alt="Rust" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg mb-1 text-gray-900">Rust</h4>
                <p className="text-sm text-gray-500">Affects wheat, beans, and other crops.</p>
              </div>
            </div>
             {/* Disease Card 3 */}
             <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 relative">
                <Image 
                  src="https://cdn.shopify.com/s/files/1/0573/3993/6868/files/powdery-mildew-in-squash.jpg?v=1714592490" 
                  alt="Powdery Mildew" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg mb-1 text-gray-900">Powdery Mildew</h4>
                <p className="text-sm text-gray-500">White powdery spots on leaves and stems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
