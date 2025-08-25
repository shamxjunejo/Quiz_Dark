import React from 'react';
import { Brain, Play, Trophy, Target, Users, Zap, Clock, CheckCircle, Star, ArrowRight, Sparkles, BookOpen, Calculator, Globe, Monitor, Microscope, FlaskConical, Leaf, GraduationCap } from 'lucide-react';

interface HomeScreenProps {
  onStartQuiz: () => void;
}

export default function HomeScreen({ onStartQuiz }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-theme-background">

          {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="max-w-4xl mx-auto">

            {/* Logo and Brand */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8 mt-12">
              <div className="relative p-6" role="img" aria-label="QuizMaster Logo">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20" aria-hidden="true" />
                <div className="absolute inset-2 rounded-full bg-blue-300 opacity-15" aria-hidden="true" />
                <div className="absolute inset-4 rounded-full bg-blue-200 opacity-10" aria-hidden="true" />

                {/* Main logo */}
                <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-full p-6 shadow-2xl">
                  <Brain className="w-16 h-16 text-white drop-shadow-lg" aria-hidden="true" />
                </div>
              </div>
            </div>
            
            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-theme-primary mb-4 tracking-tight leading-tight">
              Quiz<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Master</span>
            </h1>
            
            {/* Tagline */}
            <p className="text-lg sm:text-xl md:text-2xl text-theme-secondary mb-4 sm:mb-6 font-medium">
              Challenge Yourself
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-theme-tertiary mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
              Welcome to QuizMaster, the easy way to test your knowledge and learn new facts. Try fun quizzes in many topics, see your score, and improve every day.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 text-sm text-theme-tertiary px-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" aria-hidden="true" />
                <span>Expert Reviewed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" aria-hidden="true" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" aria-hidden="true" />
                <span>50K+ Monthly Users</span>
              </div>
            </div>

            {/* Call-to-Action */}
            <div className="flex flex-col items-center px-4">
              <button
                onClick={onStartQuiz}
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white 
                         bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700
                         rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl
                         relative overflow-hidden group mb-4 w-full sm:w-auto justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                                transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                                transition-transform duration-1000" />
                <Play className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">Start Your Learning Journey</span>
              </button>
              <p className="text-xs sm:text-sm text-theme-tertiary text-center">100% Free for Lifetime • No Sign Up Required • Instant Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-theme-surface relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">

          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-4 sm:mb-6 shadow-lg">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-theme-primary mb-4 sm:mb-6 leading-tight">
              Master Every Subject with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Interactive Quizzes
              </span>
            </h2>

            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 rounded-full"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 rounded-full"></div>
            </div>

            <p className="text-lg text-theme-secondary max-w-2xl mx-auto leading-relaxed">
              Discover our comprehensive learning platform designed to enhance your knowledge
              across multiple subjects with intelligent features and personalized experiences.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: Target,
                title: 'Adaptive Learning',
                description: 'Our smart algorithm personalizes quiz difficulty based on your performance, ensuring optimal learning progression and knowledge retention.',
                color: 'from-blue-500 to-cyan-500',
                darkColor: 'dark:from-blue-400 dark:to-cyan-400'
              },
              {
                icon: Trophy,
                title: 'Performance Analytics',
                description: 'Track your progress with detailed insights, identify weak areas, and monitor improvement across all subjects with comprehensive reporting.',
                color: 'from-purple-500 to-pink-500',
                darkColor: 'dark:from-purple-400 dark:to-pink-400'
              },
              {
                icon: BookOpen,
                title: 'Comprehensive Content',
                description: 'Access thousands of expertly crafted questions across 6+ categories including Math, Science, English, and Computer Skills for complete coverage.',
                color: 'from-green-500 to-emerald-500',
                darkColor: 'dark:from-green-400 dark:to-emerald-400'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Feature Card */}
                <div className="relative h-full p-8 rounded-3xl border border-theme-border/50 
                         bg-theme-surface-primary/80 backdrop-blur-sm
                         hover:bg-theme-surface-primary transition-all duration-500
                         hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/5
                         hover:-translate-y-2 transform-gpu
                         before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br 
                         before:from-white/5 before:to-transparent before:opacity-0 
                         hover:before:opacity-100 before:transition-opacity before:duration-500">

                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>

                  {/* Feature Icon */}
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} ${feature.darkColor} 
                           rounded-2xl flex items-center justify-center mx-auto mb-6 
                           shadow-lg group-hover:shadow-2xl transition-all duration-500
                           group-hover:scale-110 transform-gpu`}>
                    <feature.icon className="w-8 h-8 text-white drop-shadow-sm" />

                    {/* Icon Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} ${feature.darkColor} 
                             rounded-2xl opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-500`}></div>
</div>

                  {/* Feature Content */}
                  <div className="text-center relative z-10">
                    <h3 className="text-xl font-bold text-theme-primary mb-4 leading-tight
                           group-hover:text-transparent group-hover:bg-clip-text 
                           group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600
                           dark:group-hover:from-blue-400 dark:group-hover:to-indigo-400
                           transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-theme-secondary leading-relaxed text-base
                           group-hover:text-theme-primary transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 
                           bg-gradient-to-r ${feature.color} ${feature.darkColor} rounded-full
                           group-hover:w-16 transition-all duration-500`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Feature Sections - Redesigned Static & Responsive */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">

    {/* Feature 1: Knowledge Base - Text left, Visual right */}
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20 lg:mb-32">
      <div className="space-y-6">
        <div className="inline-flex items-center px-3 py-1 rounded-full 
                       bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 
                       text-sm font-medium border border-blue-200 dark:border-blue-700/50">
          <Sparkles className="w-4 h-4 mr-2" />
          Comprehensive
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-primary">
          Knows your subjects
        </h2>
        <p className="text-lg sm:text-xl text-theme-secondary leading-relaxed">
          Get questions from your favorite subjects or explore new topics. Use smart explanations with one click.
        </p>
        <button className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group">
          Explore categories
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
      
      <div className="mt-8 lg:mt-0">
        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 
                       rounded-3xl p-8 h-96 overflow-hidden border border-blue-200/50 dark:border-blue-700/30">
          {/* Subject Categories Grid - Fixed Size Boxes */}
          <div className="grid grid-cols-4 gap-4 h-full content-center">
            {[
              { icon: BookOpen, color: 'from-blue-500 to-blue-600', label: 'English' },
              { icon: Calculator, color: 'from-green-500 to-green-600', label: 'Mathematics' },
              { icon: Globe, color: 'from-purple-500 to-purple-600', label: 'General Knowledge' },
              { icon: Clock, color: 'from-orange-500 to-orange-600', label: 'Pakistan Current Affairs' },
              { icon: Globe, color: 'from-indigo-500 to-indigo-600', label: 'World Current Affairs' },
              { icon: Target, color: 'from-red-500 to-red-600', label: 'Pakistan Studies' },
              { icon: Star, color: 'from-yellow-500 to-yellow-600', label: 'Islamic Studies' },
              { icon: Monitor, color: 'from-cyan-500 to-cyan-600', label: 'Computer Science' },
              { icon: Zap, color: 'from-pink-500 to-pink-600', label: 'Everyday Science' },
              { icon: Microscope, color: 'from-violet-500 to-violet-600', label: 'Physics' },
              { icon: FlaskConical, color: 'from-emerald-500 to-emerald-600', label: 'Chemistry' },
              { icon: Leaf, color: 'from-lime-500 to-lime-600', label: 'Biology' }
            ].map((item, index) => (
              <div key={index} 
                   className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl 
                            p-4 flex flex-col items-center justify-center shadow-sm transition-all duration-300
                            border border-blue-200/60 dark:border-blue-600/30 min-w-[80px] min-h-[100px]">
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-3 shadow-md`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-medium text-blue-700 dark:text-blue-300 text-center leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Feature 2: Smart Learning - Visual left, Text right */}
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20 lg:mb-32">
      <div className="order-2 lg:order-1">
        <div className="relative bg-gradient-to-br from-green-50 to-emerald-100 
                       dark:from-green-900/20 dark:to-emerald-900/20 
                       rounded-3xl p-8 h-96 overflow-hidden border border-green-200/50 
                       dark:border-green-700/30">
          {/* Learning Topics Display - Fixed Container */}
          <div className="flex flex-col justify-center space-y-4 h-full">
            {/* Topic Rows - Static Layout */}
            {[
              { topics: ['Grammar', 'Arithmetic', 'Physics', 'Programming', 'Geography'], color: 'green' },
              { topics: ['Chemistry', 'Algebra', 'Biology', 'Vocabulary', 'Statistics'], color: 'blue' },
              { topics: ['Trigonometry', 'Writing Skills', 'Computer Basics', 'World Facts', 'Cybersecurity'], color: 'purple' },
              { topics: ['MS Office', 'Earth Science', 'Geometry', 'Current Affairs', 'Health Medicine'], color: 'orange' },
              { topics: ['Tenses Voice', 'Number System', 'Space Science', 'Internet Networking', 'Pakistan Studies'], color: 'pink' }
            ].map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center overflow-hidden">
                <div className="flex space-x-2">
                  {row.topics.map((topic, index) => (
                    <div key={index}
                         className={`flex-shrink-0 px-3 py-2 bg-white/80 dark:bg-gray-800/80 
                                   backdrop-blur-sm rounded-full border text-xs font-medium shadow-sm whitespace-nowrap
                                   ${row.color === 'green' ? 'border-green-200/60 dark:border-green-600/30 text-green-700 dark:text-green-300' : 
                                     row.color === 'blue' ? 'border-blue-200/60 dark:border-blue-600/30 text-blue-700 dark:text-blue-300' :
                                     row.color === 'purple' ? 'border-purple-200/60 dark:border-purple-600/30 text-purple-700 dark:text-purple-300' :
                                     row.color === 'orange' ? 'border-orange-200/60 dark:border-orange-600/30 text-orange-700 dark:text-orange-300' :
                                     'border-pink-200/60 dark:border-pink-600/30 text-pink-700 dark:text-pink-300'}`}>
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="order-1 lg:order-2 space-y-6">
        <div className="inline-flex items-center px-3 py-1 rounded-full 
                       bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 
                       text-sm font-medium border border-green-200 dark:border-green-700/50">
          <Sparkles className="w-4 h-4 mr-2" />
          Smart Learning
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-primary">
          Learn, learn, learn
        </h2>
        <p className="text-lg sm:text-xl text-theme-secondary leading-relaxed">
          QuizMaster lets you breeze through topics by predicting your learning needs and adapting to your pace.
        </p>
        <button className="inline-flex items-center text-green-600 dark:text-green-400 
                         hover:text-green-700 dark:hover:text-green-300 font-medium group">
          Try it now
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>

    {/* Feature 3: Smart Questions - Text left, Visual right */}
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20 lg:mb-32">
      <div className="space-y-6">
        <div className="inline-flex items-center px-3 py-1 rounded-full 
             bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 
             text-sm font-medium border border-purple-200 dark:border-purple-700/50">
          <Zap className="w-4 h-4 mr-2" />
          Smart Powered
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-primary">
          Practice with smart questions
        </h2>
        <p className="text-lg sm:text-xl text-theme-secondary leading-relaxed">
          Get smart-generated MCQs from every subject. Each question adapts to your learning level with instant explanations.
        </p>
        <button className="inline-flex items-center text-purple-600 dark:text-purple-400 
                 hover:text-purple-700 dark:hover:text-purple-300 font-medium group">
          Start practicing
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>

      <div className="mt-8 lg:mt-0">
        <div className="relative bg-gradient-to-br from-purple-50 to-pink-100 
             dark:from-purple-900/20 dark:to-pink-900/20 
             rounded-3xl p-6 h-96 overflow-hidden border border-purple-200/50 
             dark:border-purple-700/30 flex flex-col justify-center">
          
          {/* Sample MCQ Cards - Fixed Container */}
          <div className="flex justify-center">
            <div className="flex space-x-4 overflow-hidden">
              {[
                {
                  subject: 'Mathematics',
                  question: 'What is 15% of 200?',
                  options: ['25', '30', '35', '40'],
                  answer: 'B',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  subject: 'English',
                  question: 'Choose the correct synonym of "Abundant"',
                  options: ['Scarce', 'Plentiful', 'Limited', 'Few'],
                  answer: 'B',
                  color: 'from-green-500 to-green-600'
                },
                {
                  subject: 'Physics',
                  question: 'The unit of force is:',
                  options: ['Joule', 'Newton', 'Watt', 'Pascal'],
                  answer: 'B',
                  color: 'from-indigo-500 to-indigo-600'
                }
              ].map((mcq, index) => (
                <div key={index} 
                     className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl 
                              p-4 shadow-lg transition-all duration-300 
                              border border-purple-200/60 dark:border-purple-600/30 min-w-[240px] flex-shrink-0">
                  <div className={`w-full h-2 bg-gradient-to-r ${mcq.color} rounded-full mb-3`}></div>
                  <h4 className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-2 uppercase tracking-wide">
                    {mcq.subject}
                  </h4>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-3 leading-tight">
                    {mcq.question}
                  </p>
                  <div className="space-y-1">
                    {mcq.options.map((option, optIndex) => (
                      <div key={optIndex} className="flex items-center text-xs">
                        <span className="w-4 h-4 rounded-full bg-gray-100 dark:bg-gray-700 
                             flex items-center justify-center mr-2 text-gray-600 dark:text-gray-400 font-medium text-xs">
                          {String.fromCharCode(65 + optIndex)}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 text-xs">{option}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-600">
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                      Answer: {mcq.answer}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

 




      {/* Testimonials Section - Like Cursor's testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-theme-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-theme-primary mb-8">
              Loved by world-class learners
            </h2>
            <p className="text-xl text-theme-secondary">
              Students all around the world reach for QuizMaster by choice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "QuizMaster is at least a 2x improvement over traditional studying. It's amazing having an AI learning companion.",
                author: "Sarah Johnson",
                role: "Medical Student",
                company: "Harvard"
              },
              {
                quote: "The AI explanations are occasionally so good they defy reality - about 25% of the time it anticipates exactly what I need to learn.",
                author: "Mike Chen",
                role: "Engineering Student",
                company: "MIT"
              },
              {
                quote: "QuizMaster is hands down my biggest learning improvement in years. The personalized quizzes are incredible.",
                author: "Emma Davis",
                role: "Pre-Med Student",
                company: "Stanford"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-theme-background rounded-2xl p-8 shadow-sm border border-theme-border">
                <p className="text-theme-primary mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-theme-primary">{testimonial.author}</div>
                    <div className="text-sm text-theme-secondary">{testimonial.role}</div>
                    <div className="text-sm text-theme-tertiary">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-theme-primary mb-8">
            Try QuizMaster Now
          </h2>
          <p className="text-xl text-theme-secondary mb-12">
            Start learning for free and discover why thousands of students choose QuizMaster.
          </p>

          <button
            onClick={onStartQuiz}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white 
                     bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700
                     rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl
                     relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                            transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                            transition-transform duration-1000" />
            <Play className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            <span className="relative z-10">Start Learning Free</span>
          </button>

          <p className="text-sm text-theme-tertiary mt-6">No signup required • Start instantly</p>
      </div>
      </section>
    </div>
  );
}