import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const FETCH_TAGS:string = 'FETCH_TAGS'

export const fetchTags = actionCreator.async<null, [any], Error>(FETCH_TAGS)
