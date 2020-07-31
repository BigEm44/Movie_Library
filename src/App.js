import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';
import AddMovie from './components/userMovie/AddMovie';
import Library from './components/userMovie/Library';
import EditMovie from './components/utility/EditMovie';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/addMovie" component={AddMovie} />
          <Route path="/library" component={Library} />
          <Route path="/editMovie" component={EditMovie} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
