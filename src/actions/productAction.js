import {
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAIL,

  } 
  from "../actions/types";

import config from '../config'

 import axios from "axios";

 const  APP_URL = config.apiUrl


  export const listProducts = () => async (dispatch) => {
    try {
      
      dispatch({ type: PRODUCT_REQUEST });
  
      const response = await axios.get(
        `${APP_URL}/api/products`
      );
  
      dispatch({
        type: PRODUCT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: PRODUCT_FAIL, payload: error });
      console.log("error:", error);
    }
  };
  
