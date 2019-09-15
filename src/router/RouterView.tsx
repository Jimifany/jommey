import * as React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
interface PropsInfo {
  routes: Array<object>;
}
export default (props: PropsInfo) => {
  console.log("...props", props);
  return (
    <Switch>
      {props.routes.map((item: any, index) => {
        if (item.from === "*") {
          return <Redirect to={item.to} />;
        } else if (item.from) {
          return <Redirect exact from={item.from} to={item.to} />;
        }
        return item.component ? (
          <Route
            key={index}
            path={item.path}
            render={(props: any) => {
              if (item.children) {
                return <item.component {...props} routes={item.children} />;
              } else {
                return <item.component {...props} />;
              }
            }}
          ></Route>
        ) : (
          <Redirect key={index} from={item.path} to={item.redirect}></Redirect>
        );
      })}
      {/* <Redirect exact from="/" to="/login"></Redirect> */}
    </Switch>
  );
};
