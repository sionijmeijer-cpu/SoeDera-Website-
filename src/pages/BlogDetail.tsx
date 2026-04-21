import { Calendar, ArrowLeft, Share2, Tag, Clock, Linkedin, Twitter } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { useParams, useNavigate } from 'react-router-dom';

/* ─────────────────────────────────────────────
   AUTHOR PROFILES
   Add real bios, LinkedIn URLs, and initials here.
   ───────────────────────────────────────────── */
const authors: Record<string, { name: string; title: string; bio: string; initials: string; linkedin: string }> = {
  'Søren Christensen': {
    name: 'Søren Christensen',
    title: 'Co-founder & RDS Specialist, SøDera',
    bio: 'Søren has over a decade of hands-on experience implementing Reference Designation Systems across power plants, offshore wind, and industrial infrastructure throughout Northern Europe. He specialises in IEC 81346 compliance and asset data governance.',
    initials: 'SC',
    linkedin: 'https://linkedin.com/in/soren-christensen',
  },
  'Sylvia Awoudu': {
    name: 'Sylvia Awoudu',
    title: 'Co-founder & Document Management Lead, SøDera',
    bio: 'Sylvia brings deep expertise in technical documentation strategy and product development for the energy sector. She leads SøDera\'s document management practice and has delivered projects for major European energy operators.',
    initials: 'SA',
    linkedin: 'https://linkedin.com/in/sylvia-awoudu',
  },
  'Sødera Team': {
    name: 'SøDera Editorial',
    title: 'SøDera Solutions',
    bio: 'The SøDera team writes about Reference Designation Systems, document management, and asset data strategy for the energy and industrial sectors.',
    initials: 'SD',
    linkedin: 'https://linkedin.com/company/soedera',
  },
};


/* ─────────────────────────────────────────────
   ARTICLE DATABASE
   Key = the slug used in /blog/:id routes.
   Add new articles here as plain HTML strings.
   ───────────────────────────────────────────── */
const blogArticles: Record<string, {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  tags: string[];
  pullQuote?: string;
  content: string;
  relatedArticles: string[];
}> = {
  'sam-introduction': {
    id: 'sam-introduction',
    title: 'Introducing SAM: Our Revolutionary RDS Management Tool',
    subtitle: 'SøDera is building a cloud-native asset management platform that brings IEC 81346 compliance, real-time collaboration, and enterprise-grade scalability to Reference Designation Systems.',
    date: '2024-12-31',
    category: 'Product Innovation',
    author: 'Søren Christensen',
    readTime: '8 min read',
    tags: ['SAM', 'RDS', 'Azure', 'Asset Management', 'IEC 81346'],
    pullQuote: 'SAM is more than software — it is the culmination of a decade of fieldwork distilled into a tool that practitioners can actually use.',
    content: `
      <p>Over the years, implementing Reference Designation Systems across diverse industries has given us a front-row seat to a persistent problem: organisations struggle not because they lack standards, but because they lack the tools to apply those standards consistently at scale.</p>

      <p>Today, we are excited to share that we are building <strong>SAM — SøDera Asset Management</strong> — a comprehensive RDS management platform designed to close that gap.</p>

      <h2>The problem SAM solves</h2>

      <p>Every energy operator we have worked with faces a version of the same challenge. Documentation exists, but it is scattered across spreadsheets, CAD systems, and shared drives. Naming conventions drift over time. When a new engineer joins the project, they spend weeks deciphering structures that should be self-evident. When auditors arrive, teams scramble to reconstruct a coherent picture.</p>

      <p>The root cause is almost never a lack of expertise. It is a lack of a single, authoritative system of record for asset designations — one that enforces the rules, tracks changes, and integrates with the tools engineers already use.</p>

      <h2>What SAM does</h2>

      <p>SAM is built on four core capabilities:</p>

      <h3>Standards compliance at the core</h3>
      <p>SAM enforces IEC 81346 rules natively, including support for RDS-PP (power plants), RDS-PS (power systems), and RDS-CW (construction works). Designation generation is automated, and the system flags non-compliant entries before they enter your asset register.</p>

      <h3>Real-time collaboration</h3>
      <p>Multiple engineers can work on the same project simultaneously. Every change is versioned, attributed, and reversible. No more emailing spreadsheets back and forth and hoping the master copy is the right one.</p>

      <h3>Enterprise integration via Azure</h3>
      <p>Built on Microsoft Azure, SAM connects to your existing CAD platforms, ERP systems, and document management tools through standard APIs. Your data stays in one place — SAM simply makes it structured, searchable, and compliant.</p>

      <h3>Hierarchical visualisation</h3>
      <p>Interactive tree views let you navigate your entire asset structure at a glance, from top-level system down to individual components. Relationships and dependencies become immediately visible rather than buried in rows of a spreadsheet.</p>

      <h2>Why Azure</h2>

      <p>We chose Microsoft Azure deliberately. Our clients operate in regulated environments where data sovereignty, security certifications, and uptime guarantees are non-negotiable. Azure's enterprise compliance posture — covering ISO 27001, SOC 2, and sector-specific frameworks — gives our clients the assurance they need. The 99.9% SLA means SAM is available when field teams need it most.</p>

      <h2>Where we are now</h2>

      <p>SAM is currently in active development. We are working closely with a small group of partner organisations to refine the feature set against real-world project conditions. Our roadmap looks like this:</p>

      <ul>
        <li><strong>Q2 2025:</strong> Closed beta with pilot partners</li>
        <li><strong>Q3 2025:</strong> Refinement based on field feedback</li>
        <li><strong>Q4 2025:</strong> General availability</li>
      </ul>

      <p>If you are interested in participating in the beta programme or want an early demonstration, reach us at <strong>info@soedera.eu</strong>. We would love to hear from organisations dealing with the exact challenges SAM is designed to solve.</p>
    `,
    relatedArticles: ['bim-trends', 'agile-waterfall'],
  },

  'bim-trends': {
    id: 'bim-trends',
    title: 'The Future of BIM: Key Trends & Best Practices',
    subtitle: 'Building Information Modelling has reshaped how the energy and construction sectors design, build, and operate assets. Here is what comes next.',
    date: '2025-01-05',
    category: 'Technology & Innovation',
    author: 'Sylvia Awoudu',
    readTime: '8 min read',
    tags: ['BIM', 'Digital Twins', 'AI', 'Cloud', 'Construction'],
    pullQuote: 'The next frontier in BIM is not richer models — it is better-connected data. The model is only as useful as the systems it talks to.',
    content: `
      <p>Building Information Modelling has been reshaping the architecture, engineering, and construction industry for the better part of two decades. But the pace of change is accelerating, and the energy sector — long a conservative adopter — is now at the forefront of some of the most compelling BIM developments.</p>

      <h2>From geometry to data</h2>

      <p>Early BIM adoption was largely about geometry: getting design intent into a 3D model that could be shared across disciplines. The current wave is fundamentally different. The model is becoming a data container — a structured repository of asset attributes, relationships, and history that persists across the entire lifecycle of a facility.</p>

      <p>This shift has profound implications for how organisations manage their documentation. A BIM model that contains accurate reference designations, linked to live maintenance records and connected to a document management system, is genuinely transformative. A BIM model used only for clash detection during construction is a missed opportunity.</p>

      <h2>Digital twins and operational BIM</h2>

      <p>The concept of the digital twin — a live, data-connected counterpart to a physical asset — has moved from research papers to operational reality for leading energy operators. Wind farm operators in Northern Europe are running digital twins that aggregate sensor data, maintenance records, and design documentation into a single navigable model.</p>

      <p>The challenge is data quality. A digital twin is only as reliable as the information feeding it. This is where Reference Designation Systems become critical: without a consistent, standards-compliant naming convention linking the physical asset to its digital counterpart, the twin quickly diverges from reality.</p>

      <h2>AI-assisted design review</h2>

      <p>Machine learning tools are beginning to enter the BIM workflow in meaningful ways — particularly for clash detection, code compliance checking, and design optimisation. Early implementations suggest significant reductions in review cycles for complex industrial projects.</p>

      <p>We are watching this space carefully, but with measured expectations. AI tools perform well on well-structured, consistently named data. Projects with poor documentation hygiene tend to see limited benefit. The lesson, again, points back to data governance: the returns on AI investment scale with the quality of the underlying information architecture.</p>

      <h2>Practical recommendations</h2>

      <p>For energy sector organisations looking to advance their BIM maturity, we recommend focusing on three areas:</p>

      <ul>
        <li><strong>Standardise your naming conventions first.</strong> No amount of software investment will compensate for inconsistent asset designations across disciplines.</li>
        <li><strong>Define your information requirements early.</strong> Specify what data the model needs to contain at handover — and make it contractual.</li>
        <li><strong>Invest in the operational phase.</strong> Most BIM budgets are front-loaded into design and construction. The asset management value is in operations.</li>
      </ul>
    `,
    relatedArticles: ['sam-introduction', 'agile-waterfall'],
  },

  'agile-waterfall': {
    id: 'agile-waterfall',
    title: 'Agile vs. Waterfall: A Complete Comparison Framework',
    subtitle: 'Choosing the wrong methodology for your project type is one of the most common and costly mistakes in technical project management. Here is how to decide.',
    date: '2025-01-12',
    category: 'Project Management',
    author: 'Sylvia Awoudu',
    readTime: '12 min read',
    tags: ['Agile', 'Waterfall', 'Project Management', 'Methodology'],
    pullQuote: 'The question is never "which methodology is better?" It is always "which methodology fits this project, this team, and this regulatory context?"',
    content: `
      <p>Few debates in project management generate more heat and less light than Agile versus Waterfall. Practitioners in both camps tend toward evangelism, which obscures the more useful question: which approach is right for the specific project in front of you?</p>

      <p>In the energy and industrial sectors, this question has real consequences. A documentation project for a new offshore installation involves regulatory sign-offs, contractual milestones, and safety-critical deliverables. An internal tooling initiative to improve asset data workflows does not. These projects call for different approaches.</p>

      <h2>Understanding the core difference</h2>

      <p>Waterfall organises work as a linear sequence of phases: requirements, design, implementation, verification, deployment. Each phase must be substantially complete before the next begins. The logic is that changes become exponentially more expensive the later they occur, so it pays to be thorough upfront.</p>

      <p>Agile organises work as iterative cycles — sprints — in which a small, prioritised slice of requirements is designed, built, and reviewed. The logic is that requirements are never fully knowable upfront, so it pays to build feedback loops into the process.</p>

      <p>Both logics are correct. They apply in different conditions.</p>

      <h2>When Waterfall is the right choice</h2>

      <p>Waterfall performs well when requirements are stable and well-understood, when regulatory or contractual deliverables demand formal phase gates, when the cost of rework is very high (as in physical construction or safety-critical systems), and when the client or stakeholder cannot engage continuously throughout delivery.</p>

      <p>Most large capital projects in the energy sector fall into this category. A document management system rollout for a power plant — with handover documentation, as-built drawings, and regulatory submissions — needs the structure and auditability that Waterfall provides.</p>

      <h2>When Agile is the right choice</h2>

      <p>Agile performs well when requirements are likely to evolve, when end users can participate in regular reviews, when speed to working software matters more than exhaustive documentation, and when the team is small, co-located, and empowered to make decisions.</p>

      <p>Internal tooling projects, digital product development, and exploratory data initiatives tend to benefit from Agile approaches. SAM — our own RDS management tool — is being developed using an iterative approach precisely because we are learning from beta users in real time.</p>

      <h2>A practical decision framework</h2>

      <ul>
        <li><strong>Are requirements stable?</strong> If yes, lean Waterfall. If no, lean Agile.</li>
        <li><strong>Are there regulatory gate reviews?</strong> If yes, Waterfall's phase structure maps naturally to compliance checkpoints.</li>
        <li><strong>Can stakeholders engage weekly?</strong> If no, Agile's sprint reviews become bottlenecks rather than accelerators.</li>
        <li><strong>What is the cost of a wrong assumption?</strong> High cost of rework favours Waterfall's upfront rigour.</li>
      </ul>

      <p>In practice, most complex projects benefit from a hybrid: Waterfall-style planning at the programme level, with Agile delivery at the workstream level. This gives you predictability for stakeholder reporting and regulatory compliance, while retaining flexibility at the team level.</p>
    `,
    relatedArticles: ['sam-introduction', 'bim-trends'],
  },
};

/* ─────────────────────────────────────────────
   HTML CONTENT RENDERER
   Safely renders the article HTML string.
   ───────────────────────────────────────────── */
function ArticleBody({ html }: { html: string }) {
  return (
    <div
      className="article-body"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/* ─────────────────────────────────────────────
   AUTHOR CARD
   ───────────────────────────────────────────── */
function AuthorCard({ authorKey }: { authorKey: string }) {
  const author = authors[authorKey] ?? authors['Sødera Team'];
  return (
    <div className="flex gap-4 items-start py-8 border-t border-b border-gray-200 my-10">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold text-base flex-shrink-0"
        style={{ background: '#1a3a5c' }}
      >
        {author.initials}
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">About the author</p>
        <p className="font-semibold text-gray-900 text-base">{author.name}</p>
        <p className="text-sm text-gray-500 mb-2">{author.title}</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">{author.bio}</p>
        <a
          href={author.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-blue-700 hover:underline"
        >
          <Linkedin className="w-3.5 h-3.5" /> View LinkedIn profile
        </a>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */
export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = id ? blogArticles[id] : null;

  const handleShare = (platform: 'linkedin' | 'twitter') => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(article?.title ?? '');
    const links = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    };
    window.open(links[platform], '_blank');
  };

  if (!article) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl font-serif text-gray-200 mb-4">404</p>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Article not found</h1>
          <p className="text-gray-500 mb-8">We couldn't find the article you're looking for.</p>
          <Button onClick={() => navigate('/blog')} className="bg-gray-900 hover:bg-gray-700 text-white">
            ← Back to Insights
          </Button>
        </div>
      </div>
    );
  }

  const related = article.relatedArticles
    .map((slug) => blogArticles[slug])
    .filter(Boolean);

  const formattedDate = new Date(article.date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <>
      {/* ── Article body styles ── */}
      <style>{`
        .article-body {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 1.125rem;
          line-height: 1.85;
          color: #1a1a1a;
        }
        .article-body p {
          margin-bottom: 1.5rem;
        }
        .article-body p:first-of-type::first-letter {
          font-size: 4rem;
          font-weight: 700;
          float: left;
          line-height: 0.75;
          margin: 0.1em 0.08em 0 0;
          color: #1a3a5c;
        }
        .article-body h2 {
          font-family: Georgia, serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #111;
          margin: 2.5rem 0 1rem;
          padding-top: 2rem;
          border-top: 1px solid #e5e7eb;
        }
        .article-body h3 {
          font-family: Georgia, serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 2rem 0 0.75rem;
        }
        .article-body ul {
          list-style: none;
          margin: 1.5rem 0;
          padding: 0;
        }
        .article-body ul li {
          padding: 0.5rem 0 0.5rem 1.5rem;
          position: relative;
          border-bottom: 1px solid #f3f4f6;
          font-size: 1.05rem;
        }
        .article-body ul li:last-child {
          border-bottom: none;
        }
        .article-body ul li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: #9ca3af;
        }
        .article-body strong {
          font-weight: 700;
          color: #111;
        }
        .article-body a {
          color: #1a3a5c;
          text-decoration: underline;
        }
      `}</style>

      <div className="pt-20 min-h-screen bg-white">

        {/* ── Top nav bar ── */}
        <div className="border-b border-gray-200 bg-white sticky top-16 z-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Insights
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleShare('linkedin')}
                className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-700 transition-colors border border-gray-200 rounded px-3 py-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" /> Share
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-sky-500 transition-colors border border-gray-200 rounded px-3 py-1.5"
              >
                <Twitter className="w-3.5 h-3.5" /> Tweet
              </button>
            </div>
          </div>
        </div>

        {/* ── Article header ── */}
        <header className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-8">
          {/* Category + date bar */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gray-900">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-600">
              {article.category}
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-xs text-gray-500 uppercase tracking-wide">{formattedDate}</span>
          </div>

          {/* Headline */}
          <h1
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 mb-6"
          >
            {article.title}
          </h1>

          {/* Subtitle / deck */}
          <p
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            className="text-xl text-gray-600 leading-relaxed mb-8 italic border-l-4 border-orange-500 pl-4"
          >
            {article.subtitle}
          </p>

          {/* Byline */}
          <div className="flex items-center gap-3 pb-6 border-b border-gray-200">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
              style={{ background: '#1a3a5c' }}
            >
              {(authors[article.author] ?? authors['Sødera Team']).initials}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {authors[article.author]?.name ?? article.author}
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {formattedDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {article.readTime}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* ── Main content ── */}
        <main className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Pull quote */}
          {article.pullQuote && (
            <blockquote
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              className="my-10 py-6 px-6 border-t-2 border-b-2 border-gray-900 text-2xl italic leading-snug text-gray-800"
            >
              "{article.pullQuote}"
            </blockquote>
          )}

          {/* Article body */}
          <ArticleBody html={article.content} />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-200">
            <Tag className="w-4 h-4 text-gray-400 mt-0.5" />
            {article.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs border-gray-300 text-gray-600 hover:border-orange-500 hover:text-orange-600 cursor-default"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Author bio */}
          <AuthorCard authorKey={article.author} />

          {/* Related articles */}
          {related.length > 0 && (
            <section className="mt-4 mb-16">
              <h2
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-900"
              >
                Continue reading
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => navigate(`/blog/${rel.id}`)}
                    className="text-left border border-gray-200 rounded-lg p-5 hover:border-orange-400 hover:shadow-md transition-all duration-200 group"
                  >
                    <span className="text-xs uppercase tracking-widest text-orange-600 font-semibold">
                      {rel.category}
                    </span>
                    <h3
                      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                      className="text-lg font-bold text-gray-900 mt-2 mb-2 leading-snug group-hover:text-orange-700 transition-colors"
                    >
                      {rel.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{rel.subtitle}</p>
                    <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {rel.readTime}
                    </p>
                  </button>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  );
}
