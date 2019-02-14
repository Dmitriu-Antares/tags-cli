import React, { Component } from 'react'

import * as styles from '../styles/Tag.css'


export default class Tag extends Component<any,any> {
    render(){
        const { tags } = this.props
        console.log(tags)
        return(
            <div className={styles.container}>

            </div>
        )
    }
}
