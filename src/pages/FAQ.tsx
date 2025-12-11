import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: 'What industries does SøDera serve?',
      answer: 'We work with clients across a wide range of industries including construction, manufacturing, energy, healthcare, and the public sector. Our consultants bring deep expertise in each vertical and understand the unique challenges and regulatory requirements of different industries.',
    },
    {
      question: 'How long does a typical consulting engagement last?',
      answer: 'Engagement duration varies based on project scope and complexity. Small advisory projects may last 4-8 weeks, while comprehensive implementation projects can span 6-18 months. We work with you to define realistic timelines that balance speed with thoroughness.',
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer various support packages including post-implementation support, maintenance services, and retainer agreements. Our goal is to ensure your team is fully equipped to sustain and build upon the improvements we have implemented together.',
    },
    {
      question: 'What is your approach to change management?',
      answer: 'Change management is integrated into every engagement. We involve stakeholders early, communicate clearly and frequently, provide comprehensive training, and implement feedback mechanisms. Our approach is based on proven methodologies adapted to your organizational culture.',
    },
    {
      question: 'How do you ensure compliance with industry standards and regulations?',
      answer: 'Compliance is built into our methodology from day one. Our consultants stay current with relevant standards (ISO, PMI, industry-specific regulations) and incorporate compliance requirements into all deliverables. We conduct thorough audits and provide documentation to support your compliance efforts.',
    },
    {
      question: 'Can you work with our existing systems and tools?',
      answer: 'Absolutely. We are technology-agnostic and experienced with a wide range of platforms and systems. Whether you are using enterprise solutions from major vendors or custom-built systems, we can integrate our solutions and methodologies with your existing infrastructure.',
    },
    {
      question: 'What is the typical ROI for your consulting services?',
      answer: 'ROI varies by project type and scope, but our clients typically see significant returns through improved efficiency, reduced errors, better resource utilization, and accelerated project delivery. We work with you to establish clear metrics and track progress throughout the engagement.',
    },
    {
      question: 'How do you price your services?',
      answer: 'We offer flexible pricing models including fixed-price projects, time-and-materials arrangements, and retainer agreements. Pricing depends on project scope, duration, and resource requirements. We provide detailed proposals with transparent pricing before any engagement begins.',
    },
    {
      question: 'What sets SøDera apart from other consulting firms?',
      answer: 'Our combination of deep technical expertise, industry experience, and commitment to practical, implementable solutions distinguishes us. We do not just provide recommendations—we partner with you through implementation and beyond. Our consultants have real-world experience in the challenges you face.',
    },
    {
      question: 'How can I get started with SøDera?',
      answer: 'Getting started is simple. Contact us through our website, email, or phone. We will schedule an initial consultation to understand your needs and challenges. From there, we will develop a tailored proposal outlining our approach, timeline, and investment required.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-blue-600 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 leading-relaxed">
            Find answers to common questions about our services and approach
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-4 sm:px-6 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-gray-900 py-4 sm:py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-700 leading-relaxed pb-4 sm:pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
            Our team is here to help. Get in touch and we'll be happy to discuss your specific needs.
          </p>
          <a
            href="#contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
