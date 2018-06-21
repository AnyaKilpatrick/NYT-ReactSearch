import React, { Component } from "react";
import "./Form.css";

const Form =props=> (
    <div className="row" id="formDiv">
        {/* <p>Topic: {this.state.topic}</p>
        <p>Start Year: {this.state.startYear}</p>
        <p>End Year: {this.state.endYear}</p> */}
        <form className="col s4 offset-s4">
            <div className="row">
                <div className="input-field col s12">
                <input 
                    id="topic" type="text" name="topic"
                    value={props.topic}
                    onChange={props.handleInputChange}
                />
                <label>Topic</label>
                </div>
            </div>
            <div className="row">
            <div className="input-field col s6">
                <input 
                    id="startYear" type="number" name="startYear"
                    value={props.startYear}
                    onChange={props.handleInputChange}
                />
                <label>Start Year</label>
            </div>
            <div className="input-field col s6">
                <input 
                    id="endYear" type="number" name="endYear"
                    value={props.endYear}
                    onChange={props.handleInputChange}
                 />
                <label>End Year</label>
            </div>
            </div>
            <a id="search" className="waves-effect waves-light btn" onClick={props.handleFormSubmit}>Search</a>
        </form>
    </div>
)

export default Form;