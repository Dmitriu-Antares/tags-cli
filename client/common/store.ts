declare global {
    const __ENV__: {[prop: string]: any }
    interface Window { initialState: any }
}

export interface GlobalState {
    global: any
    tags: any
}

