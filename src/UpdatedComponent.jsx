import React from 'react'

const UpdatedComponent=(OriginalComponent) =>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props);
            this.state={
                count:0
            }
        }
        incrementCount =() => {
            this.setState(prevState=>{
                return {count:prevState.count+1}
            })
        }
        render(){
            return (
                <div>
                    <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} />
                </div>
            )
        }
    }
    return NewComponent
}

export default  UpdatedComponent