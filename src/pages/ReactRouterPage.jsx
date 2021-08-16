import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
export default class ReactRouterPage extends Component {
  render() {
    return (
      <div>
        <h3>ReactRouterPage</h3>
        <Router>
          <Link to="/" style={{ marginRight: "5px" }}>
            首页
          </Link>
          <Link to="/shop">商城</Link>
          <Switch>
            {/* 优先级： children > component > render */}
            <Route
              exact
              path="/"
              component={HomePage}
              children={() => <div>children</div>}
              render={() => <div>render</div>}
            ></Route>
            <Route exact path="/shop" component={ShopPage}></Route>
            <Route component={ErrerPage}>
            </Route>
          </Switch>

        </Router>
      </div>
    );
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <h4>HomePage</h4>
      </div>
    );
  }
}

class ShopPage extends Component {
  render() {
    return (
      <div>
        <h4>ShopPage</h4>
      </div>
    );
  }
}
class ErrerPage extends Component {
  render() {
    return (
      <div>
        <h4>ErrerPage</h4>
      </div>
    );
  }
}