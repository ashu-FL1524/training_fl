import React, { Component } from 'react'
import UpdatedComponent from './ChangeComp'
export class HoverCounter extends Component {
    reset(e){
        this.setState({count: 0 });
      }    
    render() {
        const { count, incrementCount ,resetCount } = this.props
        return (
            <div className = "Counter">
                <button onMouseOver={incrementCount}>
                    Hover {count} times
                </button> &nbsp; &nbsp;
                <button onClick={resetCount}>
                    Reset Hover
                </button>
                
                 
                
            </div>
        )
    
    }
    
}

export default UpdatedComponent(HoverCounter)

