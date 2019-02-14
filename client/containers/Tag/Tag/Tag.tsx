import React, { Component } from 'react'

import * as styles from '../styles/Tag.css'

const isExists = data => data ? data : 0

const Tag = ({tag}) => {
     let totalMentions = 0
     let pageTypes = ''
     for (var mentions in tag.pageType) {
         pageTypes += `${mentions} `
         totalMentions += tag.pageType[mentions]
     }

     return (
         <div className={styles.container}>
             <p>Label: {tag.label}</p>
             <p>Total Mentions: {totalMentions}</p>
             <p>Positive Mentions: {isExists(tag.sentiment.positive)}</p>
             <p>Neutral Mentions: {isExists(tag.sentiment.neutral)}</p>
             <p>Negative Mentions: {isExists(tag.sentiment.positive)}</p>
             <p>List of page types: {pageTypes}</p>
         </div>
     )
}

export default Tag
