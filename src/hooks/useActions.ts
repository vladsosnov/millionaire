import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { combineActions } from 'src/store/actions/action-creators';

export const useActions = () => {
  return bindActionCreators(combineActions, useDispatch());
};
