import { ArrowLeft, Calendar, Clock, User, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogArticleSAM() {
  const articleUrl = 'https://www.soedera.eu/blog/sam-introduction';

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
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
            Product Innovation
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Introducing SAM: Our Revolutionary RDS Management Tool
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <span>December 31, 2025</span>
          </div>
          <div className="flex items-center">
            <User className="w-5 h-5 mr-2" />
            <span>Sødera Team</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            <span>8 min read</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://i.imgur.com/uwiQHP8.jpeg" 
            alt="SAM Dashboard Interface"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              In the complex world of industrial asset management, maintaining a clear, consistent, and scalable structure for asset identification has always been a significant challenge. Today, we're excited to introduce <strong>SAM (Sødera Asset Management)</strong> — a revolutionary cloud-based Reference Designation System (RDS) management tool that transforms how organizations create, manage, and maintain their asset structures.
            </p>
          </div>

          {/* The Challenge */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge of Traditional RDS Management</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Organizations across industries struggle with fragmented asset data, inconsistent naming conventions, and manual processes that lead to errors and inefficiencies. Traditional methods of managing Reference Designation Systems often involve:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Disconnected spreadsheets and documents scattered across departments</li>
              <li>Manual data entry prone to human error and inconsistencies</li>
              <li>Lack of standardization across projects and facilities</li>
              <li>Difficulty in maintaining compliance with international standards</li>
              <li>Time-consuming processes for updates and revisions</li>
              <li>Limited collaboration capabilities between teams</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These challenges not only slow down operations but can also lead to costly mistakes, safety issues, and missed opportunities for optimization.
            </p>
          </div>

          {/* What is SAM */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is SAM?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>SAM (Sødera Asset Management)</strong> is a comprehensive, cloud-based platform designed to streamline and optimize how organizations handle their Reference Designation Systems. Built on the robust foundation of <strong>Microsoft Azure</strong>, SAM combines cutting-edge technology with deep industry expertise to deliver a solution that is powerful, scalable, and intuitive.
            </p>
            <p className="text-gray-700 leading-relaxed">
              SAM isn't just another database tool — it's a complete ecosystem for managing your asset structure from initial planning through operational lifecycle and decommissioning. It brings together industry best practices, international standards compliance, and modern cloud technology to create a single source of truth for your organization's asset data.
            </p>
          </div>

          {/* Core Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Features That Set SAM Apart</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Standards-Based Framework</h3>
                <p className="text-gray-700 leading-relaxed">
                  SAM is built on internationally recognized standards including ISO/IEC 81346 Series, IEC 81355, and IEC 61082-1. This ensures your asset structure is compliant, consistent, and compatible with industry best practices from day one.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Intelligent Hierarchy Management</h3>
                <p className="text-gray-700 leading-relaxed">
                  Create and manage complex asset hierarchies with ease. SAM's intuitive interface allows you to define locations, systems, equipment, and components while automatically maintaining relationships and dependencies between assets.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Automated Designation Generation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Say goodbye to manual tag creation. SAM automatically generates reference designations based on your configured rules and standards, ensuring consistency and eliminating human error in the naming process.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Real-Time Collaboration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Multiple team members can work simultaneously on asset structures with real-time updates and change tracking. Version control ensures you always know who changed what and when.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced Search and Filtering</h3>
                <p className="text-gray-700 leading-relaxed">
                  Find any asset instantly with powerful search capabilities. Filter by location, system, equipment type, or any custom attribute. Export results for reporting or integration with other systems.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Integration Ready</h3>
                <p className="text-gray-700 leading-relaxed">
                  SAM seamlessly integrates with your existing systems through robust APIs. Connect with ERP, CMMS, BIM platforms, and other enterprise systems to maintain data consistency across your organization.
                </p>
              </div>
            </div>
          </div>

          {/* Azure Power */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Powered by Microsoft Azure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              SAM leverages the power, security, and reliability of <strong>Microsoft Azure</strong> to deliver enterprise-grade performance:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Global Availability:</strong> Access your asset data from anywhere in the world with Azure's global infrastructure</li>
              <li><strong>Enterprise Security:</strong> Bank-level encryption, multi-factor authentication, and role-based access control</li>
              <li><strong>Automatic Scaling:</strong> Handle projects of any size — from small facilities to multinational operations</li>
              <li><strong>99.9% Uptime SLA:</strong> Reliable access to your critical asset information when you need it</li>
              <li><strong>Automatic Backups:</strong> Your data is continuously backed up and can be restored at any point in time</li>
              <li><strong>Compliance Ready:</strong> Azure's compliance certifications support your regulatory requirements</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-World Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">⏱️ Time Savings</h4>
                <p className="text-gray-700">Reduce asset tagging and documentation time by up to 70% with automated processes and intelligent templates.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">🎯 Error Reduction</h4>
                <p className="text-gray-700">Eliminate human error in asset designation with automated validation and standards compliance checking.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">💰 Cost Efficiency</h4>
                <p className="text-gray-700">Lower operational costs through improved efficiency, reduced rework, and better asset lifecycle management.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">📊 Better Insights</h4>
                <p className="text-gray-700">Gain valuable insights into your asset portfolio with comprehensive reporting and analytics capabilities.</p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Benefits from SAM?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              SAM is designed for organizations across multiple industries:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Oil & Gas:</strong> Manage complex offshore and onshore facility structures with thousands of assets</li>
              <li><strong>Manufacturing:</strong> Maintain consistent equipment naming across multiple production facilities</li>
              <li><strong>Power Generation:</strong> Track assets from generation to distribution with proper hierarchy</li>
              <li><strong>Construction & Engineering:</strong> Create standardized asset structures for new projects</li>
              <li><strong>Marine & Shipping:</strong> Manage vessel systems and equipment with industry-standard designations</li>
              <li><strong>Mining:</strong> Organize plant and mobile equipment across mining operations</li>
            </ul>
          </div>

          {/* Getting Started */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started with SAM</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We've designed SAM to be intuitive from day one, but we also provide comprehensive support to ensure your success:
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
              <li><strong>Initial Consultation:</strong> We work with you to understand your specific requirements and configure SAM to match your needs</li>
              <li><strong>Data Migration:</strong> Our team helps migrate your existing asset data into SAM with minimal disruption</li>
              <li><strong>Training:</strong> Comprehensive training programs for administrators and end-users ensure everyone is confident using the system</li>
              <li><strong>Ongoing Support:</strong> Access to our expert support team and regular system updates to keep improving your experience</li>
            </ol>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Asset Management?</h2>
            <p className="text-lg mb-6 text-orange-50">
              Join the growing number of organizations that are revolutionizing their RDS management with SAM. Contact us today for a personalized demo and see how SAM can optimize your operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Schedule a Demo
              </Link>
              <Link 
                to="/services/rds" 
                className="px-8 py-3 bg-orange-700 text-white rounded-lg font-semibold hover:bg-orange-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Learn More About RDS
              </Link>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Future of Asset Management</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              SAM represents a fundamental shift in how organizations approach asset management. By combining international standards compliance, cloud technology, and intelligent automation, we've created a tool that not only solves today's challenges but is ready for tomorrow's opportunities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're managing a single facility or a global portfolio of assets, SAM provides the structure, flexibility, and power you need to maintain control, ensure compliance, and drive operational excellence. Welcome to the future of Reference Designation System management — welcome to SAM.
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
