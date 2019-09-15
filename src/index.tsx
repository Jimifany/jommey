import * as React from 'react';
import * as ReactDOM from 'react-dom';

// 引入全局样式
import './index.css';
// 引入antd样式
import 'antd/dist/antd.css';

// 引入mobx实例
import {Provider, observer, inject} from 'mobx-react';
import store from './store'

// 引入配置路由
import RouterView from './router/RouterView';
import routes from './router/index';
import { Router } from "react-router";
import { createBrowserHistory } from "history";

// 引入导航守卫
import guardInit,{filterView} from './utils/permission';

// 引入国际化
import {IntlProvider} from 'react-intl';
import zhCN from './lang/zh-CN';
import enUS from './lang/en-US';
const localeMap = {
  en: enUS,
  zh: zhCN
}

// 创建一个browser router
const history = createBrowserHistory()
const myRoutes = filterView(routes, store.user.viewAuthority);
console.log('myRoutes...', myRoutes, routes);

// 初始化导航守卫
guardInit(history);

@inject('global')
@observer
class Intl extends React.Component<any>{
  render(){
    return <IntlProvider locale={this.props.global.locale} messages={localeMap[this.props.global.locale]}>
      <Router history={history}>
        <RouterView routes={myRoutes}/>
      </Router>
    </IntlProvider>
  }
}

ReactDOM.render(
  <Provider {...store}>
    <Intl/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);




