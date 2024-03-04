import React from "react";
import "./App.css";



export default function App() {
  function Submit(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const formEle = e.target; // Access the form element from the event
    const formDatab = new FormData(formEle);
    
    fetch(
      "https://script.google.com/macros/s/AKfycbwK_poh2y_cjhoDMIPX3qvaVbMMDdTixRXGVdKjmfD5ok_QzZjPjA2hTgTDzu14oOXh/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  return (
    <div className="App">
      <div className="two alt-two"> 
        <h1>Contact Form
          <span>by Shibang</span>
        </h1>
      </div>
      <form className="form" onSubmit={(e) => Submit(e)}>
        <input placeholder="Your Name" name="Name" type="text" />
        <input placeholder="Your Email" name="Email" type="text" />
        <input placeholder="Your Phone" name="Phone" type="text" />
        <input placeholder="Your Message" name="Message" type="text" />
        <input type="submit" value="Submit" /> {/* Change type to submit and value to "Submit" */}
      </form>
    </div>
  );
}
