import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

export default function ProjectManagementArticle() {
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
          <Badge className="bg-indigo-100 text-indigo-800 mb-4">Project Management</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Agile vs. Waterfall Project Management: Complete Comparison and Decision Framework
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6 text-gray-600 mb-8 border-b border-gray-200 pb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-orange-600" />
              <span>December 20, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-orange-600" />
              <span>Emily Thompson</span>
            </div>
            <div className="text-sm font-semibold text-orange-600">12 min read</div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {['Project Management', 'Agile', 'Waterfall', 'Scrum', 'Methodology'].map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs text-gray-600 border-gray-300">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <p className="text-xl leading-relaxed text-gray-800 font-medium">
            Choosing the right project management methodology is critical for project success. This comprehensive comparison analyzes Agile and Waterfall approaches, examining their strengths, limitations, and ideal use cases.
          </p>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Waterfall Project Management</h2>
            <p className="text-lg leading-relaxed">
              Waterfall is a linear, sequential project management approach where each phase must be completed before the next begins. Requirements are gathered upfront, a comprehensive plan is developed, and work flows through distinct phases: requirements, design, implementation, testing, and deployment.
            </p>
            <div className="mt-4 p-6 bg-blue-50 border-l-4 border-blue-600 rounded">
              <h4 className="font-semibold text-blue-900 mb-3">Waterfall Strengths:</h4>
              <ul className="space-y-2 text-blue-900">
                <li>✓ Clear requirements and fixed scope reduce uncertainty</li>
                <li>✓ Predictable timelines and budgets</li>
                <li>✓ Comprehensive documentation</li>
                <li>✓ Works well for regulated industries</li>
                <li>✓ Easy progress tracking against plan</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Agile Project Management</h2>
            <p className="text-lg leading-relaxed">
              Agile is an iterative, incremental approach emphasizing flexibility, collaboration, and continuous improvement. Work is organized into short iterations (sprints), with regular feedback, adaptation, and delivery of working software throughout the project lifecycle.
            </p>
            <div className="mt-4 p-6 bg-green-50 border-l-4 border-green-600 rounded">
              <h4 className="font-semibold text-green-900 mb-3">Agile Strengths:</h4>
              <ul className="space-y-2 text-green-900">
                <li>✓ Flexible and responsive to change</li>
                <li>✓ Early and continuous value delivery</li>
                <li>✓ Enhanced team collaboration and communication</li>
                <li>✓ Reduced risk through frequent feedback</li>
                <li>✓ Better adaptation to evolving requirements</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Differences at a Glance</h2>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-lg">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left p-4 font-semibold text-gray-900">Dimension</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Waterfall</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Agile</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-700">Scope</td>
                    <td className="p-4">Fixed at start</td>
                    <td className="p-4">Evolves over time</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-700">Timeline</td>
                    <td className="p-4">Planned upfront</td>
                    <td className="p-4">Flexible, iterative</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-700">Changes</td>
                    <td className="p-4">Costly & difficult</td>
                    <td className="p-4">Embraced & expected</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-700">Testing</td>
                    <td className="p-4">After development</td>
                    <td className="p-4">Continuous</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-700">Delivery</td>
                    <td className="p-4">At the end</td>
                    <td className="p-4">Incremental</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Use Waterfall</h2>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-4">
                <span className="text-orange-600">→</span>
                <span>Requirements are well-understood and unlikely to change</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">→</span>
                <span>Working in regulated industries with strict documentation needs</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">→</span>
                <span>Hardware development where changes are costly</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">→</span>
                <span>Infrastructure projects with fixed budgets and timelines</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">→</span>
                <span>Distributed teams in different time zones with limited synchronous communication</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Use Agile</h2>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-4">
                <span className="text-orange-600">→</span>
                <span>Requirements are evolving or uncertain</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">→</span>
                <span>Quick time-to-market is critical</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">→</span>
                <span>Software development with frequent user feedback</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">→</span>
                <span>Projects where innovation and continuous improvement are valued</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">→</span>
                <span>Co-located teams with direct access to stakeholders</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hybrid Approaches</h2>
            <p className="text-lg leading-relaxed">
              Many organizations adopt hybrid approaches combining the best of both methodologies. "Water-Scrum-Fall" uses waterfall for planning and deployment while employing Scrum for development. This flexibility allows organizations to leverage appropriate methodology for each phase of their projects.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Scaling Agile Across Organizations</h2>
            <p className="text-lg leading-relaxed">
              For organizations implementing Agile at scale, frameworks like SAFe (Scaled Agile Framework), LeSS (Large-Scale Scrum), and Disciplined Agile Delivery provide structures for coordinating multiple Agile teams while maintaining alignment with organizational goals.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Share this article</h3>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-gray-600 hover:text-orange-600"
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                >
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-gray-600 hover:text-orange-600"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }}
                >
                  Copy Link
                </Button>
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
