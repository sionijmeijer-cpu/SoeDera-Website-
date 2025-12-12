import { Link } from 'react-router-dom';
import { Database, CheckCircle, Shield, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function RDSConcepts() {
  return (
    <div className="pt-[128px]">
      <RDSConceptsContent />
    </div>
  );
}

function RDSConceptsContent() {
  const benefits = [
    'Standardized reference data across systems',
    'Improved data quality and consistency',
    'Enhanced regulatory compliance',
    'Reduced data duplication and errors',
    'Faster decision-making with reliable data',
    'Seamless integration across platforms',
  ];

  const standards = [
    { name: 'ISO 8000', description: 'Data Quality Standards' },
    { name: 'ISO 22745', description: 'Industrial Automation Systems' },
    { name: 'ISO/IEC 11179', description: 'Metadata Registries' },
    { name: 'PAS 1880', description: 'Asset Information Model' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Reference Designation System (RDS) Concepts</h1>
            <p className="text-xl text-blue-100">
              Master your data with standardized reference designation systems that drive operational excellence
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
                Unified Reference Data Management
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Reference Designation Systems (RDS) provide a standardized framework for identifying and classifying assets, equipment, and systems across your organization. Our RDS solutions ensure consistency, traceability, and interoperability throughout your asset lifecycle.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We help organizations implement robust RDS frameworks that align with international standards like ISO 81346 and industry best practices. From initial planning to full implementation, we ensure your reference data structure supports efficient operations, maintenance, and decision-making.
              </p>
              <p className="text-lg text-gray-700">
                Our expertise spans multiple industries including oil & gas, manufacturing, energy, and infrastructure, enabling us to deliver tailored RDS solutions that meet your specific operational needs and regulatory requirements.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <Database className="w-16 h-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">RDS Implementation Value</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Standardized asset identification across projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Improved data integration and system interoperability</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Enhanced maintenance planning and execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Simplified asset tracking and lifecycle management</span>
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
              Transform your asset management with standardized RDS implementation
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

      {/* Compliance & Standards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance & Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our RDS solutions are built on internationally recognized standards ensuring global compatibility and compliance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((standard, index) => (
              <div key={index} className="bg-white border-2 border-blue-100 rounded-lg p-6 hover:border-blue-600 transition-colors">
                <h3 className="text-xl font-bold text-blue-600 mb-2">{standard.name}</h3>
                <p className="text-gray-700">{standard.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Standards-Based Approach</h3>
            <p className="text-lg text-gray-700 mb-4">
              We prioritize adherence to international standards such as ISO 81346 for industrial systems and asset identification. Our methodology ensures your RDS implementation is future-proof, scalable, and compatible with industry best practices.
            </p>
            <p className="text-lg text-gray-700">
              By following established standards, we help you avoid vendor lock-in, facilitate data exchange with partners, and ensure long-term sustainability of your reference data infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Standardize Your Asset Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us help you implement a robust RDS framework that drives operational efficiency and data quality.
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

      <Footer />
    </div>
  );
}
