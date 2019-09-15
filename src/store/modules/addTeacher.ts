import {action} from 'mobx'
import {getaddTeacher} from "../../service/index"

class addTeacher{

    // 按条件获取试题
    @action async getaddTeacher(params: any): Promise<any>{
        let result: any = await getaddTeacher(params);
        return result
    }
}

export default addTeacher;