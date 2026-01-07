import { ArrowLeft, Calendar, Clock, User, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogArticleRDS() {
  const articleUrl = 'https://www.soedera.eu/blog/rds-standards';

  const handleLinkedInShare = () => {
    const url = encodeURIComponent(articleUrl);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 h-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-24">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
            Standards & Best Practices
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Reference Designation Systems (RDS): Standards & Practical Guide
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <span>January 20, 2025</span>
          </div>
          <div className="flex items-center">
            <User className="w-5 h-5 mr-2" />
            <span>Sødera Team</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            <span>10 min read</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80" 
            alt="Reference Designation Systems"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Reference Designation Systems (RDS) provide the foundation for consistent, unambiguous identification of objects, locations, and functions within complex industrial facilities. Understanding and implementing these standards correctly is crucial for effective asset management, maintenance, and operations.
            </p>
          </div>

          {/* What is RDS */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Reference Designation System?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              An RDS is a structured methodology for creating unique identifiers (tags) for all objects within an industrial system. These identifiers follow standardized rules that encode information about location, function, and object type, making it possible to understand an asset's role and context from its designation alone.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Well-implemented RDS ensures consistency across projects, facilitates communication between stakeholders, supports lifecycle management, and enables efficient information retrieval throughout an asset's operational life.
            </p>
          </div>

          {/* Key Standards */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key International Standards</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">ISO/IEC 81346 Series</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The primary international standard for reference designation of objects in industrial systems. It defines principles and rules applicable across all industries and disciplines.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Part 1:</strong> General rules and principles for structuring reference designations</li>
                  <li><strong>Part 2:</strong> Classification of objects and codes for classes</li>
                  <li><strong>Part 10:</strong> Power plants specific applications and examples</li>
                  <li><strong>Part 12:</strong> Construction works and building services</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">IEC 81355</h3>
                <p className="text-gray-700 leading-relaxed">
                  Provides classification and designation of documents for plants, systems, and equipment. Essential for managing the vast documentation associated with industrial facilities, ensuring documents can be easily identified, retrieved, and associated with the correct assets.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">IEC 61082-1</h3>
                <p className="text-gray-700 leading-relaxed">
                  Defines rules for the preparation of documents used in electrotechnology, including reference designations. Particularly important for electrical and control system documentation where clarity and consistency are critical for safety and maintainability.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">KKS (Kraftwerk-Kennzeichensystem)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Power Plant Classification System widely used in the power generation industry, particularly in Europe. While not an ISO standard, KKS provides detailed guidelines for power plant asset identification with extensive industry adoption and proven track record.
                </p>
              </div>
            </div>
          </div>

          {/* RDS Structure */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">RDS Structure and Principles</h2>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Three Fundamental Aspects</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">= (Function Aspect)</h4>
                  <p className="text-gray-700">Describes WHAT the object does - its purpose or function within the system. Examples: pumping, heating, controlling, measuring.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">+ (Location Aspect)</h4>
                  <p className="text-gray-700">Describes WHERE the object is located - its physical or logical position. Examples: building, room, cabinet, installation area.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">- (Product Aspect)</h4>
                  <p className="text-gray-700">Describes HOW the object is constructed - its physical realization. Examples: motor, valve, sensor, cable.</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              A complete reference designation combines these aspects in a structured format:
            </p>
            <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm mb-4">
              <p className="text-gray-900"><strong>Example:</strong> =10AAA01-M01</p>
              <p className="text-gray-600 mt-2">=10AAA01 (Function: Cooling water pump 01 in system 10AAA)</p>
              <p className="text-gray-600">-M01 (Product: Motor 01)</p>
            </div>
          </div>

          {/* Implementation Guide */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Practical Implementation Guide</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Step 1: Define Your Structure</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Establish the hierarchy and rules for your facility:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Define location levels (site, area, building, room, etc.)</li>
                  <li>Establish functional hierarchy (plant, system, equipment, component)</li>
                  <li>Create coding schemes for each level</li>
                  <li>Document delimiter and separator conventions</li>
                  <li>Define abbreviations and prefixes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Step 2: Create Classification Tables</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Develop comprehensive tables for object classification:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Function codes (pumping, mixing, heating, cooling, etc.)</li>
                  <li>Equipment type codes (pumps, valves, motors, instruments)</li>
                  <li>Location codes specific to your facility layout</li>
                  <li>Discipline codes (mechanical, electrical, instrumentation)</li>
                  <li>Ensure codes are meaningful, concise, and unambiguous</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Step 3: Establish Governance</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Create processes and assign responsibilities:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Designate RDS coordinator or team</li>
                  <li>Define approval workflows for new designations</li>
                  <li>Establish change management procedures</li>
                  <li>Create training materials and programs</li>
                  <li>Set up regular audits and quality checks</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Step 4: Tool Selection</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Choose appropriate software for RDS management:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Automated tag generation based on rules</li>
                  <li>Validation against defined standards</li>
                  <li>Integration with CAD, CMMS, and ERP systems</li>
                  <li>Version control and change tracking</li>
                  <li>Reporting and export capabilities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Step 5: Implementation & Training</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Roll out the system effectively:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Start with pilot project or area</li>
                  <li>Train all relevant personnel</li>
                  <li>Provide reference guides and quick-reference cards</li>
                  <li>Establish helpdesk or support channel</li>
                  <li>Gather feedback and refine as needed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>Keep it Simple:</strong> Avoid over-complication - designations should be memorable and practical</li>
              <li><strong>Be Consistent:</strong> Apply rules uniformly across all systems and projects</li>
              <li><strong>Think Long-Term:</strong> Design for future expansion and modifications</li>
              <li><strong>Document Everything:</strong> Maintain comprehensive documentation of rules, codes, and rationale</li>
              <li><strong>Involve Stakeholders:</strong> Engage operations, maintenance, and engineering teams early</li>
              <li><strong>Plan for Migration:</strong> If transitioning from legacy systems, create clear mapping and transition plans</li>
              <li><strong>Regular Reviews:</strong> Periodically review and update standards as needs evolve</li>
              <li><strong>Quality Control:</strong> Implement checks to catch errors before designations are widely used</li>
            </ul>
          </div>

          {/* Common Challenges */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Challenges and Solutions</h2>
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Challenge: Resistance to Change</h4>
                <p className="text-gray-700"><strong>Solution:</strong> Clearly communicate benefits, provide adequate training, and involve users in the development process.</p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Challenge: Legacy System Integration</h4>
                <p className="text-gray-700"><strong>Solution:</strong> Create mapping tables, implement phased migration, and maintain dual systems during transition if necessary.</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Challenge: Maintaining Consistency</h4>
                <p className="text-gray-700"><strong>Solution:</strong> Use automated validation tools, establish clear governance, and conduct regular audits.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Challenge: Complexity vs. Usability</h4>
                <p className="text-gray-700"><strong>Solution:</strong> Balance comprehensive identification with practical usability - not every detail needs to be in the designation.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Need Help with RDS Implementation?</h2>
            <p className="text-lg mb-6 text-orange-50">
              Sødera Solutions specializes in RDS design, implementation, and management. Our SAM platform makes it easy to create and maintain standards-compliant reference designations for your facilities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Expert Help
              </Link>
              <Link 
                to="/services/rds" 
                className="px-8 py-3 bg-orange-700 text-white rounded-lg font-semibold hover:bg-orange-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Learn About SAM
              </Link>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Share this article</h3>
          <div className="flex gap-4">
            <button
              onClick={handleLinkedInShare}
              className="flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white rounded-lg hover:bg-[#006396] transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </button>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <LinkIcon className="w-5 h-5" />
              <span>Copy Link</span>
            </button>
          </div>
        </div>

        {/* Back to Blog Button */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
