import { ArrowLeft, Calendar, Clock, User, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogArticleDocMgmt() {
  const articleUrl = 'https://www.soedera.eu/blog/edms-implementation';

  const handleLinkedInShare = () => {
    const url = encodeURIComponent(articleUrl);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 animate-fade-in">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 h-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
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
        {/* Hero Section */}
        <div className="mb-12">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Enterprise Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Enterprise Document Management: Implementation Guide
            </h1>
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span>Sødera Solutions Team</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>January 10, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>10 min read</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl mb-12">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80"
              alt="Document Management System"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Enterprise document management systems (EDMS) have become mission-critical infrastructure for modern organizations. This comprehensive guide walks you through the entire implementation process, from planning to optimization.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Enterprise Document Management</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            An enterprise document management system is more than digital filing—it's a strategic platform that enables organizations to capture, store, manage, and distribute documents efficiently while ensuring compliance, security, and accessibility across the enterprise.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Phase 1: Assessment and Planning</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Conduct a Document Audit</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Begin by mapping your current document landscape. Identify document types, volumes, storage locations, access patterns, and retention requirements. This audit reveals pain points, redundancies, and opportunities for process improvement.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Define Business Requirements</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Engage stakeholders across departments to understand their document management needs. Consider workflow automation, version control, search capabilities, integration requirements, mobile access, and compliance mandates specific to your industry.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Establish Success Metrics</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Define clear KPIs to measure implementation success: document retrieval time, storage cost reduction, compliance audit results, user adoption rates, and process automation gains. These metrics guide decision-making throughout the project.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Phase 2: System Selection</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Evaluate Platform Capabilities</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Assess solutions based on scalability, security features, integration capabilities, user experience, mobile support, and total cost of ownership. Consider both cloud-based and on-premises options based on your organization's requirements and constraints.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Features to Prioritize</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Advanced search and metadata management</li>
            <li>Automated workflow and approval routing</li>
            <li>Version control and audit trails</li>
            <li>Role-based access control and encryption</li>
            <li>Integration with existing enterprise systems</li>
            <li>Records management and retention policies</li>
            <li>OCR and intelligent document processing</li>
            <li>Mobile access and offline capabilities</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Phase 3: Design and Configuration</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information Architecture</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Design a logical folder structure and metadata schema that reflects how your organization works. Balance simplicity with functionality—overly complex structures hinder adoption while oversimplified ones limit searchability and organization.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Workflow Automation</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Map critical business processes and configure automated workflows for document approval, review cycles, notifications, and escalations. Start with high-impact, frequently used processes to demonstrate immediate value.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Security and Permissions</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Implement a comprehensive security model with role-based access controls, document-level permissions, encryption at rest and in transit, and audit logging. Ensure compliance with regulations like GDPR, HIPAA, or industry-specific requirements.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Phase 4: Migration Strategy</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Migration Planning</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Develop a phased migration approach. Prioritize active documents and critical business processes first. Clean data before migration—eliminate duplicates, outdated content, and ROT (redundant, obsolete, trivial) documents.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Testing and Validation</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Conduct pilot migrations with representative document sets. Verify metadata accuracy, file integrity, permission transfers, and search functionality. Address issues before full-scale migration to minimize disruption.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Phase 5: Change Management and Training</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Communication Strategy</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Develop a comprehensive communication plan that explains the why, what, and how of the new system. Address concerns, highlight benefits, and celebrate early wins to build momentum and support.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Training Programs</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Create role-based training modules tailored to different user groups. Combine various formats: instructor-led sessions, video tutorials, quick reference guides, and hands-on practice environments. Establish power users as departmental champions.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Phase 6: Go-Live and Optimization</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Phased Rollout</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Deploy incrementally by department, location, or business unit. This approach allows you to refine processes, address issues, and build organizational confidence before enterprise-wide implementation.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Continuous Improvement</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Monitor system usage, gather user feedback, and track KPIs. Regularly review and optimize workflows, refine search capabilities, and expand automation. Schedule periodic governance reviews to ensure the system continues meeting evolving business needs.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Pitfalls to Avoid</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Underestimating change management requirements</li>
            <li>Migrating poor-quality data without cleanup</li>
            <li>Overcomplicating the information architecture</li>
            <li>Insufficient user training and support</li>
            <li>Lack of executive sponsorship and resources</li>
            <li>Ignoring integration with existing systems</li>
            <li>Inadequate governance and maintenance planning</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Measuring Success</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Track both quantitative metrics (search times, storage costs, workflow cycle times) and qualitative indicators (user satisfaction, compliance confidence, collaboration effectiveness). Regular reporting demonstrates value and guides ongoing investment decisions.
          </p>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mt-12">
            <p className="text-gray-800 font-semibold mb-2">Ready to transform your document management?</p>
            <p className="text-gray-700">
              Sødera Solutions specializes in enterprise document management implementation and optimization. <Link to="/contact" className="text-purple-600 hover:text-purple-700 font-semibold">Contact our team</Link> to discuss your requirements.
            </p>
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