import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  // Setting the initial values of this.state.topic, this.state.startYear and this.endYear
  state = {
    topic: "",
    startYear: "",
    endYear:""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Topic: ${this.state.topic}\nstartYear: ${this.state.startYear}\nendYear: ${this.state.endYear}`);
    this.setState({ topic: "", startYear: "", endYear: "" });
  };

  render() {
    return (
        <div className="row">
            {/* <p>Topic: {this.state.topic}</p>
            <p>Start Year: {this.state.startYear}</p>
            <p>End Year: {this.state.endYear}</p> */}
            <form className="col s4 offset-s4">
                <div className="row">
                    <div className="input-field col s12">
                    <input 
                        id="topic" type="text" name="topic"
                        value={this.state.topic}
                        onChange={this.handleInputChange}
                    />
                    <label>Topic</label>
                    </div>
                </div>
                <div className="row">
                <div className="input-field col s6">
                    <input 
                        id="startYear" type="number" name="startYear"
                        value={this.state.startYear}
                        onChange={this.handleInputChange}
                    />
                    <label>Start Year</label>
                </div>
                <div className="input-field col s6">
                    <input 
                        id="endYear" type="number" name="endYear"
                        value={this.state.endYear}
                        onChange={this.handleInputChange}
                    />
                    <label>End Year</label>
                </div>
                </div>
                <a id="search" className="waves-effect waves-light btn" onClick={this.handleFormSubmit}>Search</a>
            </form>
        </div>
    );
  }
}

export default Form;