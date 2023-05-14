import { GET_PRODUCT_LOAD, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL} from "../constant/actionsTypes";
import axios from "axios"

export const getProducts =()=> async (dispatch)=> {
    
    dispatch({type:GET_PRODUCT_LOAD})
    try {
        let result = await axios.get('/api/products/')
        
        dispatch({
            type: GET_PRODUCT_SUCCESS,
            payload: result.data.response
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_PRODUCT_FAIL,
            payload: error
        })
    }
}


// export const getProductById =(id)=> async(dispatch)=>{
    
//     console.log(id)
//     try {
//         let result = await axios.get(`/api/products/product/${id.id}`)
        
//         dispatch({
//             type: GET_ONEPRODUCT,
//             payload: result.data.response
//         })
//     } catch (error) {
//         console.log(error)
//     }

// }
