import { GameService } from 'src/services/game';
import { AppDispatch } from '..';

export const GameActions = {
  getQuestions: () => async (dispatch: AppDispatch) => {
    try {
      const response = await GameService.getQuestions();

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
};
