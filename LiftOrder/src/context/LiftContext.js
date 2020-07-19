import createDataContext from './createDataContext';
import getData from '../api/getData';
 
const LiftReducer = (state, action) => {
    switch(action.type){
        case 'get_Floors':
            return {...state, floors: action.payload}
        case 'update_floor_data':
            return {...state, floors: action.payload}
        case 'exec_order':
            return {...state, execOrder: action.payload}
        case 'update_order':
            return {...state, order: action.payload, execOrder:false}
        case 'reset':
            return {...state, order:[]}
        default:
            return state;
    }
}

const getFloors = (dispatch) => {
    return async() =>{
        const response = await getData.get('/floors');
        dispatch({type: 'get_Floors', payload: response.data})
    }
}

const updateFloors = (dispatch) => {
    return (newFloorsData) => {
        dispatch({type:'update_floor_data', payload: newFloorsData})
    }
}

const executeOrder = (dispatch) => {
    return () => {
        dispatch({type:'exec_order',payload:true})
    }
}


const resetOrder = (dispatch) => {
    return () => {
        dispatch({type:'reset'})
    }
}

const updateOrder = (dispatch) => {
    return (orders) => {
        dispatch({type:'update_order',payload:orders})
    }
}
export const {Context, Provider}= createDataContext(
    LiftReducer,
    {getFloors,updateFloors,executeOrder,updateOrder,resetOrder},
    {floors:[],order:[],execOrder: false}
    )