import { ArrowLeft, Calendar, Clock, User, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogArticleDigitalTransformation() {
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
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
            Digital Transformation
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Digital Transformation in Manufacturing: A Practical Roadmap
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <span>January 15, 2025</span>
          </div>
          <div className="flex items-center">
            <User className="w-5 h-5 mr-2" />
            <span>Sødera Team</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            <span>11 min read</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1920&q=80" 
            alt="Digital Manufacturing"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Digital transformation is reshaping the manufacturing industry, enabling unprecedented levels of efficiency, quality, and innovation. This comprehensive roadmap will guide you through the journey from traditional manufacturing to Industry 4.0 excellence.
            </p>
          </div>

          {/* Current State */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Manufacturing Digital Divide</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Today's manufacturing landscape is characterized by a significant digital divide. While some organizations have embraced smart factories and connected operations, many still rely on legacy systems, manual processes, and disconnected data silos that limit their competitiveness.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Digital transformation is no longer optional—it's essential for survival. Manufacturers that fail to digitize risk losing market share to more agile, data-driven competitors who can deliver better products faster and at lower cost.
            </p>
          </div>

          {/* Key Technologies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Technologies Driving Manufacturing Transformation</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Internet of Things (IoT)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Connected sensors and devices enable real-time monitoring of equipment, products, and environmental conditions. IoT data provides visibility into operations that was previously impossible, enabling predictive maintenance, quality control, and process optimization.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Artificial Intelligence & Machine Learning</h3>
                <p className="text-gray-700 leading-relaxed">
                  AI algorithms analyze vast amounts of production data to identify patterns, predict failures, optimize scheduling, and improve quality. Machine learning models continuously improve as they process more data, creating a self-improving manufacturing operation.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Cloud Computing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cloud platforms provide scalable computing power and storage for manufacturing applications. They enable collaboration across global facilities, support advanced analytics, and reduce IT infrastructure costs while improving flexibility and disaster recovery capabilities.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Digital Twins</h3>
                <p className="text-gray-700 leading-relaxed">
                  Virtual replicas of physical assets, processes, and systems allow manufacturers to simulate scenarios, test changes, and optimize operations without disrupting production. Digital twins bridge the physical and digital worlds for unprecedented insight and control.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced Robotics & Automation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Collaborative robots (cobots) work alongside humans, handling repetitive or dangerous tasks. Advanced automation systems adapt to changing requirements, improving flexibility while maintaining high precision and consistency.
                </p>
              </div>
            </div>
          </div>

          {/* Transformation Roadmap */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Digital Transformation Roadmap</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Phase 1: Assessment & Strategy (Months 1-3)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Begin with a comprehensive assessment of your current state and clear vision for the future:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Map current processes, systems, and data flows</li>
                  <li>Identify pain points, inefficiencies, and opportunities</li>
                  <li>Benchmark against industry leaders and competitors</li>
                  <li>Define strategic objectives and success metrics</li>
                  <li>Develop business case and secure executive sponsorship</li>
                  <li>Establish governance structure and transformation team</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Phase 2: Foundation Building (Months 4-9)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Create the infrastructure and capabilities needed for digital operations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Upgrade network infrastructure for IoT connectivity</li>
                  <li>Implement cloud platform for data storage and analytics</li>
                  <li>Deploy sensor networks on critical equipment</li>
                  <li>Establish data governance and security frameworks</li>
                  <li>Launch training programs for digital skills development</li>
                  <li>Select and onboard technology partners</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Phase 3: Pilot Implementation (Months 10-15)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Test and validate digital solutions in controlled environments:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Select pilot production line or facility</li>
                  <li>Implement IoT sensors and connectivity</li>
                  <li>Deploy analytics and visualization dashboards</li>
                  <li>Test predictive maintenance algorithms</li>
                  <li>Measure results against baseline metrics</li>
                  <li>Refine solutions based on lessons learned</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Phase 4: Scale & Expand (Months 16-24)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Roll out proven solutions across the organization:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Expand to additional production lines and facilities</li>
                  <li>Integrate systems for end-to-end visibility</li>
                  <li>Implement advanced analytics and AI capabilities</li>
                  <li>Automate key processes and workflows</li>
                  <li>Establish centers of excellence for knowledge sharing</li>
                  <li>Continuously optimize based on data insights</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Phase 5: Innovation & Optimization (Ongoing)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Continuously improve and explore new possibilities:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Experiment with emerging technologies</li>
                  <li>Develop digital twin capabilities</li>
                  <li>Implement autonomous systems where appropriate</li>
                  <li>Create data-driven product and service innovations</li>
                  <li>Build ecosystem partnerships and platforms</li>
                  <li>Drive continuous improvement culture</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Critical Success Factors */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Critical Success Factors</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Executive Leadership & Commitment</h4>
                  <p className="text-gray-700">Transformation requires sustained leadership support, adequate resources, and willingness to challenge existing ways of working.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">People & Culture</h4>
                  <p className="text-gray-700">Invest heavily in training, change management, and building a culture that embraces digital innovation and continuous learning.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Quality & Governance</h4>
                  <p className="text-gray-700">Digital transformation lives or dies on data quality. Establish strong governance, standards, and processes from day one.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cybersecurity</h4>
                  <p className="text-gray-700">Connected operations create new vulnerabilities. Build security into every layer of your digital architecture.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Agile Approach</h4>
                  <p className="text-gray-700">Use iterative, agile methods to deliver value quickly, learn from experience, and adapt strategies as needed.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Measuring Success */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Measuring Transformation Success</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Track these key performance indicators to monitor progress:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Operational Metrics</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Overall Equipment Effectiveness (OEE)</li>
                  <li>• First-pass yield and quality rates</li>
                  <li>• Production cycle times</li>
                  <li>• Unplanned downtime reduction</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Financial Metrics</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Cost per unit produced</li>
                  <li>• Inventory turnover</li>
                  <li>• Return on digital investment</li>
                  <li>• Working capital optimization</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Innovation Metrics</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Time to market for new products</li>
                  <li>• Percentage of revenue from new products</li>
                  <li>• Digital capability maturity scores</li>
                  <li>• Employee digital skill levels</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Customer Metrics</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• On-time delivery performance</li>
                  <li>• Customer satisfaction scores</li>
                  <li>• Customization capabilities</li>
                  <li>• Order fulfillment accuracy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Digital Transformation Journey?</h2>
            <p className="text-lg mb-6 text-orange-50">
              Sødera Solutions specializes in guiding manufacturers through successful digital transformation. Let our experienced team help you develop and execute a roadmap tailored to your unique challenges and opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start Your Journey
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
