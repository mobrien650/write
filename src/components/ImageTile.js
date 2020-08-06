import React, { Component } from 'react'
import styled from 'styled-components'

function getRotationAndColor(rotation, color, width, height) {
    return styled.div`
        transform: rotate(${rotation}deg);
        background-color ${color}3C;
        width: ${width}px;
        height: ${height}px;   
        padding: 16px;   
    `
}

function getImageRotation(rotation, width, height) {
    return styled.img`
        transform: rotate(${-rotation}deg);
        width: ${width}px;
        height: ${height}px;    
    `
}

export default class ImageTile extends Component {
    backing = getRotationAndColor(this.props.rotation, this.props.color, this.props.width, this.props.height)
    image = getImageRotation(this.props.rotation, this.props.width, this.props.height)

    render() {
        const Backing = this.backing
        const Image = this.image

        return (
            <Backing>
                <Image src={this.props.src} /> 
            </Backing>
        )
    }
}