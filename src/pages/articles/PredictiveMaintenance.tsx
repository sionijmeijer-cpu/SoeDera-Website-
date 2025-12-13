import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

export default function PredictiveMaintenanceArticle() {
  return (
    <div className="pt-[128px] min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="outline"
          onClick={() => window.location.href = '/blog'}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-600 border-gray-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Button>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <header className="mb-12">
          <Badge className="bg-purple-100 text-purple-800 mb-4">Asset Management</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Predictive Maintenance Strategies: Maximizing Asset Performance and Reducing Downtime
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6 text-gray-600 mb-8 border-b border-gray-200 pb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-orange-600" />
              <span>January 2, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-orange-600" />
              <span>David Rodriguez</span>
            </div>
            <div className="text-sm font-semibold text-orange-600">9 min read</div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {['Asset Management', 'Predictive Maintenance', 'IoT', 'Industry 4.0'].map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs text-gray-600 border-gray-300">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <p className="text-xl leading-relaxed text-gray-800 font-medium">
            Predictive maintenance is revolutionizing asset management across industries by leveraging data analytics, IoT sensors, and machine learning to anticipate equipment failures before they occur.
          </p>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Evolution of Maintenance Strategies</h2>
            <p className="text-lg leading-relaxed">
              Traditional maintenance approaches are reactive (fix problems as they occur) or preventive (maintenance on fixed schedules). Predictive maintenance takes a fundamentally different approach: using real-time data to determine equipment condition and schedule maintenance exactly when needed—no sooner, no later.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Technologies and Techniques</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-3">IoT Sensors and Data Collection</h3>
                <p className="text-lg leading-relaxed">
                  Deploy sensors throughout your equipment to continuously monitor operating conditions, capturing temperature, vibration, pressure, and performance metrics in real-time.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-3">Vibration Analysis</h3>
                <p className="text-lg leading-relaxed">
                  Analyze equipment vibration patterns to detect bearing wear, misalignment, and other mechanical issues before catastrophic failure occurs.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-3">Thermal Imaging</h3>
                <p className="text-lg leading-relaxed">
                  Detect hotspots and temperature anomalies that indicate electrical faults, friction, or insulation breakdown in electrical equipment.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-3">Oil Analysis</h3>
                <p className="text-lg leading-relaxed">
                  Analyze lubricating oil samples to identify wear particles, contamination, and chemical degradation—early indicators of internal damage.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-3">Machine Learning and Analytics</h3>
                <p className="text-lg leading-relaxed">
                  Use machine learning algorithms to identify patterns in historical data, predict failure probabilities, and optimize maintenance scheduling.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real-World Impact Across Industries</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-3">Energy Sector</h3>
                <p className="text-lg leading-relaxed">
                  Power plant operators use predictive maintenance to monitor turbine performance, prevent catastrophic failures, and reduce unplanned downtime by up to 50%.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-3">Manufacturing</h3>
                <p className="text-lg leading-relaxed">
                  Production facilities leverage predictive maintenance to minimize equipment downtime, extend asset life by 30-40%, and improve product quality.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-3">Transportation</h3>
                <p className="text-lg leading-relaxed">
                  Fleet operators use predictive analytics to schedule maintenance based on actual vehicle condition rather than mileage, reducing unexpected breakdowns and costs.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Benefits and ROI</h2>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Extend asset lifecycles by 30-40% through proactive maintenance</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Reduce unplanned downtime by up to 50%</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Optimize operational costs through targeted maintenance</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Improve safety by preventing catastrophic failures</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Enhance product quality and customer satisfaction</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Increase maintenance team efficiency and utilization</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Roadmap</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">1.</span>
                <span><strong>Asset Assessment:</strong> Identify high-value, failure-prone equipment where predictive maintenance will have greatest impact.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">2.</span>
                <span><strong>Sensor Deployment:</strong> Install IoT sensors and data collection infrastructure on priority assets.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">3.</span>
                <span><strong>Data Integration:</strong> Connect sensor data to analytics platforms and maintenance management systems.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">4.</span>
                <span><strong>Model Development:</strong> Create predictive models using historical data and machine learning.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">5.</span>
                <span><strong>Team Training:</strong> Train maintenance teams on new tools, processes, and data interpretation.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Future of Asset Management</h2>
            <p className="text-lg leading-relaxed">
              Predictive maintenance is becoming essential for organizations seeking competitive advantage through operational excellence. As IoT technology matures, costs decrease, and AI capabilities improve, predictive maintenance will become the standard approach to asset management.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Share this article</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="text-gray-600">LinkedIn</Button>
                <Button variant="outline" size="sm" className="text-gray-600">Twitter</Button>
                <Button variant="outline" size="sm" className="text-gray-600">Copy Link</Button>
              </div>
            </div>
            <Button
              onClick={() => window.location.href = '/blog'}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4"
            >
              Back to Blog
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
