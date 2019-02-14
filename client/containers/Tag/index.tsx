import React, { Component } from 'react'
import Loadable from 'react-loadable'
import {connect} from "react-redux";
import Helmet from "react-helmet";
import { getIsMobile } from "../../common/selectors";
import { fetchTags } from "../Tags/redux/actions";
import { takeTags } from "../Tags/redux/selectors";

const TagLoadable = Loadable({
    loader: () => import('./Tag/Tag'),
    loading: () => <div> </div>
})

const mapStateToProps = ( state:any ) => ({
    tags: takeTags(state),
})

const mapDispatchToProps = ( dispatch: any ) => ({
    loadTags: () => { dispatch(fetchTags.started(null)) }
})

@(connect(mapStateToProps, mapDispatchToProps) as any)

export default class Tag extends Component<any, any> {
    componentWillMount() {
        this.props.loadTags()
    }

    render() {
        const { tags } = this.props
        const tagId = this.props.match.params.id
        const tag = tags.filter(tag => tag.id === tagId)[0]

        return(
            <div>
                <Helmet>
                    <title>Tag</title>
                    <meta name="description" content="This is a proof of concept for React SSRss" />
                </Helmet>
                {tag && <TagLoadable tag={tag}/>}
            </div>
        )
    }
}