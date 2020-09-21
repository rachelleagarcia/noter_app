import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header/Header';
import AllNotes from '../allnotes/AllNotesView';
import Categories from '../categories/CategoriesView';
import Tags from '../tags/TagsView';
import CompletedView from '../completed/CompletedView';
import './app.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <AllNotes />
          </Route>
          <Route path="/categories">
            <Categories />
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
