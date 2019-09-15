import {action} from "mobx"
import {getTestType} from "../../service/index"
class TestType{
//试题分类
@action async getTestType(params: any): Promise<any>{
    let result: any = await getTestType(params);
    return result
}
}
export default TestType;