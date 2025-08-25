import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface ContactPageProps {
  onGoBack: () => void;
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex items-center justify-between"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-white pr-4">
          {question}
        </h3>
        <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </div>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function ContactPage({ onGoBack }: ContactPageProps) {
  useScrollToTop();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions about QuizMaster? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </header>

        {/* Contact Information & Form Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "junejoshams8@gmail.com",
                    description: "Send an email anytime and we'll get back to you within 24 hours."
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+92 316 3686520",
                    description: "Speak directly with our support team during business hours."
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    content: "Khairpur Mir's, Sindh, Pakistan",
                    description: "Our main office is located in the heart of Islamabad."
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: "Mon - Fri: 9:00 AM - 5:00 PM",
                    description: "We're available during these hours for immediate assistance."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 dark:text-white mb-1">{item.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{item.content}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  {[
                    {
                      name: "Facebook",
                      url: "https://facebook.com/quizmasterpk",
                      icon: (
                        <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" fill="currentColor" />
                        </svg>
                      )
                    },
                    {
                      name: "X",
                      url: "https://x.com/quizmasterpk",
                      icon: (
                        <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
                        </svg>
                      )
                    },
                    {
                      name: "Instagram",
                      url: "https://instagram.com/quizmasterpk",
                      icon: (
                        <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.908 4.908 0 0 1-1.153 1.772 4.908 4.908 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.908 4.908 0 0 1-1.772-1.153 4.908 4.908 0 0 1-1.153-1.772c-.247-.637-.415-1.363-.465-2.428-.047-1.066-.06-1.405-.06-4.122 0-2.717.01-3.056.06-4.122.05-1.065.218-1.79.465-2.428a4.908 4.908 0 0 1 1.153-1.772 4.908 4.908 0 0 1 1.772-1.153c.637-.247 1.363-.415 2.428-.465 1.066-.047 1.405-.06 4.122-.06zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" fill="currentColor" />
                        </svg>
                      )
                    },
                    {
                      name: "LinkedIn",
                      url: "https://linkedin.com/company/quizmasterpk",
                      icon: (
                        <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor" />
                        </svg>
                      )
                    }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-800 
                        hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <span className="text-gray-700 dark:text-gray-300">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Send us a Message
                </h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/50 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-green-700 dark:text-green-300 text-sm">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-lg flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                    <span className="text-red-700 dark:text-red-300 text-sm">Something went wrong. Please try again.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed text-white'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find quick answers to common questions about QuizMaster.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How do I get started with QuizMaster?",
                answer: "Simply sign up for an account, choose your preferred subjects, and start taking quizzes. Our platform will adapt to your learning pace and provide personalized recommendations. You can begin with any of our 15 major categories including English, Mathematics, Science, Computer, Islamic Studies, and more."
              },
              {
                question: "Are the quiz questions updated regularly?",
                answer: "Yes, we regularly update our question bank with new content and ensure all questions are relevant to current exam patterns and syllabi. Our team of subject matter experts continuously reviews and adds new questions to keep the content fresh and aligned with current educational standards."
              },
              {
                question: "Can I access QuizMaster on mobile devices?",
                answer: "Absolutely! QuizMaster is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktop computers. Our mobile-first design ensures you can study anywhere, anytime, with the same great experience across all platforms."
              },
              {
                question: "How accurate are the quiz answers?",
                answer: "All our content is verified by subject matter experts and regularly reviewed to ensure accuracy and relevance to current exam standards. We maintain strict quality control measures and regularly update our question bank based on feedback from educators and students."
              },
              {
                question: "Do you offer support for specific exams?",
                answer: "Yes, we provide specialized preparation for CSS, PMS, PPSC, KPSC, BPSC, SPSC, and NTS exams with targeted content and practice tests. Each exam category has specific question sets designed to match the actual exam patterns and difficulty levels."
              },
              {
                question: "Is there a limit to how many quizzes I can take?",
                answer: "No, there's no limit! You can take as many quizzes as you want to practice and improve your knowledge in any subject area. We encourage regular practice and provide unlimited access to all our quiz categories and past papers."
              },
              {
                question: "What subjects and categories do you cover?",
                answer: "We cover 15 comprehensive categories including English, Mathematics, General Knowledge, Pakistan Current Affairs, World Current Affairs, Pakistan Studies, Islamic Studies, Computer Science, Everyday Science, Physics, Chemistry, Biology, Pedagogy, Urdu, and Past Papers. Each category has multiple subcategories for focused learning."
              },
              {
                question: "How does the smart learning feature work?",
                answer: "Our AI-powered smart learning system analyzes your performance, identifies your strengths and weaknesses, and adapts the quiz difficulty accordingly. It tracks your progress, provides personalized recommendations, and helps you focus on areas that need improvement."
              },
              {
                question: "Can I track my progress and performance?",
                answer: "Yes! QuizMaster provides comprehensive progress tracking with detailed analytics, performance insights, and detailed reports. You can monitor your improvement over time, see which topics you've mastered, and identify areas that need more practice."
              },
              {
                question: "Do you offer offline access to quizzes?",
                answer: "Currently, QuizMaster requires an internet connection to access our full range of features. However, we're working on offline capabilities that will allow you to download quizzes for offline study sessions."
              }
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-blue-600 rounded-xl p-10 text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="mb-6 opacity-90">
              Join thousands of students who are already preparing for their future with QuizMaster.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
              Start Learning Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}