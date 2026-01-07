import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const defaultMeta = {
  title: 'SøDera - Expert Resource Management & Operational Excellence',
  description: 'Leading consultancy specializing in Reference Designation Systems (RDS), Document Management, BIM Integration, Asset Management, and Digital Transformation. ISO/IEC 81346 compliance experts serving global enterprises.',
  keywords: 'resource management, operational excellence, RDS, Reference Designation Systems, document management, information management, BIM, ISO 81346, IEC 81346, digital transformation, asset management, consulting, enterprise solutions',
  ogImage: '/og-image.jpg',
};

const pageMeta: Record<string, { title: string; description: string; keywords: string }> = {
  '/': {
    title: 'SøDera - Expert Resource Management & Operational Excellence',
    description: 'Transform your operations with expert consulting in Reference Designation Systems (RDS), Document Management, BIM Integration, Asset Management, and Digital Transformation. ISO/IEC 81346 compliance specialists serving enterprises worldwide.',
    keywords: 'resource management, operational excellence, RDS consulting, Reference Designation Systems, document management solutions, information management, BIM integration, ISO 81346 compliance, IEC 81346, digital transformation, asset management, enterprise consulting, infrastructure management',
  },
  '/services': {
    title: 'Our Services - RDS, Document Management & Digital Solutions | SøDera',
    description: 'Comprehensive consulting services including Reference Designation Systems, document management, information management, and product development solutions.',
    keywords: 'consulting services, RDS implementation, document management services, information architecture, product development',
  },
  '/services/document-management': {
    title: 'Document Management Solutions - Streamline Your Operations | SøDera',
    description: 'Expert document management consulting to optimize workflows, ensure compliance, and enhance collaboration across your organization.',
    keywords: 'document management, document control, workflow optimization, compliance, SharePoint, document lifecycle',
  },
  '/services/rds-concepts': {
    title: 'Reference Designation Systems (RDS) - ISO/IEC 81346 Experts | SøDera',
    description: 'Professional RDS consulting and implementation services. ISO/IEC 81346 compliance, asset naming conventions, and infrastructure management.',
    keywords: 'RDS, Reference Designation Systems, ISO 81346, IEC 81346, asset naming, infrastructure management, standards compliance',
  },
  '/services/information-management': {
    title: 'Information Management Consulting - Data Architecture & Strategy | SøDera',
    description: 'Strategic information management solutions for enterprise data architecture, governance, and digital asset management.',
    keywords: 'information management, data architecture, information governance, digital asset management, enterprise systems',
  },
  '/services/product-development': {
    title: 'Product Development Consulting - Innovation & Strategy | SøDera',
    description: 'End-to-end product development consulting from concept to launch. Agile methodologies, market research, and strategic planning.',
    keywords: 'product development, innovation consulting, agile development, product strategy, market research',
  },
  '/about': {
    title: 'About Us - Meet the SøDera Team | Expert Consultants',
    description: 'Learn about SøDera, our mission, values, and expert team. Founded by Søren Christensen and Sylvia Awoudu to transform infrastructure management.',
    keywords: 'about SøDera, company history, consulting team, Søren Christensen, Sylvia Awoudu, consulting expertise',
  },
  '/blog': {
    title: 'Blog - Industry Insights & Best Practices | SøDera',
    description: 'Expert insights on RDS, document management, BIM, digital transformation, and technology trends. Stay informed with our latest articles.',
    keywords: 'consulting blog, RDS insights, document management tips, BIM best practices, digital transformation, industry trends',
  },
  '/contact': {
    title: 'Contact Us - Get Expert Consulting Help | SøDera',
    description: 'Ready to transform your operations? Contact SøDera for expert consulting in RDS, document management, and digital transformation.',
    keywords: 'contact SøDera, consulting inquiry, get quote, schedule consultation, info@soedera.eu',
  },
  '/projects': {
    title: 'Our Projects - Success Stories & Case Studies | SøDera',
    description: 'Explore SøDera\'s successful consulting projects across industries. Real-world implementations of RDS, document management, and digital solutions.',
    keywords: 'case studies, project portfolio, success stories, client projects, consulting results',
  },
  '/faq': {
    title: 'FAQ - Frequently Asked Questions | SøDera',
    description: 'Find answers to common questions about RDS, document management, consulting services, and working with SøDera.',
    keywords: 'FAQ, frequently asked questions, consulting questions, RDS questions, service inquiries',
  },
  '/brochure': {
    title: 'Download Our Brochure - Service Overview | SøDera',
    description: 'Download SøDera\'s comprehensive service brochure. Learn about our consulting offerings, expertise, and how we can help your organization.',
    keywords: 'brochure download, service overview, consulting services guide, company brochure',
  },
};

// Blog article metadata with Open Graph images
const blogMeta: Record<string, { title: string; description: string; keywords: string; ogImage: string }> = {
  'sam-introduction': {
    title: 'Introducing SAM: Revolutionary RDS Management Tool | SøDera Blog',
    description: 'Discover SAM - SøDera Asset Management, our Azure-powered Reference Designation System management tool. Transform how you manage infrastructure.',
    keywords: 'SAM, SøDera Asset Management, RDS tool, Azure, asset management software, IEC 81346 software',
    ogImage: 'https://i.imgur.com/uwiQHP8.jpeg',
  },
  'bim-trends': {
    title: 'The Future of BIM: Key Trends & Best Practices | SøDera Blog',
    description: 'How Building Information Modeling transforms construction projects. Learn BIM benefits, implementation strategies, and industry best practices.',
    keywords: 'BIM, Building Information Modeling, construction technology, 3D modeling, construction management',
    ogImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  },
  'agile-waterfall': {
    title: 'Agile vs Waterfall: Choosing the Right Methodology | SøDera Blog',
    description: 'Comprehensive comparison of Agile and Waterfall project management. Learn which methodology fits your project needs.',
    keywords: 'agile methodology, waterfall methodology, project management, software development, scrum',
    ogImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
  'document-management': {
    title: 'Enterprise Document Management Implementation Guide | SøDera Blog',
    description: 'Complete guide to implementing enterprise document management systems. Best practices, tools, and strategies for success.',
    keywords: 'enterprise document management, DMS implementation, document control, workflow automation',
    ogImage: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1200&q=80',
  },
  'predictive-maintenance': {
    title: 'Predictive Maintenance with IoT & AI - ROI Guide | SøDera Blog',
    description: 'Leverage IoT and AI for predictive maintenance. Reduce downtime, optimize costs, and improve asset reliability.',
    keywords: 'predictive maintenance, IoT, AI, asset management, maintenance optimization, condition monitoring',
    ogImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80',
  },
  'digital-transformation': {
    title: 'Digital Transformation Roadmap for Enterprises | SøDera Blog',
    description: 'Strategic roadmap for successful digital transformation. Technology adoption, change management, and implementation best practices.',
    keywords: 'digital transformation, enterprise modernization, change management, technology adoption, innovation',
    ogImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
  },
  'rds-standards': {
    title: 'Reference Designation Systems: ISO/IEC 81346 Guide | SøDera Blog',
    description: 'Master Reference Designation Systems with our comprehensive ISO/IEC 81346 guide. Standards compliance and implementation strategies.',
    keywords: 'RDS, ISO 81346, IEC 81346, reference designation, standards compliance, asset identification',
    ogImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
  },
  'cloud-information': {
    title: 'Cloud Information Management: Security & Scalability | SøDera Blog',
    description: 'Enterprise cloud information management strategies. Security, scalability, and best practices for cloud-based systems.',
    keywords: 'cloud management, information security, cloud scalability, enterprise cloud, data governance',
    ogImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
  },
  'edms-implementation': {
    title: 'EDMS Implementation Best Practices | SøDera Blog',
    description: 'Best practices for implementing Electronic Document Management Systems. Streamline workflows and improve compliance.',
    keywords: 'EDMS, document management system, implementation, workflow, compliance',
    ogImage: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1200&q=80',
  },
  'cloud-information-management': {
    title: 'Cloud Information Management Strategies | SøDera Blog',
    description: 'Modern cloud information management strategies for enterprise scalability and security.',
    keywords: 'cloud information, enterprise cloud, data management, scalability',
    ogImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
  },
  'digital-transform': {
    title: 'Digital Transformation Guide | SøDera Blog',
    description: 'Complete guide to digital transformation for modern enterprises.',
    keywords: 'digital transformation, modernization, enterprise technology',
    ogImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
  },
};

export default function SEO({ title, description, keywords, ogImage, canonical }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    
    // Determine metadata based on route
    let meta = { ...defaultMeta };
    
    // Check if it's a blog article
    const blogMatch = pathname.match(/^\/blog\/(.+)$/);
    if (blogMatch && blogMeta[blogMatch[1]]) {
      const articleMeta = blogMeta[blogMatch[1]];
      meta = {
        ...defaultMeta,
        ...articleMeta,
        ogImage: articleMeta.ogImage || ogImage || defaultMeta.ogImage,
      };
    } else if (pageMeta[pathname]) {
      meta = {
        ...defaultMeta,
        ...pageMeta[pathname],
        ogImage: ogImage || defaultMeta.ogImage,
      };
    }

    // Override with custom props if provided
    if (title) meta.title = title;
    if (description) meta.description = description;
    if (keywords) meta.keywords = keywords;
    if (ogImage) meta.ogImage = ogImage;

    // Update document title
    document.title = meta.title;

    // Update or create meta tags
    updateMetaTag('name', 'description', meta.description);
    updateMetaTag('name', 'keywords', meta.keywords);
    
    // Open Graph tags
    updateMetaTag('property', 'og:title', meta.title);
    updateMetaTag('property', 'og:description', meta.description);
    updateMetaTag('property', 'og:image', meta.ogImage);
    updateMetaTag('property', 'og:url', `https://www.soedera.eu${pathname}`);
    updateMetaTag('property', 'og:type', 'website');
    
    // Twitter Card tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', meta.title);
    updateMetaTag('name', 'twitter:description', meta.description);
    updateMetaTag('name', 'twitter:image', meta.ogImage);

    // Canonical URL
    updateCanonicalLink(canonical || `https://www.soedera.eu${pathname}`);

    // Structured data for organization
    updateStructuredData();
  }, [location.pathname, title, description, keywords, ogImage, canonical]);

  return null;
}

function updateMetaTag(attr: string, key: string, content: string) {
  let element = document.querySelector(`meta[${attr}="${key}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

function updateCanonicalLink(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  
  link.href = url;
}

function updateStructuredData() {
  let script = document.querySelector('script[type="application/ld+json"]');
  
  if (!script) {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    document.head.appendChild(script);
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SøDera",
    "url": "https://soedera.eu",
    "logo": "https://i.imgur.com/r2HbYJj.png",
    "description": "Leading consultancy specializing in Reference Designation Systems (RDS), document management, BIM integration, and digital transformation.",
    "email": "info@soedera.eu",
    "founder": [
      {
        "@type": "Person",
        "name": "Søren Christensen",
        "jobTitle": "Co-founder & CEO"
      },
      {
        "@type": "Person",
        "name": "Sylvia Awoudu",
        "jobTitle": "Co-founder & COO"
      }
    ],
    "sameAs": [
      "https://linkedin.com/company/soedera",
      "https://instagram.com/soedera"
    ]
  };

  script.textContent = JSON.stringify(structuredData);
}
