import { call, put, takeLatest } from 'redux-saga/effects'
import { Action } from 'typescript-fsa'

import { getTags } from '../../../api'


import { fetchTags } from './actions'

function* fetchTagsFunc( action: Action<null> ) {
    try {
        const {err, data} = yield call(getTags);
        if(err) throw new Error(err)
        if(!err) yield put(fetchTags.done(data))
    } catch (error) {
        console.log(error)
    }
}

const tagsSaga = function* fetchGistsSaga() {
    yield takeLatest(fetchTags.started, fetchTagsFunc);
}

export default tagsSaga