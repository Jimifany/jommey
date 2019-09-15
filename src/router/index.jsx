import * as React from "react"
import { Switch, BrowserRouter, Route ,Redirect} from "react-router-dom";
import Main from "../views/main/index"
import Login from "../views/Login/index"
class Router extends React.Component {
    render() {
        return <BrowserRouter>

            <Switch>
                {/* <Route path="/test" component={Test}></Route> */}
                <Route path="/main" component={Main}></Route>
                <Route path="/login" component={Login}></Route>
                <Redirect from="/" to="/login"/>
            </Switch>
        </BrowserRouter>
    }
}

export default Router;

