import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, BookOpen, Calculator, Globe, Microscope, Monitor, Brain, Play, X, Target, Clock, Trophy, Star, Zap, FlaskConical, Leaf, GraduationCap } from 'lucide-react';

interface CategoryScreenProps {
  onCategorySelect: (category: string) => void;
  onGoBack: () => void;
}

const categories = {
  English: {
    icon: BookOpen,
    color: 'from-blue-500 to-blue-600',
    subcategories: [
      'Grammar',
      'Sentence Structure', 
      'Tenses & Voice',
      'Vocabulary',
      'Writing Skills',
      'Comprehension',
      'Idioms & Phrases',
      'Error Detection',
      'Functional English'
    ]
  },
  Mathematics: {
    icon: Calculator,
    color: 'from-green-500 to-green-600',
    subcategories: [
      'Arithmetic',
      'Algebra',
      'Geometry', 
      'Mensuration',
      'Trigonometry',
      'Statistics',
      'Number System',
      'Sequences & Series',
      'Data Interpretation'
    ]
  },
  'General Knowledge': {
    icon: Globe,
    color: 'from-purple-500 to-violet-600',
    subcategories: [
      'World Facts',
      'Geography',
      'History',
      'Politics',
      'Economy',
      'Sports',
      'Current Affairs',
      'Awards & Honors',
      'Literature'
    ]
  },
  'Pakistan Current Affairs': {
    icon: Clock,
    color: 'from-orange-500 to-orange-600',
    subcategories: [
      'Political Updates',
      'Economic News',
      'Social Issues',
      'International Relations',
      'Development Projects',
      'Education News',
      'Health Updates',
      'Technology News',
      'Environmental Issues'
    ]
  },
  'World Current Affairs': {
    icon: Globe,
    color: 'from-indigo-500 to-indigo-600',
    subcategories: [
      'Global Politics',
      'International Relations',
      'Economic Trends',
      'Climate Change',
      'Technology Advances',
      'Health & Pandemic',
      'Space Exploration',
      'Cultural Events',
      'Scientific Discoveries'
    ]
  },
  'Pakistan Studies': {
    icon: Target,
    color: 'from-red-500 to-red-600',
    subcategories: [
      'History',
      'Geography',
      'Culture',
      'Politics',
      'Economy',
      'Education',
      'Religion',
      'Arts & Literature',
      'National Heroes'
    ]
  },
  'Islamic Studies': {
    icon: Star,
    color: 'from-yellow-500 to-yellow-600',
    subcategories: [
      'Quran',
      'Hadith',
      'Islamic History',
      'Islamic Law',
      'Islamic Ethics',
      'Islamic Philosophy',
      'Islamic Art',
      'Islamic Architecture',
      'Islamic Literature'
    ]
  },
  Computer: {
    icon: Monitor,
    color: 'from-cyan-500 to-cyan-600',
    subcategories: [
      'Fundamentals',
      'Operating Systems',
      'MS Office',
      'Programming',
      'Networking',
      'Databases',
      'Hardware',
      'Software Development',
      'Cybersecurity'
    ]
  },
  'Everyday Science': {
    icon: Zap,
    color: 'from-pink-500 to-pink-600',
    subcategories: [
      'Physics Basics',
      'Chemistry Basics',
      'Biology Basics',
      'Environmental Science',
      'Health & Medicine',
      'Technology',
      'Space Science',
      'Earth Science',
      'Scientific Method'
    ]
  },
  Physics: {
    icon: Microscope,
    color: 'from-violet-500 to-violet-600',
    subcategories: [
      'Mechanics',
      'Thermodynamics',
      'Electromagnetism',
      'Optics',
      'Modern Physics',
      'Nuclear Physics',
      'Quantum Physics',
      'Astrophysics',
      'Wave Physics'
    ]
  },
  Chemistry: {
    icon: FlaskConical,
    color: 'from-emerald-500 to-emerald-600',
    subcategories: [
      'Inorganic Chemistry',
      'Organic Chemistry',
      'Physical Chemistry',
      'Analytical Chemistry',
      'Biochemistry',
      'Nuclear Chemistry',
      'Environmental Chemistry',
      'Industrial Chemistry',
      'Theoretical Chemistry'
    ]
  },
  Biology: {
    icon: Leaf,
    color: 'from-lime-500 to-lime-600',
    subcategories: [
      'Cell Biology',
      'Genetics',
      'Ecology',
      'Evolution',
      'Human Biology',
      'Plant Biology',
      'Microbiology',
      'Biochemistry',
      'Molecular Biology'
    ]
  },
  Pedagogy: {
    icon: GraduationCap,
    color: 'from-amber-500 to-amber-600',
    subcategories: [
      'Teaching Methods',
      'Learning Theories',
      'Curriculum Development',
      'Assessment',
      'Educational Psychology',
      'Classroom Management',
      'Educational Technology',
      'Special Education',
      'Teacher Training'
    ]
  },
  Urdu: {
    icon: BookOpen,
    color: 'from-rose-500 to-rose-600',
    subcategories: [
      'Grammar',
      'Literature',
      'Poetry',
      'Prose',
      'Vocabulary',
      'Composition',
      'Translation',
      'Calligraphy',
      'Modern Urdu'
    ]
  },
  'Past Papers': {
    icon: Clock,
    color: 'from-slate-500 to-slate-600',
    subcategories: [
      'CSS Past Papers',
      'PMS Past Papers',
      'FPSC Past Papers',
      'PPSC Past Papers',
      'KPSC Past Papers',
      'BPSC Past Papers',
      'SPSC Past Papers',
      'AJKPSC Past Papers',
      'NTS Past Papers'
    ]
  }
};

export default function CategoryScreen({ onCategorySelect, onGoBack }: CategoryScreenProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown) {
        const dropdownElement = dropdownRefs.current[openDropdown];
        if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setSelectedSubcategory('');
    setOpenDropdown(openDropdown === categoryName ? null : categoryName);
  };

  const handleSubcategorySelect = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    setOpenDropdown(null);
  };

  const handleDirectCategoryClick = (categoryName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    // Start quiz with mixed questions from this category
    onCategorySelect(`${categoryName}-Mixed`);
  };

  const handleStartQuiz = () => {
    if (selectedCategory && selectedSubcategory) {
      // Pass the category-subcategory combination to the parent
      onCategorySelect(`${selectedCategory}-${selectedSubcategory}`);
    }
  };

  return (
    <div className="min-h-screen bg-theme-background pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <header className="text-center mb-8 sm:mb-12">
          <button
            onClick={onGoBack}
            className="absolute top-6 sm:top-8 left-4 sm:left-8 p-2 rounded-xl hover:bg-theme-surface-secondary transition-colors duration-300"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-theme-secondary" />
          </button>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-primary mb-3 sm:mb-4">
            Choose Your Quiz Category
          </h1>
          <p className="text-base sm:text-lg text-theme-secondary mb-6 sm:mb-8 px-4">
            Select a main category and then choose a specific topic to test your knowledge
          </p>
        </header>

        {/* Categories Grid */}
<main className="mb-12">
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {Object.entries(categories).map(([categoryName, categoryData]) => {
      const IconComponent = categoryData.icon;
      const isSelected = selectedCategory === categoryName;
      const isOpen = openDropdown === categoryName;
      
      return (
        <div
          key={categoryName}
          ref={el => dropdownRefs.current[categoryName] = el}
          className="relative"
        >
          {/* Category Card */}
          <div
            className={`w-full p-4 rounded-xl border transition-all duration-300 text-left group cursor-pointer ${
              isSelected
                ? 'border-blue-500/50 bg-blue-50/80 dark:bg-blue-900/20 dark:border-blue-400/50 shadow-lg ring-1 ring-blue-500/20 dark:ring-blue-400/30'
                : 'border-theme-border hover:border-blue-300/50 dark:hover:border-blue-400/50 bg-theme-surface hover:shadow-md'
            }`}
            onClick={() => handleCategorySelect(categoryName)}
          >
            <div className="flex items-center justify-between mb-3">
              <div 
                className={`w-10 h-10 rounded-lg bg-gradient-to-r ${categoryData.color} flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-200`}
                onClick={(e) => handleDirectCategoryClick(categoryName, e)}
                title={`Start mixed ${categoryName} quiz`}
              >
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <div className="w-6 h-6 rounded-full bg-theme-surface-secondary hover:bg-theme-surface-tertiary border border-theme-border flex items-center justify-center transition-all duration-200">
                <ChevronDown className={`w-3 h-3 text-theme-secondary transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`} />
              </div>
            </div>
            
            <h3 className="text-base font-bold text-theme-primary mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
              {categoryName}
            </h3>
            
            <p className="text-xs text-theme-tertiary mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
              Topics: {categoryData.subcategories.length} 
            </p>
            
            {selectedSubcategory && selectedCategory === categoryName && (
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                Selected: {selectedSubcategory}
              </p>
            )}
          </div>
        
          {/* Dropdown */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-theme-surface rounded-xl shadow-lg border border-theme-border z-50 max-h-64 overflow-y-auto">
              <div className="p-1">
                {categoryData.subcategories.map((subcategory) => (
                  <button
                    key={subcategory}
                    onClick={() => handleSubcategorySelect(subcategory)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors duration-200 ${
                      selectedSubcategory === subcategory
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                        : 'text-theme-primary hover:bg-theme-surface-secondary'
                    }`}
                  >
                    {subcategory}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    })}
  </div>
</main>

  {/* Selected Category Display */}
  {selectedCategory && selectedSubcategory && (
          <div className="surface-card rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-theme-primary mb-1">
                  Ready to start your quiz!
            </h3>
                <p className="text-theme-secondary">
                  <span className="font-medium">{selectedCategory}</span> → <span className="font-medium text-blue-600 dark:text-blue-400">{selectedSubcategory}</span>
                </p>
              </div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${categories[selectedCategory as keyof typeof categories].color} flex items-center justify-center shadow-lg`}>
                {React.createElement(categories[selectedCategory as keyof typeof categories].icon, {
                  className: "w-6 h-6 text-white"
                })}
              </div>
            </div>
          </div>
        )}



        {/* Start Quiz Button */}
        <footer className="text-center mb-12">
          <button
            onClick={handleStartQuiz}
            disabled={!selectedCategory || !selectedSubcategory}
            className={`inline-flex items-center px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 transform ${
              selectedCategory && selectedSubcategory
                ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 shadow-lg hover:shadow-xl'
                : 'text-theme-tertiary bg-theme-surface-tertiary cursor-not-allowed'
            }`}
          >
            <Play className="w-6 h-6 mr-3" />
            Start Quiz
          </button>
          
          {!selectedCategory || !selectedSubcategory ? (
            <p className="text-sm text-theme-tertiary mt-4">
              Please select both a category and subcategory to continue
            </p>
          ) : null}
        </footer>
        
        {/* How It Works - 3 Steps */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-theme-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg text-theme-secondary mb-12">
              Get started with your personalized quiz experience in just 3 simple steps
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  icon: Target,
                  title: "Choose Your Subject",
                  description: "Select from our comprehensive range of subjects. Click the subject icon for mixed questions or use the dropdown for specific topics."
                },
                {
                  step: "02", 
                  icon: Clock,
                  title: "Take the Quiz",
                  description: "Answer engaging questions at your own pace. Skip questions if needed and track your progress with our intuitive interface."
                },
                {
                  step: "03",
                  icon: Trophy,
                  title: "Review Results",
                  description: "Get detailed insights into your performance. See correct answers, track your improvement, and identify areas for growth."
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  
                  {/* Step Card */}
                  <div className="surface-card rounded-2xl p-8 text-center h-full hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-8 h-8 text-blue-600" />
        </div>

                    <h3 className="text-xl font-bold text-theme-primary mb-4">
                      {item.title}
            </h3>
                    
                    <p className="text-theme-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Arrow connector (except for last item) */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300"></div>
                      <div className="absolute -right-1 -top-1 w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
              </div>
                </div>
        </section>

       
        


      </div>
    </div>
  );
}