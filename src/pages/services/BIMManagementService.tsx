import { ArrowRight, CheckCircle2, Layers, Database, Users, FileCheck, GitBranch, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BIMManagementService() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(3px)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-indigo-900/70 z-10" />
        
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-md bg-gray-900/40 rounded-2xl p-8 sm:p-12 shadow-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Building Information Modelling (BIM) Management
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
              Transform construction and facility management with intelligent 3D models and data-driven insights
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
                What is BIM Management?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Building Information Modelling (BIM) is a digital representation of physical and functional characteristics of facilities. Our BIM management services help organizations leverage 3D modeling, data integration, and collaborative workflows throughout the entire project lifecycle.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From initial design through construction to facility operations, we provide comprehensive BIM solutions that improve coordination, reduce errors, optimize costs, and enhance decision-making.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {[
                  'Enhanced collaboration across all stakeholders',
                  'Reduced construction costs and timelines',
                  'Improved design quality and clash detection',
                  'Better facility lifecycle management',
                  'Data-driven decision making',
                  'Increased project predictability and control'
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our BIM Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive BIM solutions from design to facility management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: 'BIM Modeling & Coordination',
                description: '3D modeling, clash detection, and multi-discipline coordination for seamless project execution.'
              },
              {
                icon: Database,
                title: 'BIM Data Management',
                description: 'Centralized data repositories, version control, and information exchange protocols.'
              },
              {
                icon: Users,
                title: 'BIM Implementation Strategy',
                description: 'Develop BIM execution plans, workflows, and standards tailored to your organization.'
              },
              {
                icon: FileCheck,
                title: 'BIM Standards & Compliance',
                description: 'Ensure compliance with ISO 19650, national BIM standards, and client requirements.'
              },
              {
                icon: GitBranch,
                title: '4D/5D BIM Planning',
                description: 'Time-based scheduling (4D) and cost estimation (5D) for optimized project delivery.'
              },
              {
                icon: Shield,
                title: 'Facility Management',
                description: 'Leverage BIM data for ongoing operations, maintenance, and asset management.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIM Maturity Levels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              BIM Maturity Levels
            </h2>
            <p className="text-xl text-gray-600">
              We help you progress through BIM maturity stages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                level: 'Level 1',
                title: 'Basic CAD',
                description: '2D/3D CAD with limited collaboration. Files shared via email or file transfer.',
                features: ['Individual 2D/3D drawings', 'Manual coordination', 'Limited data sharing']
              },
              {
                level: 'Level 2',
                title: 'Collaborative BIM',
                description: 'Coordinated 3D models with common data environment and standardized processes.',
                features: ['3D parametric modeling', 'Common data environment', 'Clash detection', 'ISO 19650 compliance']
              },
              {
                level: 'Level 3',
                title: 'Integrated BIM',
                description: 'Fully integrated models with real-time collaboration and open data standards.',
                features: ['Single shared model', 'Real-time collaboration', 'Lifecycle integration', 'AI and automation']
              }
            ].map((level, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-600 font-bold text-lg mb-2">{level.level}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{level.title}</h3>
                <p className="text-gray-600 mb-4">{level.description}</p>
                <ul className="space-y-2">
                  {level.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              BIM solutions across diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Commercial Construction',
                description: 'Office buildings, retail centers, and mixed-use developments'
              },
              {
                title: 'Infrastructure',
                description: 'Roads, bridges, tunnels, and transportation systems'
              },
              {
                title: 'Industrial Facilities',
                description: 'Manufacturing plants, warehouses, and process facilities'
              },
              {
                title: 'Healthcare',
                description: 'Hospitals, medical centers, and healthcare facilities'
              },
              {
                title: 'Education',
                description: 'Schools, universities, and research facilities'
              },
              {
                title: 'Residential',
                description: 'Multi-family housing and residential developments'
              },
              {
                title: 'Energy & Utilities',
                description: 'Power plants, substations, and utility infrastructure'
              },
              {
                title: 'Government',
                description: 'Public buildings and civic infrastructure'
              }
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our BIM Implementation Approach
            </h2>
            <p className="text-xl text-gray-600">
              Structured methodology for successful BIM adoption
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 'Step 1',
                title: 'Assessment & Planning',
                description: 'Evaluate current capabilities, define objectives, and create BIM execution plan'
              },
              {
                step: 'Step 2',
                title: 'Setup & Configuration',
                description: 'Establish common data environment, workflows, and standards'
              },
              {
                step: 'Step 3',
                title: 'Training & Deployment',
                description: 'Train teams, implement processes, and launch BIM workflows'
              },
              {
                step: 'Step 4',
                title: 'Optimization & Support',
                description: 'Continuous improvement, technical support, and capability enhancement'
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="text-blue-600 font-bold text-sm mb-2">{phase.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
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
            Ready to Transform Your Projects with BIM?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how BIM can revolutionize your construction and facility management
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