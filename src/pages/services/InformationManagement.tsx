import { Link } from 'react-router-dom';
import { FolderOpen, CheckCircle, Shield, ArrowRight } from 'lucide-react';


export default function InformationManagement() {
  return (
    <div className="pt-[128px]">
      <InformationManagementContent />
    </div>
  );
}

function InformationManagementContent() {
  const benefits = [
    'Strategic information governance framework',
    'Optimized data storage and retrieval',
    'Enhanced knowledge sharing and collaboration',
    'Reduced information silos across departments',
    'Improved decision-making with timely insights',
    'Automated information lifecycle management',
  ];

  const standards = [
    { name: 'ISO 27001', description: 'Information Security Management' },
    { name: 'ISO 30301', description: 'Management Systems for Records' },
    { name: 'COBIT', description: 'IT Governance Framework' },
    { name: 'ITIL', description: 'IT Service Management' },
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop')"}}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl bg-black/30 backdrop-blur-md rounded-lg p-8 border border-white/10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Building Information Modelling (BIM) Management</h1>
            <p className="text-xl text-black/90">
              Transform information into strategic assets with comprehensive information management solutions
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
                Strategic Information Governance
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Information Management is the systematic control of information throughout its lifecycle—from creation and use to archival and disposal. Our solutions help organizations establish robust frameworks for capturing, organizing, securing, and delivering information to support business objectives.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We work with organizations to develop comprehensive information management strategies that align with business goals, regulatory requirements, and industry best practices. Our approach ensures information is accurate, accessible, secure, and compliant while supporting operational efficiency and strategic decision-making.
              </p>
              <p className="text-lg text-gray-700">
                From information architecture design to governance policy development and technology implementation, we provide end-to-end support to transform your information management capabilities.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <FolderOpen className="w-16 h-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Information Management Essentials</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Structured information architecture and taxonomy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Governance policies and accountability frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Technology solutions for capture and retrieval</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Continuous improvement and optimization</span>
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
              Unlock the full potential of your organizational information
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
              Our information management solutions are grounded in globally recognized standards and frameworks
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Governance and Compliance Excellence</h3>
            <p className="text-lg text-gray-700 mb-4">
              Effective information management requires strong governance and compliance frameworks. We help organizations develop policies, procedures, and controls that ensure information is managed according to legal, regulatory, and business requirements.
            </p>
            <p className="text-lg text-gray-700">
              Our approach incorporates international standards like ISO 27001 for information security and ISO 30301 for records management, ensuring your organization maintains the highest standards of information governance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Information Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's build a strategic information management framework that drives business value and competitive advantage.
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
