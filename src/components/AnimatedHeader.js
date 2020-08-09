import React, { Component } from 'react'

let renderedOnce = false

export default class AnimatedHeader extends Component {

    state = {
        currentIndex: 0,
        class: "",
        value: renderedOnce ? this.props.title : ''
    }

    finalBlinkCount = 0

    getTitle() {
        return this.props.title || ''
    }

    getSplit() {
        return this.props.split || this.getTitle().length
    }

    getLetterDelay() {
        return this.props.letterDelay || 100
    }

    getSplitDelay() {
        return this.props.splitDelay || 450
    }

    getBlinkCount() {
        return this.props.blinkCount || 3
    }

    componentDidMount() {
        if(this.state.value.length === 0) {
            this.setState({
                class: "blinking"
            }, () => {
                this.type()
            })
        }

        renderedOnce = true
    }

    type = () => {
        if(this.state.value.length < this.getTitle().length) {
            this.setState({
                value: this.state.value + this.getTitle().charAt(this.state.currentIndex),
                currentIndex: this.state.currentIndex + 1
            }, () => {
                const delay = this.state.value.length === this.getSplit() ? this.getSplitDelay() : this.getLetterDelay()
                setTimeout(this.type, delay)
            })
        } else {
            setTimeout(() => {
                this.setState({
                    class: ""
                })    
            }, this.getLetterDelay() * this.getBlinkCount())
        }
    }

    render() {
       return (
        <React.Fragment>
            <span className={this.state.class}>
                <span>{this.state.value.length < this.getSplit() ? this.state.value.substring(0, this.state.value.length) : this.state.value.substring(0, this.getSplit())}</span>
                <span>{this.state.value.length >= this.getSplit() ? this.state.value.substring(this.getSplit(), this.state.value.length) : ''}</span>
            </span>
        </React.Fragment>
       )
    }
}
