import {action} from 'mobx'
import {getidentityData} from '../../service/index'

class identityDta{

    // 按条件获取试题
    @action async getidentityData(params: any): Promise<any>{
        let result: any = await getidentityData(params);
        return result
    }
}

export default identityDta;