import { shuffleArray } from './utils';

export type fetchedQuestion = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

//add Question types to QuestionState and create new property answers (merge correct answer with other incorrect answers
export type QuestionsState = fetchedQuestion & { answers: string[] };

export const fetchQuizData = async (amount: number, difficulty: string) => {
  try {
    const response = await (await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`)).json();
    return response.results.map((question: fetchedQuestion) => ({
      ...question,
      answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
    }));
  } catch (error) {
    throw error;
  }
};
