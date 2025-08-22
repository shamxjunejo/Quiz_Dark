import React, { useState } from 'react';
import { ChevronRight, Clock, HelpCircle, SkipForward } from 'lucide-react';
import { Question } from '../data/questions';

interface QuizScreenProps {
  questions: Question[];
  category: string;
  onComplete: (score: number, answers: (number | null)[], questions: Question[]) => void;
}

export default function QuizScreen({ questions, category, onComplete }: QuizScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSkip = () => {
    setIsAnimating(true);
    const newAnswers = [...answers, null];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        const score = newAnswers.reduce((acc: number, answer, index) => {
          return answer !== null && answer === questions[index].correctAnswer ? acc + 1 : acc;
        }, 0);
        onComplete(score, newAnswers, questions);
      }
      setIsAnimating(false);
    }, 300);
  };

  const handleSkipToResults = () => {
    const finalAnswers = [...answers];
    while (finalAnswers.length < questions.length) {
      finalAnswers.push(null);
    }
    const score = finalAnswers.reduce((acc: number, answer, index) => {
      return answer !== null && answer === questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);
    onComplete(score, finalAnswers, questions);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    setIsAnimating(true);
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        const score = newAnswers.reduce((acc: number, answer, index) => {
          return answer === questions[index].correctAnswer ? acc + 1 : acc;
        }, 0);
        onComplete(score, newAnswers, questions);
      }
      setIsAnimating(false);
    }, 300);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];
  const formattedCategory = category
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-theme-background pt-24">
      <div className="max-w-3xl mx-auto px-4 py-8">
        
        {/* Header */}
        <header className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 mb-4 sm:mb-6 shadow-lg">
            <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          
          <h1 className="text-xl sm:text-2xl font-bold text-theme-primary mb-2">
            Question {currentQuestion + 1} of {questions.length}
          </h1>
          
          <p className="text-theme-secondary text-xs sm:text-sm mb-4 sm:mb-6 flex items-center justify-center gap-2">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            {formattedCategory}
          </p>
          
          {/* Progress Bar */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="h-1.5 bg-theme-surface-tertiary rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="absolute -top-1 transition-all duration-700 ease-out" style={{ left: `${progress}%` }}>
              <div className="w-3 h-3 bg-blue-600 rounded-full -translate-x-1/2 shadow-md" />
            </div>
          </div>
        </header>

        {/* Question Card */}
        <main className={`transition-all duration-300 ease-out ${
          isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          <div className="bg-theme-surface rounded-2xl shadow-sm border border-theme-border p-6 mb-6">
            <h2 className="text-lg md:text-xl font-semibold text-theme-primary mb-6 leading-relaxed">
              {question.question}
            </h2>

            {/* Answer Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`group w-full p-4 text-left rounded-xl border transition-all duration-300 hover:shadow-md ${
                    selectedAnswer === index
                      ? 'border-blue-500/50 bg-blue-50/80 shadow-md ring-1 ring-blue-500/20'
                      : 'border-theme-border hover:border-blue-300/50 bg-theme-surface-secondary hover:bg-blue-50/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`relative w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      selectedAnswer === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-theme-tertiary group-hover:border-blue-400'
                    }`}>
                      {selectedAnswer === index && (
                        <div className="absolute inset-0.5 rounded-full bg-white" />
                      )}
                    </div>
                    <span className={`font-medium transition-colors duration-300 ${
                      selectedAnswer === index ? 'text-blue-700' : 'text-theme-primary'
                    }`}>
                      {option}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

         {/* Action Buttons */}
<footer className="flex flex-col gap-4">
<button
 onClick={handleNext}
 disabled={selectedAnswer === null}
 className={`px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 
            flex items-center space-x-3 justify-center group w-1/2 mx-auto ${
   selectedAnswer !== null
     ? 'bg-theme-primary hover:bg-theme-primary-hover text-white shadow-lg hover:shadow-xl transform hover:scale-105'
     : 'bg-theme-surface-tertiary text-theme-tertiary cursor-not-allowed'
 }`}
>
 <span>
   {currentQuestion + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
 </span>
 <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
   selectedAnswer !== null ? 'group-hover:translate-x-1' : ''
 }`} />
</button>

  <div className="flex gap-3 justify-center">
    <button
      onClick={handleSkip}
      className="group inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium 
               text-theme-secondary hover:text-theme-primary transition-all duration-300 
               hover:bg-theme-surface-secondary rounded-xl"
    >
      <SkipForward className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
      Skip
    </button>
    
    <button
      onClick={handleSkipToResults}
      className="group inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium 
               text-theme-secondary hover:text-theme-primary transition-all duration-300 
               hover:bg-theme-surface-secondary rounded-xl"
    >
      Skip to Results
    </button>
  </div>
</footer>
        </main>
      </div>
    </div>
  );
}