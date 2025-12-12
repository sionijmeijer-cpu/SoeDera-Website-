import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FAQ from './pages/FAQ';
import Brochure from './pages/Brochure';
import Contact from './pages/Contact';
import DocumentManagement from './pages/services/DocumentManagement';
import RDSConcepts from './pages/services/RDSConcepts';
import InformationManagement from './pages/services/InformationManagement';
import ProductDevelopment from './pages/services/ProductDevelopment';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/document-management" element={<DocumentManagement />} />
            <Route path="/services/rds-concepts" element={<RDSConcepts />} />
            <Route path="/services/information-management" element={<InformationManagement />} />
            <Route path="/services/product-development" element={<ProductDevelopment />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/brochure" element={<Brochure />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;