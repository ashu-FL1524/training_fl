import React, { Component } from 'react';
import FormList from './FormList';

export default class FormResult extends Component {
  constructor(props){
    super(props);
    this.state = { chicken: '', cow: '', pig: '',}
  };

  handleParentData = (formModel) => {
    this.setState({...formModel});
    console.log(formModel);
  }
  render() {
    return (
      <div>
        <FormList handleData={this.handleParentData}/>
        <br /><br /><br />
        <div className="container">
          <table id="animals" className="table table-striped table-lg mt-5 bg-white">
            <thead>
              <tr className="font-medium">
                <th>aniaml</th>
                <th>count</th>
              </tr>
              <tr className="font-medium">
                <td>chicken</td>
                <td>{this.state.chicken}</td>
              </tr>
              <tr className="font-medium">
                <td>cows</td>
                <td>{this.state.cow}</td>
              </tr>
              <tr className="font-medium">
                <td>pigs</td>
                <td>{this.state.pig}</td>
              </tr>
              <tr className="font-medium">
                <td >no.of legs</td>
                <td>{this.state.chicken * 2 + this.state.cow * 4 + this.state.pig * 4 }</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    )
  }
}