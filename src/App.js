import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
    return (
        <div className="App">
            <Switch>
                <Redirect exact from="/" to="/inicio" />
                <Route exact path="/inicio" component={Home} />

                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;
