import request from '../utils/request'
export let getExam = (params: object)=>{
    return request.get('/exam/subject', {params});
}
