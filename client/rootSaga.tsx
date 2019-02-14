import { all } from 'redux-saga/effects';
import tagsSaga from './containers/Tags/redux/sagas'
import globalSaga from './containers/Header/redux/sagas'

export default function* root() {
    yield all([
        globalSaga(),
        tagsSaga()
    ])
}
