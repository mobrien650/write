import React, { Component } from 'react'
import styled from 'styled-components'

let renderedOnce = false

export default class AnimatedHeader extends Component {
    finalString = 'OBwrites'

    state = {
        currentIndex: 0,
        class: "blinking",
        value: renderedOnce ? this.finalString : ''
    }

    componentDidMount() {
        if(this.state.value.length === 0) {
            // Add CSS Class
            this.type()
        }

        renderedOnce = true
    }

    type = () => {
        if(this.state.value.length < this.finalString.length) {
            this.setState({
                value: this.state.value + this.finalString.charAt(this.state.currentIndex),
                currentIndex: this.state.currentIndex + 1
            }, () => {
                let delay = 100
                if(this.state.value.length == 2) {
                    delay += 350
                }

                setTimeout(this.type, delay)
            })
        } else {
            // Stop cursor blinking
            /*
            this.setState({
                class: ""
            })*/
        }
    }

    render() {
       return <span className={this.state.class}>{this.state.value}</span>
    }
}
