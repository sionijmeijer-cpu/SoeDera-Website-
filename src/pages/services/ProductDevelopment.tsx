import { Link } from 'react-router-dom';
import { Rocket, CheckCircle, Shield, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ProductDevelopment() {
  return (
    <div className="pt-[128px]">
      <ProductDevelopmentContent />
    </div>
  );
}

function ProductDevelopmentContent() {
  const benefits = [
    'Accelerated time-to-market for new products',
    'Reduced development costs and risks',
    'Enhanced product quality and reliability',
    'Improved collaboration across teams',
    'Streamlined development workflows',
    'Data-driven product decisions',
  ];

  const standards = [
    { name: 'ISO 9001', description: 'Quality Management Systems' },
    { name: 'ISO/IEC 15288', description: 'System Life Cycle Processes' },
    { name: 'Agile/Scrum', description: 'Iterative Development Framework' },
    { name: 'DevOps', description: 'Continuous Integration & Delivery' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Product Development</h1>
            <p className="text-xl text-blue-100">
              Bring innovative products to market faster with our expert development services
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
                Innovation Through Expertise
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Our Product Development services help organizations transform ideas into market-ready products through systematic, efficient, and innovative development processes. We combine technical expertise with industry best practices to deliver products that meet market needs and exceed customer expectations.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                From initial concept and requirements analysis to design, development, testing, and deployment, we provide comprehensive support throughout the entire product lifecycle. Our team leverages modern methodologies, cutting-edge technologies, and proven frameworks to ensure successful product delivery.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're developing software applications, industrial systems, or digital solutions, we bring the expertise and experience needed to navigate complex development challenges and deliver products that drive business value.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <Rocket className="w-16 h-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Development Excellence</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Requirements analysis and product strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Agile development with iterative delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Quality assurance and testing strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Deployment and maintenance support</span>
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
              Drive innovation and market success with our product development expertise
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
              Our development processes follow industry-leading standards and methodologies
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality-Driven Development</h3>
            <p className="text-lg text-gray-700 mb-4">
              Quality is at the core of our development approach. We implement rigorous quality assurance processes, automated testing frameworks, and continuous integration practices to ensure products meet the highest standards of reliability, performance, and security.
            </p>
            <p className="text-lg text-gray-700">
              Our adherence to ISO standards and modern development methodologies ensures your products are built to last, scale efficiently, and maintain competitive advantage in the marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Bring Your Product Vision to Life?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Partner with us to develop innovative products that delight customers and drive business growth.
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
