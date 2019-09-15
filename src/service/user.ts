import request from '../utils/request'
//登录接口'
export let login = (params:object)=>{
    return request.post('/user/login',params)
}
//试题管理
//获取所有的课程  (js上,js下...)
export let getExam = (params: object)=>{
    return request.get('/exam/subject', {params});
}
//获取所有的考试类型 (周考1，周考2...)
export let getExamType = (params: object)=>{
    return request.get('/exam/examType', {params});
}
//获取所有的试题类型 (简答题)
export let getExamTitle = (params: object)=>{
    return request.get('/exam/getQuestionsType', {params});
}
//获取所有的试题类型 (简答题)
export let getCation = (params: object)=>{
    return request.get('/exam/getQuestionsType', {params});
}
//按条件获取试题
export let getQuestion = (params: object)=>{
    return request.get('/exam/questions/condition', {params});
}
//添加试题接口
export let getAdd= (params: object)=>{
    return request.post('/exam/questions', params);
}
//用户管理
//api接口权限
export let getAddapi= (params: object)=>{
    return request.get('/user/api_authority', params);
}
//获取视图权限数据
export let getAddView = (params: object)=>{
    return request.get('/user/view_authority', {params});
}
//展示身份数据
export let getAdduser = (params: object)=>{
    return request.get('/user/identity', {params});
}
//考试管理 同试题管理(getExamType,getExamTitle)
//班级管理 
//添加班级接口
export let getClassmange = (params: object)=>{
    return request.get('/manger/grade', {params});
}
//添加教室接口
export let getTeacher= (params: object)=>{
    return request.get('/manger/room', params);
}
//已经分班学生接口
export let getStudent = (params: object)=>{
    return request.get('/manger/student', {params});
}
//待批班级 创建试卷接口
export let getquestionList= (params: object)=>{
    return request.get('/exam/exam', params);
}
export let getInset =(params:object)=>{
    return request.get('/exam/insertQuestionsType',{params})
}
export let getExamquestion=(params:object)=>{
    return request.post('/exam/questions',params)
}
//添加试题接口
export let getAddquestion = (params:object)=>{
    return request.post('/exam/questions',params)
}
//添加试题用户
export let getUserInfo = ()=>{
    return request.get('/user/userInfo')
}
//获取用户权限
export let getViewAuthority = ()=>{
    return request.get('/user/view_authority');
}
//查看试题跳详情
export let getTeadetail=(params:object)=>{
    return request.get('/exam/questions/condition',{params})
}
export let getUser=(params:object)=>{
    return request.post('/user',params)
}
//添加身份
export let getEdit = (params:object)=>{
    return request.get('/user/identity/edit',{params})
}
//给api添加接口权限
export let getAuthedit = (params:object)=>{
    return request.get('/user/authorityApi/edit',{params})
}
//给api添加视图权限
export let getAuthview = (params:object)=>{
    return request.get('/user/authorityView/edit',{params})
}
//给身份设置api接口权限
export let SetIdentityApi = (params:object)=>{
    return request.post('/user/setIdentityApi',params)
}
//给身份设置视图权限
export let SetIdentityView = (params:object)=>{
    return request.post('/user/setIdentityView',params)
}
//创建考试
export let CreateExam = (params:object)=>{
    return request.post('/exam/exam',params)
}
//添加班级
export let Addgrade =(params:object)=>{
    return request.post('/manger/grade',params)
}
//删除班级信息
export let Delete = (params:object)=>{
    return request.delete('/manger/grade/delete',{data:params})
}
//修改班级信息
export let Ameny = (params:object)=>{ 
    return request.put('/manger/grade/update',params)
}
// 更新用户信息
export let updateUserInfo = (data: object)=>{
    return request.put('/user/user', data);
}
