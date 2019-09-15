import * as React from "react";
import { Breadcrumb, Table,Layout } from "antd";
const { Content } = Layout;
import { inject, observer } from "mobx-react";
interface Props{
  questionlist:any;
}
@inject('questionlist')
@observer
class Router extends React.Component<Props>{
    state = {
        Map:[],
      };
      componentDidMount() {
        this.selList();
      }
      selList = async () => {
        let {getquestionList} = this.props.questionlist;
        const resultten = await getquestionList()
        this.setState({
          Map:resultten.exam
        });
        console.log(resultten)
      };
  public render() {
    const {Map} = this.state;
    const columns= [
        {
          title: "班级名",
          dataIndex: "grade_name",
          key:'grade_name'
        },
        {
          title: "课堂名称",
          dataIndex: "subject_text",
          key:'subject_text'
        },
        {
          title: "阅卷状态",
          dataIndex: "",
          key:''
        },
        {
          title: "考试类型",
          dataIndex: "exam_name",
          key:'exam_name'
        },
        {
          title: "成材率",
          dataIndex: "room_text",
          key:'room_text'
        },
        {
          title: "操作",
          dataIndex:'room',
          render:()=><a href="">批卷</a>
        }
      ]
      const data = Map.map((item:any,index:number)=>{
          return{
              key:index,
              grade_name:item.grade_name,
              subject_text:item.subject_text,
              exam_name:item.exam_name,
              room_text:item.room_text,
          }
      })
    return (
      <div>
        <Layout style={{ padding: "0 24px 36px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>待批班级</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              border: "#fff",
              minHeight: 169,
              margin: "0px 0px 20px 0px"
            }}
          >
              <Table columns={columns} dataSource={data}/>
          </Content>
        </Layout>
      </div>
    );
  }
}
export default Router;
