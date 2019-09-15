import request from '../utils/request'
export let getTestType = (params: object)=>{
    return request.get('/exam/getQuestionsType', {params});
}
