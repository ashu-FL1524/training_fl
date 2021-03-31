import React from 'react'
import ReactDom from 'react-dom'


class Compt extends React.Component{

constructor(props){
super();
var today=new Date;
var time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();

this.state={time};

}

componentDidMount(){

setInterval(() => {
var today=new Date;
var time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
this.setState({time})

},3000)}



render(){

var today=new Date;
var time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();


return <footer >{this.state.time}</footer>;
}
}

export default Compt;

