import * as React from 'react';
import {Layout } from 'antd'
import Content from '../../components/content'
import Head from '../../components/head'
import {observer, inject} from 'mobx-react';
import Slide from '../../components/side'
interface Props{
  question:any,
  title:any
  routes:any
  global: any
}
@inject('question', 'global')
@observer
class Router extends React.Component<Props>{
    public render() {
      // const {locale} = this.props.global;
       return(
            <Layout>
              {/* <Head><span onClick={()=>this.props.global.changeLocale(locale==='zh'?'en':'zh')} style={{color:'res'}}>{locale==='zh'?'英文':'中文'}2134</span></Head> */}
              <Head/>
              <Layout>
                <Slide/>
                <Layout style={{ overflow: 'scroll',}}>
                   <Content {...this.props}/>
                </Layout>
              </Layout>
            </Layout>
      )
    }
}
export default Router