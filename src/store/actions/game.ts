import { GameService } from 'src/services';
import { Question } from 'src/types/game';
import { AppDispatch } from '..';

export const GameActions = {
  getQuestions: () => async (dispatch: AppDispatch) => {
    try {
      const response: Question[] = await GameService.getQuestions();

      dispatch({
        type: 'INIT_QUESTIONS',
        payload: response,
      });

      return response;
    } catch (err) {
      dispatch({
        type: 'INIT_QUESTIONS_FAIL',
        payload: null,
      });
    }
  },

  checkAnswer: (isCorrect: boolean) => (dispatch: AppDispatch) => {
    if (isCorrect) {
      return dispatch({
        type: 'ANSWER_CORRECT',
      });
    }

    dispatch({
      type: 'ANSWER_WRONG',
      payload: null,
    });
  },

  toggleMobileAside: () => (dispatch: AppDispatch) => {
    dispatch({
      type: 'TOGGLE_MOBILE_ASIDE',
      payload: null,
    });
  },

  resetGame: () => (dispatch: AppDispatch) => {
    dispatch({
      type: 'RESET_GAME',
      payload: null,
    });
  },

  finishGame: () => (dispatch: AppDispatch) => {
    dispatch({
      type: 'FINISH_GAME',
      payload: null,
    });
  },
};
