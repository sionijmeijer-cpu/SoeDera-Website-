import { ArrowLeft, Calendar, Clock, User, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogArticleBIM() {
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
            <span>8 min read</span>
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
              Building Information Modelling (BIM) has revolutionized the architecture, engineering, and construction (AEC) industry. As we move forward, understanding emerging trends and best practices is crucial for staying competitive in this rapidly evolving landscape.
            </p>
          </div>

          {/* Evolution */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Evolution of BIM Technology</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              BIM has evolved from simple 3D modeling to comprehensive digital ecosystems that integrate design, construction, and facility management. Modern BIM platforms leverage cloud computing, artificial intelligence, and real-time collaboration to transform how we build and manage infrastructure.
            </p>
          </div>

          {/* Key Trends */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Trends Shaping BIM's Future</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">AI-Powered Design Optimization</h3>
                <p className="text-gray-700 leading-relaxed">
                  Artificial intelligence is enabling automated design optimization, clash detection, and predictive analytics. Machine learning algorithms can analyze thousands of design iterations to identify the most efficient solutions for energy consumption, structural integrity, and cost optimization.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Digital Twins and IoT Integration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Digital twins create virtual replicas of physical assets, enabling real-time monitoring and predictive maintenance. By integrating IoT sensors with BIM models, facility managers can track performance metrics, energy consumption, and maintenance needs throughout a building's lifecycle.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Cloud-Based Collaboration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cloud platforms are breaking down geographical barriers, enabling seamless collaboration between architects, engineers, contractors, and clients worldwide. Real-time updates, version control, and centralized data management improve project coordination and reduce errors.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Augmented and Virtual Reality</h3>
                <p className="text-gray-700 leading-relaxed">
                  AR and VR technologies are transforming how stakeholders visualize and interact with BIM models. From immersive design reviews to on-site construction guidance, these technologies enhance understanding and decision-making throughout the project lifecycle.
                </p>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices for BIM Implementation</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Establish Clear BIM Standards</h3>
                <p className="text-gray-700 leading-relaxed">
                  Develop comprehensive BIM execution plans (BEP) that define modeling standards, level of detail (LOD) requirements, and collaboration protocols. Consistency in naming conventions, file structures, and data formats is essential for successful multi-disciplinary coordination.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Invest in Training and Change Management</h3>
                <p className="text-gray-700 leading-relaxed">
                  BIM adoption requires more than just software implementation. Invest in comprehensive training programs, establish internal champions, and foster a culture that embraces digital transformation. Regular workshops and certifications ensure teams stay current with evolving technologies.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Prioritize Data Quality and Governance</h3>
                <p className="text-gray-700 leading-relaxed">
                  High-quality data is the foundation of effective BIM. Implement rigorous quality control processes, establish data governance frameworks, and use automated validation tools to ensure model accuracy and reliability throughout the project lifecycle.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Embrace Open Standards and Interoperability</h3>
                <p className="text-gray-700 leading-relaxed">
                  Support for open standards like IFC (Industry Foundation Classes) and COBie (Construction Operations Building Information Exchange) ensures seamless data exchange between different software platforms and stakeholders, reducing vendor lock-in and improving long-term data accessibility.
                </p>
              </div>
            </div>
          </div>

          {/* Challenges */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overcoming Common BIM Challenges</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Despite its benefits, BIM implementation faces challenges including high initial costs, resistance to change, and interoperability issues. Success requires executive commitment, phased implementation strategies, and continuous process refinement based on lessons learned.
            </p>
          </div>

          {/* Future */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Road Ahead</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The future of BIM is bright, with emerging technologies like generative design, blockchain for contract management, and advanced analytics promising to further transform the industry. Organizations that embrace these innovations while maintaining focus on fundamentals will be best positioned for success.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your BIM Workflows?</h2>
            <p className="text-lg mb-6 text-orange-50">
              Discover how Sødera Solutions can help you implement best-in-class BIM practices and digital asset management strategies tailored to your organization's needs.
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
