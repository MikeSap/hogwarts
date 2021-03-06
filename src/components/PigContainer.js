import React, { Component } from 'react'
import PigCard from './PigCard'

export default class PigContainer extends Component {

    renderPigCards = () => {

        return(
            this.props.hogs.map(pig =>{
                return (<PigCard
                hideHog={this.props.hideHog}
                key={pig.name}
                pig={pig}
            />)}
            )
        )
    }

    render() {
        return (
            <div className="ui grid container">
                {this.renderPigCards()}
            </div>
        )
    }
}
