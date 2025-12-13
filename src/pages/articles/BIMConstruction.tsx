import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

export default function BIMConstructionArticle() {
  return (
    <div className="pt-[128px] min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Back Button */}
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

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Header */}
        <header className="mb-12">
          <Badge className="bg-blue-100 text-blue-800 mb-4">BIM & Construction</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The Future of Building Information Modelling (BIM) in Construction: Trends and Best Practices
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6 text-gray-600 mb-8 border-b border-gray-200 pb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-orange-600" />
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-orange-600" />
              <span>Sarah Mitchell</span>
            </div>
            <div className="text-sm font-semibold text-orange-600">8 min read</div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {['BIM', 'Construction Technology', 'Digital Transformation', '3D Modelling'].map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs text-gray-600 border-gray-300">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <p className="text-xl leading-relaxed text-gray-800 font-medium">
            Building Information Modelling (BIM) is transforming the construction industry by enabling better collaboration, reducing errors, and improving project outcomes. This comprehensive guide explores how BIM technology is revolutionizing design coordination, construction management, and facility operations.
          </p>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding BIM Technology</h2>
            <p className="text-lg leading-relaxed">
              BIM goes beyond simple 3D modeling. It represents a comprehensive approach to managing building information throughout the entire project lifecycle—from conceptual design through construction, operation, and maintenance. Unlike traditional 2D drawings, BIM creates an intelligent digital representation of the building with all its spatial relationships, properties, and performance characteristics.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emerging Trends Shaping BIM</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-3">AI-Powered BIM</h3>
                <p className="text-lg leading-relaxed">
                  Artificial intelligence is enhancing BIM by automating design optimization, clash detection, and construction planning. Machine learning algorithms analyze historical project data to predict risks and recommend best practices.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-3">Cloud Collaboration</h3>
                <p className="text-lg leading-relaxed">
                  Cloud-based BIM platforms enable seamless collaboration among architects, engineers, contractors, and stakeholders regardless of their physical location. Real-time updates and version control minimize miscommunication.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-3">Digital Twin Integration</h3>
                <p className="text-lg leading-relaxed">
                  Digital twins connect BIM models with real-time building sensor data, enabling facility managers to monitor performance, predict maintenance needs, and optimize operations throughout the building's lifecycle.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Practices for Successful Implementation</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">1.</span>
                <span><strong>Team Training and Change Management:</strong> Ensure all team members understand BIM workflows and benefits. Invest in comprehensive training programs and change management strategies.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">2.</span>
                <span><strong>Software Selection:</strong> Choose BIM tools that integrate well with existing workflows and provide the specific capabilities your projects require.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">3.</span>
                <span><strong>Workflow Optimization:</strong> Develop clear BIM execution plans that define processes, responsibilities, and data requirements.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">4.</span>
                <span><strong>Standards and Protocols:</strong> Establish consistent naming conventions, level of detail (LOD) standards, and information exchange protocols.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quantifiable Benefits</h2>
            <p className="text-lg leading-relaxed mb-4">
              Leading construction firms are leveraging BIM to achieve impressive results:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Cost reduction of up to 20% through better planning and clash detection</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Accelerated project timelines through improved coordination</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Reduced construction errors and rework by up to 40%</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Improved facility operations through comprehensive building data</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Enhanced stakeholder communication and decision-making</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Future is Digital</h2>
            <p className="text-lg leading-relaxed">
              BIM is no longer just a technology trend—it's becoming a fundamental requirement in modern construction. As the industry continues to embrace digital transformation, organizations that successfully implement BIM will gain competitive advantages in project delivery, client satisfaction, and profitability.
            </p>
          </section>
        </div>

        {/* Share & CTA */}
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
