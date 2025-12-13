import { useParams, Navigate } from 'react-router-dom';
import BIMConstructionArticle from './articles/BIMConstruction';
import DocumentManagementArticle from './articles/DocumentManagement';
import PredictiveMaintenanceArticle from './articles/PredictiveMaintenance';
import ProjectManagementArticle from './articles/ProjectManagement';
import DigitalTransformationArticle from './articles/DigitalTransformation';
import ReferenceDesignationArticle from './articles/ReferenceDesignation';
import CloudInformationManagementArticle from './articles/CloudInformationManagement';
import SAMArticle from './BlogDetail';

export default function BlogPost() {
  const { id } = useParams();

  const articleMap: { [key: string]: React.ComponentType<any> } = {
    '1': SAMArticle,
    '2': BIMConstructionArticle,
    '3': DocumentManagementArticle,
    '4': PredictiveMaintenanceArticle,
    '5': ProjectManagementArticle,
    '6': DigitalTransformationArticle,
    '7': ReferenceDesignationArticle,
    '8': CloudInformationManagementArticle,
  };

  if (!id || !articleMap[id]) {
    return (
      <div className="pt-[128px] min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">Sorry, we couldn't find the article you're looking for.</p>
          <button
            onClick={() => window.location.href = '/blog'}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const ArticleComponent = articleMap[id];
  return <ArticleComponent />;
}
