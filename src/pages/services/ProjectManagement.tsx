import { ArrowRight, CheckCircle, Target, Users, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectManagement() {
  return (
    <div className="pt-[128px]">
      <ProjectManagementContent />
    </div>
  );
}

function ProjectManagementContent() {
  const benefits = [
    'Improved project delivery and on-time completion',
    'Better resource allocation and utilization',
    'Enhanced team collaboration and communication',
    'Reduced project costs and budget overruns',
    'Increased stakeholder satisfaction',
    'Risk mitigation and issue prevention',
  ];

  const standards = [
    { name: 'PMBOK', description: 'Project Management Body of Knowledge' },
    { name: 'Agile/Scrum', description: 'Iterative Project Management' },
    { name: 'PRINCE2', description: 'Structured Project Management' },
    { name: 'ISO 21500', description: 'Project Management Guidelines' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop')"}}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl bg-black/30 backdrop-blur-md rounded-lg p-8 border border-white/10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Project Management</h1>
            <p className="text-xl text-white/90">
              Deliver projects on time, within budget, and exceeding expectations with our proven project management methodologies and experienced team.
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
                Professional Project Management
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Our project management services ensure your projects are delivered successfully, meeting all objectives while managing scope, schedule, budget, and quality.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We combine industry best practices with tailored approaches to meet your organization's unique needs and deliver exceptional results.
              </p>
              <p className="text-lg text-gray-700">
                From initiation through closure, we provide comprehensive project management support that drives success and maximizes business value.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <Target className="w-16 h-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Project Management Matters</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Meet project objectives and deliverables</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Control project scope, schedule, and budget</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Manage risks and prevent issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Maximize team productivity and satisfaction</span>
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
              Discover how our project management solutions drive business value
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
            <Target className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Standards & Methodologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage proven project management frameworks and methodologies to ensure consistent success
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
              We tailor our project management approach to your specific needs, whether you prefer traditional waterfall methodologies, agile frameworks, or hybrid approaches.
            </p>
            <p className="text-lg text-gray-700">
              Our experienced project managers bring expertise across industries and project types, ensuring your projects benefit from proven best practices and lessons learned.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Improve Your Project Delivery?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our project management solutions can drive success and maximize business value.
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
