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
  const [subscriberName, setSubscriberName] = useState('');
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!subscriberName || !subscriberEmail) {
      alert('Please fill in both name and email');
      return;
    }

    try {
      // Send email notification
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '9a7c8c9d-8e3f-4b5a-9c2d-1e4f5a6b7c8d',
          subject: 'New Newsletter Subscription - Sødera Solutions',
          from_name: 'Sødera Solutions Newsletter',
          to_email: 'info@soedera.eu',
          message: `New subscriber:\n\nName: ${subscriberName}\nEmail: ${subscriberEmail}`,
        }),
      });

      // Show success popup
      setShowSuccessPopup(true);
      
      // Reset form
      setSubscriberName('');
      setSubscriberEmail('');
      
      // Hide popup after 3 seconds
      setTimeout(() => setShowSuccessPopup(false), 3000);
    } catch (error) {
      alert('Subscription failed. Please try again.');
    }
  };

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
      id: 'agile-waterfall',
      title: 'Agile vs. Waterfall: A Complete Comparison Framework',
      excerpt: 'Choosing between Agile and Waterfall methodologies is critical for project success. This comprehensive comparison provides a framework for making the right choice based on your project characteristics and organizational context.',
      date: '2025-01-12',
      category: 'Project Management',
      author: 'Sødera Solutions Team',
      readTime: '12 min read',
      tags: ['Agile', 'Waterfall', 'Project Management', 'Methodology'],
    },

  ];

  const categories = ['All', 'Product Innovation', 'Technology & Innovation', 'Enterprise Solutions', 'Project Management'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative w-full h-64 sm:h-80 md:h-96 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://i.imgur.com/8ocvstf.png)' }}>
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
      <section className="bg-blue-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Stay Informed
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 opacity-95 leading-relaxed px-4">
            Subscribe to our newsletter for the latest insights on information management, industry trends, and expert tips
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg mx-auto px-4">
            <input
              type="text"
              placeholder="Your name"
              value={subscriberName}
              onChange={(e) => setSubscriberName(e.target.value)}
              className="w-full sm:flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-white placeholder-white bg-blue-800 focus:outline-none focus:ring-4 focus:ring-white/50 text-sm sm:text-base shadow-lg"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={subscriberEmail}
              onChange={(e) => setSubscriberEmail(e.target.value)}
              className="w-full sm:flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-white placeholder-white bg-blue-800 focus:outline-none focus:ring-4 focus:ring-white/50 text-sm sm:text-base shadow-lg"
              required
            />
            <Button type="submit" className="w-full sm:w-auto bg-white text-orange-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-2xl font-bold text-sm sm:text-base transform hover:scale-105 transition-all duration-200">
              Subscribe
            </Button>
          </form>
          
          {/* Success Popup */}
          {showSuccessPopup && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 animate-fade-in">
              <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md mx-4 animate-scale-in">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Successfully Subscribed!</h3>
                  <p className="text-gray-600">Thank you for subscribing to our newsletter.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
