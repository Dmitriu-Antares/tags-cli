import { reducerWithInitialState } from "typescript-fsa-reducers";
import { mediaDefintion, addClient } from './actions'
import { ReduxState } from '../types'

const initialState: ReduxState = {
    media: {
        isDesktop: false,
        isTablet: false,
        isMobile: false
    },
    isClient: false
};

const global = reducerWithInitialState(initialState)
    .case(mediaDefintion, (state, data) => ({...state, media: data}))
    .case(addClient, (state, isClient) => ({...state, isClient}))

export default global