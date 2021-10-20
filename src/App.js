import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

import Header from './components/layout/Header';

function App() {
    return (
        <div className="App">
            <Header />

            <Switch>
                <Redirect exact from="/" to="/inicio" />
                <Route exact path="/inicio" component={Home} />

                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;
