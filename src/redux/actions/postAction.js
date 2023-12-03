import { POST_FETCHING,POST_FETCH_SUCCESS,POST_FETCH_ERROR, POST_FILTER , POST_STUDENT_FETCH} from "./actionTypes";



export const postFetching = ()=>{

    return{
        type:POST_FETCHING
    }
}

export const postFetchSuccess = (data)=>{
    return{
        type: POST_FETCH_SUCCESS,
        payload: data
    }
}

export const postFetcherror = (error)=>{
    return{
        type: POST_FETCH_ERROR,
        payload: error
    }
}

export const postFilter = (data)=>{
    return{
        type: POST_FILTER,
        payload: data
    }
}
export const studentFetch = (data)=>{
    return{
        type: POST_STUDENT_FETCH,
        payload: data
    }
}