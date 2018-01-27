import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { DealCreate } from './pages/deal_create';
import { DealListContainer } from './pages/deal_list/container';
import { configureStore } from './store';

const store = configureStore();

class App extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={DealListContainer} />
            <Route path="/create" component={DealCreate} />
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
