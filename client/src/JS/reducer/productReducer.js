import { GET_PRODUCT_LOAD, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } from "../constant/actionsTypes";


const initialeState = {
      products: [],
      loadprod: false,
      product: {},
      error: []

}

export const productReducer=(state=initialeState, {type,payload})=>{

    switch (type) {
        case GET_PRODUCT_LOAD:
           return {...state , loadprod:true}
    
        case GET_PRODUCT_SUCCESS:
            return {...state, loadprod: false, products: payload}
    
        case GET_PRODUCT_FAIL:
               return {...state, loadprod: false, errors: payload}
        // case GET_ONEPRODUCT:
        //      return {...state,  product: payload}       
        default:
            return state;
       }


}


