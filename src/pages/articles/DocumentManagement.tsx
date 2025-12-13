import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

export default function DocumentManagementArticle() {
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
          <Badge className="bg-green-100 text-green-800 mb-4">Document Management</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Enterprise Document Management Systems: Complete Guide to Implementation and Best Practices
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6 text-gray-600 mb-8 border-b border-gray-200 pb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-orange-600" />
              <span>January 8, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-orange-600" />
              <span>Michael Chen</span>
            </div>
            <div className="text-sm font-semibold text-orange-600">10 min read</div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {['Document Management', 'Enterprise Systems', 'Compliance', 'Digital Workplace'].map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs text-gray-600 border-gray-300">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <p className="text-xl leading-relaxed text-gray-800 font-medium">
            In today's digital-first business environment, effective document management is crucial for operational efficiency and compliance. This comprehensive guide covers everything you need to know about implementing and maintaining an enterprise document management system (DMS).
          </p>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Document Management Matters</h2>
            <p className="text-lg leading-relaxed">
              Businesses generate enormous amounts of documents daily—contracts, invoices, employee records, project documentation, compliance reports, and more. Without proper management systems, documents become scattered across multiple locations, versions become outdated, sensitive information becomes vulnerable, and finding critical documents becomes a time-consuming nightmare.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Components of Modern DMS</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-3">Metadata Standardization</h3>
                <p className="text-lg leading-relaxed">
                  Consistent metadata enables effective document discovery and organization. Implement standardized naming conventions, classification schemes, and tagging systems across your organization.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-3">Version Control</h3>
                <p className="text-lg leading-relaxed">
                  Track changes, maintain document history, and ensure teams always work with the latest version. Version control prevents conflicts and protects institutional knowledge.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-3">Access Permissions</h3>
                <p className="text-lg leading-relaxed">
                  Role-based access control ensures sensitive documents are protected while maintaining necessary accessibility. Implement granular permissions at document, folder, and field levels.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-3">Regulatory Compliance</h3>
                <p className="text-lg leading-relaxed">
                  Modern DMS solutions maintain audit trails, support retention policies, and facilitate regulatory compliance with standards like GDPR, HIPAA, and SOX.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Integration and Workflow</h2>
            <p className="text-lg leading-relaxed mb-4">
              Enterprise DMS solutions integrate with existing business tools and enable seamless workflows:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Integration with ERP, CRM, and HRM systems</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Automated document routing and approval workflows</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Support for remote work and distributed teams</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Mobile access for field and remote workers</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Collaboration features enabling seamless teamwork</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Best Practices</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">1.</span>
                <span><strong>Assess Current State:</strong> Inventory existing documents, identify pain points, and understand compliance requirements.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">2.</span>
                <span><strong>Define Classification Scheme:</strong> Develop consistent document categories, metadata fields, and naming conventions.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">3.</span>
                <span><strong>Plan Migration Strategy:</strong> Determine which legacy documents to migrate and establish cleanup procedures.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">4.</span>
                <span><strong>Configure Access Controls:</strong> Establish role-based permissions and security protocols.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600 font-bold">5.</span>
                <span><strong>Train Your Team:</strong> Ensure all users understand how to use the system effectively and consistently.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Measurable Business Impact</h2>
            <p className="text-lg leading-relaxed mb-4">
              Organizations implementing proper document management achieve significant improvements:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>80% reduction in document retrieval time</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Improved compliance audit success rates</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Reduced storage costs and physical space requirements</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Enhanced team collaboration and productivity</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-600">✓</span>
                <span>Better risk management and security posture</span>
              </li>
            </ul>
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
