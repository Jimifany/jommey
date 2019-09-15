import request from '../utils/request'
export let getidentityData= (params: object)=>{
    return request.get('/user/identity', {params});
}
