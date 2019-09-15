import {action} from 'mobx'
import {getDelTeacher} from "../../service/index"

class delTeacher{

    // 按条件获取试题
    @action async getDelTeacher(params: any): Promise<any>{
        let result: any = await getDelTeacher(params);
        return result
    }
}

export default delTeacher;