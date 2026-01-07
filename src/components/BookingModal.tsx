import { useState } from 'react';
import { X, Calendar, Clock, Send, CheckCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  assessmentType: 'rds' | 'document';
}

export default function BookingModal({ isOpen, onClose, assessmentType }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const title = assessmentType === 'rds' 
    ? 'RDS Assessment (IEC 81346)' 
    : 'Document Management Assessment';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Booking Request: ${title}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Preferred Date: ${formData.date}\n` +
      `Preferred Time: ${formData.time}\n\n` +
      `Assessment Type: ${title}`
    );

    // Automatically send to info@soedera.eu
    window.location.href = `mailto:info@soedera.eu?subject=${subject}&body=${body}`;

    // Show success feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset and close after showing success
      setTimeout(() => {
        setFormData({ name: '', email: '', date: '', time: '' });
        setIsSubmitted(false);
        onClose();
      }, 3000);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  // Generate time slots from 9:00 to 17:00
  const timeSlots = [];
  for (let hour = 9; hour <= 17; hour++) {
    timeSlots.push(`${hour.toString().padStart(2, '0')}:00`);
    if (hour < 17) {
      timeSlots.push(`${hour.toString().padStart(2, '0')}:30`);
    }
  }

  // Get minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-5 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          <h2 className="text-xl font-bold pr-8">Book a Call</h2>
          <p className="text-slate-300 text-sm mt-1">{title}</p>
        </div>

        {/* Success State */}
        {isSubmitted ? (
          <div className="p-8 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-in zoom-in duration-700">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Request Sent Successfully!</h3>
            <p className="text-gray-600 leading-relaxed">
              Your booking request has been sent to <strong>info@soedera.eu</strong>. 
              We'll confirm your appointment within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all outline-none"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all outline-none"
                placeholder="you@company.com"
              />
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                <Calendar className="inline w-4 h-4 mr-1" />
                Preferred Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={minDate}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all outline-none"
              />
            </div>

            {/* Time */}
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                <Clock className="inline w-4 h-4 mr-1" />
                Preferred Time (CET) *
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all outline-none bg-white"
              >
                <option value="">Select a time</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-lg font-semibold hover:from-slate-600 hover:to-slate-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Booking Request
                </>
              )}
            </button>

            <p className="text-xs text-gray-500 text-center">
              We'll confirm your appointment via email within 24 hours.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
