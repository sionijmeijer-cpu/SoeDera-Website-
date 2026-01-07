import { ArrowLeft, Calendar, Clock, User, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogArticleBIM() {
  const articleUrl = 'https://www.soedera.eu/blog/bim-trends';

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
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            Technology & Innovation
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          The Future of BIM: Key Trends & Best Practices
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <span>January 5, 2025</span>
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
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80" 
            alt="Building Information Modelling"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Building Information Modelling (BIM) has revolutionized the architecture, engineering, and construction (AEC) industry. As we move forward, understanding emerging trends and best practices is crucial for staying competitive in this rapidly evolving landscape. The future of BIM is not just about technology—it's about transforming how we design, build, and manage the built environment.
            </p>
          </div>

          {/* Evolution */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Evolution of BIM Technology</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              BIM has evolved from simple 3D modeling to comprehensive digital ecosystems that integrate design, construction, and facility management. Modern BIM platforms leverage cloud computing, artificial intelligence, and real-time collaboration to transform how we build and manage infrastructure.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This evolution reflects a fundamental shift in how the industry approaches project delivery. Instead of working in silos with 2D drawings, teams now collaborate on intelligent 3D models that contain rich information about every aspect of a project. This integrated approach improves coordination, reduces errors, and enables data-driven decision-making throughout the project lifecycle.
            </p>
          </div>

          {/* Key Trends */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Trends Shaping BIM's Future</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">AI-Powered Design Optimization</h3>
                <p className="text-gray-700 leading-relaxed">
                  Artificial intelligence is enabling automated design optimization, clash detection, and predictive analytics. Machine learning algorithms can analyze thousands of design iterations to identify the most efficient solutions for energy consumption, structural integrity, and cost optimization. This technology dramatically accelerates the design phase while improving overall project performance.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Digital Twins and IoT Integration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Digital twins create virtual replicas of physical assets, enabling real-time monitoring and predictive maintenance. By integrating IoT sensors with BIM models, facility managers can track performance metrics, energy consumption, and maintenance needs throughout a building's lifecycle. This enables proactive management rather than reactive repairs.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Cloud-Based Collaboration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cloud platforms are breaking down geographical barriers, enabling seamless collaboration between architects, engineers, contractors, and clients worldwide. Real-time updates, version control, and centralized data management improve project coordination and reduce errors. Teams can now work together regardless of physical location.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Augmented and Virtual Reality</h3>
                <p className="text-gray-700 leading-relaxed">
                  AR and VR technologies are transforming how stakeholders visualize and interact with BIM models. From immersive design reviews to on-site construction guidance, these technologies enhance understanding and decision-making throughout the project lifecycle. Clients can now walk through buildings before they are built.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced Analytics and Data Integration</h3>
                <p className="text-gray-700 leading-relaxed">
                  BIM data is becoming increasingly valuable as a source of insights. Advanced analytics tools extract actionable intelligence from building data, supporting performance optimization, sustainability improvements, and cost management throughout the asset lifecycle. Data-driven decision making is becoming the industry standard.
                </p>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices for BIM Implementation</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Establish Clear BIM Standards and Protocols</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Develop comprehensive BIM execution plans (BEP) that define modeling standards, level of detail (LOD) requirements, and collaboration protocols. Key components include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Consistent naming conventions and file structures across all disciplines</li>
                  <li>Clear LOD definitions for each project phase</li>
                  <li>Standardized layer naming and element properties</li>
                  <li>Defined coordination and clash detection procedures</li>
                  <li>Approval workflows and version control protocols</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Invest in Training and Change Management</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  BIM adoption requires more than just software implementation. A comprehensive approach includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Role-specific training for designers, modelers, and coordinators</li>
                  <li>Establishment of internal BIM champions and mentors</li>
                  <li>Change management strategies to address resistance</li>
                  <li>Regular workshops and continuous learning opportunities</li>
                  <li>Industry certifications and professional development programs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Prioritize Data Quality and Governance</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  High-quality data is the foundation of effective BIM. Critical activities include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Implement rigorous quality control processes and checkpoints</li>
                  <li>Establish data governance frameworks and ownership</li>
                  <li>Use automated validation tools to ensure model accuracy</li>
                  <li>Regular audits and quality assurance reviews</li>
                  <li>Clear escalation procedures for data conflicts</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Embrace Open Standards and Interoperability</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Support for open standards ensures long-term viability and flexibility. Focus on:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>IFC (Industry Foundation Classes) for data exchange</li>
                  <li>COBie (Construction Operations Building Information Exchange)</li>
                  <li>Open data formats to reduce vendor lock-in</li>
                  <li>API integrations with other business systems</li>
                  <li>Long-term data accessibility and portability</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Start with Pilot Projects</h3>
                <p className="text-gray-700 leading-relaxed">
                  Before implementing BIM across the organization, start with carefully selected pilot projects. This approach allows you to test processes, refine workflows, build team expertise, and demonstrate value before scaling to larger initiatives. Lessons learned can be captured and applied to subsequent projects.
                </p>
              </div>
            </div>
          </div>

          {/* Challenges */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overcoming Common BIM Challenges</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Despite its benefits, BIM implementation faces several challenges that must be addressed:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>High Initial Costs:</strong> Software licenses, hardware upgrades, and training require significant investment. However, ROI typically materializes within 2-3 years through efficiency gains and error reduction.</li>
              <li><strong>Resistance to Change:</strong> Staff accustomed to traditional workflows may resist new processes. Address this through comprehensive change management, clear communication of benefits, and ongoing support.</li>
              <li><strong>Interoperability Issues:</strong> Different software platforms may not communicate seamlessly. Standardize on common formats like IFC and establish clear data exchange protocols.</li>
              <li><strong>Learning Curve:</strong> BIM requires new skills and mindsets. Invest in training and allow adequate time for team members to develop proficiency before expecting full productivity.</li>
              <li><strong>Legacy Data Integration:</strong> Incorporating existing project data into BIM systems can be complex. Plan data conversion strategies carefully and budget appropriate resources.</li>
            </ul>
          </div>

          {/* Future Outlook */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Road Ahead: Future Developments</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The future of BIM is bright with several exciting developments on the horizon:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Generative Design:</strong> AI algorithms will generate multiple design options based on specified parameters, dramatically expanding what's possible in the design phase. Architects will focus on evaluation and refinement rather than initial generation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Blockchain for Contract Management:</strong> Distributed ledger technology can automate payment certifications, warranty tracking, and procurement processes, improving trust and efficiency in construction contracts.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Advanced Sustainability Analysis:</strong> BIM will become the standard tool for lifecycle assessment, carbon footprint calculation, and circular economy optimization, helping organizations meet net-zero building targets.
            </p>
          </div>

          {/* Measuring Success */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Measuring BIM Success</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Track these key performance indicators to demonstrate BIM value:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Reduction in RFIs (Requests for Information) and design errors</li>
              <li>Schedule improvements and on-time project delivery rates</li>
              <li>Cost savings from clash detection and waste reduction</li>
              <li>Team productivity metrics and time savings</li>
              <li>Client satisfaction and project quality scores</li>
              <li>Return on investment (ROI) and payback period</li>
              <li>Long-term facility management efficiency gains</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your BIM Workflows?</h2>
            <p className="text-lg mb-6 text-orange-50">
              Discover how Sødera Solutions can help you implement best-in-class BIM practices and digital asset management strategies tailored to your organization's needs. From strategy development to implementation support, we're here to guide your BIM journey.
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
