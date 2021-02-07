import { createAction, handleActions } from 'redux-actions';

const SLIDE_NEXT = 'slide/SLIDE_NEXT';
const SLIDE_PREV = 'slide/SLIDE_PREV';
const SLIDE_RESET = 'slide/SLIDE_RESET';

export const slideNext = createAction(SLIDE_NEXT);
export const slidePrev = createAction(SLIDE_PREV);
export const slideReset = createAction(SLIDE_RESET, (state) => state);
const initialState = {
	next: 0,
};

const buttonReducer = handleActions(
	{
		[SLIDE_NEXT]: (state, { payload }) => ({
			...state,
			next: ++state.next,
		}),
		[SLIDE_PREV]: (state, { payload }) => ({
			...state,
			next: --state.next,
		}),
		[SLIDE_RESET]: (state, { payload }) => {
			console.log(payload);
			return {
				...state,
				next: payload,
			};
		},
	},
	initialState
);

export default buttonReducer;
