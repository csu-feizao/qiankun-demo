import React, { lazy, Suspense } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const List = lazy(() => import(/* webpackChunkName: List" */ './List'))
const Detail = lazy(() => import(/* webpackChunkName: List" */ './Detail'))

export default class Page extends React.Component<{}, {}> {
    history = createBrowserHistory({
        basename: 'sub'
    })

    render() {
        return (
            <Suspense fallback={<div>loading</div>}>
                <Router history={this.history}>
                    <Switch>
                        <Route exact path="/" component={List} />
                        <Route path="/list" component={List} />
                        <Route path="/:name" component={Detail} />
                    </Switch>
                </Router>
            </Suspense>
        )
    }
}
