export const sale = () => {
    return {type : "SALE"}
}

export const soldOut = () =>{
    return {type : "SOLD_OUT"}
}

const initialState = {
    message : "판매중"
}

const stockReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SALE" : 
            return {
                ...state,
                message : "판매중!"
            }
        case "SOLD_OUT" : 
        return {
            ...state,
            message : "판매완료!"
        }
        default : 
            return state    
    }
}

export default stockReducer;