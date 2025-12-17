import { ArrowRight, CheckCircle, Package, BarChart, Wrench, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AssetManagement() {
  return (
    <div className="pt-[128px]">
      <AssetManagementContent />
    </div>
  );
}

function AssetManagementContent() {
  const benefits = [
    'Optimized asset lifecycle and performance',
    'Reduced maintenance costs and downtime',
    'Improved asset reliability and availability',
    'Better regulatory compliance and reporting',
    'Enhanced decision-making with data insights',
    'Increased return on asset investments',
  ];

  const standards = [
    { name: 'ISO 55000 Series', description: 'Asset Management' },
    { name: 'ISO 55001', description: 'Asset Management Management Systems' },
    { name: 'PAS 55', description: 'Optimized Management of Physical Assets' },
    { name: 'ISO 14224', description: 'Equipment Reliability and Maintenance Data' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop')"}}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl bg-black/30 backdrop-blur-md rounded-lg p-8 border border-white/10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Asset Management</h1>
            <p className="text-xl text-white/90">
              Maximize the value of your physical assets throughout their lifecycle with our comprehensive asset management solutions and expertise.
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
                Professional Asset Management
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Our asset management services help organizations optimize the performance, reliability, and lifecycle of their physical assets while minimizing costs and risks.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We implement comprehensive asset management strategies aligned with ISO 55000 standards, covering everything from asset planning and acquisition through operations and disposal.
              </p>
              <p className="text-lg text-gray-700">
                From maintenance optimization to performance monitoring, we provide the tools and expertise needed to maximize asset value and achieve operational excellence.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <Package className="w-16 h-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Asset Management Matters</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Maximize asset performance and uptime</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Optimize maintenance strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Control lifecycle costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Ensure regulatory compliance</span>
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
              Discover how our asset management solutions deliver measurable business value
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

      {/* Standards & Frameworks */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BarChart className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Standards & Frameworks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We implement asset management solutions based on internationally recognized standards
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
              We develop tailored asset management strategies that align with your business objectives and operational requirements, leveraging data analytics and industry best practices.
            </p>
            <p className="text-lg text-gray-700">
              Our holistic approach covers asset strategy, planning, operations, maintenance, and disposal, ensuring optimal performance throughout the entire asset lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Asset Performance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our asset management solutions can improve reliability, reduce costs, and maximize value.
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
