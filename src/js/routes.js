import React from "react";
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import Home from './pages/Home';
import Supplier from './pages/Supplier';

export default(

    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="supplier" name="supplier" component={Supplier}></Route>
    </Route>

)
