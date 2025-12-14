import { Calendar, ArrowRight, User, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useState } from 'react';

export default function Blog() {
  return (
    <div className="min-h-screen pt-16">
      <BlogContent />
    </div>
  );
}

function BlogContent() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 'sam-introduction',
      title: 'Introducing SAM: Our Revolutionary RDS Management Tool',
      excerpt: "Discover SAM (Sødera Asset Management) - our comprehensive Reference Designation System management tool built on Microsoft Azure. Learn how SAM transforms asset structure management with automated designation generation, standards compliance, and real-time collaboration capabilities.",
      date: '2024-12-31',
      category: 'Product Innovation',
      author: 'Sødera Team',
      readTime: '8 min read',
      tags: ['SAM', 'RDS', 'Azure', 'Asset Management', 'Innovation'],
    },
    {
      id: 'bim-trends',
      title: 'The Future of BIM: Key Trends & Best Practices',
      excerpt: 'Building Information Modelling (BIM) has revolutionized the AEC industry. Explore emerging trends like AI-powered design optimization, digital twins, and cloud-based collaboration that are shaping the future of construction and infrastructure.',
      date: '2025-01-05',
      category: 'Technology & Innovation',
      author: 'Sødera Solutions Team',
      readTime: '8 min read',
      tags: ['BIM', 'Construction', 'Digital Twins', 'AI', 'Cloud'],
    },
    {
      id: 'document-management',
      title: 'Enterprise Document Management: Implementation Guide',
      excerpt: 'A comprehensive guide to implementing enterprise document management systems. Learn about assessment, system selection, migration strategies, and best practices for successful EDMS deployment.',
      date: '2025-01-10',
      category: 'Enterprise Solutions',
      author: 'Sødera Solutions Team',
      readTime: '10 min read',
      tags: ['EDMS', 'Document Management', 'Implementation', 'Workflow'],
    },
    {
      id: 'agile-waterfall',
      title: 'Agile vs. Waterfall: A Complete Comparison Framework',
      excerpt: 'Choosing between Agile and Waterfall methodologies is critical for project success. This comprehensive comparison provides a framework for making the right choice based on your project characteristics and organizational context.',
      date: '2025-01-12',
      category: 'Project Management',
      author: 'Sødera Solutions Team',
      readTime: '12 min read',
      tags: ['Agile', 'Waterfall', 'Project Management', 'Methodology'],
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation in Manufacturing: A Practical Roadmap',
      excerpt: 'A practical roadmap for manufacturers embarking on digital transformation. Explore strategies for IoT integration, predictive analytics, digital twins, and building a culture of innovation.',
      date: '2025-01-15',
      category: 'Digital Transformation',
      author: 'Sødera Solutions Team',
      readTime: '11 min read',
      tags: ['Manufacturing', 'Digital Transformation', 'IoT', 'Industry 4.0'],
    },
    {
      id: 'predictive-maintenance',
      title: 'Predictive Maintenance: Strategies to Boost Asset Performance',
      excerpt: 'Transform asset management from reactive to proactive with predictive maintenance. Learn about sensor technologies, machine learning algorithms, and implementation strategies that maximize equipment uptime and performance.',
      date: '2025-01-18',
      category: 'Asset Management',
      author: 'Sødera Solutions Team',
      readTime: '9 min read',
      tags: ['Predictive Maintenance', 'Asset Management', 'IoT', 'Machine Learning'],
    },
    {
      id: 'rds-standards',
      title: 'Reference Designation Systems (RDS): Standards & Practical Guide',
      excerpt: 'Master the fundamentals of Reference Designation Systems. Comprehensive coverage of ISO 81346, KKS, and RDS-PP standards, plus practical implementation strategies for industrial facilities.',
      date: '2025-01-20',
      category: 'Standards & Best Practices',
      author: 'Sødera Solutions Team',
      readTime: '10 min read',
      tags: ['RDS', 'ISO 81346', 'Standards', 'Asset Identification'],
    },
    {
      id: 'cloud-information',
      title: 'Cloud Information Management: Security, Scalability & Best Practices',
      excerpt: 'Explore comprehensive strategies for cloud-based information management. Learn about security architecture, scalability approaches, migration strategies, and governance frameworks for successful cloud adoption.',
      date: '2025-01-22',
      category: 'Cloud Technology',
      author: 'Sødera Solutions Team',
      readTime: '11 min read',
      tags: ['Cloud', 'Information Management', 'Security', 'Scalability'],
    },
  ];

  const categories = ['All', 'Product Innovation', 'Technology & Innovation', 'Enterprise Solutions', 'Project Management', 'Digital Transformation', 'Asset Management', 'Standards & Best Practices', 'Cloud Technology'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative w-full h-64 sm:h-80 md:h-96 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://i.imgur.com/AdeYe1P.jpeg)' }}>
      </section>

      {/* Category Filter */}
      <section className="py-6 sm:py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? 'default' : 'outline'}
                className={category === selectedCategory 
                  ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                  : 'border-gray-300 hover:border-orange-600 hover:text-orange-600'
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post, index) => (
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Stay Informed
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 opacity-95 leading-relaxed px-4">
            Subscribe to our newsletter for the latest insights on information management, industry trends, and expert tips
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg mx-auto px-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full sm:flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50 text-sm sm:text-base shadow-lg"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50 text-sm sm:text-base shadow-lg"
            />
            <Button className="w-full sm:w-auto bg-white text-orange-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-2xl font-bold text-sm sm:text-base transform hover:scale-105 transition-all duration-200">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
