import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import CommuteResults from '../components/CommuteResultsContainer';
import CommuteForm from '../components/CommuteFormContainer';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={CommuteForm} exact />
                <Route path='/results' component={CommuteResults} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;