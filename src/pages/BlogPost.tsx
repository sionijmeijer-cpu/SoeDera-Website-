import { ArrowLeft, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

import { useParams, useNavigate } from 'react-router-dom';

export default function BlogPost() {
  const { id: blogId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const blogData: Record<string, { title: string; category: string; date: string; content: string[] }> = {
    '1': {
      title: 'The Future of Building Information Modelling in Construction',
      category: 'BIM',
      date: '2024-01-15',
      content: [
        'Building Information Modelling (BIM) has transformed from a niche technology to an industry standard in construction. As we look ahead, the evolution of BIM continues to accelerate, driven by advances in cloud computing, artificial intelligence, and the Internet of Things.',
        'The integration of BIM with other digital technologies is creating unprecedented opportunities for efficiency and innovation. Real-time collaboration across distributed teams, automated clash detection, and predictive analytics are becoming standard features rather than competitive advantages.',
        'Organizations that embrace BIM and invest in proper implementation stand to gain significant competitive advantages in project delivery, cost management, and client satisfaction.',
      ],
    },
  };

  const post = blogData[blogId] || blogData['1'];

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/blog')}
          className="mb-8 hover:bg-gray-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>

        <article>
          <div className="mb-8">
            <Badge variant="outline" className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              <span>
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
