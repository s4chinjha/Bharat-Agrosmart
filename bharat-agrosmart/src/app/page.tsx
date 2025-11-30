import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-green-900 text-white py-32">
        <div className="absolute inset-0 overflow-hidden">
           <Image 
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop" 
            alt="Indian Agriculture Field" 
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Indian Agriculture <br/> with <span className="text-green-400">Artificial Intelligence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Revolutionizing farming with real-time disease detection, market insights, and personalized advisory services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/disease-detection" className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Detect Crop Disease
            </Link>
            <Link href="/market-prices" className="bg-white text-green-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Check Market Prices
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-green-700 font-bold tracking-wide uppercase text-sm mb-2">Our Solutions</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Everything you need to farm smarter</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <Link href="/disease-detection" className="group">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-green-200 h-full flex flex-col">
                <div className="h-48 relative overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1498408040764-ab6eb772a145" 
                    alt="Crop Disease Detection" 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex-grow">
                  <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                    <svg className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-green-700 transition-colors">Disease Detection</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Upload photos of your crops to instantly identify diseases using our advanced AI models. Get immediate treatment recommendations to save your harvest.
                  </p>
                </div>
                <div className="px-8 pb-8 pt-0">
                  <span className="text-green-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                    Try it now <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Feature 2 */}
            <Link href="/market-prices" className="group">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-green-200 h-full flex flex-col">
                <div className="h-48 relative overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop" 
                    alt="Market Price Insights" 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex-grow">
                  <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                    <svg className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-green-700 transition-colors">Market Insights</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Stay updated with real-time market prices (Mandi Bhav) for various crops across India. Make informed decisions on when and where to sell your produce.
                  </p>
                </div>
                <div className="px-8 pb-8 pt-0">
                  <span className="text-green-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                    Check prices <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Feature 3 */}
            <Link href="/smart-advisory" className="group">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-green-200 h-full flex flex-col">
                <div className="h-48 relative overflow-hidden">
                  <Image 
                    src="https://softwebsolutions.b-cdn.net/wp-content/uploads/2019/08/Plant-Disease-Detection.jpg" 
                    alt="Smart Advisory" 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex-grow">
                  <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                    <svg className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-green-700 transition-colors">Smart Advisory</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Receive personalized farming advice based on local weather conditions, soil type, and crop stage. Optimize your inputs for maximum yield.
                  </p>
                </div>
                <div className="px-8 pb-8 pt-0">
                  <span className="text-green-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                    Get advice <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div className="text-green-200">Farmers Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-green-200">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-200">Crops Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-green-200">Expert Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
