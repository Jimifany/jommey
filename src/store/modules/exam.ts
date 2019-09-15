import {action} from 'mobx'
import {getExam} from '../../service/index'
import {getExamTitle} from '../../service/index'
import {getExamType} from '../../service/index'
import {getCation} from '../../service/index'
import {getAdd} from '../../service/index'
import {getQuestion} from '../../service/index'
import {getInset} from '../../service/index'
import {getExamquestion} from '../../service/index'
import {getAddquestion} from '../../service/index'
import {getUserInfo } from '../../service/index'
import {getTeadetail} from '../../service/index'
import {getUser} from '../../service/index'
import {getEdit } from '../../service/index'
import {getAuthedit} from '../../service/index'
import {getAuthview } from '../../service/index'
import {SetIdentityApi } from '../../service/index'
import {SetIdentityView } from '../../service/index'
import {CreateExam} from '../../service/index'
import {Addgrade} from '../../service/index'
import {Delete} from '../../service/index'
import {Ameny} from '../../service/index'
class Exam{
    //获取所有的课程  (js上,js下...)
    @action async getExam(params: any): Promise<any>{
        let result: any = await getExam(params);
        return result
    }
    //获取所有的考试类型 (周考1，周考2...)
    @action async getExamTitle(params: any): Promise<any>{
        let result: any = await getExamTitle(params);
        return result
    }
    //获取所有的试题类型 (简答题)
    @action async getExamType(params: any): Promise<any>{
        let result: any = await getExamType(params);
        return result
    }
    //获取所有的试题类型 (简答题)
    @action async getCation(params: any): Promise<any>{
        let result: any = await getCation(params);
        return result
    }
    //添加试题接口
    @action async getAdd(params: any): Promise<any>{
        let result: any = await getAdd(params);
        return result
    }
    //按条件获取试题
    @action async getQuestion(params: any): Promise<any>{
        let result: any = await getQuestion(params);
        return result
    }
    //添加试题类型
    @action async getInset(params: any): Promise<any>{
        let result: any = await getInset(params);
        return result
    }
    @action async getExamquestion(params: any): Promise<any>{
        let result: any = await getExamquestion(params);
        return result
    }
    //添加试题
    @action async getAddquestion(params:any):Promise<any>{
        let result:any = await getAddquestion(params)
        return result
    }
    //添加用户
    @action async getUserInfo():Promise<any>{
        let result:any = await getUserInfo()
        return result
    }
    @action async getTeadetail(params:any):Promise<any>{
        let result:any = await getTeadetail(params)
        return result
    }
    @action async getUser(params:any):Promise<any>{
        let result:any = await getUser(params)
        return result
    }
    //添加身份
    @action async getEdit(params:any):Promise<any>{
        let result:any = await getEdit (params)
        return result
    }
    @action async getAuthedit(params:any):Promise<any>{
        let result:any = await getAuthedit (params)
        return result
    }
    //添加视图权限 
    @action async getAuthview(params:any):Promise<any>{
        let result:any = await getAuthview(params)
        return result
    }
    //设置api权限
    @action async SetIdentityApi(params:any):Promise<any>{
        let result:any = await SetIdentityApi(params)
        return result
    }
    //给身份设置视图权限
    @action async SetIdentityView(params:any):Promise<any>{
        let result:any = await SetIdentityView(params)
        return result
    }
    //创建考试
    @action async CreateExam(params:any):Promise<any>{
        let result:any = await CreateExam(params)
        return result
    }
    //添加班级
    @action async Addgrade(params:any):Promise<any>{
        let result:any = await Addgrade(params)
        return result
    }
    //删除班级
    @action async Delete(params:any):Promise<any>{
        let result:any = await  Delete(params)
        return result
    }
    //修改班级信息
    @action async Ameny(params:any):Promise<any>{
        let result:any = await  Ameny(params)
        return result
    }
}

export default Exam