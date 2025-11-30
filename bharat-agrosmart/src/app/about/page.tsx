import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">About Bharat Agrosmart</h1>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="h-64 relative">
             <Image 
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop" 
              alt="Indian Farmers" 
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Bharat Agrosmart is dedicated to transforming the lives of Indian farmers by leveraging the power of Artificial Intelligence and modern technology. We believe that every farmer deserves access to the best tools and information to maximize their yield and income.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our platform bridges the gap between traditional farming practices and cutting-edge technology, providing solutions for disease detection, market analysis, and personalized farming advice.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 p-8 rounded-xl border border-green-100">
            <h3 className="text-xl font-bold text-green-800 mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To create a sustainable and prosperous agricultural ecosystem in India where technology empowers farmers to feed the nation and the world efficiently.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-xl border border-green-100">
            <h3 className="text-xl font-bold text-green-800 mb-3">Our Values</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Innovation:</strong> Constantly improving our AI models.</li>
              <li><strong>Accessibility:</strong> Making technology easy for everyone.</li>
              <li><strong>Integrity:</strong> Providing accurate and unbiased data.</li>
              <li><strong>Community:</strong> Growing together with the farmers.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
