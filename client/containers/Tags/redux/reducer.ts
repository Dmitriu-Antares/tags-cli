import { reducerWithInitialState } from "typescript-fsa-reducers";
import { fetchTags } from './actions'
import { ReduxState } from '../types'



const initialState:ReduxState = {
    tags: [],
};

const blockchians = reducerWithInitialState(initialState)
    .case(fetchTags.done, (state, data) => ({...state, tags: data}))

export default blockchians