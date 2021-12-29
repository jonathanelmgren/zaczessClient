import * as actionTypes from '../constants/categoryConstants'

import APIService from '../../shared/api/service/APIService'

export const getCategories = () => async (dispatch: any) => {
	try {
		dispatch({ type: actionTypes.GET_CATEGORIES_REQUEST })

		const { data } = await APIService.getAllCategories()

		dispatch({
			type: actionTypes.GET_CATEGORIES_SUCCESS,
			payload: data,
		})
	} catch (error: any) {
		dispatch({
			type: actionTypes.GET_CATEGORIES_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
		})
	}
}
