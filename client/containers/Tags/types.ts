export interface ReduxState {
}

export interface ParentState {
    modal: boolean
}

export interface ParentProps extends DesktopProps{
    isMobile: boolean
    loadTags(): void
    tags: any
}

export interface DesktopProps {

}

export interface MobileProps {

}

export interface State {
}

