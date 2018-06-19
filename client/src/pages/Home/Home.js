import React, { Component } from 'react';
import Parallax from "./../../components/Parallax";
import Results from "./../../components/Results";
import Form from "./../../components/Form";
import API from "./../../utils/API";
import Moment from "moment";
import { Link } from "react-router-dom";

class Home extends Component {
  // Setting the initial values of this.state.topic, this.state.startYear and this.endYear
  state = {
    articles: [],
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
    this.searchArticles(this.state.topic, this.state.startYear, this.state.endYear);
  };

  searchArticles = (topic, startYear, endYear) => {
    console.log("load articles again");
    API.search(topic, startYear, endYear)
        .then(res=>
        // console.log(res.data.response.docs))
        this.setState({articles: res.data.response.docs}))
        .catch(err=>
        console.log(err)
    )
  };

  saveArticle = (event) => {
    const index = event.target.id;
    console.log(index);
    
    const pickedA = this.state.articles[index];
    const object = {
      title: pickedA.headline.main,
      byline: pickedA.byline.original,
      pubDate: pickedA.pub_date,
      link: pickedA.web_url
    }
    API.save(object)
      .then(res=> console.log("saved"))
      .catch(err=> console.log(err));
    
    console.log(JSON.stringify(object));
  }


    render(){
    return (
         <div>
            <div className="parallax-container">
                <Parallax/>
                <Form
                handleFormSubmit = {this.handleFormSubmit}
                handleInputChange = {this.handleInputChange}
                topic = {this.state.topic}
                startYear = {this.state.startYear}
                endYear={this.state.endYear}
                />
            </div>
            <div className="container">
            {this.state.articles.map((article, index)=>
                <Results
                key={index}
                id={index}
                headline={article.headline.main}
                pTag={article.byline.original}
                pubDate = {Moment(article.pub_date, "YYYY-MM-DD HH:mm Z").format("lll")}
                link={article.web_url}
                saveArticle = {this.saveArticle}
                />
            )}
            </div>
        </div>
        )
    }
};

export default Home;
