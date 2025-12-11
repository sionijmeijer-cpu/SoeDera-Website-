import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export default function Blog() {
  const blogPosts = [
    {
      id: '1',
      title: 'The Future of Building Information Modelling in Construction',
      excerpt: 'Explore how BIM technology is revolutionizing the construction industry, from design coordination to facility management. Learn about emerging trends and best practices for successful implementation.',
      date: '2024-01-15',
      category: 'BIM',
      readTime: '5 min read',
    },
    {
      id: '2',
      title: 'Best Practices for Enterprise Document Management',
      excerpt: 'Discover proven strategies for implementing and maintaining an effective document management system. From metadata standards to access controls, we cover the essentials for success.',
      date: '2024-01-08',
      category: 'Document Management',
      readTime: '7 min read',
    },
    {
      id: '3',
      title: 'Maximizing Asset Performance Through Predictive Maintenance',
      excerpt: 'Learn how predictive maintenance strategies can extend asset lifecycles, reduce downtime, and optimize operational costs. Real-world examples from the energy and manufacturing sectors.',
      date: '2024-01-02',
      category: 'Asset Management',
      readTime: '6 min read',
    },
    {
      id: '4',
      title: 'Agile vs. Waterfall: Choosing the Right Project Management Approach',
      excerpt: 'A comprehensive comparison of agile and traditional project management methodologies. Understand when to use each approach and how to adapt frameworks to your organizational context.',
      date: '2023-12-20',
      category: 'Project Management',
      readTime: '8 min read',
    },
    {
      id: '5',
      title: 'Digital Transformation in Manufacturing: A Roadmap',
      excerpt: 'Navigate the complexities of digital transformation in manufacturing environments. From IoT integration to workforce training, we outline a practical roadmap for success.',
      date: '2023-12-15',
      category: 'Digital Transformation',
      readTime: '10 min read',
    },
    {
      id: '6',
      title: 'Reference Designation Systems: Standards and Implementation',
      excerpt: 'A deep dive into ISO/IEC reference designation standards and their practical application across industries. Essential reading for technical documentation professionals.',
      date: '2023-12-08',
      category: 'Standards & Compliance',
      readTime: '6 min read',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-blue-600 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Our Blog
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 leading-relaxed">
            Insights, best practices, and thought leadership from our team of experts
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <Card 
                key={post.id}
                className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-100 cursor-pointer"
                onClick={() => window.location.href = `/blog/${post.id}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-orange-100 text-orange-800 text-xs sm:text-sm">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-gray-900 mb-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-gray-500 flex items-center space-x-2">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button 
                    variant="link" 
                    className="p-0 text-orange-600 hover:text-orange-700 font-medium text-sm sm:text-base"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `/blog/${post.id}`;
                    }}
                  >
                    Read more <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-blue-600 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Stay Updated
          </h2>
          <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8 opacity-90">
            Subscribe to our newsletter for the latest insights and industry trends
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
            />
            <Button className="w-full sm:w-auto bg-white text-orange-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
