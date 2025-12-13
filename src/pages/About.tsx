import { Target, Eye, Award, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export default function About() {
  return (
    <div className="pt-[128px]">
      <AboutContent />
    </div>
  );
}

function AboutContent() {
  const founders = [
    {
      name: 'Søren Christensen',
      role: 'Co-founder & CEO',
      bio: 'Søren is an expert in Reference Designation Systems, empowering teams to navigate complexity with confidence.',
      linkedin: 'https://linkedin.com/in/soren-christensen',
      image: '/images/soren-christensen.png',
    },
    {
      name: 'Sylvia Awoudu',
      role: 'Co-founder & COO',
      bio: 'Sylvia has over a decade of experience in document and information management and product development, bridging strategy and execution to enable innovation while maintaining control and helping companies innovate confidently.',
      linkedin: 'https://linkedin.com/in/sylvia-awoudu',
      image: '/images/sylvia-awoudu.png',
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

        {/* Meet Our Founders */}
        <div>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Meet Our Founders
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              The visionaries behind SøDera
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {founders.map((founder, index) => (
              <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 flex flex-col items-center">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg object-cover shadow-md mb-6"
                  />
                  <CardTitle className="text-xl sm:text-2xl text-center mb-1">{founder.name}</CardTitle>
                  <p className="text-sm sm:text-base text-orange-600 font-medium text-center mb-4">{founder.role}</p>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center mb-6">
                    {founder.bio}
                  </p>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-200 text-sm sm:text-base font-medium"
                  >
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                    Connect on LinkedIn
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}