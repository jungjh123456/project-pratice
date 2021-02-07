import { combineReducers } from 'redux';
import buttonReducer from './slide';
// 이곳은 모듈을 합치는 곳입니다
const rootReducer = combineReducers({ buttonReducer });

export default rootReducer;
