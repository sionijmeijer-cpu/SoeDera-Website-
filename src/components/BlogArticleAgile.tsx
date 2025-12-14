import { ArrowLeft, Calendar, Clock, User, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogArticleAgile() {
  const handleLinkedInShare = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 h-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-24">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
            Project Management
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Agile vs. Waterfall: A Complete Comparison Framework
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <span>January 12, 2025</span>
          </div>
          <div className="flex items-center">
            <User className="w-5 h-5 mr-2" />
            <span>Sødera Team</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            <span>12 min read</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80" 
            alt="Agile vs Waterfall"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Choosing the right project management methodology can make or break your project's success. Agile and Waterfall represent two fundamentally different approaches, each with distinct strengths and ideal use cases. This comprehensive guide will help you understand both methodologies and make informed decisions for your projects.
            </p>
          </div>

          {/* Waterfall Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Waterfall Methodology</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Waterfall is a linear, sequential approach where each phase must be completed before the next begins. It follows a structured progression through distinct stages:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Requirements:</strong> Gather and document all project requirements</li>
              <li><strong>Design:</strong> Create detailed system and software design specifications</li>
              <li><strong>Implementation:</strong> Develop the solution according to design documents</li>
              <li><strong>Verification:</strong> Test the complete system for defects and compliance</li>
              <li><strong>Maintenance:</strong> Deploy and support the solution in production</li>
            </ol>
            <p className="text-gray-700 leading-relaxed">
              This methodology emphasizes thorough planning and documentation upfront, with minimal changes once development begins. It's predictable, structured, and well-suited for projects with clear, stable requirements.
            </p>
          </div>

          {/* Agile Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Agile Methodology</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Agile is an iterative, incremental approach that emphasizes flexibility, collaboration, and continuous improvement. Key principles include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Sprints:</strong> Short development cycles (typically 1-4 weeks) delivering working software</li>
              <li><strong>User Stories:</strong> Requirements defined from the user's perspective in simple, actionable terms</li>
              <li><strong>Daily Standups:</strong> Brief team meetings to coordinate work and identify blockers</li>
              <li><strong>Sprint Reviews:</strong> Demonstrations of completed work to stakeholders for feedback</li>
              <li><strong>Retrospectives:</strong> Team reflections on process improvements after each sprint</li>
              <li><strong>Continuous Integration:</strong> Frequent integration and testing of code changes</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Agile welcomes changing requirements and delivers value incrementally, allowing teams to adapt quickly based on feedback and evolving business needs.
            </p>
          </div>

          {/* Detailed Comparison */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Comparison</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Planning and Requirements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Waterfall</h4>
                    <p className="text-gray-700">Extensive upfront planning with complete requirement documentation before development begins. Changes are difficult and costly once the project starts.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Agile</h4>
                    <p className="text-gray-700">Minimal upfront planning with high-level requirements. Detailed planning occurs sprint by sprint, allowing flexibility to adapt as understanding evolves.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Project Timeline</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Waterfall</h4>
                    <p className="text-gray-700">Long development cycles with a single delivery at project end. Timeline is fixed upfront based on initial estimates and requirements.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Agile</h4>
                    <p className="text-gray-700">Short, time-boxed iterations with frequent deliverables. Overall timeline may be flexible, with scope adjusted based on priorities and feedback.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Customer Involvement</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Waterfall</h4>
                    <p className="text-gray-700">Heavy involvement during requirements phase, minimal during development, and significant at final delivery for acceptance testing.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Agile</h4>
                    <p className="text-gray-700">Continuous involvement throughout the project with regular sprint reviews, demos, and feedback sessions to ensure alignment with business needs.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Testing Approach</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Waterfall</h4>
                    <p className="text-gray-700">Testing occurs as a distinct phase after development is complete. Defects found late in the cycle are expensive to fix.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Agile</h4>
                    <p className="text-gray-700">Testing is continuous and integrated throughout development. Automated testing and test-driven development catch issues early when they're easier to fix.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Risk Management</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Waterfall</h4>
                    <p className="text-gray-700">Higher risk of delivering the wrong solution since feedback comes late. Project success depends heavily on the accuracy of initial requirements.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Agile</h4>
                    <p className="text-gray-700">Lower risk through frequent validation and course correction. Issues are identified and addressed quickly through regular feedback loops.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Documentation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Waterfall</h4>
                    <p className="text-gray-700">Comprehensive documentation is created upfront and maintained throughout. Detailed specifications, design documents, and test plans are standard.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Agile</h4>
                    <p className="text-gray-700">Minimal documentation focused on what's necessary. Emphasis on working software over comprehensive documentation, though key artifacts are still maintained.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* When to Use */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Use Waterfall</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Waterfall is ideal for projects where:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Requirements are well-defined, stable, and unlikely to change</li>
              <li>The technology is mature and well-understood</li>
              <li>Regulatory compliance requires extensive documentation</li>
              <li>Fixed-price contracts with detailed scope definitions</li>
              <li>Sequential dependencies make parallel work impossible</li>
              <li>Customer availability is limited to specific project phases</li>
              <li>Examples: Construction projects, manufacturing systems, regulatory compliance projects</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Use Agile</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Agile is ideal for projects where:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Requirements are expected to evolve or are not fully known upfront</li>
              <li>Speed to market and frequent value delivery are priorities</li>
              <li>Customer collaboration and feedback are readily available</li>
              <li>Innovation and experimentation are encouraged</li>
              <li>The team is co-located or has strong remote collaboration tools</li>
              <li>Technology choices may need to adapt based on learning</li>
              <li>Examples: Software products, mobile apps, digital transformation initiatives</li>
            </ul>
          </div>

          {/* Hybrid Approaches */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hybrid Approaches</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many organizations find success with hybrid approaches that combine elements of both methodologies:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>Water-Scrum-Fall:</strong> Use Waterfall for planning and deployment phases, Agile for development</li>
              <li><strong>Agile with Gates:</strong> Incorporate Waterfall-style approval gates at key milestones within Agile projects</li>
              <li><strong>Iterative Waterfall:</strong> Apply Waterfall methodology within shorter cycles with periodic reviews</li>
              <li><strong>Disciplined Agile:</strong> Flexible approach that lets teams choose practices based on context</li>
            </ul>
          </div>

          {/* Decision Framework */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Decision-Making Framework</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Consider these factors when choosing your methodology:
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
              <ol className="list-decimal pl-6 space-y-3 text-gray-800">
                <li><strong>Requirement Stability:</strong> How well-defined and stable are requirements?</li>
                <li><strong>Customer Availability:</strong> How frequently can customers provide feedback?</li>
                <li><strong>Team Experience:</strong> Does the team have experience with the chosen methodology?</li>
                <li><strong>Project Complexity:</strong> How complex is the solution and how much uncertainty exists?</li>
                <li><strong>Risk Tolerance:</strong> What's the organization's appetite for iterative delivery vs. big-bang deployment?</li>
                <li><strong>Compliance Requirements:</strong> What documentation and approval processes are mandated?</li>
                <li><strong>Time to Market:</strong> How important is early and frequent delivery of value?</li>
              </ol>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Approach?</h2>
            <p className="text-lg mb-6 text-orange-50">
              Sødera Solutions has extensive experience implementing both Agile and Waterfall methodologies. Let us help you select and tailor the right approach for your organization's unique needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Expert Guidance
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-3 bg-orange-700 text-white rounded-lg font-semibold hover:bg-orange-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Share this article</h3>
          <div className="flex gap-4">
            <button
              onClick={handleLinkedInShare}
              className="flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white rounded-lg hover:bg-[#006396] transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </button>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <LinkIcon className="w-5 h-5" />
              <span>Copy Link</span>
            </button>
          </div>
        </div>

        {/* Back to Blog Button */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
