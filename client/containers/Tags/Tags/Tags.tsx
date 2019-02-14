import React, { Component } from 'react'
import * as styles from '../styles/Tags.css'
import { Link } from "react-router-dom";

export default class Tags extends Component<any, any> {
    render() {
        const { tags } = this.props

        console.log(tags)

        return(
            <div className={styles.container}>
                {tags.map(tag => {
                    const fontSize = {
                        fontSize: `${0.5 + tag.sentimentScore/200}rem`
                    }
                    return (
                        <Link to={`/${tag.id}`} className={styles.link} key={tag.id}>
                            <span className={styles.linkText} style={fontSize}>{tag.label}</span>
                        </Link>
                    )}
                )}
            </div>
        )
    }
}
