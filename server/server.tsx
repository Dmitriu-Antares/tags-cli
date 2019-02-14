import * as express from 'express'
import { renderServer } from './ssr-helper'
import Loadable from 'react-loadable'

const app = express();
const port = 3030

renderServer(app)
Loadable.preloadAll().then(()=>app.listen(port, () => console.log('listening port ', port)))
