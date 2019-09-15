import request from "../utils/request"
export let getaddTeacher=(params:object)=>{
    return request.post('/manger/room',params)
}