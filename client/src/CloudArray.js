
import React, { Component  } from "react";
import processQuery from '../server/controllers/yummlyQuery.js';



axios
  .get("api/runyummly");
  .then(function(result) {    
    console.log(results)


  });

componentWillMount : function () {
    var data = this.getData();
    this.setState({data : data});
},