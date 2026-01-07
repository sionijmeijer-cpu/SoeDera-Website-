import { ArrowLeft, Calendar, Clock, User, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogArticleEDMS() {
  const articleUrl = 'https://www.soedera.eu/blog/document-management';

  const handleLinkedInShare = () => {
    const url = encodeURIComponent(articleUrl);
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
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
            Enterprise Solutions
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Enterprise Document Management: Implementation Guide
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <span>January 10, 2025</span>
          </div>
          <div className="flex items-center">
            <User className="w-5 h-5 mr-2" />
            <span>Sødera Team</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            <span>10 min read</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1920&q=80" 
            alt="Enterprise Document Management"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              In today's digital age, effective document management is critical for organizational success. An Enterprise Document Management System (EDMS) provides the foundation for efficient information handling, compliance, and collaboration across your entire organization.
            </p>
          </div>

          {/* Understanding EDMS */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding EDMS</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              An EDMS is a comprehensive software solution designed to capture, store, manage, and track electronic documents throughout their lifecycle. It goes beyond simple file storage, providing advanced capabilities for version control, access management, workflow automation, and compliance tracking.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Modern EDMS platforms integrate with existing business systems, support multiple file formats, and provide powerful search and retrieval capabilities that transform how organizations handle information.
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits of EDMS Implementation</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Enhanced Productivity</h3>
                <p className="text-gray-700 leading-relaxed">
                  Employees spend significantly less time searching for documents and more time on value-adding activities. Automated workflows eliminate manual routing and approval processes, accelerating business operations.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Improved Security and Compliance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Centralized access control, audit trails, and retention policies ensure regulatory compliance while protecting sensitive information. Role-based permissions prevent unauthorized access and data breaches.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Cost Reduction</h3>
                <p className="text-gray-700 leading-relaxed">
                  Eliminate physical storage costs, reduce printing expenses, and minimize document-related errors. Digital processes are faster, cheaper, and more environmentally sustainable than paper-based alternatives.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Better Collaboration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Teams can access, edit, and share documents from anywhere, facilitating remote work and cross-departmental collaboration. Version control prevents conflicts and ensures everyone works with the latest information.
                </p>
              </div>
            </div>
          </div>

          {/* Implementation Phases */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">EDMS Implementation Roadmap</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Phase 1: Assessment and Planning</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Begin with a comprehensive assessment of your current document management practices. Identify pain points, define objectives, and establish success metrics. Key activities include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Document current workflows and processes</li>
                  <li>Identify stakeholders and gather requirements</li>
                  <li>Evaluate existing technology infrastructure</li>
                  <li>Define scope, timeline, and budget</li>
                  <li>Establish governance structure and project team</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Phase 2: System Selection</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Choose an EDMS solution that aligns with your organization's needs and technical environment. Consider:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Scalability and performance requirements</li>
                  <li>Integration capabilities with existing systems</li>
                  <li>User interface and ease of use</li>
                  <li>Security features and compliance support</li>
                  <li>Vendor reputation, support, and roadmap</li>
                  <li>Total cost of ownership (TCO)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Phase 3: Design and Configuration</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Design your EDMS architecture and configure the system to meet your specific requirements:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Define document taxonomies and metadata schemas</li>
                  <li>Configure security roles and permissions</li>
                  <li>Design workflow automations</li>
                  <li>Set up retention policies and disposal schedules</li>
                  <li>Develop integration interfaces</li>
                  <li>Create templates and naming conventions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Phase 4: Data Migration</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Migrating existing documents is often the most challenging phase. Successful migration requires:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Data quality assessment and cleansing</li>
                  <li>Migration strategy (phased vs. big bang)</li>
                  <li>Metadata mapping and enrichment</li>
                  <li>Pilot testing with representative data sets</li>
                  <li>Validation and verification procedures</li>
                  <li>Rollback plans for critical failures</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Phase 5: Training and Change Management</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  User adoption is critical for EDMS success. Implement comprehensive training and change management:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Develop role-based training programs</li>
                  <li>Create user guides and quick reference materials</li>
                  <li>Establish super-users and champions in each department</li>
                  <li>Communicate benefits and address concerns proactively</li>
                  <li>Provide ongoing support during transition period</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Phase 6: Go-Live and Optimization</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Launch the system and continuously improve based on user feedback:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Phased rollout by department or location</li>
                  <li>Intensive support during initial weeks</li>
                  <li>Monitor system performance and user adoption</li>
                  <li>Gather feedback and identify improvement areas</li>
                  <li>Regular review meetings with stakeholders</li>
                  <li>Continuous optimization and enhancement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices for Success</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>Executive Sponsorship:</strong> Secure strong leadership support and commitment for the initiative</li>
              <li><strong>User-Centric Design:</strong> Involve end-users early and often in the design process</li>
              <li><strong>Start Small:</strong> Begin with a pilot project to validate approach and build momentum</li>
              <li><strong>Focus on Quick Wins:</strong> Deliver early benefits to build confidence and support</li>
              <li><strong>Establish Governance:</strong> Create clear policies, procedures, and accountability structures</li>
              <li><strong>Plan for Long-Term:</strong> EDMS is not a one-time project but an ongoing program requiring continuous attention</li>
            </ul>
          </div>

          {/* Common Pitfalls */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Pitfalls to Avoid</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>Inadequate Planning:</strong> Rushing into implementation without thorough planning leads to costly mistakes</li>
              <li><strong>Ignoring Change Management:</strong> Technology alone doesn't drive adoption—people and processes matter</li>
              <li><strong>Over-Customization:</strong> Excessive customization increases costs and complicates upgrades</li>
              <li><strong>Poor Data Quality:</strong> Migrating bad data results in a bad system—clean before you migrate</li>
              <li><strong>Neglecting Security:</strong> Security must be designed in from the start, not added as an afterthought</li>
              <li><strong>Lack of Governance:</strong> Without clear ownership and policies, the system will deteriorate over time</li>
            </ul>
          </div>

          {/* Measuring Success */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Measuring Success</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Track key performance indicators to demonstrate value and identify improvement opportunities:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Time to find documents (search efficiency)</li>
              <li>Document processing cycle times</li>
              <li>User adoption rates and satisfaction scores</li>
              <li>Storage cost savings</li>
              <li>Compliance audit results</li>
              <li>Return on investment (ROI)</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Document Management?</h2>
            <p className="text-lg mb-6 text-orange-50">
              Let Sødera Solutions guide you through your EDMS implementation journey. Our experienced team will help you select, implement, and optimize the right solution for your organization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started
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
