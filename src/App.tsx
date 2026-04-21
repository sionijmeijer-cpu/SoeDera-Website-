import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import FAQ from './pages/FAQ';
import Brochure from './pages/Brochure';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import DocumentManagement from './pages/services/DocumentManagement';
import RDS from './pages/services/RDS';
import BIMManagement from './pages/services/BIMManagement';
import ProductDevelopment from './pages/services/ProductDevelopment';
import AssetManagement from './pages/services/AssetManagement';
import ProjectManagement from './pages/services/ProjectManagement';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SEO />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            {/* Core pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/brochure" element={<Brochure />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />

            {/* Services */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/document-management" element={<DocumentManagement />} />
            <Route path="/services/rds" element={<RDS />} />
            <Route path="/services/bim-management" element={<BIMManagement />} />
            <Route path="/services/product-development" element={<ProductDevelopment />} />
            <Route path="/services/asset-management" element={<AssetManagement />} />
            <Route path="/services/project-management" element={<ProjectManagement />} />

            {/* Blog — ALL articles go through BlogDetail via :id slug */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
