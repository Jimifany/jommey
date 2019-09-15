import * as React from 'react';
import Content from '../../components/content'
import Head from '../../components/head'
import Slide from '../../components/side'
interface Props{
  question:any,
  title:any
  routes:any
}
class Router extends React.Component<Props>{
    public render() {
      // console.log(this.props)
       return(
          <div>
              <Head/>
              <Slide/>
            <Content {...this.props}/>
          </div>
      )
    }
}
export default Router