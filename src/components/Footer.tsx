import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="https://i.imgur.com/r2HbYJj.png" alt="SøDera Solutions" className="h-20 w-auto sm:h-24 md:h-28" />
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Connecting organisations with trained resources and experts to drive operational efficiency and success.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/s%C3%B8dera/about/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>

              <a href="mailto:info@soedera.eu" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">

              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link to="/services/document-management" className="hover:text-white transition-colors">
                  Document Management
                </Link>
              </li>
              <li>
                <Link to="/services/rds" className="hover:text-white transition-colors">
                  Reference Designation Systems (RDS)
                </Link>
              </li>
              <li>
                <Link to="/services/bim-management" className="hover:text-white transition-colors">
                  Building Information Modelling (BIM) Management
                </Link>
              </li>
              <li>
                <Link to="/services/product-development" className="hover:text-white transition-colors">
                  Product Development
                </Link>
              </li>
              <li>
                <Link to="/services/asset-management" className="hover:text-white transition-colors">
                  Asset Management
                </Link>
              </li>
              <li>
                <Link to="/services/project-management" className="hover:text-white transition-colors">
                  Project Management
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-gray-400 mb-4 sm:mb-0">
            © {new Date().getFullYear()} SøDera Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
