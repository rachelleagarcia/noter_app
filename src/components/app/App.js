import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header/Header';
import AllNotesView from './../allnotesview/AllNotesView';
import CategoriesView from './../categoriesview/CategoriesView';
import Tags from '../tags/TagsView';
import CompletedView from '../completedview/CompletedView';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <AllNotesView />
          </Route>
          <Route path="/categories">
            <CategoriesView />
          </Route>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/completed">
            <CompletedView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
