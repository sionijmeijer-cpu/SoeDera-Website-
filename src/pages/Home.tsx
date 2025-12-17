import { ArrowRight, FileText, FolderKanban, Package, Database, Network, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-[128px]">
      {/* Hero Section */}
      <section 
        className="relative w-full py-32"
        style={{ 
          backgroundImage: "url('https://i.imgur.com/faDPaKC.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '500px'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              We help improve company's Information Management
            </h1>
            <p className="text-lg sm:text-xl mb-8 leading-relaxed text-gray-100">
              We provide customized solutions using our expertise in Reference Designation System, Document Management, Information Management and Product Development.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-700 text-white rounded text-lg font-medium hover:bg-slate-600 transition-all duration-300"
            >
              Learn More
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div className="order-2 md:order-1">
              <video
                src="https://i.imgur.com/orYq9OS.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg shadow-2xl w-full h-auto"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <p className="text-slate-600 font-semibold text-sm uppercase tracking-wide mb-3">
                WHO WE ARE
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                SøDera
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At SøDera, we connect organisations with trained resources and experts to drive operational efficiency and success. Our expertise spans Document Management, Reference Designation System, Building Information Modelling and Product Development.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Founded and officially registered in 2025, our goal is to build partnerships with leading companies worldwide to help them thrive in their organisations.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-600 transition-colors"
              >
                Learn More About Us
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-slate-600 font-semibold text-sm uppercase tracking-wide mb-3">
              OUR SERVICES
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive solutions designed to streamline your operations and maximize efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Document Management */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-200 hover:border-slate-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Document Management</h3>
              <p className="text-gray-600 mb-4">
                Efficient systems for organizing, storing, and retrieving critical business documentation.
              </p>
              <Link
                to="/services/document-management"
                className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-600 transition-colors"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* RDS Concepts */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-200 hover:border-slate-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reference Designation Systems</h3>
              <p className="text-gray-600 mb-4">
                Standardized labeling systems for clear identification of components and systems.
              </p>
              <Link
                to="/services/rds"
                className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-600 transition-colors"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* BIM Management */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-200 hover:border-slate-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">BIM Management</h3>
              <p className="text-gray-600 mb-4">
                Digital representation and management of facility characteristics for better coordination.
              </p>
              <Link
                to="/services/bim-management"
                className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-600 transition-colors"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Product Development */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-200 hover:border-slate-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Product Development</h3>
              <p className="text-gray-600 mb-4">
                Strategic guidance from concept to market launch for innovative solutions.
              </p>
              <Link
                to="/services/product-development"
                className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-600 transition-colors"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Asset Management */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-200 hover:border-slate-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Asset Management</h3>
              <p className="text-gray-600 mb-4">
                Optimize asset performance, reduce costs, and extend lifecycle through strategic management.
              </p>
              <Link
                to="/services/asset-management"
                className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-600 transition-colors"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Project Management */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-200 hover:border-slate-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <FolderKanban className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Project Management</h3>
              <p className="text-gray-600 mb-4">
                End-to-end project delivery with proven methodologies ensuring on-time, on-budget results.
              </p>
              <Link
                to="/services/project-management"
                className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-600 transition-colors"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-700 text-white rounded text-lg font-medium hover:bg-slate-600 transition-all duration-300"
            >
              View All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Let's discuss how we can help optimize your business processes
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-800 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-all duration-300 shadow-xl"
          >
            Get in Touch
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
