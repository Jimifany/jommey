import {action} from 'mobx'
import {getGrade} from '../../service/index'

class Grade{

    // 按条件获取试题
    @action async getGrade(params: any): Promise<any>{
        let result: any = await getGrade(params);
        return result
    }
}

export default Grade;