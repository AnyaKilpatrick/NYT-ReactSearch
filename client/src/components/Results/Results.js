import React from "react";
import "./Results.css";

const Results = props => (
    <div className="row">
        <div className="col s12 articleRow">
            {/* <h5>{props.title}</h5>
            <p className="text-flow">{props.summary}</p>
            <a href={props.link}>Link</a> */}
            <h5 className="articleTitle">{props.headline}</h5>
            <p className="text-flow articleByline">{props.pTag}</p>
            <p className="articleDate">{props.pubDate}</p>
            <p>Read article <a href={props.link} target="_blank">here</a><a onClick={props.saveArticle} id={props.id} className="btn articleBtn right">Save</a></p>
        </div>
    </div>
);

export default Results;