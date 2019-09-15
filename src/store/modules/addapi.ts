import {action} from 'mobx'
import {getAddapi} from '../../service/index'
import {getAddView} from '../../service/index'
import {getAdduser} from '../../service/index'
//api接口权限
class addapi{
    // 按条件获取试题
    @action async getAddapi(params: any): Promise<any>{
        let result: any = await getAddapi(params);
        return result
    }
    //获取视图权限数据
    @action async getAddView(params: any): Promise<any>{
        let result: any = await getAddView(params);
        return result
    }
    //展示身份数据
    @action async getAdduser(params: any): Promise<any>{
        let result: any = await getAdduser(params);
        return result
    }
}
export default addapi