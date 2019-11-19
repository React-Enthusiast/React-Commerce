import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { ConnectedRouter } from "connected-react-router";
import { Route, Router } from "react-router-dom";
import store, { history } from "./configuration";

import Detail from './components/DetailProduct/Detail';
import FormAdd from './containers/addForm/formAdd';
import Ecommerce from './components/Ecommerce';

// ReactDOM.render(<App />, document.getElementById('root'));
const routing = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router history={history}>
        <Route exact path="/" component={Ecommerce} />
        <Route path="/add" component={FormAdd} />
        <Route path="/detail" component={Detail} />
      </Router>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
