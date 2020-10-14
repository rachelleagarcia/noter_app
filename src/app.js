import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import AllNotesView from './pages/allnotesview/AllNotesView';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <AllNotesView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
