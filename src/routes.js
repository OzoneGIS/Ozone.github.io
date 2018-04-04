import React from 'react';
import {Route, IndexRoute} from 'react-route';

//import page components
import App from './components/App';
import Map from './components/Map';
import dashboard from './components/dashboard';
import SomePage from './components/SomePage';

//all routes go here don't forget to import the components above after adding new routes
export default(<Route path="/" component={App}>
  <IndexRoute component={Map}/>
  <Route path="/some/where" component={dashboard}/>
  <Route path="/some/otherpage" component={SomePage}/>
</Route>);
