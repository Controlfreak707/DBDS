import { h } from "preact";
import { Router } from "preact-router";

import Navbar from "./navbar";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";

const App = () => (
  <div class="page-wrapper with-navbar with-sidebar">
    <Navbar></Navbar>
    <div class="sidebar"></div>
    <div class="content-wrapper">Finally I got it to fucking work lmao</div>
  </div>
);

export default App;
