import React, { Component } from 'react'
import { MobileProps, State } from '../types'
import * as styles from '../styles/Tags.css'

export default class TagsMobile extends Component<MobileProps, State> {
   
    render(){
        return(
            <div>
                <p>Tags mobile</p>
                <p>Here we can render really different view for mobile version,
                if we don`t want to make out Tags file to large,
                messy, and with a lot of no needed on mobile funcs/methods/etc.</p>
                <p>P.S also it works on chunks!</p>
            </div>
        )
    }
}
