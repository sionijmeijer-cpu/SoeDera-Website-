import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-[128px]">
      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero-wind-turbines.png)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            We help improve company's Information Management
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            We provide customized solutions using our expertise in Reference Designation System Concepts, Document Management, Information Management and Product Development.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded text-lg font-medium hover:bg-blue-700 transition-all duration-300"
          >
            Learn More
            <ArrowRight size={20} />
          </Link>
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
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition-all duration-300"
              >
                Read More
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Areas of Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide customized consultancy and strategic solutions in
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Link 
              to="/services/document-management"
              className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Document Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Streamline your document workflows with our advanced management solutions, ensuring efficiency and compliance.
              </p>
            </Link>

            {/* Service 2 */}
            <Link 
              to="/services/rds-concepts"
              className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reference Designation System Concepts</h3>
              <p className="text-gray-600 leading-relaxed">
                Implement Reference Designation Systems for better organization and standardization across your projects.
              </p>
            </Link>

            {/* Service 3 */}
            <Link 
              to="/services/information-management"
              className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Information Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimize how your organization handles and leverages information for better decision-making.
              </p>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded text-lg font-medium hover:bg-blue-700 transition-all duration-300"
            >
              View All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
              Who We Work With
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Trusted by organizations worldwide to deliver excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { text: "Organizations and businesses of all sizes", icon: "🏢", delay: "0ms" },
              { text: "Decision-makers (CEOs, CTOs, CIOs, COOs, Project Managers)", icon: "👔", delay: "100ms" },
              { text: "Professionals in document & asset management", icon: "📂", delay: "200ms" },
              { text: "Startups and scaling businesses", icon: "🚀", delay: "300ms" },
              { text: "Global enterprises & industry leaders", icon: "🌍", delay: "400ms" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/20 hover:border-blue-300 hover:bg-white/20 animate-fade-in"
                style={{ animationDelay: item.delay }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-2xl transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-bold text-xs">✓</span>
                    </div>
                  </div>
                  <span className="text-blue-50 text-lg font-medium leading-relaxed">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <Link 
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-blue-600 hover:to-purple-700"
            >
              <span>Partner With Us Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
