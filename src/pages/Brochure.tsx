import { Download, FileText, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export default function Brochure() {
  return (
    <div className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Company Brochure & Downloads
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Access our comprehensive company brochure and additional resources.
          </p>
        </div>

        <Card className="border border-gray-200 shadow-lg mb-8">
          <CardHeader>
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <FileText className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" />
            </div>
            <CardTitle className="text-xl sm:text-2xl text-center">
              SøDera Company Brochure
            </CardTitle>
            <CardDescription className="text-center text-sm sm:text-base">
              Comprehensive overview of our services, expertise, and approach
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              Our company brochure provides a detailed introduction to SøDera, including our service offerings, 
              industry expertise, project portfolio, and client testimonials. Learn how we can help your organization 
              achieve operational excellence.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base"
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Download Brochure (PDF)
            </Button>
            <p className="text-xs sm:text-sm text-gray-500 mt-4">File size: 2.4 MB • Updated January 2024</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
          <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 sm:h-7 sm:w-7 text-orange-600" />
              </div>
              <CardTitle className="text-lg sm:text-xl">Service Overview</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Detailed breakdown of our consulting services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full text-sm sm:text-base">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
              </div>
              <CardTitle className="text-lg sm:text-xl">Case Studies</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Real-world examples of successful projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full text-sm sm:text-base">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 sm:h-7 sm:w-7 text-orange-600" />
              </div>
              <CardTitle className="text-lg sm:text-xl">BIM Implementation Guide</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Best practices for BIM adoption
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full text-sm sm:text-base">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
              </div>
              <CardTitle className="text-lg sm:text-xl">Industry Insights</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Quarterly trends and analysis reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full text-sm sm:text-base">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="border border-gray-200 shadow-lg bg-gradient-to-br from-orange-50 to-blue-50">
          <CardHeader>
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-lg flex items-center justify-center mb-4 mx-auto shadow-md">
              <Mail className="h-7 w-7 sm:h-8 sm:w-8 text-orange-600" />
            </div>
            <CardTitle className="text-xl sm:text-2xl text-center">
              Request Custom Materials
            </CardTitle>
            <CardDescription className="text-center text-sm sm:text-base">
              Need specific information or a customized presentation?
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
              Our team can prepare tailored materials for your organization, including custom case studies, 
              industry-specific solutions, and detailed service proposals.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base"
            >
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Contact Us
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
