import React  from 'react'

class UnControlledForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.input = React.createRef();
    }
  
    handleSubmit= (event) => {
      alert('Hi, '+ this.input.current.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Your Name:
            <input type="text" ref={this.input} />
          </label>
          <br />
          <button type="submit" value="Submit" > Submit </button>
        </form>
      );
    }
  }

  export default UnControlledForm