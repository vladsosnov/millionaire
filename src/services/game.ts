import axios from 'axios';

const QUESTIONS = {
  data: [
    {
      id: 0,
      label: 'How old are you?',
      answers: [
        {
          label: 24,
          isCorrect: false,
        },
        {
          label: 12,
          isCorrect: false,
        },
        {
          label: 21,
          isCorrect: false,
        },
        {
          label: '22 this is true',
          isCorrect: true,
        },
      ],
      score: 500,
      isMultipleAnswers: false,
    },
    {
      id: 1,
      label: 'How many friends do you have?',
      answers: [
        {
          label: 1,
          isCorrect: false,
        },
        {
          label: 'this is true',
          isCorrect: true,
        },
        {
          label: 2,
          isCorrect: false,
        },
        {
          label: 5,
          isCorrect: false,
        },
      ],
      score: 1000,
      isMultipleAnswers: false,
    },
    {
      id: 2,
      label: 'How many friends do you have?',
      answers: [
        {
          label: 1,
          isCorrect: false,
        },
        {
          label: 3,
          isCorrect: false,
        },
        {
          label: 'this is true',
          isCorrect: true,
        },
        {
          label: 5,
          isCorrect: false,
        },
      ],
      score: 2000,
      isMultipleAnswers: false,
    },
    {
      id: 3,
      label: 'How many friends do you have?',
      answers: [
        {
          label: 1,
          isCorrect: false,
        },
        {
          label: 'this is true',
          isCorrect: true,
        },
        {
          label: 2,
          isCorrect: false,
        },
        {
          label: 5,
          isCorrect: false,
        },
      ],
      score: 4000,
      isMultipleAnswers: false,
    },
    {
      id: 4,
      label: 'How many friends do you have?',
      answers: [
        {
          label: 'this is true',
          isCorrect: true,
        },
        {
          label: 3,
          isCorrect: false,
        },
        {
          label: 2,
          isCorrect: false,
        },
        {
          label: 5,
          isCorrect: false,
        },
      ],
      score: 8000,
      isMultipleAnswers: false,
    },
    {
      id: 5,
      label: 'How many friends do you have?',
      answers: [
        {
          label: 1,
          isCorrect: false,
        },
        {
          label: 3,
          isCorrect: false,
        },
        {
          label: 'this is true',
          isCorrect: true,
        },
        {
          label: 5,
          isCorrect: false,
        },
      ],
      score: 16000,
      isMultipleAnswers: false,
    },
    {
      id: 6,
      label: 'How many friends do you have?',
      answers: [
        {
          label: 1,
          isCorrect: false,
        },
        {
          label: 3,
          isCorrect: false,
        },
        {
          label: 2,
          isCorrect: false,
        },
        {
          label: 'this is true',
          isCorrect: true,
        },
      ],
      score: 32000,
      isMultipleAnswers: false,
    },
    {
      id: 7,
      label: 'How many friends do you have?',
      answers: [
        {
          label: 1,
          isCorrect: false,
        },
        {
          label: 'this is true',
          isCorrect: true,
        },
        {
          label: 2,
          isCorrect: false,
        },
        {
          label: 5,
          isCorrect: false,
        },
      ],
      score: 64000,
      isMultipleAnswers: false,
    },
    {
      id: 8,
      label: 'How many friends do you have?',
      answers: [
        {
          label: 1,
          isCorrect: false,
        },
        {
          label: 'this is true',
          isCorrect: true,
        },
        {
          label: 2,
          isCorrect: false,
        },
        {
          label: 5,
          isCorrect: false,
        },
      ],
      score: 125000,
      isMultipleAnswers: false,
    },
    {
      id: 9,
      label: 'How many friends do you have?',
      answers: [
        {
          label: 1,
          isCorrect: false,
        },
        {
          label: 3,
          isCorrect: false,
        },
        {
          label: 2,
          isCorrect: false,
        },
        {
          label: 'this is true',
          isCorrect: true,
        },
      ],
      score: 250000,
      isMultipleAnswers: false,
    },
    {
      id: 10,
      label: 'How many friends do you have?',
      answers: [
        {
          label: 'this is true',
          isCorrect: true,
        },
        {
          label: 3,
          isCorrect: false,
        },
        {
          label: 2,
          isCorrect: false,
        },
        {
          label: 5,
          isCorrect: false,
        },
      ],
      score: 500000,
      isMultipleAnswers: false,
    },
    {
      id: 11,
      label: 'How many friends do you have?',
      answers: [
        {
          label: 1,
          isCorrect: false,
        },
        {
          label: '3 this is true',
          isCorrect: true,
        },
        {
          label: 2,
          isCorrect: false,
        },
        {
          label: 5,
          isCorrect: false,
        },
      ],
      score: 1000000,
      isMultipleAnswers: false,
    },
  ],
};

class Service {
  async getQuestions() {
    try {
      // For the local development uncomment the line below and delete `const questions = QUESTIONS`;
      // it's just for gh-pages
      // const questions = await axios.get('./__mocks__/questions.json');
      const questions = QUESTIONS;

      return questions.data;
    } catch (err) {
      return err;
    }
  }
}

const GameService = new Service();

export { GameService };
