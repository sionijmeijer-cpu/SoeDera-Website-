import { Target, Eye, Award, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export default function About() {
  const founders = [
    {
      name: 'Thomas Andersen',
      role: 'Co-Founder & CEO',
      bio: 'With 25+ years of experience in organizational transformation and enterprise consulting, Thomas leads SøDera\'s strategic vision. His expertise spans document management, process optimization, and digital transformation across multiple industries.',
      linkedin: '#',
    },
    {
      name: 'Maria Bergström',
      role: 'Co-Founder & CTO',
      bio: 'Maria brings deep technical expertise in BIM, asset management, and information systems. With a background in engineering and information architecture, she drives innovation in solution design and technical excellence for our clients.',
      linkedin: '#',
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About SøDera
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Empowering organizations through expert consulting and innovative solutions.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <Card className="border border-gray-200 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 sm:h-7 sm:w-7 text-orange-600" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                To connect organizations with expert resources and innovative solutions that drive operational efficiency, 
                enhance productivity, and enable sustainable growth. We believe that with the right expertise and tools, 
                every organization can achieve excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                To be the leading partner for organizational transformation, recognized for our expertise in document management, 
                project delivery, and digital innovation. We envision a future where technology and human expertise seamlessly 
                integrate to unlock unprecedented organizational potential.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 sm:h-7 sm:w-7 text-orange-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Delivering the highest quality in every engagement
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Operating with transparency and honesty
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 sm:h-7 sm:w-7 text-orange-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Embracing new ideas and technologies
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Partnership</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Building lasting relationships with clients
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-12 sm:mb-16">
          <Card className="border border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl text-center">Our Story</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm sm:prose-base max-w-none text-gray-700">
                <p className="mb-4 leading-relaxed">
                  SøDera Solutions was founded on the belief that organizations achieve their best results when they have 
                  access to expert resources and proven methodologies. Our journey began with a simple observation: many 
                  organizations struggle not from lack of ambition or resources, but from challenges in coordination, 
                  documentation, and process management.
                </p>
                <p className="mb-4 leading-relaxed">
                  With backgrounds spanning engineering, information technology, and organizational development, our founding 
                  team recognized an opportunity to bridge the gap between strategic vision and operational execution. We've 
                  built SøDera to be more than just a consulting firm—we're a partner in transformation, combining deep 
                  industry expertise with practical, implementable solutions.
                </p>
                <p className="leading-relaxed">
                  Today, we serve clients across multiple industries and sectors, from construction and manufacturing to 
                  healthcare and energy. Each project reinforces our commitment to excellence and our belief that with the 
                  right guidance and tools, any organization can achieve operational excellence.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leadership Team */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl sm:text-2xl mb-1">{founder.name}</CardTitle>
                      <p className="text-sm sm:text-base text-orange-600 font-medium">{founder.role}</p>
                    </div>
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-100 p-2 sm:p-3 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                    >
                      <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </a>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{founder.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
