import request from '../utils/request'
export let getGrade = (params: object)=>{
    return request.get('/manger/grade', {params});
}
