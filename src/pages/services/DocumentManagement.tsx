import { Link } from 'react-router-dom';
import { FileText, CheckCircle, Shield, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DocumentManagement() {
  return (
    <div className="pt-[128px]">
      <DocumentManagementContent />
    </div>
  );
}

function DocumentManagementContent() {
  const benefits = [
    'Centralized document storage and retrieval',
    'Version control and audit trails',
    'Improved collaboration and workflow efficiency',
    'Reduced physical storage costs',
    'Enhanced security and access control',
    'Automated document lifecycle management',
  ];

  const standards = [
    { name: 'ISO 9001', description: 'Quality Management Systems' },
    { name: 'ISO 15489', description: 'Records Management' },
    { name: 'GDPR', description: 'Data Protection and Privacy' },
    { name: 'SOC 2', description: 'Security and Availability Controls' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Document Management</h1>
            <p className="text-xl text-blue-100">
              Transform your document workflows with our comprehensive document management solutions
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
                Streamline Your Document Processes
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Our Document Management solutions help organizations efficiently capture, store, manage, and track electronic documents and images of paper-based information. We provide end-to-end solutions that transform how your business handles critical information.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                From initial capture to long-term archival, our systems ensure your documents are organized, secure, and accessible when you need them. We leverage cutting-edge technology to automate workflows, reduce manual processes, and improve overall productivity.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're managing contracts, invoices, HR records, or technical documentation, our solutions adapt to your specific business needs and compliance requirements.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <FileText className="w-16 h-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Document Management Matters</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Eliminate time wasted searching for documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Reduce operational costs and physical storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Ensure regulatory compliance and data security</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Enable remote work and collaboration</span>
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
              Discover how our document management solutions drive business value
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
              Our document management solutions are designed to meet the highest industry standards and regulatory requirements
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Compliance Commitment</h3>
            <p className="text-lg text-gray-700 mb-4">
              We understand that compliance is not optional. Our solutions are built with regulatory requirements in mind, ensuring your organization maintains full compliance with industry standards and legal obligations.
            </p>
            <p className="text-lg text-gray-700">
              From data privacy regulations like GDPR to industry-specific requirements, we help you navigate the complex landscape of document compliance with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Document Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our solutions can streamline your document workflows and drive efficiency across your organization.
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
