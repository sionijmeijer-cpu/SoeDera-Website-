import { useState } from 'react';
import { ArrowRight, FileText, FolderKanban, Package, Database, Network, Building2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../components/BookingModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAssessment, setSelectedAssessment] = useState<'rds' | 'document'>('rds');

  const openModal = (type: 'rds' | 'document') => {
    setSelectedAssessment(type);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-[128px]">
      <style>{`
        @keyframes flashPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 140, 0, 0), inset 0 0 20px rgba(255, 255, 255, 0);
          }
          50% {
            box-shadow: 0 0 30px 10px rgba(255, 140, 0, 0.4), inset 0 0 40px rgba(255, 255, 255, 0.3);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        .assessment-card-rds {
          animation: flashPulse 3s ease-in-out infinite;
        }
        .assessment-card-rds:hover {
          animation: flashPulse 2s ease-in-out infinite;
        }
        .assessment-card-document {
          animation: flashPulse 3.5s ease-in-out infinite;
        }
        .assessment-card-document:hover {
          animation: flashPulse 2s ease-in-out infinite;
        }
      `}</style>
      {/* Hero Section */}
      <section 
        className="relative w-full py-32"
        style={{ 
          backgroundImage: "url('https://i.imgur.com/faDPaKC.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '500px'
        }}
        aria-label="Hero section introducing SøDera"
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
              We help energy companies fix Documentation, RDS, and Asset data fast and to standard
            </h1>
            <p className="text-lg sm:text-xl mb-8 leading-relaxed text-gray-100">
              We take a practical, hands-on approach, working directly with teams, from Reference Designation Systems (IEC 81346) to document and asset management, to reduce complexity, improve compliance, and stay in control of their information.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-700 text-white rounded text-lg font-medium hover:bg-slate-600 transition-all duration-300"
            >
              Learn More
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Assessment Cards Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="assessments-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-slate-600 font-semibold text-sm uppercase tracking-wide mb-3">
              START HERE
            </p>
            <h2 id="assessments-heading" className="text-4xl font-bold text-gray-900 mb-4">
              Quick Assessments
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Get clarity on your current state with a focused, practical review
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* RDS Assessment Card */}
            <article className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-slate-200 hover:border-slate-300 overflow-hidden group hover:scale-105 flex flex-col h-full assessment-card-rds">
              {/* Continuous shimmer light effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full animate-shimmer" style={{
                  backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                  animation: 'shimmer 3s infinite'
                }} />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/60 via-orange-50/40 to-slate-50/50" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Network className="w-6 h-6 text-orange-600" />
                  </div>
                  <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                    POPULAR
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  RDS Assessment (IEC 81346)
                </h3>
                
                <p className="text-gray-600 mb-5 leading-relaxed">
                  A focused review of your current Reference Designation System to identify gaps, inconsistencies, and risks across documentation, systems, and assets.
                </p>
                
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-800 mb-3">What's included:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Review of current RDS structure and usage
                    </li>
                    <li className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Alignment check against IEC 81346
                    </li>
                    <li className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Identification of risks, inconsistencies, and quick wins
                    </li>
                    <li className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Clear recommendations and next steps
                    </li>
                  </ul>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                  <span className="flex items-center gap-1">
                    <span className="font-medium">Duration:</span> ~2 weeks
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="flex items-center gap-1">
                    <span className="font-medium">From:</span> €1,500
                  </span>
                </div>
                
                <button
                  onClick={() => openModal('rds')}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300 mt-auto"
                >
                  Discuss RDS Assessment
                  <ArrowRight size={18} />
                </button>
              </div>
            </article>

            {/* Document Management Assessment Card */}
            <article className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-slate-200 hover:border-slate-300 overflow-hidden group hover:scale-105 flex flex-col h-full assessment-card-document">
              {/* Continuous shimmer light effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full animate-shimmer" style={{
                  backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                  animation: 'shimmer 3s infinite'
                }} />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-blue-50/40 to-slate-50/50" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Document Management Assessment
                </h3>
                
                <p className="text-gray-600 mb-5 leading-relaxed">
                  A practical review of how documents are created, stored, controlled, and used across teams and systems.
                </p>
                
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-800 mb-3">What's included:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Review of document structure, workflows, and ownership
                    </li>
                    <li className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Version control and compliance gap check
                    </li>
                    <li className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Identification of inefficiencies and risks
                    </li>
                    <li className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Practical improvement recommendations
                    </li>
                  </ul>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                  <span className="flex items-center gap-1">
                    <span className="font-medium">Duration:</span> ~2 weeks
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="flex items-center gap-1">
                    <span className="font-medium">From:</span> €1,200
                  </span>
                </div>
                
                <button
                  onClick={() => openModal('document')}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300 mt-auto"
                >
                  Discuss Document Assessment
                  <ArrowRight size={18} />
                </button>
              </div>
            </article>
          </div>

          {/* Reassurance line */}
          <p className="text-center text-gray-500 text-sm mt-8 max-w-2xl mx-auto italic">
            Both assessments are short, paid engagements designed to provide clarity, not to lock you into a larger project.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-slate-600 font-semibold text-sm uppercase tracking-wide mb-3">
              OUR SERVICES
            </p>
            <h2 id="services-heading" className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Consulting Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive solutions designed to streamline your operations and maximize efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Document Management */}
            <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-200 hover:border-slate-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Document Management</h3>
              <p className="text-gray-600 mb-4">
                Efficient systems for organizing, storing, and retrieving critical business documentation.
              </p>
              <Link
                to="/services/document-management"
                className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-600 transition-colors"
                aria-label="Learn more about Document Management services"
              >
                Learn More
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>

            {/* RDS Concepts */}
            <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-200 hover:border-slate-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reference Designation Systems (RDS)</h3>
              <p className="text-gray-600 mb-4">
                ISO/IEC 81346 compliant standardized labeling systems for clear identification of components and systems.
              </p>
              <Link
                to="/services/rds"
                className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-600 transition-colors"
                aria-label="Learn more about Reference Designation Systems"
              >
                Learn More
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>

            {/* BIM Management */}
            <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-200 hover:border-slate-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">BIM Management</h3>
              <p className="text-gray-600 mb-4">
                Building Information Modeling - digital representation and management of facility characteristics for better coordination.
              </p>
              <Link
                to="/services/bim-management"
                className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-600 transition-colors"
                aria-label="Learn more about BIM Management services"
              >
                Learn More
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>

            {/* Product Development */}
            <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-200 hover:border-slate-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Product Development</h3>
              <p className="text-gray-600 mb-4">
                Strategic guidance from concept to market launch for innovative solutions.
              </p>
              <Link
                to="/services/product-development"
                className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-600 transition-colors"
                aria-label="Learn more about Product Development services"
              >
                Learn More
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>

            {/* Asset Management */}
            <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-200 hover:border-slate-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Asset Management</h3>
              <p className="text-gray-600 mb-4">
                Optimize asset performance, reduce costs, and extend lifecycle through strategic management.
              </p>
              <Link
                to="/services/asset-management"
                className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-600 transition-colors"
                aria-label="Learn more about Asset Management services"
              >
                Learn More
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>

            {/* Project Management */}
            <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-200 hover:border-slate-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <FolderKanban className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Project Management</h3>
              <p className="text-gray-600 mb-4">
                End-to-end project delivery with proven methodologies ensuring on-time, on-budget results.
              </p>
              <Link
                to="/services/project-management"
                className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-600 transition-colors"
                aria-label="Learn more about Project Management services"
              >
                Learn More
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-700 text-white rounded text-lg font-medium hover:bg-slate-600 transition-all duration-300"
            >
              View All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Let's discuss how we can help optimize your business processes
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-800 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-all duration-300 shadow-xl"
          >
            Get in Touch
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        assessmentType={selectedAssessment}
      />
    </div>
  );
}
