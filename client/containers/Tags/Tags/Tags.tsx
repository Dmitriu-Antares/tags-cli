import React, { Component } from 'react'
import * as styles from '../styles/Tags.css'
import { Link } from "react-router-dom";

export default class Tags extends Component<any, any> {
    render() {
        const { tags } = this.props

        console.log(tags)

        return(
            <div className={styles.container}>

            </div>
        )
    }
}
