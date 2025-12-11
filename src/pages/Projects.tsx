import { ArrowRight, Building2, Factory, Zap, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export default function Projects() {
  const projects = [
    {
      icon: Building2,
      title: 'Metro Infrastructure BIM Implementation',
      category: 'Construction / BIM',
      description: 'Led the implementation of a comprehensive BIM solution for a major metro transit expansion project. Coordinated with 15+ design firms to ensure model consistency and clash detection, reducing rework by 40%.',
      tags: ['BIM', 'Infrastructure', 'Project Management'],
      status: 'Completed',
    },
    {
      icon: Factory,
      title: 'Manufacturing Enterprise Document System',
      category: 'Manufacturing / Document Management',
      description: 'Deployed an enterprise-wide document management system for a global manufacturing company with 8,000+ users. Streamlined ISO compliance processes and reduced document retrieval time by 75%.',
      tags: ['Document Management', 'Compliance', 'Process Optimization'],
      status: 'Completed',
    },
    {
      icon: Zap,
      title: 'Energy Sector Asset Management Platform',
      category: 'Energy / Asset Management',
      description: 'Implemented a comprehensive asset management platform for a renewable energy operator managing 200+ wind turbines. Improved maintenance scheduling efficiency and extended asset lifecycles by 15%.',
      tags: ['Asset Management', 'Energy', 'Digital Transformation'],
      status: 'Completed',
    },
    {
      icon: Heart,
      title: 'Healthcare Facility Project Management',
      category: 'Healthcare / Project Management',
      description: 'Managed the design and construction of a 150-bed hospital facility from inception to commissioning. Delivered the project on time and 5% under budget while maintaining highest quality standards.',
      tags: ['Healthcare', 'Construction', 'Stakeholder Management'],
      status: 'Completed',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-blue-600 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Our Projects
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 leading-relaxed">
            Delivering excellence across industries through innovative solutions and expert execution
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card 
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-100"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-orange-600" />
                      </div>
                      <Badge className="bg-green-100 text-green-800 text-xs sm:text-sm">
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl sm:text-2xl text-gray-900 mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-blue-600 font-medium">
                      {project.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex}
                          variant="outline"
                          className="text-xs sm:text-sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
            Let's discuss how we can bring your vision to life with our proven expertise
          </p>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            Contact Us Today
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
