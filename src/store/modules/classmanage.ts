import {action} from 'mobx'
import {getClassmange} from '../../service/index'
import {getStudent} from '../../service/index'
import {getTeacher} from '../../service/index'
class classmange{

    //添加班级接口
    @action async getClassmange(params: any): Promise<any>{
        let result: any = await getClassmange(params);
        return result
    }
    //已经分班学生接口
    @action async getStudent(params: any): Promise<any>{
        let result: any = await getStudent(params);
        return result
    }
    //添加教室接口
    @action async getTeacher(params: any): Promise<any>{
        let result: any = await getTeacher(params);
        return result
    }
}

export default classmange