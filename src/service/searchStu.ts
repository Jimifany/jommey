import request from "../utils/request"
export let getsearchStu=(params:object)=>{
    return request.get("/manger/student",{params})
}