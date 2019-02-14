import React, { Component } from 'react'
import Loadable from 'react-loadable'
import {connect} from "react-redux";
import Helmet from "react-helmet";
import { getIsMobile } from "common/selectors";
import { fetchTags } from "./redux/actions";
import { takeTags } from "./redux/selectors";
import { ParentProps, ParentState } from './types'

const TagsMobile = Loadable({
    loader: () => import('./TagsMobile/TagsMobile'),
    loading: () => <div> </div>
})

const TagsDesktop = Loadable({
    loader: () => import('./Tags/Tags'),
    loading: () => <div> </div>
})

const mapStateToProps = ( state:any ) => ({
    tags: takeTags(state),
    isMobile: getIsMobile(state),
})

const mapDispatchToProps = ( dispatch: any ) => ({
    loadTags: () => { dispatch(fetchTags.started(null)) }
})

@(connect(mapStateToProps, mapDispatchToProps) as any)

export default class Tags extends Component<ParentProps, {}> {

    componentWillMount() {
        this.props.loadTags()
    }

    render() {
        const { isMobile, tags } = this.props

        return(
            <div>
                <Helmet>
                    <title>Tags</title>
                    <meta name="description" content="This is a proof of concept for React SSRss" />
                </Helmet>
                {isMobile ? <TagsMobile /> : <TagsDesktop tags={tags} />}
            </div>
        )
    }
}