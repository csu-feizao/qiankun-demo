import React, { lazy, Suspense } from 'react'
import { Route, Router, Switch, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const Main = lazy(() => import(/* webpackChunkName: List" */ './Main'))
const App = lazy(() => import(/* webpackChunkName: List" */ './App'))

export default class Page extends React.Component<{}, {}> {
    history = createBrowserHistory()

    render() {
        return (
            <Suspense fallback={<div>loading</div>}>
                <Router history={this.history}>
                    <Link to="/main" style={{ paddingRight: 20 }}>Main</Link>
                    <Link to="/sub">App</Link>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/main" component={Main} />
                        <Route path="/sub" component={App} />
                    </Switch>
                </Router>
            </Suspense>
        )
    }
}
