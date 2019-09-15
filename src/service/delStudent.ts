//删除学生管理
import request from "../utils/request"
 export let getDelStudent=(params:object)=>{
    return request.delete('/manger/student/:id=>student_id',{data:params})
}
