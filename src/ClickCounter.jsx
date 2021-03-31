import React, { Component } from 'react'
import UpdatedComponent from './ChangeComp'

export class ClickCounter extends Component {
    render() {
        const { count, incrementCount , resetCount} = this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} times</button> &nbsp; &nbsp;
                <button onClick = {resetCount}>Reset Clicks</button>
            </div>

        )
    }
}

export default UpdatedComponent(ClickCounter)
