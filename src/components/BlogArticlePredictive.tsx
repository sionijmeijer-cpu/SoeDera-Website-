import { ArrowLeft, Calendar, Clock, User, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogArticlePredictive() {
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
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
            Asset Management
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Predictive Maintenance: Strategies to Boost Asset Performance
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <span>January 18, 2025</span>
          </div>
          <div className="flex items-center">
            <User className="w-5 h-5 mr-2" />
            <span>Sødera Team</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            <span>9 min read</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=80" 
            alt="Predictive Maintenance"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Predictive maintenance represents a fundamental shift from reactive repairs and scheduled maintenance to data-driven, condition-based interventions. By leveraging sensors, analytics, and machine learning, organizations can prevent failures, optimize maintenance resources, and maximize asset performance.
            </p>
          </div>

          {/* Evolution */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Evolution of Maintenance Strategies</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reactive Maintenance (Run-to-Failure)</h3>
                <p className="text-gray-700 mb-2">Fix equipment only after it breaks.</p>
                <p className="text-sm text-gray-600"><strong>Drawback:</strong> Unplanned downtime, production losses, and expensive emergency repairs.</p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Preventive Maintenance (Time-Based)</h3>
                <p className="text-gray-700 mb-2">Perform maintenance on fixed schedules regardless of actual condition.</p>
                <p className="text-sm text-gray-600"><strong>Drawback:</strong> Unnecessary maintenance activities and premature part replacement.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Condition-Based Maintenance</h3>
                <p className="text-gray-700 mb-2">Monitor equipment condition and maintain when thresholds are exceeded.</p>
                <p className="text-sm text-gray-600"><strong>Advantage:</strong> Maintenance based on actual need, but still reactive to detected issues.</p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Predictive Maintenance (Data-Driven)</h3>
                <p className="text-gray-700 mb-2">Use analytics and machine learning to predict failures before they occur.</p>
                <p className="text-sm text-gray-600"><strong>Advantage:</strong> Optimal maintenance timing, minimal downtime, and extended asset life.</p>
              </div>
            </div>
          </div>

          {/* Key Technologies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Technologies Enabling Predictive Maintenance</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Sensor Technology</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Modern sensors continuously monitor equipment health parameters:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li><strong>Vibration sensors:</strong> Detect mechanical imbalances, misalignment, and bearing wear</li>
                  <li><strong>Temperature sensors:</strong> Identify overheating and thermal anomalies</li>
                  <li><strong>Acoustic sensors:</strong> Listen for unusual sounds indicating component degradation</li>
                  <li><strong>Oil analysis sensors:</strong> Monitor contamination and wear particles in lubricants</li>
                  <li><strong>Electrical sensors:</strong> Track current, voltage, and power quality</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Machine Learning Algorithms</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  AI models analyze sensor data to predict failures:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li><strong>Anomaly detection:</strong> Identify deviations from normal operating patterns</li>
                  <li><strong>Regression models:</strong> Predict remaining useful life (RUL) of components</li>
                  <li><strong>Classification models:</strong> Categorize failure modes and severity levels</li>
                  <li><strong>Time series analysis:</strong> Forecast degradation trends over time</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Cloud & Edge Computing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Hybrid architectures balance real-time processing with advanced analytics. Edge computing enables immediate response to critical conditions, while cloud platforms provide scalable storage and sophisticated modeling capabilities for large-scale operations.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Integration Platforms</h3>
                <p className="text-gray-700 leading-relaxed">
                  Predictive maintenance systems integrate with CMMS, ERP, and asset management platforms to automate work order generation, inventory management, and maintenance scheduling based on predicted failure probabilities.
                </p>
              </div>
            </div>
          </div>

          {/* Implementation Strategy */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Strategy</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Step 1: Asset Prioritization</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Not all assets warrant predictive maintenance investment. Focus on:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Critical assets where failure causes significant production impact</li>
                  <li>High-value equipment with expensive repair or replacement costs</li>
                  <li>Assets with frequent failures or high maintenance costs</li>
                  <li>Equipment with safety implications for personnel or environment</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Step 2: Data Infrastructure</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Build the foundation for data collection and analysis:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Install appropriate sensors on prioritized assets</li>
                  <li>Establish reliable network connectivity (wired or wireless)</li>
                  <li>Implement data collection and storage systems</li>
                  <li>Ensure data quality, accuracy, and synchronization</li>
                  <li>Set up security measures to protect operational data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Step 3: Model Development</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Create predictive models tailored to your equipment:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Collect baseline data during normal operating conditions</li>
                  <li>Gather failure data and identify failure signatures</li>
                  <li>Train machine learning models on historical data</li>
                  <li>Validate model accuracy and tune parameters</li>
                  <li>Continuously refine models as more data becomes available</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Step 4: Integration & Automation</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Connect predictive insights to maintenance workflows:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Integrate with CMMS for automated work order creation</li>
                  <li>Link to inventory systems for parts availability</li>
                  <li>Establish alert thresholds and notification protocols</li>
                  <li>Create dashboards for visualization and monitoring</li>
                  <li>Define escalation procedures for critical predictions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Step 5: Organizational Change</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Transform maintenance culture and processes:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Train maintenance teams on new tools and processes</li>
                  <li>Establish data analyst roles or teams</li>
                  <li>Create new maintenance planning workflows</li>
                  <li>Define roles and responsibilities clearly</li>
                  <li>Foster data-driven decision-making culture</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Quantifiable Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <h4 className="text-3xl font-bold text-blue-900 mb-2">25-30%</h4>
                <p className="text-gray-700">Reduction in maintenance costs through optimized interventions and resource allocation.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <h4 className="text-3xl font-bold text-green-900 mb-2">70-75%</h4>
                <p className="text-gray-700">Decrease in unplanned downtime by predicting and preventing unexpected failures.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <h4 className="text-3xl font-bold text-purple-900 mb-2">20-25%</h4>
                <p className="text-gray-700">Increase in asset lifespan through optimal maintenance timing and condition awareness.</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                <h4 className="text-3xl font-bold text-orange-900 mb-2">10-20%</h4>
                <p className="text-gray-700">Improvement in production capacity by minimizing equipment unavailability.</p>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices for Success</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>Start Small:</strong> Begin with a pilot project on critical assets to prove value and build expertise</li>
              <li><strong>Focus on Data Quality:</strong> Ensure sensors are properly calibrated and data is accurate and reliable</li>
              <li><strong>Combine Approaches:</strong> Use predictive maintenance alongside preventive and condition-based strategies</li>
              <li><strong>Involve Maintenance Teams:</strong> Engage technicians early and incorporate their domain expertise</li>
              <li><strong>Measure and Communicate:</strong> Track KPIs and share success stories to build organizational support</li>
              <li><strong>Continuous Improvement:</strong> Regularly review model performance and refine based on outcomes</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Transform Your Maintenance Strategy</h2>
            <p className="text-lg mb-6 text-orange-50">
              Sødera Solutions helps organizations implement effective predictive maintenance programs that deliver measurable results. Let our experts guide you through sensor selection, model development, and integration.
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
