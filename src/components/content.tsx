import * as React from "react";
import { Layout,} from 'antd';
const { Content } = Layout;
import RouterView from '../router/RouterView'

interface Props{
    routes:any
}
class Contents extends React.Component<Props> {
    public render() {
        console.log(this.props)
        return (
            <div className='cont'  style={{
                overflow:'hidden'
            }}>
                <Content
                    style={{
                        border: '1px solid #ccc',
                        margin: 0,
                    }}
                >
                    <RouterView routes={this.props.routes}></RouterView>
    
                </Content>
            </div>
        )
        // this.componentDidMount(){
        //     console.log(this.props)
        // }
    }
}
export default Contents;