import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import FirstProject from "./Project/FirstProject";
import Practice from "./PracticeProject/Practice";
import CounterApp from "./Project/CounterApp";
import Count from "./PracticeProject/Count";
import LoginForm from "./Project/LoginForm";
import Form1 from "./PracticeProject/Form1";
import axios from "axios";
import GetPro from "./Project/GetPro";
import PostPro from "./Project/PostPro";
import FunctionalComponent from "./Basic-Code/FunctionalComponent";
import InlineCss from "./Basic-Code/InlineCss";
import ExternalCss from "./Basic-Code/ExternalCss";
import FunctionEvents from "./Events/Function&onClick";
import OnChange from "./Events/OnChange";
import OnMouseOver_OnDoubleClick from "./Events/OnMouseOver-OnDoubleClick";
import Arrays from "./Basic-Code/Arrays";
import Objects from "./Basic-Code/Objects";
import Example from "./Condition_Rendring/Example2";
import Example1 from "./Props/Example1";



function Navbar() {
  return (
    <nav className="navbar">
      <h1>Vikram</h1>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
  });

  console.log(formData)

  return (
    <div className="container">
      <h2>Home Page</h2>

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form Submitted");
        }}
      >
        <input
          placeholder="First Name"
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />

        <input
          placeholder="Last Name"
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />

        <input
          type="date"
          onChange={(e) =>
            setFormData({ ...formData, dob: e.target.value })
          }
        />

        <input
          placeholder="Email"
          onChange={(e) =>
            setFormData({ ...formData, emil: e.target.value })
          }
        />

        <input
          placeholder="Phone"
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h2>Hello, my name is Shobh Singh.</h2>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h2>Contact Details</h2>

      <p>Email: shobh.singh2005email@gmail.com</p>
      <p>Phone: 6376361029</p>
      <p>Location: Rajasthan, India</p>
    </div>
  );
}

export default function App() {
  return (
  /*  <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>   */

    //<GetPro></GetPro>

    //<PostPro></PostPro>
    <Example1 name="vikram" age={25}></Example1>
  );
}