import {
    PRINTING_REQUEST,
    PRINTING_SUCCESS,
    PRINTING_FAIL,

    BRANDING_REQUEST,
    BRANDING_SUCCESS,
    BRANDING_FAIL,

  } from "../actions/types";

  import axios from "axios";


  export const  printingFilter = () => async (dispatch) => {
    try {
      dispatch({ type: PRINTING_REQUEST
     });
  
      const response = await axios.get(
        "http://127.0.0.1:8000/api/printing"
      );
  
      dispatch({ type: PRINTING_SUCCESS, payload: response.data});
      console.log("all  printing", response.data )

      
    } catch (error) {

      dispatch({ type:PRINTING_FAIL, payload:  error});
      console.log("all error", "error occured" )


    }
  };

  export const  brandingFilter = () => async (dispatch) => {
    try {
      dispatch({ type: BRANDING_REQUEST
     });
  
      const response = await axios.get(
        "http://127.0.0.1:8000/api/branding"
      );
  
      dispatch({ type: BRANDING_SUCCESS, payload: response.data});
      console.log("all branding ", response.data )

      
    } catch (error) {

      dispatch({ type:BRANDING_FAIL, payload:  error});
      console.log("all error", "error occured" )


    }
  };
