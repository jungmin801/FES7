

// action을 생성
export const addNumber = () => {    
    return { type : 'ADD' }
}

export const subtractNumber = () => {
    return { type : 'SUBTRACT'}
}

//초기값 설정
const initialState = {
    stock : 10,
    goods: 1
}

// 리듀서 생성
const goodsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD' :
            return {
                ...state,
                stock : state.stock - 1,
                goods : state.goods + 1,
            }
            case 'SUBTRACT' :
                return {
                    ...state,
                    stock : state.stock + 1,
                    goods : state.goods - 1,
                }    
            default : 
            return state    
    }
}

export default goodsReducer