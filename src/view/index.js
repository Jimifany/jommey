//一级页面
import Login from '..iews/Login'
import HomePage from '..iews/main/home'

//试卷管理
import AddList from '..iews/main/questionManage/addList'
import CheckTextQuestion from '@iews/main/questionManageeckTextQuestion'
import TextQuestion from '..iews/main/questionManage/textQuestion'
import Detail from '..iews/main/questionManage/detail'
import CheckTextEditor from '..iews/main/questionManageeckTextEditor'

//用户管理
import UserShow from '..iews/main/UserManage/UserShow'
import AddUser from '..iews/main/UserManage/addUser'

//考试管理
import ExamManage from '@iews/main/examManager/examManage/examManage'
import QuestionList from '@iews/main/examManager/questionList'
import ExamQuestionDetail from '@iews/main/examManager/examquestiondetail'
import AddExamList from '@iews/main/examManager/addExamList'

//班级管理
import ClassManger from '..iews/main/ClassMange/classManger'
import ClassRoomer from '..iews/main/ClassMange/classRoomer'
import StudentManger from '@iews/main/ClassMange/studentManger'

//待批班级
import WaitClass from '..iews/main/WillClass/waitClass'
import ExamDetail from '..iews/main/WillClass/examDetail'

import QuestionManage from '@iews/main/questionManage'
import UserManage from '@iews/main/UserManage'
import ExamManager from '@iews/main/examManager'
import ClassMange from '@iews/main/ClassMange'
import WillClass from '@iews/main/WillClass'

export default [
  {
    component: Login,
    path: '/login'
  },
  {
    children: [
      {
        path: '/home/question',
        title: '试题管理',
        component: QuestionManage,
        children: [
          {
            component: AddList,
            title: '添加试题',
            path: '/home/question/addlist'
          },
          {
            component: CheckTextQuestion,
            title: '查看试题',
            path: '/home/questioneckTextQuestion'
          },
          {
            component: TextQuestion,
            title: '试题分类',
            path: '/home/question/textQuestion'
          },
          {
            component: Detail,
            path: '/home/question/detail/:id?'
          },
          {
            component: CheckTextEditor,
            path: '/home/questioneckTextEditor/:id?'
          },
        ]
      }, {
        path: '/home/usermanage',
        title: '用户管理',
        component: UserManage,
        children: [
          {
            component: UserShow,
            title: '用户展示',
            path: '/home/usermanage/usershow'
          },
          {
            component: AddUser,
            title: '添加用户',
            path: '/home/usermanage/adduser'
          },
        ]
      }, {
        path: '/home/exammanager',
        title: '考试管理',
        component: ExamManager,
        children: [
          {
            component: ExamManage,
            title: '添加考试',
            path: '/home/exammanager/examManage'
          }, {
            component: QuestionList,
            title: '试卷列表',
            path: '/home/exammanager/questionList'
          }, {
            component: ExamQuestionDetail,
            path: '/home/exammanager/examQuestionDetail'
          }, {
            component: AddExamList,
            path: '/home/exammanager/addExamList'
          }
        ]
      }, {
        path: '/home/classmange',
        title: '班级管理',
        component: ClassMange,
        children: [
          {
            component: ClassManger,
            title: '班级管理',
            path: '/home/classmange/classManger'
          },
          {
            component: ClassRoomer,
            title: '教室管理',
            path: '/home/classmange/classRoomer'
          }, {
            component: StudentManger,
            title: '学生管理',
            path: '/home/classmange/studentManger'
          }
        ]
      }, {
        path: '/home/willclass',
        title: '阅卷管理',
        component: WillClass,
        children: [
          {
            component: WaitClass,
            title:'待批班级',
            path: '/home/willclass/waitClass'
          },
          {
            component: ExamDetail,
            path: '/home/willclass/examDetail/:id?'
          }
        ]
      }
    ],
    component: HomePage,
    path: '/home'
  },
  {
    from: '/',
    to: '/login'
  }
]