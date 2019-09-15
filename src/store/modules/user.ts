<<<<<<< HEAD
import { observable, action } from "mobx";
interface LoginForm {
    user_name: string,
    user_pwd: string
}
class User {
    @observable isLogin: boolean = false;
    @action async login(form: LoginForm): Promise<object> {
        if (form.user_name === 'chenmanjie' && form.user_pwd === 'Chenmanjie123!') {
            this.isLogin = true;
            return { code: 1 }
        }
        else {
            this.isLogin = false;
            return { code: 0 }
        }
    }
}
export default User;
=======
import {action,observable} from 'mobx'
import {login,getUserInfo, getViewAuthority} from '../../service/index'
import {setToken, removeToken} from '../../utils/index'
let account = (window.localStorage.getItem('account') + '')

if (window.localStorage.getItem('account')) {
    account = JSON.stringify(window.localStorage.getItem('account') + '')
}
class User{
    @observable account: any = account;
    @observable userInfo: any = {};
    @observable viewAuthority: object[] = []; 
    // @observable isLogin: boolean = false;
    @action async login(params:any):Promise<any>{
        const result:any = await login(params)
       if(result.code===1){
           // 1.判断是否记住用户名和密码
           if (params.remember){
            window.localStorage.setItem('account',JSON.stringify(params));
           }else{
            window.localStorage.removeItem('account');
           }
       }
       //判断7天免登陆
       if(params.autoLogin){
           setToken(result.token)
       }
       return result;
    }
    //退出登录
    @action async logout():Promise<any>{
        removeToken();
    }
   // 获取用户信息
   @action async getUserInfo(): Promise<any>{
    let userInfo:any = await getUserInfo();
    console.log('userInfo...', userInfo);
    this.userInfo = userInfo.data;
    this.getViewAuthority();
}

// 获取用户权限
@action async getViewAuthority(): Promise<any>{
    let viewAuthority: any = await getViewAuthority();
    console.log('viewAuthority...', viewAuthority);
    this.viewAuthority = viewAuthority.data;
}
}
export default User
>>>>>>> 全系
