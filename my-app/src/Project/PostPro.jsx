import React, { useState } from 'react';
import axios from 'axios';

function PostPro() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dataBhejo = () => {
    // 1. Data ko ek jaggah ikattha kiya
    const myData = { title: title, body: body };

    // 2. Axios se POST request bheji
    axios.post('https://jsonplaceholder.typicode.com/posts', myData)
      .then(res => {
        alert("Data Chala Gaya! Server Response ID: " + res.data.id);
        setTitle(""); // Box khali karne ke liye
        setBody("");  // Box khali karne ke liye
      })
      .catch(err => console.log(err));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Simple Data Post App</h3>
      
      <input 
        placeholder="Title likho..." 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      /> 
      <br /><br />

      <input 
        placeholder="Description likho..." 
        value={body} 
        onChange={(e) => setBody(e.target.value)} 
      /> 
      <br /><br />

      <button onClick={dataBhejo}>Post Data</button>
    </div>
  );
}

export default PostPro;