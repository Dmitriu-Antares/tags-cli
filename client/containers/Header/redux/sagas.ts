import { put, takeLatest } from 'redux-saga/effects'
import { defineClient, addClient } from './actions'


function* isClient(action) {
    const isClient = action.payload
    yield put(addClient(isClient))
}

const globalSaga = function* getGlobals(){
    yield takeLatest(defineClient, isClient)
}

export default globalSaga