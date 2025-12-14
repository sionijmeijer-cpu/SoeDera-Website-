import { ArrowRight, CheckCircle, Network, Zap, Award, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RDS() {
  return (
    <div className="pt-[128px]">
      <RDSContent />
    </div>
  );
}

function RDSContent() {
  const benefits = [
    'Enhanced system clarity and transparency',
    'Improved maintenance efficiency',
    'Reduced errors and miscommunication',
    'Better regulatory compliance',
    'Streamlined documentation processes',
    'Increased operational safety',
  ];

  const standards = [
    { name: 'ISO/IEC 81346 Series', description: 'Reference Designation System (RDS)' },
    { name: 'IEC 81355', description: 'Document Kinds and Reference Designation' },
    { name: 'IEC 61082-1', description: 'Preparation of documents used in electrotechnology - Part 1: Rules' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop')"}}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl bg-black/30 backdrop-blur-md rounded-lg p-8 border border-white/10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Reference Designation Systems (RDS)</h1>
            <p className="text-xl text-white/90">
              Implement standardized reference designation systems that provide clear, consistent identification of equipment and systems throughout your facility lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional RDS Implementation
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Our Reference Designation Systems (RDS) services help organizations establish standardized naming and identification conventions for equipment, systems, and installations.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We implement RDS according to international standards like IEC 81346, ensuring consistency across projects and facilities while improving communication and operational efficiency.
              </p>
              <p className="text-lg text-gray-700">
                From initial design through operations and maintenance, proper RDS implementation creates a foundation for effective asset management and information flow.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <Network className="w-16 h-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why RDS Matters</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Clear and unambiguous equipment identification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Consistent documentation across projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Improved maintenance and operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Enhanced safety and compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Benefits</h2>
            <p className="text-xl text-gray-600">
              Discover how RDS implementation drives operational excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <CheckCircle className="w-10 h-10 text-blue-600 mb-4" />
                <p className="text-lg font-semibold text-gray-900">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Methodologies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Standards & Methodologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We implement RDS according to internationally recognized standards and industry best practices
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {standards.map((standard, index) => (
              <div key={index} className="bg-white border-2 border-blue-100 rounded-lg p-6 hover:border-blue-600 transition-colors">
                <h3 className="text-xl font-bold text-blue-600 mb-2">{standard.name}</h3>
                <p className="text-gray-700">{standard.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
            <p className="text-lg text-gray-700 mb-4">
              We work with your team to develop and implement RDS strategies that align with your operational needs and industry standards. Our expertise ensures smooth adoption and long-term sustainability.
            </p>
            <p className="text-lg text-gray-700">
              From training your personnel to establishing governance processes, we provide comprehensive support throughout the RDS implementation journey.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Standardize Your Reference Designations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how RDS implementation can improve clarity, efficiency, and compliance in your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
