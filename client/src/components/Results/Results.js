import React from "react";
import "./Results.css";

const Results = props => (
    <div className="row">
        <div className="col s12 articleRow" id={props.id}>
            {/* <h5>{props.title}</h5>
            <p className="text-flow">{props.summary}</p>
            <a href={props.link}>Link</a> */}
            <h5>{props.headline}</h5>
            <p className="text-flow">{props.pTag} <strong>Published:</strong> {props.pubDate}</p>
            <a href={props.link}>Link</a>
        </div>
    </div>
);

export default Results;