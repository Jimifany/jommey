import request from '../utils/request'
export let getExamType = (params: object)=>{
    return request.get('/exam/examType', {params});
}
