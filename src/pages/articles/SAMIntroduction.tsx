import { useEffect, useState } from 'react';
import BlogArticleSAM from '../../components/BlogArticleSAM';

export default function SAMIntroductionArticle() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`bg-gradient-to-br from-gray-50 to-blue-50 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <BlogArticleSAM />
    </div>
  );
}
