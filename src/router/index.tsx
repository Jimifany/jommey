import * as Loadable from "react-loadable"
import * as React from "react"
function Loading(){
  return <div>Loading...</div>
}
let Login=Loadable({loading:Loading,loader:()=>import("../view/Login/login")})
let Index=Loadable({loading:Loading,loader:()=>import("../view/Home/index")})
let Grade=Loadable({loading:Loading,loader:()=>import("../view/Home/class/Grade/index")})
let Student=Loadable({loading:Loading,loader:()=>import("../view/Home/class/Student/index")})
let Teacher=Loadable({loading:Loading,loader:()=>import("../view/Home/class/Teacher/index")})
let Addexam=Loadable({loading:Loading,loader:()=>import("../view/Home/exam/Addexam")})
let Exam=Loadable({loading:Loading,loader:()=>import("../view/Home/exam/Examlist/index")})
let Marking=Loadable({loading:Loading,loader:()=>import("../view/Home/marking/Marking/index")})
let Adduser=Loadable({loading:Loading,loader:()=>import("../view/Home/user/Adduser")})
let User=Loadable({loading:Loading,loader:()=>import("../view/Home/user/Userdisplay/index")})
let Add=Loadable({loading:Loading,loader:()=>import("../view/Home/test/Addquestions/index")})
let Classification=Loadable({loading:Loading,loader:()=>import("../view/Home/test/Classification/index")})
let Test=Loadable({loading:Loading,loader:()=>import("../view/Home/test/Checkquestions/index")})
let Teadetail=Loadable({loading:Loading,loader:()=>import("../view/Home/test/Checkquestions/teadetail")})
let ExamManage=Loadable({loading:Loading,loader:()=>import("src/view/Home/class")})
let Testy=Loadable({loading:Loading,loader:()=>import("src/view/Home/test")})
let Markingy=Loadable({loading:Loading,loader:()=>import("src/view/Home/marking")})
let Usery=Loadable({loading:Loading,loader:()=>import("src/view/Home/user")})
let Examy=Loadable({loading:Loading,loader:()=>import("src/view/Home/exam")})
//引入没有权限的文件
// import Hundredthre from 'src/view/Four/hundredthree'
// import Hundredfour from 'src/view/Four/hundredfour'
// import { Divider } from 'antd';
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
  // {
  //   path: "/403",
  //   component:Hundredthre
  // },
  // {
  //   path: "/404",
  //   component: Hundredfour
  // },
  {
    from: "/",
    to: "/login"
  },
  // {
  //   from: "*",
  //   to: "/404"
  // }
];
export default routes;
