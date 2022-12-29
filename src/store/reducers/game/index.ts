import type { GameAction } from './types';

const initialState = {
  activeStep: 0,
  isFinished: false,
  questions: null,
};

export const gameReducer = (state = initialState, action: GameAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'INIT_QUESTIONS':
      return {
        ...state,
        questions: payload,
      };

    case 'ANSWER_CORRECT':
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };

    case 'ANSWER_WRONG':
      return {
        ...state,
        isFinished: true,
      };

    case 'FINISH_GAME':
      return {
        ...state,
        isFinished: true,
      };

    case 'RESET_GAME':
      return {
        ...state,
        isFinished: false,
        activeStep: 0,
      };

    default:
      return state;
  }
};
