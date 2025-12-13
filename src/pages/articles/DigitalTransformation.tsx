import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

export default function DigitalTransformationArticle() {
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
          <Badge className="bg-red-100 text-red-800 mb-4">Digital Transformation</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Digital Transformation in Manufacturing: Practical Roadmap and Implementation Strategy
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6 text-gray-600 mb-8 border-b border-gray-200 pb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-orange-600" />
              <span>December 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-orange-600" />
              <span>James Anderson</span>
            </div>
            <div className="text-sm font-semibold text-orange-600">11 min read</div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {['Manufacturing', 'Industry 4.0', 'IoT', 'Smart Factory', 'Automation'].map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs text-gray-600 border-gray-300">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <p className="text-xl leading-relaxed text-gray-800 font-medium">
            Digital transformation is reshaping manufacturing, enabling smart factories, predictive quality control, and supply chain optimization. This practical roadmap guides manufacturers through the complexities of digital transformation, from assessing current capabilities to implementing Industry 4.0 technologies.
          </p>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Manufacturing Landscape is Changing</h2>
            <p className="text-lg leading-relaxed">
              Industry 4.0 represents the fourth industrial revolution—the convergence of digital, physical, and biological systems. Manufacturers adopting Industry 4.0 technologies gain significant competitive advantages through improved efficiency, reduced costs, enhanced quality, and greater agility in responding to market demands.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Digital Transformation Technologies</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-3">IoT Integration</h3>
                <p className="text-lg leading-relaxed">
                  Deploy IoT sensors on production equipment to collect real-time data on equipment performance, production metrics, and environmental conditions.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-3">Edge Computing</h3>
                <p className="text-lg leading-relaxed">
                  Process data at the edge (near the source) to enable real-time decision-making and reduce latency in critical manufacturing processes.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-3">Digital Twins</h3>
                <p className="text-lg leading-relaxed">
                  Create virtual replicas of physical equipment and processes to simulate scenarios, test optimizations, and predict failures.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-3">Automated Quality Inspection</h3>
                <p className="text-lg leading-relaxed">
                  Implement computer vision and AI-powered quality systems for faster, more consistent defect detection and process control.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-3">Advanced Analytics</h3>
                <p className="text-lg leading-relaxed">
                  Leverage machine learning to analyze production data, identify patterns, optimize processes, and predict equipment failures.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Practical Implementation Roadmap</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">Phase 1: Assessment</span>
                <span>Evaluate current capabilities, identify gaps, and define clear digital transformation objectives aligned with business strategy.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">Phase 2: Pilot</span>
                <span>Start with a controlled pilot on one production line or facility to test technologies, build expertise, and demonstrate ROI.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">Phase 3: Scale</span>
                <span>Expand successful solutions across the facility, documenting best practices and optimizing implementations.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">Phase 4: Enterprise</span>
                <span>Roll out digital transformation across all facilities, integrating systems with enterprise ERP and analytics platforms.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Workforce Strategy and Change Management</h2>
            <p className="text-lg leading-relaxed mb-4">
              Technology is only one part of digital transformation. Your workforce must be equipped with new skills and mindsets:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Data literacy training for operators and supervisors</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Technical training on new systems and software</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Change management communication and engagement</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Recruitment of data scientists and digital specialists</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Culture shift towards continuous improvement and experimentation</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Measuring Success and ROI</h2>
            <p className="text-lg leading-relaxed mb-4">
              Manufacturers achieving successful digital transformation report:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>25-30% productivity improvements through process optimization</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Up to 40% reduction in quality defects through automated inspection</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Reduced equipment downtime through predictive maintenance</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Improved supply chain visibility and responsiveness</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Enhanced product quality and customer satisfaction</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Path Forward</h2>
            <p className="text-lg leading-relaxed">
              Digital transformation in manufacturing is not a one-time project—it's an ongoing journey of continuous improvement and innovation. By following a structured roadmap, investing in people and technology, and maintaining focus on business outcomes, manufacturers can successfully navigate this transformation and thrive in Industry 4.0.
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
