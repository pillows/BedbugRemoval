import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <nav className="site-header sticky-top py-1">
  <div className="container d-flex flex-column flex-md-row justify-content-between">
    <a className="py-2" href="#">
  
    </a>
    <a className="py-2 d-none d-md-inline-block" href="#">Home</a>
    <a className="py-2 d-none d-md-inline-block" href="/About">About</a>
    <a className="py-2 d-none d-md-inline-block" href="/Donate">Donate</a>
    
  </div>
</nav>

<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
  <div className="col-md-5 p-lg-5 mx-auto my-5">
    <h1 className="display-4 font-weight-bold "style={{ color: 'purple'}} >Bedbug Removal Fund</h1>
    <p className="lead font-weight-normal">Meet every Hunter College students least favorite study buddy: the bedbug. Bedbugs made their homes in our libraries and we want to take it back! </p>

  </div>
  <div className= "side"> 
  <img src= "bug.jpg"/>
  </div>
 <button type="button" class="btn btn-primary btn-lg btn-block "> Help our students study. DONATE NOW!</button>

</div>

<footer className="container py-5">
  <div className="row">
    <div className="col-12 col-md">
<Logo />
      <small className="d-block mb-3 text-muted">&copy, 2017-2019</small>
    </div>
    <div className="col-6 col-md">
      <h5>Features</h5>
      <ul className="list-unstyled text-small">
        <li><a className="text-muted" href="#">How can you donate?</a></li>
        <li><a className="text-muted" href="#">What is a bedbug?</a></li>
        <li><a className="text-muted" href="#">Does your library have bedbugs?</a></li>
        
    
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Resources</h5>
      <ul className="list-unstyled text-small">
        <li><a className="text-muted" href="#">How do bedbugs effect productivity?</a></li>
        <li><a className="text-muted" href="#">Bedbugs in NYC</a></li>
        <li><a className="text-muted" href="#">Another resource</a></li>
    
      </ul>
    </div>
   
    <div className="col-6 col-md">
      <h5>About</h5>
      <ul className="list-unstyled text-small">
        <li><a className="text-muted" href="#">Team</a></li>
        <li><a className="text-muted" href="#">CUNY Campuses</a></li>
        <li><a className="text-muted" href="#"> Cooperman Library</a></li>
      </ul>
    </div>
  </div>
</footer>
</div>
  );
}

export default App;
