import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import Book from "./Book";
import Show from "./Show";
import Shop from "./Shop";
import Phone from "./Phone";

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Book} />
          <Route path="/book" exact component={Book} />
          <Route path="/show" exact component={Show} />
          <Route path="/shop/:id" exact component={Shop} />
          <Route path="/phone" exact component={Phone} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
