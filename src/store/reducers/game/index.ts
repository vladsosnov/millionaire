import type { GameAction } from './types';

const initialState = {
  activeStep: 0,
  score: 0,
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

    default:
      return state;
  }
};
