import * as React from 'react'
import * as ReactDOM from "react-dom"
import * as express from 'express'
import { Request, Response } from 'express';
import bodyParser from 'body-parser';

import tags from '../api/controllers/tags'
import sagas from '../../client/rootSaga'
import { configureStore, renderApp, html } from './helpers'

export const renderServer = (app: any) => {
    const router = express.Router()

    router.use(express.static('dist'))
    router.use((req: Request, res: Response, next: any) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
        next()
    })
    router.all('*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        if ('OPTIONS' == req.method) {
            res.sendStatus(200);
        } else {
            next();
        }
    });
    router.use(bodyParser.json());
    router.use('/api/tags', tags)
    router.get('*',(req: Request, res: Response) => {
        const store:any = configureStore()
        const context = {}
        const rootTask = store.runSaga(sagas)
        const preRenderBody:any = renderApp(store, {}, req)
        preRenderBody.then(() => {
            rootTask.done.then(() => {
                const postRenderedBody:any = renderApp(store, {}, req)

                postRenderedBody.then(response => {
                    res.send(html({body:response.body}, response.bundles , store.getState()))
                })
            })
        })
        store.close()
    })

    app.use(router)
}