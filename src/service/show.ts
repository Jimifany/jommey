import request from '../utils/request'
export let getShow = (params: object)=>{
    return request.get('/user/user', {params});
}
