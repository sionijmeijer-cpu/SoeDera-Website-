import { ArrowRight, CheckCircle, FileText, Shield, Clock, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DocumentManagement() {
  return (
    <div className="pt-[128px]">
      <DocumentManagementContent />
    </div>
  );
}

function DocumentManagementContent() {
  const benefits = [
    'Improved document accessibility and retrieval',
    'Enhanced version control and audit trails',
    'Reduced storage costs and physical space',
    'Better compliance and regulatory adherence',
    'Increased collaboration and productivity',
    'Secure document sharing and access control',
  ];

  const standards = [
    { name: 'ISO 9001', description: 'Quality Management Systems' },
    { name: 'ISO 27001', description: 'Information Security Management' },
    { name: 'GDPR', description: 'Data Protection Compliance' },
    { name: 'ISO 15489', description: 'Records Management Standard' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&h=600&fit=crop')"}}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl bg-black/30 backdrop-blur-md rounded-lg p-8 border border-white/10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Document Management</h1>
            <p className="text-xl text-white/90">
              Streamline your document workflows with our comprehensive document management solutions, ensuring secure storage, easy access, and full compliance.
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
                Professional Document Management
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Our document management services help organizations efficiently organize, store, track, and manage digital documents throughout their lifecycle.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We implement robust systems that improve document accessibility, enhance collaboration, and ensure compliance with industry regulations.
              </p>
              <p className="text-lg text-gray-700">
                From digitization to long-term archival, we provide end-to-end document management solutions tailored to your business needs.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <FileText className="w-16 h-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Document Management Matters</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Instant access to critical documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Enhanced security and access control</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Improved regulatory compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Reduced operational costs</span>
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

      {/* Standards & Compliance */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Standards & Compliance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We ensure your document management systems meet industry standards and regulatory requirements
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
            <p className="text-lg text-gray-700 mb-4">
              We implement document management solutions that combine cutting-edge technology with proven methodologies to ensure maximum efficiency and security.
            </p>
            <p className="text-lg text-gray-700">
              Our experts work closely with your team to understand your specific requirements and design systems that integrate seamlessly with your existing workflows.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Document Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our document management solutions can improve efficiency and compliance.
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
