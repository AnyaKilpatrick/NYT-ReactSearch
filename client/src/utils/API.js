import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "&api-key=90c630d1090a40f58564383b995a103d"

export default {
 //search articles (NYT API)
 search: function(query, startYear, endYear){
     return axios.get(BASEURL +"q="+ query +"&begin_date="+startYear+"0101&end_date="+endYear +"1230"+ APIKEY );
    console.log(BASEURL + "q="+ query +"&begin_date="+startYear+"0101&end_date="+endYear +"1230"+ APIKEY);
 },
//saving article to database
 save: function(articleObject) {
    return axios.post("/api/articles", articleObject);
 },

 loadArticles: function(){
     console.log("utils works");
     return axios.get("/api/articles");
 },

 deleteArticle: function(id){
     return axios.put("/api/articles/"+id);
 }
}