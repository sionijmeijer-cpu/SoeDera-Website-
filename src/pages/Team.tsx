import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Linkedin } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      role: 'Managing Director',
      bio: 'Leading strategic initiatives with 20+ years of experience in organizational transformation and operational excellence.',
      linkedin: '#',
    },
    {
      name: 'James Anderson',
      role: 'Director of Project Management',
      bio: 'PMP-certified professional specializing in complex infrastructure projects and agile methodologies.',
      linkedin: '#',
    },
    {
      name: 'Elena Rodriguez',
      role: 'BIM Practice Lead',
      bio: 'Architect and BIM expert with extensive experience in digital construction and model-based coordination.',
      linkedin: '#',
    },
    {
      name: 'Michael Chen',
      role: 'Document Management Specialist',
      bio: 'Information management professional with expertise in ECM systems and regulatory compliance.',
      linkedin: '#',
    },
    {
      name: 'Aisha Patel',
      role: 'Asset Management Consultant',
      bio: 'Strategic advisor for asset lifecycle optimization and maintenance excellence programs.',
      linkedin: '#',
    },
    {
      name: 'Robert Thompson',
      role: 'Product Development Lead',
      bio: 'Innovation strategist with a track record of bringing successful products from concept to market.',
      linkedin: '#',
    },
    {
      name: 'Lisa Nordstrom',
      role: 'Systems Integration Specialist',
      bio: 'Technical consultant specializing in reference designation systems and enterprise architecture.',
      linkedin: '#',
    },
    {
      name: 'David Williams',
      role: 'Change Management Advisor',
      bio: 'Expert in organizational change, stakeholder engagement, and training program development.',
      linkedin: '#',
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals dedicated to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <CardTitle className="text-xl text-center">{member.name}</CardTitle>
                <CardDescription className="text-center font-medium text-blue-600">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed text-center mb-4">
                  {member.bio}
                </p>
                <div className="flex justify-center">
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                    aria-label={`${member.name} LinkedIn profile`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
            We're always looking for talented professionals who share our commitment to excellence and client success. 
            If you're passionate about making a difference and want to work on challenging projects with industry-leading 
            organizations, we'd love to hear from you.
          </p>
          <a
            href="mailto:careers@sodera.com"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            careers@sodera.com
          </a>
        </div>
      </div>
    </div>
  );
}
