import { ArrowRight, CheckCircle2, FileCheck, Database, Settings, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RDSService() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(3px)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-indigo-900/70 z-10" />
        
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-md bg-gray-900/40 rounded-2xl p-8 sm:p-12 shadow-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Reference Designation Systems (RDS)
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
              Standardize asset identification and streamline operations with ISO-compliant RDS implementation
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What is RDS?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Reference Designation Systems (RDS) provide a standardized method for identifying and labeling assets, equipment, and systems across industrial facilities. Our RDS solutions ensure compliance with international standards including ISO 81346, IEC 61346, and industry-specific requirements.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We help organizations implement consistent naming conventions that improve operational efficiency, reduce errors, and facilitate seamless communication across teams and systems.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {[
                  'Standardized asset identification across facilities',
                  'Improved operational efficiency and maintenance',
                  'Enhanced data quality and system integration',
                  'Compliance with ISO/IEC standards',
                  'Reduced training time for new personnel',
                  'Seamless data exchange between systems'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our RDS Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for implementing and maintaining reference designation systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileCheck,
                title: 'RDS Design & Development',
                description: 'Create customized reference designation systems aligned with ISO 81346 and industry best practices.'
              },
              {
                icon: Database,
                title: 'Data Migration & Integration',
                description: 'Migrate existing asset data to new RDS structures and integrate with enterprise systems.'
              },
              {
                icon: Settings,
                title: 'Standards Compliance',
                description: 'Ensure full compliance with ISO, IEC, and industry-specific RDS requirements.'
              },
              {
                icon: Users,
                title: 'Training & Documentation',
                description: 'Comprehensive training programs and documentation for seamless RDS adoption.'
              },
              {
                icon: CheckCircle2,
                title: 'Quality Assurance',
                description: 'Rigorous validation and verification processes to ensure data accuracy and consistency.'
              },
              {
                icon: ArrowRight,
                title: 'Ongoing Support',
                description: 'Continuous support and maintenance to keep your RDS current and effective.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Specialized RDS solutions for diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Oil & Gas',
                description: 'Upstream, midstream, and downstream facility asset identification'
              },
              {
                title: 'Manufacturing',
                description: 'Production line equipment and process system designation'
              },
              {
                title: 'Power Generation',
                description: 'Power plant systems and distribution network labeling'
              },
              {
                title: 'Marine & Offshore',
                description: 'Vessel and offshore platform equipment identification'
              },
              {
                title: 'Infrastructure',
                description: 'Transportation and utility system asset management'
              },
              {
                title: 'Process Industries',
                description: 'Chemical, pharmaceutical, and food processing facilities'
              },
              {
                title: 'Mining',
                description: 'Mining equipment and processing plant systems'
              },
              {
                title: 'Data Centers',
                description: 'IT infrastructure and facility equipment designation'
              }
            ].map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              A structured approach to RDS deployment
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                phase: 'Phase 1',
                title: 'Assessment',
                description: 'Analyze current systems, identify requirements, and develop RDS strategy'
              },
              {
                phase: 'Phase 2',
                title: 'Design',
                description: 'Create RDS structure, naming conventions, and integration plan'
              },
              {
                phase: 'Phase 3',
                title: 'Implementation',
                description: 'Deploy RDS, migrate data, integrate systems, and train users'
              },
              {
                phase: 'Phase 4',
                title: 'Support',
                description: 'Provide ongoing maintenance, updates, and optimization'
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="text-blue-600 font-bold text-sm mb-2">{step.phase}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Implement RDS?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our RDS solutions can standardize your asset identification
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}