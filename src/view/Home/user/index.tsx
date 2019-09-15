import * as React from 'react'
import RouterView from '../../../router/RouterView'

class ExamManage extends React.Component<any>{
  render(){
    return <div>
     <RouterView routes={this.props.routes}></RouterView>
    </div>
  }
}
export default ExamManage
