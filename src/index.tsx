<<<<<<< HEAD
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
=======
import 'antd/dist/antd.css'; 
import {Provider} from 'mobx-react'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
//引入配置路由
import RouterView from './router/RouterView'
import routes from './router/index'
import store from './store/index'
import {Router} from 'react-router'
import {createBrowserHistory} from 'history'
//创建一个browser router
const history =createBrowserHistory()
console.log(history)
//引入导航守卫
import guardInit,{filterView} from './utils/permission';
const myRoutes = filterView(routes, store.user.viewAuthority);
console.log('myRoutes...', myRoutes, routes);
guardInit(history);
class Intl extends React.Component<any>{
  render(){
    return <Router history={history}>
        <RouterView routes={myRoutes}/>
      </Router>
  }
}

ReactDOM.render(
  <Provider {...store}>
    <Intl/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
>>>>>>> 全系
