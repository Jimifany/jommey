import * as React from "react"
import { Table } from 'antd';
interface Iprops {
    identityData?: any
}
class IdentityData extends React.Component<Iprops>{
    state = {
        getList: [],
        columns:[
            {
              title: '身份名称',
              dataIndex: 'identity_text',
            }
          ]
    }
    componentDidMount() {
        this.getidentityData()
    }
    getidentityData = async () => {
        const { getidentityData } = this.props.identityData
        const result = await getidentityData();
        console.log(result.data)
        this.setState({
            getList: result.data
        })

    }
    public render() {
        const {getList,columns}=this.state;
        // console.log(getList)
        return (
            <div>
              {/* <h4></h4> */}
    <Table columns={columns} dataSource={getList} size="middle" />
        </div>
        )
    }
}
export default IdentityData;