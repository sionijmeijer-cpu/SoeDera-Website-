import { Calendar, User, Tag, Share2, MessageCircle } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { useParams } from 'react-router-dom';

const blogArticles: Record<string, any> = {
  '1': {
    id: '1',
    title: 'Introducing SAM: Our Revolutionary RDS Management Tool',
    excerpt: "We're excited to announce that we're developing SAM - a Reference Designation System management tool powered by Azure.",
    date: '2025-11-19',
    category: 'Reference Designation',
    author: 'SøDera Team',
    readTime: '8 min read',
    tags: ['RDS', 'SAM', 'Azure', 'Innovation', 'Standards', 'Technology'],
    content: `
      <h2>Introducing SAM: Our Revolutionary RDS Management Tool</h2>
      
      <p>Today, we're thrilled to share that we're working on something truly special: SAM (SøDera Asset Management) - a comprehensive Reference Designation System (RDS) management tool that will optimize and improve how organizations handle create and manage their structure of assets.</p>

      <h3>The Vision Behind SAM</h3>
      
      <p>Over the years, we have accumulated knowledge and expertise in implementing Reference Designation Systems across various industries. We've seen the challenges organizations face firsthand:</p>
      
      <ul>
        <li>Inconsistent naming conventions</li>
        <li>Integrity of the asset register</li>
        <li>Difficulty maintaining standards compliance</li>
        <li>Lack of integration with existing systems</li>
        <li>Complex manual processes</li>
        <li>Limited visibility across the infrastructure</li>
      </ul>
      
      <p>SAM is our answer to these challenges. We're building a tool that combines our deep industry knowledge with technology to deliver a solution that truly understands the complexities of RDS management.</p>

      <h3>Key Benefits of SAM</h3>
      
      <h4>1. Standards Compliance Made Easy</h4>
      <p>SAM is built with international standards at its core. Whether you're working with IEC 81346, ISO standards, or industry-specific guidelines, SAM ensures your reference designation system remains compliant.</p>

      <h4>2. Seamless Integration</h4>
      <p>Built on Microsoft Azure, SAM integrates seamlessly with your existing enterprise systems, CAD software, and document management platforms via the APIs.</p>

      <h4>3. Real-Time Collaboration</h4>
      <p>Multiple teams can work simultaneously on the same project with real-time updates, version control, and change tracking.</p>

      <h4>4. Comprehensive Visualization</h4>
      <p>Interactive hierarchical views of your infrastructure, making it easy to understand relationships and dependencies across your entire portfolio.</p>

      <h4>5. Mobile Access</h4>
      <p>Access your RDS data anywhere, anytime, with our mobile-responsive interface - perfect for field operations and maintenance teams.</p>

      <h3>Standards We Support</h3>
      
      <p>SAM is designed to work with multiple international standards:</p>
      
      <ul>
        <li><strong>IEC 81346</strong> - Industrial systems, installations and equipment</li>
        <li><strong>ISO 15926</strong> - Integration of life-cycle data for process plants</li>
        <li><strong>Custom frameworks</strong> - Tailored to your organization's specific needs</li>
      </ul>

      <h3>Powered by Azure</h3>
      
      <p>We've chosen Microsoft Azure as our cloud platform for several compelling reasons:</p>

      <h4>Security</h4>
      <p>Enterprise-grade security with Azure's comprehensive compliance certifications, ensuring your sensitive infrastructure data is protected.</p>

      <h4>Scalability</h4>
      <p>Whether you're managing a single facility or a global network of systems, SAM scales effortlessly with your needs.</p>

      <h4>Reliability</h4>
      <p>Azure's 99.9% uptime SLA means SAM is always available when you need it.</p>

      <h4>Global Reach</h4>
      <p>With Azure's worldwide data centers, SAM delivers fast performance no matter where your team is located.</p>

      <h3>Innovation Meets Experience</h3>
      
      <p>What makes SAM special is the unique combination of:</p>
      
      <ul>
        <li><strong>Deep Industry Knowledge:</strong> Years of hands-on experience implementing RDS across diverse industries</li>
        <li><strong>International standard compliance:</strong> We ensure you meet the IEC/ISO 81346 standard series via quality control</li>
        <li><strong>User-Centric Design:</strong> Built by practitioners, for practitioners</li>
        <li><strong>Continuous Improvement:</strong> Regular updates based on real-world feedback and evolving standards</li>
      </ul>

      <h3>What's Next?</h3>
      
      <p>We're currently in the development phase, working closely with select partners to refine SAM's features and ensure it meets the real-world needs of RDS professionals.</p>
      
      <p>Key milestones ahead:</p>
      
      <ul>
        <li><strong>Q2 2025:</strong> Beta testing with pilot customers</li>
        <li><strong>Q3 2025:</strong> Feature refinement based on user feedback</li>
        <li><strong>Q4 2025:</strong> General availability</li>
      </ul>

      <h3>Stay Informed</h3>
      
      <p>We're incredibly excited about SAM and can't wait to share more details as we progress. This is more than just a software tool - it's the culmination of our expertise, vision, and commitment to helping organizations achieve operational excellence through better information management. Perfect for your system of systems IT landscape.</p>
      
      <p>Something special is cooking, and we want you to be part of the journey.</p>
      
      <p><strong>Stay tuned for:</strong></p>
      
      <ul>
        <li>Exclusive previews and demos</li>
        <li>Beta testing opportunities</li>
        <li>Special launch pricing for early adopters</li>
        <li>Webinars and training sessions</li>
      </ul>

      <h3>Get in Touch</h3>
      
      <p>Interested in learning more about SAM or participating in our beta program? We'd love to hear from you:</p>
      
      <ul>
        <li>Email us at <strong>info@soedera.eu</strong></li>
        <li>Follow our journey on <strong>LinkedIn</strong></li>
        <li>Subscribe to our newsletter for the latest updates</li>
      </ul>

      <h3>The Future is Here</h3>
      
      <p>SAM represents the next evolution in infrastructure management. By combining human expertise with technological innovation, we're creating a tool that doesn't just manage data - it transforms how organizations think about and interact with their reference designation systems.</p>
      
      <p>The future of RDS management is here. Are you ready to be part of it?</p>
    `,
    relatedArticles: ['7', '3', '4']
  },
};

export default function BlogDetail() {
  const { id } = useParams();
  const article = id ? blogArticles[id] : null;

  if (!article) {
    return (
      <div className="pt-[128px] min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">Sorry, we couldn't find the article you're looking for.</p>
          <Button 
            onClick={() => window.location.href = '/blog'}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
          >
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const relatedArticles = article.relatedArticles?.map((id: string) => blogArticles[id]).filter(Boolean) || [];

  return (
    <div className="pt-[128px]">
      {/* Article Header */}
      <section className="bg-gradient-to-r from-orange-600 via-orange-500 to-blue-600 text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Badge className="bg-white/20 text-white border border-white/30 text-base px-4 py-2 mb-4">
              {article.category}
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 text-base opacity-95">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>{article.author}</span>
            </div>
            <div className="text-base opacity-90">
              {article.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Share Buttons */}
          <div className="flex gap-4 mb-8 pb-8 border-b border-gray-200">
            <Button variant="outline" className="flex items-center gap-2 border-gray-300 hover:border-orange-600">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>

          {/* Main Article Content */}
          <article className="prose prose-lg max-w-none mb-12">
            <div className="text-gray-700 leading-relaxed space-y-6">
              {article.content.split('\n').map((line: string, index: number) => {
                line = line.trim();
                if (!line) return null;
                
                if (line.startsWith('<h2>')) {
                  return (
                    <h2 key={index} className="text-3xl sm:text-4xl font-bold text-gray-900 mt-8 mb-4">
                      {line.replace(/<h2>|<\/h2>/g, '')}
                    </h2>
                  );
                }
                if (line.startsWith('<h3>')) {
                  return (
                    <h3 key={index} className="text-2xl sm:text-3xl font-bold text-gray-900 mt-6 mb-3">
                      {line.replace(/<h3>|<\/h3>/g, '')}
                    </h3>
                  );
                }
                if (line.startsWith('<h4>')) {
                  return (
                    <h4 key={index} className="text-xl font-bold text-gray-900 mt-4 mb-2">
                      {line.replace(/<h4>|<\/h4>/g, '')}
                    </h4>
                  );
                }
                if (line.startsWith('<p>')) {
                  return (
                    <p key={index} className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      {line.replace(/<p>|<\/p>/g, '')}
                    </p>
                  );
                }
                if (line.startsWith('<ul>') || line.startsWith('<li>') || line.startsWith('</ul>')) {
                  return null;
                }
                if (line.startsWith('<strong>')) {
                  return (
                    <strong key={index} className="font-bold">
                      {line.replace(/<strong>|<\/strong>/g, '')}
                    </strong>
                  );
                }
                
                return (
                  <p key={index} className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    • {line}
                  </p>
                );
              })}

              {/* Bullet Points */}
              <div className="space-y-2 my-6">
                {article.content.includes('<li>') && (
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {article.content.match(/<li>([^<]+)<\/li>/g)?.map((item: string, idx: number) => (
                      <li key={idx} className="text-base sm:text-lg">
                        {item.replace(/<li>|<\/li>/g, '')}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </article>

          {/* Tags */}
          <div className="mb-12 pb-12 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Tag className="h-5 w-5 text-orange-600" />
              Tags
            </h3>
            <div className="flex flex-wrap gap-3">
              {article.tags.map((tag: string) => (
                <Badge key={tag} variant="outline" className="text-base px-4 py-2 border-gray-300 hover:border-orange-600 cursor-pointer">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((related: any) => (
                  <Card 
                    key={related.id}
                    className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    onClick={() => window.location.href = `/blog/${related.id}`}
                  >
                    <CardHeader>
                      <Badge className="bg-orange-100 text-orange-800 w-fit mb-3">
                        {related.category}
                      </Badge>
                      <CardTitle className="text-lg hover:text-orange-600 transition-colors">
                        {related.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {related.excerpt}
                      </p>
                      <Button 
                        variant="link" 
                        className="p-0 text-orange-600 hover:text-orange-700 text-sm"
                      >
                        Read More →
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Comments Section */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MessageCircle className="h-6 w-6 text-orange-600" />
              Comments
            </h3>
            
            <form className="mb-8 pb-8 border-b border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Leave a Comment</h4>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name *"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <input
                  type="email"
                  placeholder="Your email (optional)"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <textarea
                  placeholder="Share your thoughts..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 resize-none"
                />
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3">
                  Submit Comment
                </Button>
              </div>
            </form>

            <div className="text-center py-8 text-gray-600">
              <p className="flex items-center justify-center gap-2">
                <MessageCircle className="h-5 w-5" />
                No comments yet. Be the first to share your thoughts!
              </p>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-12">
            <Button 
              onClick={() => window.location.href = '/blog'}
              variant="outline"
              className="border-gray-300 hover:border-orange-600 hover:text-orange-600"
            >
              ← Back to Blog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
