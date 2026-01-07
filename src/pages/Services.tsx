import { FileText, Network, Building2, Package, Database, FolderKanban } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export default function Services() {
  return (
    <div className="pt-[128px]">
      <ServicesContent />
    </div>
  );
}

function ServicesContent() {
  const services = [
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Streamline your document lifecycle with comprehensive solutions for creation, storage, retrieval, and archival. We implement industry-leading systems that ensure compliance, enhance collaboration, and reduce administrative overhead.',
      link: '/services/document-management'
    },
    {
      icon: Network,
      title: 'Reference Designation Systems (RDS)',
      description: 'Implement robust reference designation systems that ensure consistency, traceability, and interoperability across your organization. We specialize in ISO/IEC standards and industry-specific naming conventions.',
      link: '/services/rds'
    },
    {
      icon: Building2,
      title: 'Building Information Modelling (BIM) Management',
      description: 'Leverage BIM technology to improve design coordination, reduce errors, and enhance project delivery. Our BIM services include implementation planning, training, and ongoing support for construction and facility management projects.',
      link: '/services/bim-management'
    },
    {
      icon: Package,
      title: 'Product Development',
      description: 'From concept to launch, we guide your product development journey. Our multidisciplinary approach integrates market research, design thinking, prototyping, and go-to-market strategies to bring innovative products to life.',
      link: '/services/product-development'
    },
    {
      icon: Database,
      title: 'Asset Management',
      description: 'Maximize the value and performance of your physical and digital assets. Our asset management solutions cover lifecycle planning, maintenance optimization, risk assessment, and performance tracking.',
      link: '/services/asset-management'
    },
    {
      icon: FolderKanban,
      title: 'Project Management',
      description: 'Expert project management services that deliver results on time and within budget. Our methodologies combine traditional PMI frameworks with agile practices to suit your organizational needs and project complexity.',
      link: '/services/project-management'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8" style={{
        backgroundImage: 'url(https://i.imgur.com/zE9VdRs.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 leading-relaxed">
            We take a practical, hands-on approach, working directly with teams, from Reference Designation Systems (IEC 81346) to document and asset management, to reduce complexity, improve compliance, and stay in control of their information.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <a href={service.link} key={index}>
                  <Card 
                    className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-100 h-full cursor-pointer"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl sm:text-2xl text-gray-900">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            Why Choose SøDera?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-left">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-600 mb-3 sm:mb-4">Expert Team</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Our consultants bring decades of combined experience across industries and disciplines.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-3 sm:mb-4">Proven Methods</h3>
              <p className="text-sm sm:text-base text-gray-700">
                We use industry-standard frameworks and best practices to ensure successful outcomes.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-600 mb-3 sm:mb-4">Tailored Solutions</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Every engagement is customized to your unique challenges and organizational context.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-3 sm:mb-4">Long-term Partnership</h3>
              <p className="text-sm sm:text-base text-gray-700">
                We build lasting relationships and provide ongoing support beyond project delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
