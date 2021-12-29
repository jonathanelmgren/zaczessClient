import * as actionTypes from '../constants/categoryConstants'

export const getCategoriesReducer = (state = { categories: [] }, action: any) => {
	switch (action.type) {
		case actionTypes.GET_CATEGORIES_REQUEST:
			return {
				loading: true,
				categories: [],
			}
		case actionTypes.GET_CATEGORIES_SUCCESS:
			return {
				categories: action.payload,
				loading: false,
			}
		case actionTypes.GET_CATEGORIES_FAIL:
			return {
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}
