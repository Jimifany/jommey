import request from '../utils/request'
export let getQuestion = (params: object)=>{
    return request.get('/exam/questions/condition', {params});
}