import {action} from 'mobx'
import {getDelStudent} from "../../service/index"

class delStudent{

    // 删除学生
    @action async getDelStudent(params: any): Promise<any>{
        let result: any = await getDelStudent(params);
        return result
    }
}

export default delStudent;