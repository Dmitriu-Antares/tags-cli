import actionCreatorFactory from 'typescript-fsa';
import { addMedia } from '../../Header/types'

const actionCreator = actionCreatorFactory();

export const MEDIA_DEFINITION:string = 'MEDIA_DEFINITION'
export const IS_CLIENT:string = 'IS_CLIENT'
export const ADD_CLIENT:string = 'ADD_CLIENT'

export const mediaDefintion = actionCreator<addMedia>(MEDIA_DEFINITION)
export const defineClient = actionCreator<null>(IS_CLIENT)
export const addClient = actionCreator<boolean>(ADD_CLIENT) 