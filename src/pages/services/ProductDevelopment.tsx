import { ArrowRight, CheckCircle, Lightbulb, Rocket, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductDevelopment() {
  return (
    <div className="pt-[128px]">
      <ProductDevelopmentContent />
    </div>
  );
}

function ProductDevelopmentContent() {
  const benefits = [
    'Faster time-to-market for new products',
    'Reduced development costs and risks',
    'Enhanced product quality and performance',
    'Better alignment with market needs',
    'Increased innovation and competitiveness',
    'Improved cross-functional collaboration',
  ];

  const standards = [
    { name: 'ISO 9001', description: 'Quality Management Systems' },
    { name: 'Stage-Gate', description: 'Product Development Process' },
    { name: 'Agile', description: 'Iterative Development Methodology' },
    { name: 'Design Thinking', description: 'User-Centered Innovation' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop')"}}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl bg-black/30 backdrop-blur-md rounded-lg p-8 border border-white/10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Product Development</h1>
            <p className="text-xl text-white/90">
              Transform your ideas into market-ready products with our comprehensive product development services, from concept through launch and beyond.
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
                Professional Product Development
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Our product development services guide you through every stage of bringing new products to market, from initial concept and design through prototyping, testing, and launch.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We combine innovative thinking with rigorous processes to ensure your products meet market needs while staying within budget and timeline constraints.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're developing physical products, software solutions, or hybrid offerings, our expertise helps you navigate the complexities of modern product development.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <Lightbulb className="w-16 h-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Product Development Matters</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Structured approach from idea to market</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Risk mitigation through validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Optimized resource allocation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Market-driven innovation</span>
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
              Discover how our product development services accelerate innovation
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

      {/* Methodologies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Rocket className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Methodologies & Frameworks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage proven methodologies to ensure successful product development outcomes
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
              We tailor our product development approach to your specific industry, market, and organizational context, combining proven methodologies with innovative thinking.
            </p>
            <p className="text-lg text-gray-700">
              Our multidisciplinary teams bring together expertise in engineering, design, market research, and project management to deliver products that succeed in the market.
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
            Let's discuss how our product development expertise can accelerate your innovation journey.
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
