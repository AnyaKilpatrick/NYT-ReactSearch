import React, { Component } from 'react';
import Header from "./../../components/Header";
import Results from "./../../components/Results";
import API from "./../../utils/API";
import Moment from "moment";
import { Link } from "react-router-dom";

class Saved extends Component {
    state = {
        savedArticles: []
    }

    componentDidMount(){
        this.loadArticles();
    }

    loadArticles = () => {
        API.loadArticles()
        .then((res)=> {
            console.log("articles from db" + JSON.stringify(res));
            this.setState({savedArticles: res.data});
        })
        .catch((err)=>console.log(err));
    }

    deleteArticle = event => {
        const id = event.target.id;
        console.log("btn id "+ id);
        API.deleteArticle(id)
        .then((res)=>{
            console.log("article was deleted");
            this.loadArticles();
        })
        .catch((err)=> console.log(err));
    }


    render(){
    return (
         <div>
            <Header/>
            <h1 id="savedHeader" className="center">Saved Articles</h1>
            <div className="container">
            {this.state.savedArticles.map((article, index)=>
                <Results
                key={index}
                id={article._id}
                headline={article.title}
                pTag={article.byline}
                pubDate = {Moment(article.pubDate, "YYYY-MM-DD HH:mm Z").format("lll")}
                link={article.link}
                btnAction = {this.deleteArticle}
                btnText = "Delete"
                />
            )}
            </div>
        </div>
        )
    }
};

export default Saved;