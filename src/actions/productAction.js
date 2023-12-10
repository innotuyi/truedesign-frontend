import {
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAIL,

  } 
  from "../actions/types";

  import axios from "axios";


  export const listProducts = () => async (dispatch) => {
    try {
      
      dispatch({ type: PRODUCT_REQUEST });
  
      const response = await axios.get(
        `http://127.0.0.1:8000/api/products`
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
  
