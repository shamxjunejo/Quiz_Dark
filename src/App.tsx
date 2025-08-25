import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeScreen from './components/HomeScreen';
import CategoryScreen from './components/CategoryScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import { questionsByCategory, Question } from './data/questions';

type Screen = 'home' | 'categories' | 'quiz' | 'result' | 'about' | 'contact';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);

  // Scroll to top when screen changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentScreen]);

  const handleStartQuiz = () => {
    setCurrentScreen('categories');
  };

  const handleCategorySelect = (categorySubcategory: string) => {
    // Map the category-subcategory to the data key
    const categoryMapping: Record<string, string> = {
      // English
      'English-Grammar': 'english',
      'English-Sentence Structure': 'english',
      'English-Tenses & Voice': 'english',
      'English-Vocabulary': 'english',
      'English-Writing Skills': 'english',
      'English-Comprehension': 'english',
      'English-Idioms & Phrases': 'english',
      'English-Error Detection': 'english',
      'English-Functional English': 'english',
      'English-Mixed': 'english',
      
      // Mathematics
      'Mathematics-Arithmetic': 'mathematics',
      'Mathematics-Algebra': 'mathematics',
      'Mathematics-Geometry': 'mathematics',
      'Mathematics-Mensuration': 'mathematics',
      'Mathematics-Trigonometry': 'mathematics',
      'Mathematics-Statistics': 'mathematics',
      'Mathematics-Number System': 'mathematics',
      'Mathematics-Sequences & Series': 'mathematics',
      'Mathematics-Data Interpretation': 'mathematics',
      'Mathematics-Mixed': 'mathematics',
      
      // General Knowledge
      'General Knowledge-World Facts': 'general-knowledge',
      'General Knowledge-Geography': 'general-knowledge',
      'General Knowledge-History': 'general-knowledge',
      'General Knowledge-Politics': 'general-knowledge',
      'General Knowledge-Economy': 'general-knowledge',
      'General Knowledge-Sports': 'general-knowledge',
      'General Knowledge-Current Affairs': 'general-knowledge',
      'General Knowledge-Awards & Honors': 'general-knowledge',
      'General Knowledge-Literature': 'general-knowledge',
      'General Knowledge-Mixed': 'general-knowledge',
      
      // Pakistan Current Affairs
      'Pakistan Current Affairs-Political Updates': 'pakistan-current-affairs',
      'Pakistan Current Affairs-Economic News': 'pakistan-current-affairs',
      'Pakistan Current Affairs-Social Issues': 'pakistan-current-affairs',
      'Pakistan Current Affairs-International Relations': 'pakistan-current-affairs',
      'Pakistan Current Affairs-Development Projects': 'pakistan-current-affairs',
      'Pakistan Current Affairs-Education News': 'pakistan-current-affairs',
      'Pakistan Current Affairs-Health Updates': 'pakistan-current-affairs',
      'Pakistan Current Affairs-Technology News': 'pakistan-current-affairs',
      'Pakistan Current Affairs-Environmental Issues': 'pakistan-current-affairs',
      'Pakistan Current Affairs-Mixed': 'pakistan-current-affairs',
      
      // World Current Affairs
      'World Current Affairs-Global Politics': 'world-current-affairs',
      'World Current Affairs-International Relations': 'world-current-affairs',
      'World Current Affairs-Economic Trends': 'world-current-affairs',
      'World Current Affairs-Climate Change': 'world-current-affairs',
      'World Current Affairs-Technology Advances': 'world-current-affairs',
      'World Current Affairs-Health & Pandemic': 'world-current-affairs',
      'World Current Affairs-Space Exploration': 'world-current-affairs',
      'World Current Affairs-Cultural Events': 'world-current-affairs',
      'World Current Affairs-Scientific Discoveries': 'world-current-affairs',
      'World Current Affairs-Mixed': 'world-current-affairs',
      
      // Pakistan Studies
      'Pakistan Studies-History': 'pakistan-studies',
      'Pakistan Studies-Geography': 'pakistan-studies',
      'Pakistan Studies-Culture': 'pakistan-studies',
      'Pakistan Studies-Politics': 'pakistan-studies',
      'Pakistan Studies-Economy': 'pakistan-studies',
      'Pakistan Studies-Education': 'pakistan-studies',
      'Pakistan Studies-Religion': 'pakistan-studies',
      'Pakistan Studies-Arts & Literature': 'pakistan-studies',
      'Pakistan Studies-National Heroes': 'pakistan-studies',
      'Pakistan Studies-Mixed': 'pakistan-studies',
      
      // Islamic Studies
      'Islamic Studies-Quran': 'islamic-studies',
      'Islamic Studies-Hadith': 'islamic-studies',
      'Islamic Studies-Islamic History': 'islamic-studies',
      'Islamic Studies-Islamic Law': 'islamic-studies',
      'Islamic Studies-Islamic Ethics': 'islamic-studies',
      'Islamic Studies-Islamic Philosophy': 'islamic-studies',
      'Islamic Studies-Islamic Art': 'islamic-studies',
      'Islamic Studies-Islamic Architecture': 'islamic-studies',
      'Islamic Studies-Islamic Literature': 'islamic-studies',
      'Islamic Studies-Mixed': 'islamic-studies',
      
      // Computer
      'Computer-Fundamentals': 'computer-fundamentals',
      'Computer-Operating Systems': 'operating-systems',
      'Computer-MS Office': 'ms-office',
      'Computer-Programming': 'programming-languages',
      'Computer-Networking': 'networking',
      'Computer-Databases': 'database-management',
      'Computer-Hardware': 'hardware',
      'Computer-Software Development': 'software-development',
      'Computer-Cybersecurity': 'computer-skills',
      'Computer-Mixed': 'computer-skills',
      
      // Everyday Science
      'Everyday Science-Physics Basics': 'everyday-science',
      'Everyday Science-Chemistry Basics': 'everyday-science',
      'Everyday Science-Biology Basics': 'everyday-science',
      'Everyday Science-Environmental Science': 'everyday-science',
      'Everyday Science-Health & Medicine': 'everyday-science',
      'Everyday Science-Technology': 'everyday-science',
      'Everyday Science-Space Science': 'everyday-science',
      'Everyday Science-Earth Science': 'everyday-science',
      'Everyday Science-Scientific Method': 'everyday-science',
      'Everyday Science-Mixed': 'everyday-science',
      
      // Physics
      'Physics-Mechanics': 'physics',
      'Physics-Thermodynamics': 'physics',
      'Physics-Electromagnetism': 'physics',
      'Physics-Optics': 'physics',
      'Physics-Modern Physics': 'physics',
      'Physics-Nuclear Physics': 'physics',
      'Physics-Quantum Physics': 'physics',
      'Physics-Astrophysics': 'physics',
      'Physics-Wave Physics': 'physics',
      'Physics-Mixed': 'physics',
      
      // Chemistry
      'Chemistry-Inorganic Chemistry': 'chemistry',
      'Chemistry-Organic Chemistry': 'chemistry',
      'Chemistry-Physical Chemistry': 'chemistry',
      'Chemistry-Analytical Chemistry': 'chemistry',
      'Chemistry-Biochemistry': 'chemistry',
      'Chemistry-Nuclear Chemistry': 'chemistry',
      'Chemistry-Environmental Chemistry': 'chemistry',
      'Chemistry-Industrial Chemistry': 'chemistry',
      'Chemistry-Theoretical Chemistry': 'chemistry',
      'Chemistry-Mixed': 'chemistry',
      
      // Biology
      'Biology-Cell Biology': 'biology',
      'Biology-Genetics': 'biology',
      'Biology-Ecology': 'biology',
      'Biology-Evolution': 'biology',
      'Biology-Human Biology': 'biology',
      'Biology-Plant Biology': 'biology',
      'Biology-Microbiology': 'biology',
      'Biology-Biochemistry': 'biology',
      'Biology-Molecular Biology': 'biology',
      'Biology-Mixed': 'biology',
      
      // Pedagogy
      'Pedagogy-Teaching Methods': 'pedagogy',
      'Pedagogy-Learning Theories': 'pedagogy',
      'Pedagogy-Curriculum Development': 'pedagogy',
      'Pedagogy-Assessment': 'pedagogy',
      'Pedagogy-Educational Psychology': 'pedagogy',
      'Pedagogy-Classroom Management': 'pedagogy',
      'Pedagogy-Educational Technology': 'pedagogy',
      'Pedagogy-Special Education': 'pedagogy',
      'Pedagogy-Teacher Training': 'pedagogy',
      'Pedagogy-Mixed': 'pedagogy',
      
      // Urdu
      'Urdu-Grammar': 'urdu',
      'Urdu-Literature': 'urdu',
      'Urdu-Poetry': 'urdu',
      'Urdu-Prose': 'urdu',
      'Urdu-Vocabulary': 'urdu',
      'Urdu-Composition': 'urdu',
      'Urdu-Translation': 'urdu',
      'Urdu-Calligraphy': 'urdu',
      'Urdu-Modern Urdu': 'urdu',
      'Urdu-Mixed': 'urdu',
      
      // Past Papers
      'Past Papers-CSS Past Papers': 'past-papers',
      'Past Papers-PMS Past Papers': 'past-papers',
      'Past Papers-FPSC Past Papers': 'past-papers',
      'Past Papers-PPSC Past Papers': 'past-papers',
      'Past Papers-KPSC Past Papers': 'past-papers',
      'Past Papers-BPSC Past Papers': 'past-papers',
      'Past Papers-SPSC Past Papers': 'past-papers',
      'Past Papers-AJKPSC Past Papers': 'past-papers',
      'Past Papers-NTS Past Papers': 'past-papers',
      'Past Papers-Mixed': 'past-papers'
    };

    const dataCategory = categoryMapping[categorySubcategory] || categorySubcategory.toLowerCase();
    setSelectedCategory(dataCategory);
    setCurrentScreen('quiz');
    setScore(0);
    setUserAnswers([]);
  };

  const handleQuizComplete = (finalScore: number, answers: (number | null)[], questions: Question[]) => {
    setScore(finalScore);
    setUserAnswers(answers);
    setCurrentScreen('result');
  };

  const handleRetakeQuiz = () => {
    setCurrentScreen('quiz');
    setScore(0);
    setUserAnswers([]);
  };

  const handleGoHome = () => {
    setCurrentScreen('home');
    setSelectedCategory('');
    setScore(0);
    setUserAnswers([]);
  };

  const handleNavigateToAbout = () => {
    setCurrentScreen('about');
  };

  const handleNavigateToContact = () => {
    setCurrentScreen('contact');
  };

  const currentQuestions = selectedCategory ? questionsByCategory[selectedCategory] || [] : [];
  
  return (
    <div className="font-inter bg-theme-background text-theme-primary min-h-screen">
      <Navbar 
        onLogoClick={handleGoHome}
        onAboutClick={handleNavigateToAbout}
        onContactClick={handleNavigateToContact}
      />
      
      {currentScreen === 'home' && (
        <HomeScreen onStartQuiz={handleStartQuiz} />
      )}
      
      {currentScreen === 'categories' && (
        <CategoryScreen 
          onCategorySelect={handleCategorySelect}
          onGoBack={() => setCurrentScreen('home')}
        />
      )}
      
      {currentScreen === 'quiz' && (
        <QuizScreen 
          questions={currentQuestions}
          category={selectedCategory}
          onComplete={handleQuizComplete}
        />
      )}
      
      {currentScreen === 'result' && (
        <ResultScreen
          score={score}
          totalQuestions={currentQuestions.length}
          category={selectedCategory}
          userAnswers={userAnswers}
          questions={currentQuestions}
          onRetake={handleRetakeQuiz}
          onGoHome={handleGoHome}
        />
      )}

      {currentScreen === 'about' && (
        <AboutPage onGoBack={handleGoHome} />
      )}

      {currentScreen === 'contact' && (
        <ContactPage onGoBack={handleGoHome} />
      )}
      
      <Footer 
        onLogoClick={handleGoHome}
        onAboutClick={handleNavigateToAbout}
        onContactClick={handleNavigateToContact}
      />
    </div>
  );
}

export default App;