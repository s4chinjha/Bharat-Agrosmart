export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bharat Agrosmart</h3>
            <p className="text-gray-400">Empowering Indian farmers with Artificial Intelligence and data-driven insights.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/disease-detection" className="hover:text-white">Disease Detection</a></li>
              <li><a href="/market-prices" className="hover:text-white">Market Prices</a></li>
              <li><a href="/smart-advisory" className="hover:text-white">Smart Advisory</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Email: support@bharatagrosmart.in</p>
            <p className="text-gray-400">Phone: +91 123 456 7890</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Bharat Agrosmart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
