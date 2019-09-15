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
//引入没有权限的文件
import Hundredthre from 'src/view/Four/hundredthree'
import Hundredfour from 'src/view/Four/hundredfour'
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
            title: 'menu.question.addQuestion',
            component: Add
          },
          {
            path: "/index/test/index",
            title: 'menu.question.viewQuestion',
            component: Test
          },
          {
            path: "/index/test/classification",
            title: 'menu.question.typeQuestion',
            component: Classification
          },
          {
            path: "/index/test/teadetai/:id",
            title: "menu.question.teacher",
            // view_id: "main-questionsDetail",
            component: Teadetail
          }
        ],
        component: Testy,
        title:'menu.question',
        path: "/index/test"
      },
      {
        children: [
          {
            path: "/index/exam/addexam",
            title:"Examination.management.addExam",
            // view_id: "main-addExam",
            component: Addexam
          },
          {
            path: "/index/exam/index",
            title:"Examination.management.examList",
            // view_id: "main-examList",
            component: Exam
          }
        ],
        component: Examy,
        title:"Examination.management",
        path: "/index/exam"
      },
      {
        children: [
          {
            path: "/index/user/adduser",
            title:"user.management.addUser",
            // view_id: "main-addUser",
            component: Adduser
          },
          {
            path: "/index/user/index",
            title:"user.management.showUser",
            // view_id: "main-showUser",
            component: User
          }
        ],
        component: Usery,
        title:"user.management",
        path: "/index/user"
      },
      {
        children: [
          {
            path: "/index/class/grade",
            title: "Class management.grade",
            // view_id: "main-grade",
            component: Grade
          },
          {
            path: "/index/class/student",
            title: "Class.management.student",
            // view_id: "main-student",
            component: Student
          },
          {
            path: "/index/class/teacher",
            title: "Class.management.teacher",
            // view_id: "main-room",
            component: Teacher
          }
        ],
        component: ExamManage,
        title: "Class.management",
        path: "/index/class"
      },
      {
        children: [
          {
            path: "/index/marking/index",
            title: "marking.management.index",
            // view_id: "main-examPaperClassmate",
            component: Marking
          }
        ],
        component: Markingy,
        title: "marking.management",
        path: "/index/marking"
      }
    ]
  },
  {
    path: "/403",
    component:Hundredthre
  },
  {
    path: "/404",
    component: Hundredfour
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
