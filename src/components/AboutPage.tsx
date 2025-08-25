import React from 'react';
import { ArrowLeft, Brain, Users, Target, Clock, Star, CheckCircle, BookOpen, Globe, Microscope, Calculator, Monitor, Zap, FlaskConical, Leaf, GraduationCap, Award, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface AboutPageProps {
  onGoBack: () => void;
}

export default function AboutPage({ onGoBack }: AboutPageProps) {
  // Scroll to top when component mounts
  useScrollToTop();

  return (
    <div className="min-h-screen bg-theme-background pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <header className="text-center mb-12 sm:mb-16">
          
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme-primary mb-4 sm:mb-6">
            About QuizMaster
          </h1>
          <p className="text-lg sm:text-xl text-theme-secondary max-w-3xl mx-auto leading-relaxed px-4">
            Empowering learners across Pakistan with comprehensive, AI-driven quiz preparation for competitive exams and academic excellence.
          </p>
        </header>

        {/* Mission & Vision Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 border border-blue-200 dark:border-blue-700/50">
                <Target className="w-4 h-4 mr-2" />
                Our Mission
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-theme-primary mb-6">
                Democratizing Education Through Technology
              </h2>
              <p className="text-lg text-theme-secondary leading-relaxed mb-6">
                We believe that quality education should be accessible to everyone, regardless of their location or economic background. QuizMaster bridges the gap between traditional learning and modern technology.
              </p>
              </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 border border-blue-200/50 dark:border-blue-700/30">
                <div className="text-center">
                  <Brain className="w-24 h-24 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-theme-primary mb-4">Smart Learning</h3>
                  <p className="text-theme-secondary">
                    AI-powered adaptive learning that personalizes your study experience and tracks your progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* Stats Section */}
<section className="mb-20 px-4">
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {[
      { icon: Users, number: "50K+", label: "Active Students" },
      { icon: BookOpen, number: "500+", label: "Quiz Categories" },
      { icon: Award, number: "95%", label: "Success Rate" },
      { icon: Globe, number: "25+", label: "Cities Covered" }
    ].map((stat, index) => (
      <div
        key={index}
        className="text-center flex flex-col items-center justify-center"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-3">
          <stat.icon className="w-8 h-8 text-white" />
        </div>
        <div className="text-2xl font-bold text-theme-primary">{stat.number}</div>
        <div className="text-sm text-theme-secondary">{stat.label}</div>
      </div>
    ))}
  </div>
</section>


        {/* What We Offer Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-theme-primary mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
              Comprehensive quiz preparation covering all major subjects and competitive exams in Pakistan.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Subject Coverage",
                description: "14 major categories including English, Mathematics, Science, Computer, Islamic Studies, and more.",
                features: ["Comprehensive Topics", "Updated Content", "Expert Curated"]
              },
              {
                icon: Target,
                title: "Exam Preparation",
                description: "Specialized preparation for CSS, PMS, PPSC, KPSC, BPSC, SPSC, and NTS exams.",
                features: ["Past Papers", "Practice Tests", "Performance Analytics"]
              },
              {
                icon: Brain,
                title: "Smart Learning",
                description: "AI-powered adaptive learning that adjusts to your pace and identifies areas for improvement.",
                features: ["Personalized Experience", "Progress Tracking", "Smart Recommendations"]
              },
              {
                icon: Clock,
                title: "Flexible Study",
                description: "Study at your own pace with 24/7 access to quizzes and learning materials.",
                features: ["24/7 Access", "Mobile Friendly", "Offline Mode"]
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "All content is verified by subject matter experts and regularly updated.",
                features: ["Expert Verified", "Regular Updates", "Quality Content"]
              },
              {
                icon: TrendingUp,
                title: "Performance Analytics",
                description: "Track your progress with detailed analytics and performance insights.",
                features: ["Detailed Reports", "Progress Tracking", "Performance Insights"]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-theme-surface rounded-2xl p-6 border border-theme-border hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-theme-primary mb-3">{feature.title}</h3>
                <p className="text-theme-secondary mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-theme-secondary">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-12 border border-blue-200/50 dark:border-blue-700/30">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-theme-primary mb-6">
                Our Story
              </h2>
              <p className="text-lg text-theme-secondary leading-relaxed max-w-4xl mx-auto mb-8">
                QuizMaster was born from a simple observation: students across Pakistan were struggling to find quality, 
                comprehensive preparation materials for competitive exams. Traditional coaching centers were expensive and 
                often inaccessible to students in smaller cities and rural areas.
              </p>
              <p className="text-lg text-theme-secondary leading-relaxed max-w-4xl mx-auto">
                We started with a mission to democratize education through technology. Today, we're proud to serve 
                thousands of students across Pakistan, helping them achieve their dreams of serving the nation through 
                civil services and other competitive positions.
              </p>
            </div>
          </div>
        </section>

        

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who are already preparing for their future with QuizMaster.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Start Learning Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
