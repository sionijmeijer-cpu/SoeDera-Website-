import { Calendar, ArrowRight, User, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export default function Blog() {
  return (
    <div className="pt-[128px]">
      <BlogContent />
    </div>
  );
}

function BlogContent() {
  const blogPosts = [
    {
      id: '1',
      title: 'Introducing SAM: Our Revolutionary RDS Management Tool',
      excerpt: "We're excited to announce that we're developing SAM - a Reference Designation System management tool powered by Azure. Combining years of expertise with innovative technology to transform how organizations manage their infrastructure. SAM is our answer to the challenges organizations face: inconsistent naming conventions, integrity of the asset register, difficulty maintaining standards compliance, lack of integration with existing systems, complex manual processes, and limited visibility across the infrastructure. Built with international standards at its core, SAM ensures your reference designation system remains compliant with IEC 81346, ISO standards, and industry-specific guidelines.",
      date: '2025-11-19',
      category: 'Reference Designation',
      author: 'SøDera Team',
      readTime: '8 min read',
      tags: ['RDS', 'SAM', 'Azure', 'Innovation', 'Standards', 'Technology'],
    },
    {
      id: '2',
      title: 'The Future of Building Information Modelling (BIM) in Construction: Trends and Best Practices',
      excerpt: 'Building Information Modelling (BIM) is transforming the construction industry by enabling better collaboration, reducing errors, and improving project outcomes. This comprehensive guide explores how BIM technology is revolutionizing design coordination, construction management, and facility operations. Learn about emerging trends like AI-powered BIM, cloud collaboration, and digital twin integration. We cover best practices for successful BIM implementation, including team training, software selection, and workflow optimization. Discover how leading construction firms are leveraging BIM to reduce costs by up to 20% and accelerate project timelines.',
      date: '2025-01-15',
      category: 'BIM & Construction',
      author: 'Sarah Mitchell',
      readTime: '8 min read',
      tags: ['BIM', 'Construction Technology', 'Digital Transformation', '3D Modelling'],
    },
    {
      id: '3',
      title: 'Enterprise Document Management Systems: Complete Guide to Implementation and Best Practices',
      excerpt: 'In today\'s digital-first business environment, effective document management is crucial for operational efficiency and compliance. This comprehensive guide covers everything you need to know about implementing and maintaining an enterprise document management system (DMS). Learn proven strategies for metadata standardization, version control, access permissions, and regulatory compliance. We explore how modern DMS solutions integrate with existing business tools, support remote work, and enable seamless collaboration. Discover how organizations reduce document retrieval time by 80% and improve compliance audit success rates through proper document management.',
      date: '2025-01-08',
      category: 'Document Management',
      author: 'Michael Chen',
      readTime: '10 min read',
      tags: ['Document Management', 'Enterprise Systems', 'Compliance', 'Digital Workplace'],
    },
    {
      id: '4',
      title: 'Predictive Maintenance Strategies: Maximizing Asset Performance and Reducing Downtime',
      excerpt: 'Predictive maintenance is revolutionizing asset management across industries by leveraging data analytics, IoT sensors, and machine learning to anticipate equipment failures before they occur. This in-depth article explores how predictive maintenance strategies can extend asset lifecycles by 30-40%, reduce unplanned downtime by up to 50%, and optimize operational costs. We provide real-world case studies from the energy, manufacturing, and transportation sectors, demonstrating ROI and implementation timelines. Learn about condition monitoring technologies, vibration analysis, thermal imaging, and oil analysis techniques that enable proactive maintenance decisions.',
      date: '2025-01-02',
      category: 'Asset Management',
      author: 'David Rodriguez',
      readTime: '9 min read',
      tags: ['Asset Management', 'Predictive Maintenance', 'IoT', 'Industry 4.0'],
    },
    {
      id: '5',
      title: 'Agile vs. Waterfall Project Management: Complete Comparison and Decision Framework',
      excerpt: 'Choosing the right project management methodology is critical for project success. This comprehensive comparison analyzes Agile and Waterfall approaches, examining their strengths, limitations, and ideal use cases. Learn when to use Scrum, Kanban, or traditional waterfall methods based on project complexity, team size, and stakeholder requirements. We provide a decision framework to help you select and adapt methodologies to your organizational context. Discover hybrid approaches that combine the best of both worlds, and understand how successful organizations scale agile practices across multiple teams and departments.',
      date: '2024-12-20',
      category: 'Project Management',
      author: 'Emily Thompson',
      readTime: '12 min read',
      tags: ['Project Management', 'Agile', 'Waterfall', 'Scrum', 'Methodology'],
    },
    {
      id: '6',
      title: 'Digital Transformation in Manufacturing: Practical Roadmap and Implementation Strategy',
      excerpt: 'Digital transformation is reshaping manufacturing, enabling smart factories, predictive quality control, and supply chain optimization. This practical roadmap guides manufacturers through the complexities of digital transformation, from assessing current capabilities to implementing Industry 4.0 technologies. Learn about IoT integration, edge computing, digital twins, and automated quality inspection systems. We cover workforce training strategies, change management techniques, and how to build a business case for digital investments. Discover how manufacturers are achieving 25-30% productivity improvements and reducing quality defects by up to 40% through digital transformation initiatives.',
      date: '2024-12-15',
      category: 'Digital Transformation',
      author: 'James Anderson',
      readTime: '11 min read',
      tags: ['Manufacturing', 'Industry 4.0', 'IoT', 'Smart Factory', 'Automation'],
    },
    {
      id: '7',
      title: 'Reference Designation Systems (RDS): ISO/IEC Standards and Practical Implementation Guide',
      excerpt: 'Reference Designation Systems are essential for consistent identification and documentation of technical objects across industries. This comprehensive guide explores ISO/IEC 81346 and related standards, providing practical guidance for implementation in engineering, manufacturing, and facility management contexts. Learn how RDS improves asset traceability, simplifies maintenance operations, and enhances technical documentation quality. We cover structure principles, coding conventions, and integration with CAD/CAE systems. Discover how organizations reduce documentation errors by 60% and improve maintenance efficiency through standardized reference designation practices.',
      date: '2024-12-08',
      category: 'Standards & Compliance',
      author: 'Dr. Thomas Weber',
      readTime: '10 min read',
      tags: ['RDS', 'ISO Standards', 'Technical Documentation', 'Asset Identification'],
    },
    {
      id: '8',
      title: 'Cloud-Based Information Management: Security, Scalability, and Best Practices for Enterprises',
      excerpt: 'Cloud-based information management systems offer unprecedented scalability, accessibility, and collaboration capabilities for modern enterprises. This comprehensive guide explores cloud migration strategies, security considerations, and governance frameworks for managing enterprise information in the cloud. Learn about multi-cloud architectures, data sovereignty requirements, and disaster recovery planning. We examine leading cloud platforms and their information management capabilities, comparing costs, features, and integration options. Discover how organizations achieve 40% cost savings while improving information accessibility and security through cloud adoption.',
      date: '2024-11-28',
      category: 'Information Management',
      author: 'Rachel Kim',
      readTime: '9 min read',
      tags: ['Cloud Computing', 'Information Management', 'Data Security', 'Enterprise IT'],
    },
  ];

  const categories = ['All', 'Reference Designation', 'BIM & Construction', 'Document Management', 'Asset Management', 'Project Management', 'Digital Transformation', 'Standards & Compliance', 'Information Management'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 via-orange-500 to-blue-600 text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 animate-fade-in">
            Information Management Insights
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl opacity-95 leading-relaxed max-w-3xl mx-auto">
            Expert articles on document management, BIM, product development, and industry best practices
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm sticky top-[112px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className={category === 'All' 
                  ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                  : 'border-gray-300 hover:border-orange-600 hover:text-orange-600'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-100 cursor-pointer bg-white group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => window.location.href = `/blog/${post.id}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-orange-100 text-orange-800 text-sm font-medium">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-600 mb-4 leading-relaxed line-clamp-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs text-gray-600 border-gray-300">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="link" 
                    className="p-0 text-orange-600 hover:text-orange-700 font-semibold text-base group-hover:translate-x-2 transition-transform duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `/blog/${post.id}`;
                    }}
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-orange-600 via-orange-500 to-blue-600 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Stay Informed
          </h2>
          <p className="text-xl sm:text-2xl text-white mb-8 opacity-95 leading-relaxed">
            Subscribe to our newsletter for the latest insights on information management, industry trends, and expert tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your name"
              className="w-full sm:flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50 text-base shadow-lg"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50 text-base shadow-lg"
            />
            <Button className="w-full sm:w-auto bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg shadow-lg hover:shadow-2xl font-bold text-base transform hover:scale-105 transition-all duration-200">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
