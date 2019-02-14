import createSagaMiddleware, {END} from "redux-saga"
import {routerMiddleware} from "react-router-redux"
import createMemoryHistory from "history/createMemoryHistory"
import rootReducer from "../../client/rootReducer"
import {Provider} from "react-redux"
import { createStore, applyMiddleware, compose } from 'redux';
import {StaticRouter} from "react-router"
import App from "../../client/containers/App/App"
import * as ReactDOMServer from "react-dom/server"
import * as React from "react"
import sagas from "../../client/rootSaga";
import * as ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
// @ts-ignore
import {collectInitial, collectContext} from 'node-style-loader/collect'
import Helmet from "react-helmet";
import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable/webpack'
var fs = require('fs');
import {resolve} from "path";

const sagaMiddleware = createSagaMiddleware()

const reduxMiddlewares = [
    routerMiddleware(createMemoryHistory()),
    sagaMiddleware,
];

export const configureStore = (initialState = {}) => {

    const store:any = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...reduxMiddlewares)),
    );

    store.runSaga = sagaMiddleware.run;

    store.close = () => store.dispatch(END);

    return store;
};

export const renderApp = async (store:any, context:{} = {}, req:any) => {
    const stats = JSON.parse(fs.readFileSync(resolve('./dist/', 'react-loadable.json')).toString())
    let modules = [];
    const app = (
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
            <Provider store={store}>
                <StaticRouter
                    location={req.url}
                    context={context}>
                        {
                            // @ts-ignore
                            <App/>
                        }
                </StaticRouter>
            </Provider>
        </Loadable.Capture>
    )
    const body = await ReactDOMServer.renderToString(app)
    const bundlesList = getBundles(stats, modules)
    const bundles = await bundlesList.map((bundle) => bundle.file).filter((bundle) => !bundle.includes('.map'))
    return { body, bundles }
}

const initialStyleTag = collectInitial()

export const html = ({body}:any, bundles = [], initialState:any) => {
    const [contextStyleTag, reactString] = collectContext(
        () => ReactDOMServer.renderToString(React.createElement('div', initialState, body)))
    const helmetData = Helmet.renderStatic( );
    return `
      <!DOCTYPE html>
      <html>
          <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=contain">
              ${ helmetData.title.toString( ) }
              ${ helmetData.meta.toString( ) }
              ${initialStyleTag}
          </head>      
        <body style="margin:0">
            ${(bundles && bundles.map((bundle) => `<script src="/${bundle}"></script>`)) || ''}
            <script>
                    window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
            </script>
          <div id="root">${body}</div>
        </body>
        <script src="client.js" defer></script>
        <script src="http://localhost:35729/livereload.js"></script>
      </html>
    `;
}


export const renderClient = (Component:any) => {
    const store = configureStore(window.initialState)
    store.runSaga(sagas, store.dispatch)
    return ReactDOM.hydrate(
        <Provider store={store}>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root'))

}
