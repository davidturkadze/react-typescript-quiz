import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

import { fetchQuizData, fetchQuizCategory, categoryState } from './API';
// Types
// import { QuestionsState, Difficulty } from './API';
import { QuestionsState } from './API';
// Containers
import Quiz from './containers/Quiz';
// Components
import UserAnswers from './components/UserAnswers/UserAnswers';

// Styles
import { GlobalStyle } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

//const TOTAL_QUESTIONS: number = 10;

const App = () => {
  let history = useHistory();

  const [error, setError] = useState(false);
  const [difficulty, setDifficulty] = useState<string>('easy');
  const [category, setCategory] = useState<categoryState[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>(9);
  const [selectedCategoryName, setSelectedCategoryName] = useState<string | undefined>('General Knowledge');
  const [totalQuestions, setTotalQuestions] = useState<number>(10);
  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(true);
  const [gameScore, setGameScore] = useState(0);
  const [questionNr, setQuestionNr] = useState(0);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    const category = await fetchQuizCategory();
    setCategory(category);
    setLoading(false);
  };

  const quizDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDifficulty = e.target.value;
    setDifficulty(selectedDifficulty);
  };
  const quizTotalQuestions = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTotalQuestions = Number(e.target.value);
    setUserAnswers([]);
    setQuestionNr(0);
    setGameOver(true);
    setTotalQuestions(selectedTotalQuestions);
  };

  const quizCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCat = Number(e.target.value);
    setSelectedCategory(selectedCat);
    const categoryName = category.find((name) => name.id === selectedCat);
    const catName = categoryName?.name.toString();
    setSelectedCategoryName(catName);
  };

  const startTriviaQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const quizQuestions = await fetchQuizData(totalQuestions, difficulty, selectedCategory);
    if (quizQuestions.length === 0) {
      setError(true);
    }
    setQuestions(quizQuestions);

    setGameScore(0);
    setUserAnswers([]);
    setQuestionNr(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // Check answer against correct answer
      const answer = e.currentTarget.value;
      const correct = questions[questionNr].correct_answer === answer;
      // Add score if answer is correct
      if (correct) {
        setGameScore((prev) => prev + 1);
      }
      const answerObject = {
        question: questions[questionNr].question,
        answer,
        correct,
        correctAnswer: questions[questionNr].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    setLoading(true);
    // Move on to the next question if not the last question
    const nextQuestion = questionNr + 1;
    if (nextQuestion === totalQuestions) {
      setGameOver(true);
      setLoading(false);
    } else {
      setQuestionNr(nextQuestion);
      setLoading(false);
    }
  };
  const showResults = () => {
    history.push('/answers');
  };

  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <Quiz
              error={error}
              loading={loading}
              difficulty={difficulty}
              totalQuestions={totalQuestions}
              gameOver={gameOver}
              gameScore={gameScore}
              questionNr={questionNr}
              questions={questions}
              userAnswers={userAnswers}
              category={category}
              selectedCategory={selectedCategory}
              selectedCategoryName={selectedCategoryName}
              nextQuestion={nextQuestion}
              startTriviaQuiz={startTriviaQuiz}
              checkAnswer={checkAnswer}
              showResults={showResults}
              quizDifficulty={quizDifficulty}
              quizTotalQuestions={quizTotalQuestions}
              quizCategory={quizCategory}
            />
          )}
        />
        {userAnswers.length === totalQuestions && (
          <Route
            path="/answers"
            component={() => <UserAnswers uAnswers={userAnswers} startTriviaQuiz={startTriviaQuiz} gameScore={gameScore} totalQuestions={totalQuestions} />}
          />
        )}
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
