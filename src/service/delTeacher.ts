//删除教室管理
import request from "../utils/request"
 export let getDelTeacher=(params:object)=>{
    return request.delete('/manger/room/delete',{data:params})
}
