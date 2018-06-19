import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "&api-key=90c630d1090a40f58564383b995a103d"

export default {
 //search articles (NYT API)
 search: function(query, startYear, endYear){
     return axios.get(BASEURL + "q="+ query +"&begin_date="+startYear+"0101&end_date"+endYear +"0101"+ APIKEY);
 },
//saving article to database
 save: function(articleObject) {
    return axios.post("/api/articles", articleObject);
 }
}