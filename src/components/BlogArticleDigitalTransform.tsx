import { ArrowLeft, Calendar, Clock, User, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogArticleDigitalTransform() {
  const handleLinkedInShare = () => {
    const url = encodeURIComponent(window.location.href);
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
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
              Digital Transformation
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Digital Transformation in Manufacturing: A Practical Roadmap
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
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>11 min read</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl mb-12">
            <img
              src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1920&q=80"
              alt="Manufacturing Digital Transformation"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Digital transformation is revolutionizing manufacturing operations worldwide. This practical roadmap guides manufacturers through the journey from traditional processes to connected, intelligent operations that drive efficiency, quality, and competitive advantage.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Manufacturing Digital Transformation</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Digital transformation in manufacturing goes beyond simply adopting new technologies. It represents a fundamental shift in how manufacturers operate, make decisions, and deliver value. This transformation integrates digital technologies across the entire value chain—from supply chain and production to quality control and customer service.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Business Case for Transformation</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Operational Excellence</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Digital technologies enable real-time visibility into operations, predictive maintenance, and automated quality control. Manufacturers report 20-30% improvements in overall equipment effectiveness (OEE) and significant reductions in unplanned downtime through digital transformation initiatives.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cost Reduction</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Optimized resource utilization, reduced waste, lower energy consumption, and improved inventory management deliver substantial cost savings. Digital twins enable virtual testing and optimization before physical implementation, reducing costly trial-and-error approaches.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Competitive Advantage</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Faster time-to-market, mass customization capabilities, and superior product quality differentiate digitally transformed manufacturers. Data-driven insights enable better decision-making and more responsive operations in dynamic market conditions.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Phase 1: Assessment and Strategy (Months 1-3)</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Current State Analysis</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Conduct a comprehensive assessment of existing operations, technology infrastructure, data landscape, and organizational capabilities. Identify pain points, inefficiencies, and opportunities. Benchmark against industry standards and best-in-class performers.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Define Vision and Objectives</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Establish clear business objectives tied to strategic priorities. Define what success looks like: specific KPIs for productivity, quality, cost reduction, and customer satisfaction. Ensure alignment between digital initiatives and overall business strategy.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Prioritize Use Cases</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Identify and prioritize transformation initiatives based on business impact, feasibility, and strategic importance. Focus on use cases that deliver quick wins while building toward longer-term transformation goals. Consider dependencies and sequencing.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Phase 2: Foundation Building (Months 4-9)</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Infrastructure</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Establish robust data collection, storage, and management capabilities. Implement IoT sensors and edge computing where needed. Create data governance frameworks and ensure data quality. Build data pipelines that integrate information from disparate systems.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Connectivity and Integration</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Connect machines, systems, and processes. Implement industrial IoT platforms and edge computing. Integrate existing systems (ERP, MES, SCADA, PLM) to create a unified data ecosystem. Ensure cybersecurity measures protect connected operations.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cloud Infrastructure</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Migrate appropriate workloads to cloud platforms for scalability and flexibility. Adopt hybrid cloud approaches that balance on-premises control with cloud capabilities. Leverage cloud-based analytics, AI/ML services, and collaboration tools.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Phase 3: Capability Development (Months 10-18)</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Advanced Analytics and AI</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Implement predictive analytics for maintenance, quality, and demand forecasting. Deploy machine learning models for process optimization and anomaly detection. Use AI for intelligent scheduling, resource allocation, and supply chain optimization.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Digital Twins</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Create virtual replicas of physical assets, processes, and systems. Use digital twins for simulation, testing, and optimization without disrupting production. Enable predictive insights and scenario planning through virtual modeling.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Automation and Robotics</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Deploy collaborative robots (cobots) for repetitive or hazardous tasks. Implement automated guided vehicles (AGVs) for material handling. Use robotic process automation (RPA) for administrative and transactional processes.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Augmented Reality and Visualization</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Implement AR solutions for training, maintenance, and quality inspection. Use visual management systems and real-time dashboards. Enable remote expert support through AR-enabled collaboration tools.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Phase 4: Scaling and Optimization (Months 19-24+)</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Enterprise Rollout</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Scale successful pilot programs across multiple sites and business units. Standardize processes and platforms while allowing for local customization. Establish centers of excellence to support ongoing transformation.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Continuous Improvement</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Implement feedback loops and continuous monitoring of KPIs. Regularly review and refine digital solutions based on performance data and user feedback. Stay current with emerging technologies and industry best practices.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Innovation Culture</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Foster a culture of innovation and continuous learning. Encourage experimentation and calculated risk-taking. Establish innovation labs or programs for exploring emerging technologies and new business models.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Critical Success Factors</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Leadership Commitment</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Executive sponsorship and visible leadership support are essential. Leaders must champion transformation, allocate resources, and remove organizational barriers. Digital transformation requires sustained commitment through inevitable challenges.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Change Management</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Address the human side of transformation through comprehensive change management. Communicate clearly and frequently. Involve employees in the transformation process. Celebrate successes and learn from setbacks.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Skills Development</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Invest heavily in workforce training and development. Build digital literacy across the organization. Develop data analytics capabilities. Partner with educational institutions and technology vendors for specialized training programs.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Ecosystem Partnerships</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Collaborate with technology providers, system integrators, and industry partners. Leverage external expertise for specialized capabilities. Participate in industry consortiums and standards development to shape the future of manufacturing.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Pitfalls to Avoid</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Technology-first approach without clear business objectives</li>
            <li>Underestimating change management requirements</li>
            <li>Attempting too much too quickly without building foundations</li>
            <li>Neglecting cybersecurity in connected operations</li>
            <li>Poor data quality undermining analytics initiatives</li>
            <li>Insufficient investment in skills development</li>
            <li>Lack of integration between legacy and new systems</li>
            <li>Failing to measure and demonstrate business value</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Measuring Success</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Track both leading and lagging indicators across multiple dimensions: operational performance (OEE, cycle time, quality), financial results (cost reduction, revenue growth), and organizational capabilities (digital skills, innovation rate). Regular reporting and review ensure transformation stays on track and delivers expected business value.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg mt-12">
            <p className="text-gray-800 font-semibold mb-2">Ready to start your digital transformation journey?</p>
            <p className="text-gray-700">
              Sødera Solutions partners with manufacturers to design and implement digital transformation strategies. <Link to="/contact" className="text-indigo-600 hover:text-indigo-700 font-semibold">Contact us</Link> to discuss your transformation goals.
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