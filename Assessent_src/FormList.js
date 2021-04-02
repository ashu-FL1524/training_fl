import React, { Component } from 'react';

export default class FormList extends Component {
  constructor(props){
    super(props);
    this.state = { chicken: '', cow: '', pig: '',}
  }
  handleChickenChange = (e) => {
    this.setState({chicken: e.target.value});
  }
  handlePigChange = (e) => {
    this.setState({pig: e.target.value});
  }
  handleCowChange = (e) => {
    this.setState({cow: e.target.value});
  }
  SubmitValue = (e) => {
    e.preventDefault();
    this.props.handleData(this.state)
  }
  render() {
    return (
      <div>
        <div className="container"> 
          <div className="row">
            <div className="col-25">
              <label htmlFor="chik">chicken</label>
            </div>
            <div className="col-75">
              <input type="number" id="chik" name="chicken" onChange={this.handleChickenChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="cow">cows</label>
            </div>
            <div className="col-75">
              <input type="number" id="cow" name="cow" onChange={this.handleCowChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="pig">pigs</label>
            </div>
            <div className="col-75">
              <input type="number" id="pig" name="pig" onChange={this.handlePigChange} />
            </div>
          </div>
          <br />
          <div className="row">
            <button onClick={this.SubmitValue} className="button" >Save</button>
          </div>
          <br />
        </div>
      </div>
    )
  }
}