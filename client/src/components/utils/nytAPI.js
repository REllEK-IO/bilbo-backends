// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

const APIURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "e2c1068e37f34f04b6aa4ea695e0c1a0";

// Helper Functions (in this case the only one is runQuery)
const nytApi = (function() {
  
  var runQuery = function(topic, start, end) {

    // Figure out the geolocation
    const START = start || "20000101";
    const END = end || "20170601";

    console.log(topic, start, end);

    var queryURL = APIURL + "?api-key=" + APIKEY + "&sort=newest";

    //Checks each input field for value, if invalid assigns default values: history, limit 5, all years
    if (topic === "" || undefined) {
      queryURL += "&q=history";
    } else {
      queryURL += "&q=" + encodeURI(topic);
    }

    queryURL += "&begin_date=" + start + "&end_date=" + end;

    return axios.get(queryURL)
      .then((response)=>{
        console.log(response.data.response.docs);
        var num = 0;
        var arrayString = response.data.response.docs.map((data)=>{
          console.log(num);
          sessionStorage.setItem("resultsTitle" + num, data.headline.main);
          sessionStorage.setItem("resultsLink" + num, data.web_url);
          num++;
        });
        setTimeout(() =>{
          window.location = window.location.origin + "/result";
        }, 1000);
      })
      .catch((error) =>{
        console.log(error);
      })
  }

  return {
    run : runQuery
  }
})();

// We export the helpers function (which contains getGithubInfo)
export default nytApi;