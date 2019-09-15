<<<<<<< HEAD
import User from "./modules/user";//在store的index.ts下面引入user.ts
const user =new User();//实例化模块
export default {
    user
}
=======
//登录
import User from './modules/user'
import Questionlist from './modules/questionlist'
//获取考试相关
import Exam from './modules/exam'
import Question from './modules/exam'
import ExamType from './modules/exam'
import ExamTitle from './modules/exam'
import Classifaction from './modules/exam'
import Addexam from './modules/exam'
import Addexamtype from './modules/exam'
import Insert from './modules/exam'
//权限问题
import Adduser from './modules/addapi'
import Addview from './modules/addapi'
import Addapi from './modules/addapi'
//班级管理
import Teacher from './modules/classmanage'
import Classmange from './modules/classmanage'
import Student from './modules/classmanage'
//
import TestType from './modules/testType';
import Show from "./modules/show"
import Grade from "./modules/grade"
import  IdentityData  from "./modules/identityData"
//添加试题接口
import ExamQuestion from './modules/exam'
//添加试题
import Addquestion from './modules/exam'
//添加用户信息
import UserInfo from './modules/exam'
//查看试题详情
import Teadetail from './modules/exam'
//添加用户
import Username from './modules/exam'
//添加身份
import Edit from './modules/exam' 
//添加api接口权限
import Authedit from './modules/exam'
//添加视图权限
import Authview from './modules/exam'
//设置api接口权限
import IdentityApi from './modules/exam'
//设置视图权限
import IdentityView from './modules/exam'
//创建考试
import CreateExam from './modules/exam'
//添加班级
import Addgrade from './modules/exam'
//删除接口
import Delete from './modules/exam'
//修改班级
import Ameny from './modules/exam'
const user = new User();
const question = new Question();
const exam = new Exam()
const examtype = new ExamType()
const examtitle = new ExamTitle()
const action = new Classifaction()
const questionlist = new Questionlist()
const addexam = new Addexam()
const adduser = new Adduser()
const addview = new Addview()
const addapi = new Addapi()
const addexamtype = new Addexamtype()
const addquestion = new Addquestion()
const teacher = new Teacher()
const classmange = new Classmange()
const student = new Student()
const testType =new TestType();
const show =new Show();
const grade =new Grade();
const identityData=new IdentityData()
const insert = new Insert()
const examquestion = new ExamQuestion()
const userinfo = new UserInfo()
const teadetail = new Teadetail()
const username = new Username()
const edit = new Edit() 
const authedit = new Authedit()
const authview = new Authview()
const identityApi = new IdentityApi()
const identityView = new IdentityView()
const createExam = new CreateExam()
const addgrade = new Addgrade()
const deletegrade = new Delete()
const ameny = new Ameny()
export default {
    user,
    question,
    exam,
    examtype,
    action,
    examtitle,
    adduser,
    addexam,
    addview,
    addapi,
    addexamtype,
    teacher,
    classmange,
    student,
    questionlist,
    show,
    testType,
    grade,
    examquestion,
    insert,
    identityData,
    userinfo,
    teadetail,
    username,
    addquestion,
    edit,
    authview,
    identityApi,
    identityView,
    authedit,
    addgrade,
    deletegrade,
    ameny,
    createExam
}
>>>>>>> 全系
