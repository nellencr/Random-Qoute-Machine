import React from 'react'

function Qoutebox() {

  function clickHandler() {
    console.log('cliked');
  }
  return (
    <div id = "qoute-box" >
        <p id = "text" > i am the quote </p> 
        <p id = "author" > Iam the Author </p>
        
      { /* <button onClick = {clickHandler}id = "new-quote" > New quote </button> */}
    </div>
  )
}

export default Qoutebox;
