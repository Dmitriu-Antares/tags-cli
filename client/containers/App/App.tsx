import * as React from 'react'
import { Tags, Tag } from '../../containers'
import { Route, Switch } from 'react-router-dom';
import Header from '../Header'


/* all styles imports here for server side rendering of a postcss */

import '../../containers/Header/styles/Header.css'
import '../../containers/Tags/styles/Tags.css'
import '../Tag/styles/Tag.css'

const App = () => (
    <div>
        <Header />
        <Switch>
            <Route
                path="/"
                exact
                component={Tags}
            />
            <Route
                path="/:id"
                component={Tag}
            />
        </Switch>
    </div>
)

export default App