import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

export default function ReferenceDesignationArticle() {
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
          <Badge className="bg-amber-100 text-amber-800 mb-4">Standards & Compliance</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Reference Designation Systems (RDS): ISO/IEC Standards and Practical Implementation Guide
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6 text-gray-600 mb-8 border-b border-gray-200 pb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-orange-600" />
              <span>December 8, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-orange-600" />
              <span>Dr. Thomas Weber</span>
            </div>
            <div className="text-sm font-semibold text-orange-600">10 min read</div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {['RDS', 'ISO Standards', 'Technical Documentation', 'Asset Identification'].map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs text-gray-600 border-gray-300">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <p className="text-xl leading-relaxed text-gray-800 font-medium">
            Reference Designation Systems are essential for consistent identification and documentation of technical objects across industries. This comprehensive guide explores ISO/IEC 81346 and related standards, providing practical guidance for implementation in engineering, manufacturing, and facility management contexts.
          </p>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is a Reference Designation System?</h2>
            <p className="text-lg leading-relaxed">
              A Reference Designation System (RDS) is a systematic approach to assigning unique, meaningful identifiers to technical objects—equipment, components, documents, and functional elements. RDS enables consistent identification across all phases of a project lifecycle, from design through operation and maintenance.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ISO/IEC 81346 Standards Overview</h2>
            <p className="text-lg leading-relaxed mb-4">
              ISO/IEC 81346 is the international standard for designation of equipment and systems. It provides the framework for creating structured designation schemes that are consistent, logical, and universally understood.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-3">Key Standard Components:</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex gap-4">
                    <span className="text-orange-600">•</span>
                    <span><strong>Hierarchical Structure:</strong> Objects organized in logical levels reflecting functional or physical relationships</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-orange-600">•</span>
                    <span><strong>Alphanumeric Coding:</strong> Designation codes combining letters and numbers to convey meaning</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-orange-600">•</span>
                    <span><strong>Functional Aspects:</strong> Reference to functional relationships and system organization</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-orange-600">•</span>
                    <span><strong>Construction Aspects:</strong> Physical structure and location-based designation</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Structure Principles</h2>
            <p className="text-lg leading-relaxed mb-4">
              ISO/IEC 81346 defines two primary organization aspects:
            </p>
            <div className="space-y-6">
              <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded">
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">Functional Structure</h3>
                <p className="text-blue-900">Organizes objects by their functional purpose and relationships—how systems work together to achieve overall functionality.</p>
              </div>
              <div className="p-6 bg-green-50 border-l-4 border-green-600 rounded">
                <h3 className="text-2xl font-semibold text-green-900 mb-3">Product Structure</h3>
                <p className="text-green-900">Organizes objects by their physical arrangement and hierarchical relationships—the actual construction and location of components.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Practical Implementation Benefits</h2>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Improved asset traceability across project lifecycle</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Simplified maintenance operations with clear identification</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Enhanced technical documentation quality and consistency</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Seamless integration with CAD/CAE systems</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Reduced documentation errors by up to 60%</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Improved maintenance efficiency through standardized designations</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Guide</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">1.</span>
                <span><strong>Define Scope:</strong> Determine which systems, equipment, and components require reference designations.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">2.</span>
                <span><strong>Establish Coding Rules:</strong> Define the alphanumeric scheme, character meanings, and hierarchical levels.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">3.</span>
                <span><strong>Document Structure:</strong> Create functional and product structures reflecting your systems and organization.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">4.</span>
                <span><strong>Tool Integration:</strong> Implement RDS in CAD, PDM, and maintenance management systems.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">5.</span>
                <span><strong>Training and Governance:</strong> Establish clear processes and train teams on RDS application and maintenance.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Applications</h2>
            <p className="text-lg leading-relaxed">
              RDS implementation is critical across multiple industries: power plants and utilities manage thousands of interconnected systems; chemical processing facilities require precise component identification for safety and compliance; manufacturing facilities use RDS for production equipment and automation systems; construction and engineering firms employ RDS for facility management and maintenance operations.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Future of RDS</h2>
            <p className="text-lg leading-relaxed">
              As organizations embrace Industry 4.0 and digital transformation, RDS becomes increasingly important for integrating physical assets with digital systems, IoT sensors, and data analytics platforms. Standardized reference designations enable seamless data exchange and integration across enterprise systems.
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
