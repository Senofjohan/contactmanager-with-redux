import { combineReducers } from 'redux';
import contactReducer from './contactReducer';

//meeting place for all reducers
export default combineReducers({
  // contact is the prop referenced in a component
  // ex: this.props.contact
  contact: contactReducer
});
