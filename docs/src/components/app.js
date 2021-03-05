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
    <div class="content-wrapper">
      I might give up and go back to working on wiki pages this is super fucking
      anoying to make
    </div>
  </div>
);

export default App;
