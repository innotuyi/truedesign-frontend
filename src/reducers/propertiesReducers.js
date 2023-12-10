import {
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAIL,

    PRINTING_REQUEST,
    PRINTING_SUCCESS,
    PRINTING_FAIL,

    BRANDING_REQUEST,
    BRANDING_SUCCESS,
    BRANDING_FAIL,


  } from "../actions/types";


  export const propertiesListReducer = (state = { properties: [] }, action) => {
    switch (action.type) {
      case PRODUCT_REQUEST:
        return { loading: true, properties: [] };
      case PRODUCT_SUCCESS:
        return { 
          properties: action.payload, 
        };
  
      case PRODUCT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  export const printingFilterReducer = (state = { printing: [] }, action) => {
    switch (action.type) {
      case PRINTING_REQUEST:
        return { printingLoading: true, printing: [] };
      case PRINTING_SUCCESS:
        return { 
          printing: action.payload, 
        };
  
      case PRINTING_FAIL:
        return { printingLoading: false, printingError: action.payload };
      default:
        return state;
    }
  };


  
  export const brandingFilterReducer = (state = { branding: [] }, action) => {
    switch (action.type) {
      case BRANDING_REQUEST:
        return { brandingLoading: true, branding: [] };
      case BRANDING_SUCCESS:
        return { 
          branding: action.payload, 
        };
  
      case BRANDING_FAIL:
        return { brandingLoading: false, brandingError: action.payload };
      default:
        return state;
    }
  };


 