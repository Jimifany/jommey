import {action} from "mobx"
import {getsearchStu} from "../../service/index"
class searchStu{
//试题分类
@action async getsearchStu(params: any): Promise<any>{
    let result: any = await getsearchStu(params);
    return result
}
}
export default searchStu;