export interface addMedia {
    isMobile: boolean,
    isTablet: boolean,
    isDesktop: boolean
}

export interface ReduxState {
    isClient: boolean,
    media: addMedia
}

export interface Props extends ReduxState {
    defineCli(boolean): void
    setMedia({}:addMedia): void
}

export interface State {

}