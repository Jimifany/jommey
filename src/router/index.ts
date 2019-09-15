import Login from "../view/Login/login";
import Index from "../view/Home/index";
import Grade from "../view/Home/class/Grade/index";
import Student from "../view/Home/class/Student/index";
import Teacher from "../view/Home/class/Teacher/index";
import Addexam from "../view/Home/exam/Addexam";
import Exam from "../view/Home/exam/Examlist/index";
import Marking from "../view/Home/marking/Marking/index";
import Adduser from "../view/Home/user/Adduser";
import User from "../view/Home/user/Userdisplay/index";
import Add from "../view/Home/test/Addquestions/index";
import Classification from "../view/Home/test/Classification/index";
import Test from "../view/Home/test/Checkquestions/index";
import Teadetail from "../view/Home/test/Checkquestions/teadetail";
import ExamManage from "src/view/Home/class";
import Testy from "src/view/Home/test";
import Markingy from "src/view/Home/marking";
import Usery from "src/view/Home/user";
import Examy from "src/view/Home/exam";
let routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/index",
    component: Index,
    children: [
      {
        children: [
          {
            path: "/index/test/add",
            title: "添加试题",
            component: Add
          },
          {
            path: "/index/test/index",
            title: "查看试题",
            component: Test
          },
          {
            path: "/index/test/classification",
            title: "试题分类",
            component: Classification
          },
          {
            path: "/index/test/teadetai/:id",
            title:"详情",
            component: Teadetail
          }
        ],
        component: Testy,
        title: "试题管理",
        path: "/index/test"
      },
      {
        children: [
          {
            path: "/index/exam/addexam",
            title: "添加考试",
            component: Addexam
          },
          {
            path: "/index/exam/index",
            title: "试卷列表",
            component: Exam
          }
        ],
        component: Examy,
        title: "考试管理",
        path: "/index/exam"
      },
      {
        children: [
          {
            path: "/index/user/adduser",
            title: "添加用户",
            component: Adduser
          },
          {
            path: "/index/user/index",
            title: "用户展示",
            component: User
          }
        ],
        component: Usery,
        title: "用户管理",
        path: "/index/user"
      },
      {
        children: [
          {
            path: "/index/class/grade",
            title: "班级管理",
            component: Grade
          },
          {
            path: "/index/class/student",
            title: "学生管理",
            component: Student
          },
          {
            path: "/index/class/teacher",
            title: "教室管理",
            component: Teacher
          }
        ],
        component: ExamManage,
        title: "班级管理",
        path: "/index/class"
      },
      {
        children: [
          {
            path: "/index/marking/index",
            title: "待批班级",
            component: Marking
          }
        ],
        component: Markingy,
        title: "阅卷管理",
        path: "/index/marking"
      },
    ]
  },
  {
    from: "/",
    to: "/login"
  },
  {
    from: "*",
    to: "/404"
  }
];
export default routes;
