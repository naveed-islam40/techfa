import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0B363C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-12">
        {/* top  */}
        <div className="flex justify-between flex-col sm:flex-row gap-5 items-start mb-12">
          <div className="flex items-center">
            <img src="/img/footer_logo.png" className="w-[200px]" />
          </div>
          <nav className="flex space-x-8">
            <Link to="#" className="text-white transition-colors">
              Home
            </Link>
            <Link to="#" className="text-white transition-colors">
              Services
            </Link>
            <Link to="#" className="text-white transition-colors">
              About us
            </Link>
          </nav>
        </div>

        {/* Divider line */}
        <div className="border-t border-gray-600 mb-12"></div>

        {/* Footer links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Column */}
          <div>
            <h3 className="text-white mb-4 text-2xl font-semibold">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  Lorem Ipsum
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  Lorem
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  Dolor Sit Amet
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  Dolor Lorem
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  Ipsum Dolor
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  Lorem
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-white mb-4 text-2xl font-semibold">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  Documents
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h3 className="text-white mb-4 text-2xl font-semibold">
              Community
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  Community Central
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  My Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  Customers
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
