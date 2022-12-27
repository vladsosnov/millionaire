export type GameActionEnum =
  | 'INIT_QUESTIONS'
  | 'INIT_QUESTIONS_FAIL'
  | 'ANSWER_SUCCESS'
  | 'ANSWER_NOT_SUCCESS';

export interface InitQuestionsAction {
  type: 'INIT_QUESTIONS';
  payload: any;
}

export interface InitQuestionsFailAction {
  type: 'INIT_QUESTIONS_FAIL';
  payload: any;
}
export interface AnswerSuccessAction {
  type: 'ANSWER_SUCCESS';
  payload: any;
}

export interface AnswerNotSuccessAction {
  type: 'ANSWER_NOT_SUCCESS';
  payload: any;
}

export type GameAction =
  | InitQuestionsAction
  | InitQuestionsFailAction
  | AnswerSuccessAction
  | AnswerNotSuccessAction;
