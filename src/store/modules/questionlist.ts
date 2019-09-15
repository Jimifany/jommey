import {action} from 'mobx'
import {getquestionList } from '../../service/index'

class examtype{

    // 按条件获取试题
    @action async getquestionList (params: any): Promise<any>{
        let result: any = await getquestionList (params);
        return result
    }
}

export default examtype