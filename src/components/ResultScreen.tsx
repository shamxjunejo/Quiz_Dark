import React from 'react';
import { Trophy, RotateCcw, Home, Target, Award, TrendingUp, CheckCircle, XCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Question } from '../data/questions';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  category: string;
  userAnswers: (number | null)[];
  questions: Question[];
  onRetake: () => void;
  onGoHome: () => void;
}

export default function ResultScreen({ score, totalQuestions, category, userAnswers, questions, onRetake, onGoHome }: ResultScreenProps) {
  const [showDetails, setShowDetails] = React.useState(false);
  const attemptedQuestions = userAnswers.filter(answer => answer !== null).length;
  const percentage = Math.round((score / totalQuestions) * 100);

  const getPerformanceMessage = () => {
    if (percentage >= 90) return { message: "Outstanding! 🌟", color: "text-green-600", bgColor: "bg-green-50", borderColor: "border-green-200" };
    if (percentage >= 80) return { message: "Excellent work! 🎉", color: "text-green-600", bgColor: "bg-green-50", borderColor: "border-green-200" };
    if (percentage >= 70) return { message: "Great job! 👏", color: "text-blue-600", bgColor: "bg-blue-50", borderColor: "border-blue-200" };
    if (percentage >= 60) return { message: "Good effort! 👍", color: "text-yellow-600", bgColor: "bg-yellow-50", borderColor: "border-yellow-200" };
    return { message: "Keep practicing! 💪", color: "text-orange-600", bgColor: "bg-orange-50", borderColor: "border-orange-200" };
  };

  const performance = getPerformanceMessage();

  return (
    <div className="min-h-screen bg-theme-background pt-24">
      <div className="max-w-2xl w-full animate-fade-in mx-auto px-4 py-8">
        <div className="surface-card rounded-2xl shadow-lg p-6 md:p-8 text-center">

          {/* Trophy Animation */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full p-4 animate-bounce-in">
              <Trophy className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-theme-primary mb-4 font-inter">
            Quiz Completed
          </h1>

          {/* Category Badge */}
          <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-theme-primary-700 rounded-full text-sm font-medium mb-4">
            {category
              .split("-")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </div>


          {/* Performance Message */}
          <div className={`${performance.bgColor} ${performance.borderColor} border-2 rounded-xl p-4 mb-6`}>
            <h2 className={`text-xl md:text-2xl font-semibold ${performance.color} mb-2`}>
              {performance.message}
            </h2>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-4">
              <div className="flex items-center justify-center mb-3">
                <Target className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-primary-900">{score}</div>
              <div className="text-sm text-primary-600 font-medium">Correct Answers</div>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-lg p-4">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6 text-accent-600" />
              </div>
              <div className="text-2xl font-bold text-accent-900">{percentage}%</div>
              <div className="text-sm text-accent-600 font-medium">Score Percentage</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-900">{attemptedQuestions}</div>
              <div className="text-sm text-blue-600 font-medium">Attempted</div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-center mb-3">
                <Award className="w-6 h-6 text-gray-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{totalQuestions}</div>
              <div className="text-sm text-gray-600 font-medium">Total Questions</div>
            </div>
          </div>

          {/* Detailed Results */}
          <div className="bg-theme-surface-secondary rounded-lg p-4 mb-6">
            <h3 className="text-base font-semibold text-theme-primary mb-3">Your Performance</h3>
            <div className="flex justify-between text-theme-secondary text-sm">
              <span>Questions Attempted:</span>
              <span className="font-semibold">{attemptedQuestions}/{totalQuestions}</span>
            </div>
            <div className="flex justify-between text-theme-secondary mt-2 text-sm">
              <span>Correct Answers:</span>
              <span className="font-semibold text-theme-success">{score}</span>
            </div>
            <div className="flex justify-between text-theme-secondary mt-2 text-sm">
              <span>Incorrect Answers:</span>
              <span className="font-semibold text-theme-error">{attemptedQuestions - score}</span>
            </div>
            <div className="flex justify-between text-theme-secondary mt-2 text-sm">
              <span>Skipped Questions:</span>
              <span className="font-semibold text-theme-tertiary">{totalQuestions - attemptedQuestions}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mb-6">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center space-x-2 text-theme-secondary hover:text-theme-primary 
                         transition-colors duration-300 mx-auto text-sm font-medium"
            >
              <span>{showDetails ? 'Hide' : 'Show'} Answer Details</span>
              {showDetails ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>

        {/* Detailed Answer Breakdown */}
{showDetails && (
  <div className="bg-theme-surface-secondary rounded-xl p-6 mb-6 shadow-sm">
    <div className="flex items-center justify-center mb-4">
      <h3 className="text-base font-semibold text-theme-primary flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
        Question Breakdown
      </h3>
    </div>

    {/* Summary Stats */}
    <div className="flex justify-center gap-6 mb-4 p-3 bg-theme-surface rounded-lg">
      <div className="text-center">
        <div className="text-lg font-bold text-green-600">
          {userAnswers.filter((answer, index) => answer !== null && answer === questions[index].correctAnswer).length}
        </div>
        <div className="text-xs text-theme-tertiary">Correct</div>
      </div>
      <div className="text-center">
        <div className="text-lg font-bold text-red-600">
          {userAnswers.filter((answer, index) => answer !== null && answer !== questions[index].correctAnswer).length}
        </div>
        <div className="text-xs text-theme-tertiary">Wrong</div>
      </div>
      <div className="text-center">
        <div className="text-lg font-bold text-gray-600">
          {userAnswers.filter(answer => answer === null).length}
        </div>
        <div className="text-xs text-theme-tertiary">Skipped</div>
      </div>
    </div>

    {/* Questions List */}
    <div className="max-h-80 overflow-y-auto custom-scrollbar">
      <div className="space-y-3">
        {questions.map((question, index) => {
          const userAnswer = userAnswers[index];
          const isSkipped = userAnswer === null;
          const isCorrect = !isSkipped && userAnswer === question.correctAnswer;

          return (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg bg-theme-surface-tertiary hover:shadow-sm transition-all duration-200"
            >
              {/* Status indicator bar - colored stripe on the left */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 ${
                  isSkipped ? 'bg-gray-500' : isCorrect ? 'bg-green-500' : 'bg-red-500'
                }`}
              />

              <div className="p-4 pl-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-theme-primary">Q{index + 1}</span>
                    {isSkipped ? (
                      <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">?</span>
                      </div>
                    ) : isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      isSkipped
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                        : isCorrect
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'
                    }`}
                  >
                    {isSkipped ? 'Skipped' : isCorrect ? 'Correct' : 'Incorrect'}
                  </span>
                </div>

                <p className="text-sm text-theme-secondary leading-relaxed mb-3 text-left">
                  {question.question}
                </p>

                <div className="space-y-2">
                  {!isSkipped && (
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-medium text-theme-tertiary">Your answer:</span>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          isCorrect
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                            : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'
                        }`}
                      >
                        {question.options[userAnswer!]}
                      </span>
                    </div>
                  )}

                  {(!isCorrect || isSkipped) && (
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-medium text-theme-tertiary">Correct answer:</span>
                      <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">
                        {question.options[question.correctAnswer]}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
)}



          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onRetake}
              className="bg-theme-success bg-theme-success-hover text-white font-semibold py-3 px-6 
                         rounded-xl text-base transition-all duration-300 transform hover:scale-105 
                         shadow-lg hover:shadow-xl flex items-center space-x-3 justify-center group"
            >
              <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              <span>Retake Quiz</span>
            </button>

            <button
              onClick={onGoHome}
              className="bg-theme-primary bg-theme-primary-hover text-white font-semibold py-3 px-6 
                         rounded-xl text-base transition-all duration-300 transform hover:scale-105 
                         shadow-lg hover:shadow-xl flex items-center space-x-3 justify-center group"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}