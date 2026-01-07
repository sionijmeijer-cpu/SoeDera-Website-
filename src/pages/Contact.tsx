import { Mail, MapPin, Linkedin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useState } from 'react';
import { useAction } from 'convex/react';
import { api } from '../../convex/_generated/api';

export default function Contact() {
  return (
    <div className="pt-[128px]">
      <ContactContent />
    </div>
  );
}

function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const sendEmail = useAction(api.email.sendContactEmail);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      await sendEmail({
        name: formData.name,
        email: formData.email,
        company: formData.company || undefined,
        message: formData.message,
      });

      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Email error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status === 'error') {
      setStatus('idle');
    }
  };

  return (
    <div className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Get in touch with our team to discuss how we can help your organization succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <Card className="border border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Send Us a Message</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setStatus('idle')}
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-red-800">Failed to send message</p>
                        <p className="text-sm text-red-600 mt-1">{errorMessage}</p>
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full"
                      disabled={status === 'sending'}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full"
                      disabled={status === 'sending'}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full"
                      disabled={status === 'sending'}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows={6}
                      className="w-full"
                      disabled={status === 'sending'}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-base sm:text-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70"
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="border border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Get in Touch</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  We're here to answer your questions and discuss your needs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1">Email</h3>
                    <a
                      href="mailto:info@soedera.eu"
                      className="text-sm sm:text-base text-blue-600 hover:text-blue-700 hover:underline break-all"
                    >
                      info@soedera.eu
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1">Location</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Braga, Portugal
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Connect With Us</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Follow us on LinkedIn for updates and insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/106622271/admin/dashboard/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-100 p-3 sm:p-4 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                  >
                    <Linkedin className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg bg-gradient-to-br from-orange-50 to-blue-50">
              <CardContent className="pt-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm sm:text-base text-gray-700">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                  <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
