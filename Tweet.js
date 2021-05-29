import React from 'react';
import './App.css';

function Tweet(props) {                  // function Tweet()

  return (   
    	<div className="tweet">
    	  <h3>{props.name}</h3>                     {/* <h3>Name</h3> */}
        <p>{props.msg}</p>
        <h3>Number of retweets: {props.rets}</h3>
    	</div>

  );
}

export default Tweet;