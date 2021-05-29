import React from 'react';

function Hi() {

    const hi = () => {
      console.log("Hi there User");
    };

  return ( 
    	<div>   
           <button onClick={hi}> Hi </button>     {/*f12 on browser*/}
    	</div>
  );
}

export default Hi;