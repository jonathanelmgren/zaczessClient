import * as actionTypes from "../constants/productConstants"

import APIService from "../../shared/api/service/APIService"

export const getProducts = () => async (dispatch: any) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST })

    const { data } = await APIService.getAllProducts()

    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}