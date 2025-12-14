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
import BlogPost from './pages/BlogPost';
import FAQ from './pages/FAQ';
import Brochure from './pages/Brochure';
import Contact from './pages/Contact';
import DocumentManagement from './pages/services/DocumentManagement';
import RDS from './pages/services/RDS';
import BIMManagement from './pages/services/BIMManagement';
import ProductDevelopment from './pages/services/ProductDevelopment';
import AssetManagement from './pages/services/AssetManagement';
import ProjectManagement from './pages/services/ProjectManagement';
import DocumentManagementArticle from './pages/articles/DocumentManagement';
import ReferenceDesignationArticle from './pages/articles/ReferenceDesignation';
import ProjectManagementArticle from './pages/articles/ProjectManagement';
import CloudInformationManagementArticle from './pages/articles/CloudInformationManagement';
import PredictiveMaintenanceArticle from './pages/articles/PredictiveMaintenance';

import DigitalTransformationArticle from './pages/articles/DigitalTransformation';
import SAMIntroductionArticle from './pages/articles/SAMIntroduction';
import BlogArticleBIM from './components/BlogArticleBIM';
import BlogArticleDocMgmt from './components/BlogArticleDocMgmt';
import BlogArticleAgile from './components/BlogArticleAgile';
import BlogArticleDigitalTransform from './components/BlogArticleDigitalTransform';
import BlogArticlePredictive from './components/BlogArticlePredictive';
import BlogArticleRDS from './components/BlogArticleRDS';
import BlogArticleCloudInfo from './components/BlogArticleCloudInfo';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SEO />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/document-management" element={<DocumentManagement />} />
            <Route path="/services/rds" element={<RDS />} />
            <Route path="/services/bim-management" element={<BIMManagement />} />
            <Route path="/services/product-development" element={<ProductDevelopment />} />
            <Route path="/services/asset-management" element={<AssetManagement />} />
            <Route path="/services/project-management" element={<ProjectManagement />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/blog/sam-introduction" element={<SAMIntroductionArticle />} />
            <Route path="/blog/document-management" element={<DocumentManagementArticle />} />
            <Route path="/blog/reference-designation" element={<ReferenceDesignationArticle />} />
            <Route path="/blog/project-management" element={<ProjectManagementArticle />} />
            <Route path="/blog/cloud-information-management" element={<CloudInformationManagementArticle />} />
            <Route path="/blog/predictive-maintenance" element={<PredictiveMaintenanceArticle />} />

            <Route path="/blog/digital-transformation" element={<DigitalTransformationArticle />} />
            <Route path="/blog/bim-trends" element={<BlogArticleBIM />} />
            <Route path="/blog/document-management" element={<BlogArticleDocMgmt />} />
            <Route path="/blog/agile-waterfall" element={<BlogArticleAgile />} />
            <Route path="/blog/digital-transformation" element={<BlogArticleDigitalTransform />} />
            <Route path="/blog/predictive-maintenance" element={<BlogArticlePredictive />} />
            <Route path="/blog/rds-standards" element={<BlogArticleRDS />} />
            <Route path="/blog/cloud-information" element={<BlogArticleCloudInfo />} />
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
