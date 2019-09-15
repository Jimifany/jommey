import {action} from "mobx"
import {getShow} from "../../service/index"
class show{
//试题分类
@action async getShow(params: any): Promise<any>{
    let result: any = await getShow(params);
    return result
}
}
export default show;