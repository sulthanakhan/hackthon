import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { Router, Switch, Route } from "react-router-dom";
import PrimarySearchAppBar from './components/Navbar'
import SignIn from './components/login'
import Home from './components/Home'
import Contact from './components/Contact'
import history from './components/history'
import SignUp from './components/Register'
import PersistentDrawerLeft from './components/AdminScreen'
import CustomizedTables from './components/CrowdFunding'
import Photos from './components/photos'
import Alumni from './components/AlumniRegistration'
import HelpLine from './components/helpline'
import SimpleSelect from './components/smartsearch'
import Events from './components/events'
import Select from './components/search'
import Helper from "./components/help";
import HelperSearch from "./components/helpsearch";
export default function Routes() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/SignIn"  component={SignIn} />
          <Route path="/SignUp"  component={SignUp} />
          <Route path="/contact" component={Contact} />
          <Route path="/admin" component={PersistentDrawerLeft} />
          <Route path="/crowdfunding" component={CustomizedTables} />
          <Route path="/photos"  component={Photos} />
          <Route path="/alumniReg" component={Alumni}/>
          <Route path="/helpline" component={HelpLine}/>
          <Route path="/search" component={SimpleSelect}/>
          <Route path="/smartsearch" component={Select}/>
          <Route path="/help" component={Helper}/>
          <Route path="/helpsearch" component={HelperSearch}/>
          <Route path="/events" component={Events}/>
        </Switch>
      </Router>
    </div>
  );
}